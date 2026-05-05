export function slugify(text) {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function parseFrontmatter(text) {
  const defaults = {
    title: 'Untitled Plan',
    subtitle: 'A custom curriculum',
    target: 'Continuous Learning',
    commitment: 'Self-paced',
  };
  
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return defaults;
  
  const lines = match[1].split('\n');
  const metadata = { ...defaults };
  
  for (const line of lines) {
    const colonIdx = line.indexOf(':');
    if (colonIdx !== -1) {
      const key = line.slice(0, colonIdx).trim();
      const value = line.slice(colonIdx + 1).trim();
      if (key && value) {
        metadata[key] = value;
      }
    }
  }
  
  return metadata;
}

function parseResources(line) {
  if (!line || !line.startsWith('Resources:')) return undefined;
  
  const resourcesStr = line.replace('Resources:', '').trim();
  const links = resourcesStr.split('|').map(s => s.trim()).filter(Boolean);
  
  return links.map(link => {
    const match = link.match(/\[([^\]]+)\]\(([^)]+)\)/);
    if (match) {
      return { label: match[1], href: match[2] };
    }
    return { label: link.replace(/[\[\]]/g, '').trim(), href: '#' };
  });
}

function extractLink(text) {
  const parts = text.split('|');
  if (parts.length > 1) {
    const lastPart = parts[parts.length - 1].trim();
    const match = lastPart.match(/\[([^\]]+)\]\(([^)]+)\)/);
    if (match) {
      return {
        text: parts.slice(0, -1).join('|').trim(),
        href: match[2]
      };
    }
  }
  return { text, href: undefined };
}

function getDefaultRoadmap() {
    return {
        id: 'default-plan',
        title: 'Untitled Plan',
        subtitle: 'A custom curriculum',
        target: 'Continuous Learning',
        commitment: 'Self-paced',
        phases: [{
            id: 'phase-1-default',
            label: 'Phase 1',
            title: 'Welcome',
            range: '',
            color: 'indigo',
            weeks: [{
                id: 'week-1-default',
                title: 'Week 1',
                days: [{
                    id: 'day-1-default',
                    title: 'Day 1',
                    tasks: [{
                        id: 'task-1-default',
                        kind: 'Learn',
                        duration: '15m',
                        text: 'Update plan.md to add your curriculum.',
                    }]
                }]
            }]
        }]
    };
}

export function parsePlan(markdownText) {
  if (!markdownText || typeof markdownText !== 'string') {
    return { roadmap: getDefaultRoadmap() };
  }

  const metadata = parseFrontmatter(markdownText);
  const roadmapId = slugify(metadata.title) || 'custom-plan';
  
  const roadmap = {
    id: roadmapId,
    title: metadata.title,
    subtitle: metadata.subtitle,
    target: metadata.target,
    commitment: metadata.commitment,
    phases: [],
  };

  const lines = markdownText.split('\n');
  let inFrontmatter = false;
  
  let currentPhase = null;
  let currentWeek = null;
  let currentDay = null;
  
  const taskCounts = new Map();

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    
    if (!line) continue;
    
    if (line === '---' && i === 0) {
      inFrontmatter = true;
      continue;
    }
    if (line === '---' && inFrontmatter) {
      inFrontmatter = false;
      continue;
    }
    if (inFrontmatter) continue;

    if (line.startsWith('# ')) {
      const parts = line.replace('# ', '').split('|').map(s => s.trim());
      const phaseTitleFull = parts[0] || 'Phase';
      let range = parts[1] || '';
      let color = parts[2] || 'indigo';
      
      const knownColors = ['indigo', 'emerald', 'orange', 'red', 'violet', 'amber', 'gold'];
      if (parts.length === 2 && knownColors.includes(parts[1].toLowerCase())) {
        color = parts[1].toLowerCase();
        range = '';
      }
      
      const titleMatch = phaseTitleFull.match(/^(Phase\s+\d+):\s*(.*)/i);
      let label = 'Phase';
      let title = phaseTitleFull;
      if (titleMatch) {
        label = titleMatch[1];
        title = titleMatch[2];
      }
      
      currentPhase = {
        id: slugify(phaseTitleFull) || `phase-${roadmap.phases.length + 1}`,
        label,
        title,
        range,
        color,
        weeks: [],
      };
      
      if (i + 1 < lines.length && lines[i+1].trim().startsWith('Resources:')) {
         currentPhase.resources = parseResources(lines[i+1].trim());
         i++;
      }
      
      roadmap.phases.push(currentPhase);
      currentWeek = null;
      currentDay = null;
      continue;
    }
    
    if (line.startsWith('## ') && currentPhase) {
       let defaultOpen = false;
       let featured = false;
       
       if (line.includes('{open}')) {
         defaultOpen = true;
         line = line.replace('{open}', '').trim();
       }
       if (line.includes('{featured}')) {
         featured = true;
         line = line.replace('{featured}', '').trim();
       }
       
       const weekTitle = line.replace('## ', '').trim();
       currentWeek = {
         id: slugify(weekTitle) || `week-${currentPhase.weeks.length + 1}`,
         title: weekTitle,
         defaultOpen,
         featured,
         days: [],
       };
       
       while (i + 1 < lines.length) {
         const nextLine = lines[i+1].trim();
         if (!nextLine) {
           i++;
           continue;
         }
         if (nextLine.startsWith('*') && nextLine.endsWith('*')) {
           currentWeek.intro = nextLine.replace(/\*/g, '').trim();
           i++;
         } else if (nextLine.startsWith('Resources:')) {
           currentWeek.resources = parseResources(nextLine);
           i++;
         } else {
           break;
         }
       }
       
       currentPhase.weeks.push(currentWeek);
       currentDay = null;
       continue;
    }
    
    if (line.startsWith('### ') && currentWeek) {
      const dayTitle = line.replace('### ', '').trim();
      currentDay = {
        id: slugify(dayTitle) || `${currentWeek.id}-day-${currentWeek.days.length + 1}`,
        title: dayTitle,
        tasks: [],
      };
      
      if (i + 1 < lines.length && lines[i+1].trim().startsWith('>')) {
         currentDay.note = lines[i+1].trim().replace(/^>\s*/, '');
         i++;
      }
      
      currentWeek.days.push(currentDay);
      continue;
    }
    
    if (line.startsWith('- ') && currentPhase) {
       if (!currentWeek) {
         currentWeek = {
           id: currentPhase.id + '-week-1',
           title: 'Schedule',
           defaultOpen: true,
           featured: false,
           days: []
         };
         currentPhase.weeks.push(currentWeek);
       }
       if (!currentDay) {
         currentDay = {
           id: currentWeek.id + '-day-1',
           title: 'Tasks',
           tasks: []
         };
         currentWeek.days.push(currentDay);
       }
       
       const taskLine = line.replace('- ', '').trim();
       const { text: textWithoutLink, href } = extractLink(taskLine);
       
       let duration = '0m';
       let kind = 'Task';
       let text = textWithoutLink;
       
       const durationMatch = textWithoutLink.match(/^\[([^\]]+)\]/);
       if (durationMatch) {
         duration = durationMatch[1];
         text = text.replace(`[${duration}]`, '').trim();
       }
       
       const colonIdx = text.indexOf(':');
       if (colonIdx !== -1 && colonIdx < 20) {
         kind = text.slice(0, colonIdx).trim();
         text = text.slice(colonIdx + 1).trim();
       }
       
       if (!kind) kind = 'Task';
       
       const kindSlug = slugify(kind) || 'task';
       const taskIdBase = `${currentDay.id}-${kindSlug}`;
       const count = (taskCounts.get(taskIdBase) || 0) + 1;
       taskCounts.set(taskIdBase, count);
       
       const taskId = count === 1 ? taskIdBase : `${taskIdBase}-${count}`;
       
       currentDay.tasks.push({
         id: taskId,
         kind,
         duration,
         text,
         ...(href ? { href } : {})
       });
       continue;
    }
  }

  if (roadmap.phases.length === 0) {
    return { roadmap: getDefaultRoadmap() };
  }

  return { roadmap };
}
