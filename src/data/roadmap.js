import { parsePlan } from './parsePlan';

const modules = import.meta.glob('./plan.md', { query: '?raw', import: 'default', eager: true });
const planMarkdown = modules['./plan.md'];

export const strategyCards = [
  {
    id: 'golden-hour',
    title: 'The Golden Hour',
    accent: 'indigo',
    body: '60 uninterrupted minutes daily. 20 mins theory, 40 mins hands-on practice. Immersion is key.',
  },
  {
    id: 'experience-leverage',
    title: 'Experience Leverage',
    accent: 'emerald',
    body: "AI can write scripts, but it cannot manage budgets or business risk. We focus heavily on Governance and FinOps.",
  },
  {
    id: 'direct-access',
    title: 'Direct Access',
    accent: 'orange',
    body: 'No searching. Click the links, start the timer, and execute your daily mission immediately.',
  },
];

const fallbackRoadmap = {
  id: 'cloud-architect-pivot-12-week-v1',
  title: 'Cloud Architect Pivot',
  subtitle: 'The "Zero-to-Cloud" 12-Week Accelerated Sprint (Mid-40s Edition)',
  target: 'Job Ready in 84 Days',
  commitment: '1 hour per day - high intensity',
  phases: [
    {
      id: 'phase-1',
      label: 'Phase 1',
      title: 'The Hardware and Network Foundation',
      range: 'Weeks 1-2',
      color: 'indigo',
      weeks: [
        {
          id: 'week-1',
          title: 'Week 1: Hardware and IP Networking',
          defaultOpen: true,
          resources: [
            {
              label: 'Messer Core 1',
              href: 'https://www.youtube.com/playlist?list=PLG49S3nxzAnlGHY8ObL8Diyn3nd-varg3',
            },
            {
              label: 'NetworkChuck',
              href: 'https://www.youtube.com/watch?v=S7MNX_UD7vY',
            },
          ],
          days: [
            {
              id: 'week-1-day-1',
              title: 'Day 1: Storage and Memory Foundation',
              tasks: [
                {
                  id: 'week-1-day-1-prep',
                  kind: 'Prep',
                  duration: '10m',
                  text: 'Get a notebook ready. You will need to take handwritten notes to retain info.',
                },
                {
                  id: 'week-1-day-1-learn',
                  kind: 'Learn',
                  duration: '30m',
                  text: 'Watch Messer Videos 1.1 and 1.2 (Laptops and Storage Types).',
                },
                {
                  id: 'week-1-day-1-apply',
                  kind: 'Apply',
                  duration: '20m',
                  text: 'In your notebook, define the speed differences between HDD, SSD, and NVMe. Explain RAM in your own words.',
                },
              ],
            },
            {
              id: 'week-1-day-2',
              title: "Day 2: The Machine's Brain",
              tasks: [
                {
                  id: 'week-1-day-2-prep',
                  kind: 'Prep',
                  duration: '10m',
                  text: "Review yesterday's notes on RAM and Storage.",
                },
                {
                  id: 'week-1-day-2-learn',
                  kind: 'Learn',
                  duration: '30m',
                  text: 'Watch Video 1.3 (Motherboards/CPUs).',
                },
                {
                  id: 'week-1-day-2-apply',
                  kind: 'Apply',
                  duration: '20m',
                  text: 'Sketch a rough layout of a motherboard. Label where the CPU, RAM, and Storage connect.',
                },
              ],
            },
            {
              id: 'week-1-day-3',
              title: 'Day 3: Introduction to IP Addresses',
              tasks: [
                {
                  id: 'week-1-day-3-learn',
                  kind: 'Learn',
                  duration: '15m',
                  text: 'Watch NetworkChuck "What is an IP?".',
                },
                {
                  id: 'week-1-day-3-read',
                  kind: 'Read',
                  duration: '15m',
                  text: 'Google "What is IPv4 format" and read for 15 minutes to grasp the numbers (e.g., 192.168.1.1).',
                },
                {
                  id: 'week-1-day-3-apply',
                  kind: 'Apply',
                  duration: '30m',
                  text: 'Open Command Prompt (Windows) or Terminal (Mac). Type `ping google.com`. Record the IP address the terminal returns to you.',
                },
              ],
            },
            {
              id: 'week-1-day-4',
              title: 'Day 4: Public vs. Private Networks',
              tasks: [
                {
                  id: 'week-1-day-4-learn',
                  kind: 'Learn',
                  duration: '20m',
                  text: 'Watch a YouTube video specifically explaining "Public vs Private IP Addresses".',
                },
                {
                  id: 'week-1-day-4-apply',
                  kind: 'Apply',
                  duration: '40m',
                  text: "Search Google for \"What is my IP\" (This is your Public IP). Then, find your computer's Private IP in your network settings. Write down why these numbers are different.",
                },
              ],
            },
            {
              id: 'week-1-day-5-7',
              title: 'Day 5-7: The Hardware of the Internet',
              note: 'Repeat this block daily to solidify knowledge.',
              tasks: [
                {
                  id: 'week-1-day-5-7-learn',
                  kind: 'Learn',
                  duration: '20m',
                  text: 'Watch NetworkChuck videos explaining Switches and Routers.',
                },
                {
                  id: 'week-1-day-5-7-apply',
                  kind: 'Apply',
                  duration: '40m',
                  text: 'Draw a physical diagram of your home internet. Map a line from your Phone -> WiFi Router -> Modem -> ISP (Internet Provider) -> Google Servers. Label every piece of hardware.',
                },
              ],
            },
          ],
        },
        {
          id: 'week-2',
          title: 'Week 2: Protocols and The Linux CLI',
          resources: [
            {
              label: 'DNS Guide',
              href: 'https://www.youtube.com/watch?v=HndV87RoS2A',
            },
            {
              label: 'Linux Journey',
              href: 'https://linuxjourney.com/',
            },
          ],
          days: [
            {
              id: 'week-2-day-1',
              title: "Day 1: DNS (The Internet's Phonebook)",
              tasks: [
                {
                  id: 'week-2-day-1-learn',
                  kind: 'Learn',
                  duration: '30m',
                  text: 'Watch the DNS Guide video to understand how text domains turn into IPs.',
                },
                {
                  id: 'week-2-day-1-apply',
                  kind: 'Apply',
                  duration: '30m',
                  text: 'Search online for a "DNS Lookup Tool". Enter 5 of your favorite websites and write down the IP addresses powering them.',
                },
              ],
            },
            {
              id: 'week-2-day-2',
              title: 'Day 2: Web Traffic and Ports',
              tasks: [
                {
                  id: 'week-2-day-2-learn',
                  kind: 'Learn',
                  duration: '20m',
                  text: 'Read articles on HTTP (Port 80) vs HTTPS (Port 443).',
                },
                {
                  id: 'week-2-day-2-apply',
                  kind: 'Apply',
                  duration: '40m',
                  text: 'Open a web browser, hit `F12` to open Developer Tools, click the "Network" tab, and refresh a webpage. Watch the data load securely over Port 443.',
                },
              ],
            },
            {
              id: 'week-2-day-3-4',
              title: 'Day 3-4: Linux Navigation',
              tasks: [
                {
                  id: 'week-2-day-3-4-learn',
                  kind: 'Learn',
                  duration: '15m',
                  text: 'Read the "Navigating" module on LinuxJourney.com.',
                },
                {
                  id: 'week-2-day-3-4-apply',
                  kind: 'Apply',
                  duration: '45m',
                  text: 'Use their interactive terminal to master `ls` (list files), `cd` (change directory), and `pwd` (print working directory). Practice moving around without a mouse.',
                },
              ],
            },
            {
              id: 'week-2-day-5-6',
              title: 'Day 5-6: Linux Creation',
              tasks: [
                {
                  id: 'week-2-day-5-6-learn',
                  kind: 'Learn',
                  duration: '15m',
                  text: 'Read the "Files and Directories" module on LinuxJourney.',
                },
                {
                  id: 'week-2-day-5-6-apply',
                  kind: 'Apply',
                  duration: '45m',
                  text: 'Practice creating folders with `mkdir` and blank files with `touch`. Challenge: Create a 3-level deep folder structure using only text commands.',
                },
              ],
            },
            {
              id: 'week-2-day-7',
              title: 'Day 7: Permissions and Sudo',
              tasks: [
                {
                  id: 'week-2-day-7-learn',
                  kind: 'Learn',
                  duration: '20m',
                  text: 'Read about Linux User Permissions and why the `sudo` command (Super User Do) is dangerous.',
                },
                {
                  id: 'week-2-day-7-apply',
                  kind: 'Apply',
                  duration: '40m',
                  text: 'Create a "Cheat Sheet" in your notebook listing all the Linux commands you learned this week. You will need this later.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'phase-2',
      label: 'Phase 2',
      title: 'AWS Certified Cloud Practitioner',
      range: 'Weeks 3-5',
      color: 'emerald',
      resources: [
        {
          label: 'Official AWS Skill Builder Course (Free)',
          href: 'https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials',
        },
      ],
      weeks: [
        {
          id: 'week-3',
          title: 'Week 3: Compute and Global Infrastructure',
          days: [
            {
              id: 'week-3-day-1-2',
              title: 'Day 1-2: AWS and EC2 Introduction',
              tasks: [
                {
                  id: 'week-3-day-1-2-prep',
                  kind: 'Prep',
                  duration: '10m',
                  text: 'Log into your AWS Skill Builder account.',
                },
                {
                  id: 'week-3-day-1-2-learn',
                  kind: 'Learn',
                  duration: '30m',
                  text: 'Complete Modules 1 and 2 (Cloud Concepts and Virtual Servers/EC2).',
                },
                {
                  id: 'week-3-day-1-2-apply',
                  kind: 'Apply',
                  duration: '20m',
                  text: 'Write a 3-sentence summary of why a business would rent an EC2 server in the cloud instead of buying a physical server for their office.',
                },
              ],
            },
            {
              id: 'week-3-day-3-4',
              title: 'Day 3-4: Global Architecture',
              tasks: [
                {
                  id: 'week-3-day-3-4-learn',
                  kind: 'Learn',
                  duration: '30m',
                  text: 'Complete Module 3 covering Global Regions and Availability Zones (AZs).',
                },
                {
                  id: 'week-3-day-3-4-apply',
                  kind: 'Apply',
                  duration: '30m',
                  text: 'Sketch an AWS Region on paper containing two AZs. Write down a business disaster scenario where having two AZs saves the company from going offline.',
                },
              ],
            },
            {
              id: 'week-3-day-5-7',
              title: 'Day 5-7: Networking in the Cloud',
              tasks: [
                {
                  id: 'week-3-day-5-7-learn',
                  kind: 'Learn',
                  duration: '30m',
                  text: 'Complete Module 4 (VPC - Virtual Private Cloud).',
                },
                {
                  id: 'week-3-day-5-7-apply',
                  kind: 'Apply',
                  duration: '30m',
                  text: 'Apply your Week 1 IP knowledge. Draw a VPC map containing one Public Subnet (for a website) and one Private Subnet (hidden, for a database). Draw the firewall (Security Group) protecting them.',
                },
              ],
            },
          ],
        },
        {
          id: 'week-4',
          title: 'Week 4: Storage, Databases and Security',
          days: [
            {
              id: 'week-4-day-1-3',
              title: 'Day 1-3: Data Storage Options',
              tasks: [
                {
                  id: 'week-4-day-1-3-learn',
                  kind: 'Learn',
                  duration: '30m',
                  text: 'Complete Module 5 (S3, EBS, and RDS Databases).',
                },
                {
                  id: 'week-4-day-1-3-apply',
                  kind: 'Apply',
                  duration: '30m',
                  text: 'Create a decision-chart in your notes: When should an Architect use S3 (Objects like photos) vs EBS (Hard drives for EC2) vs RDS (Structured databases).',
                },
              ],
            },
            {
              id: 'week-4-day-4-6',
              title: 'Day 4-6: The Security Matrix',
              tasks: [
                {
                  id: 'week-4-day-4-6-learn',
                  kind: 'Learn',
                  duration: '30m',
                  text: 'Complete Module 6 (Security and IAM).',
                },
                {
                  id: 'week-4-day-4-6-apply',
                  kind: 'Apply',
                  duration: '30m',
                  text: 'Draw the "Shared Responsibility Model". List 3 specific things AWS secures (e.g., physical data centers), and 3 things YOU must secure (e.g., user passwords, customer data).',
                },
              ],
            },
            {
              id: 'week-4-day-7',
              title: 'Day 7: Monitoring and Alerts',
              tasks: [
                {
                  id: 'week-4-day-7-learn',
                  kind: 'Learn',
                  duration: '30m',
                  text: 'Complete Module 7 (CloudWatch and Monitoring).',
                },
                {
                  id: 'week-4-day-7-apply',
                  kind: 'Apply',
                  duration: '30m',
                  text: 'Design a mock alert scenario. If an EC2 server hits 90% CPU usage, write down the exact steps CloudWatch should take to alert the IT team.',
                },
              ],
            },
          ],
        },
        {
          id: 'week-5',
          title: 'Week 5: The "FinOps" Pivot and Exam Prep',
          featured: true,
          resources: [
            {
              label: 'AWS Pricing Explained',
              href: 'https://www.youtube.com/watch?v=7uV_Uo0F730',
            },
          ],
          days: [
            {
              id: 'week-5-day-1-3',
              title: 'Day 1-3: Cloud Cost Control (Crucial for 40+)',
              tasks: [
                {
                  id: 'week-5-day-1-3-learn',
                  kind: 'Learn',
                  duration: '20m',
                  text: 'Watch AWS Pricing strategy videos. Understand Capex vs Opex.',
                },
                {
                  id: 'week-5-day-1-3-apply',
                  kind: 'Apply',
                  duration: '40m',
                  text: 'Open the online "AWS Pricing Calculator". Build a monthly budget estimate for 1 EC2 instance, 1 RDS Database, and 50GB of S3 storage. See how business costs scale.',
                },
              ],
            },
            {
              id: 'week-5-day-4-7',
              title: 'Day 4-7: Exam Simulation',
              tasks: [
                {
                  id: 'week-5-day-4-7-practice',
                  kind: 'Apply',
                  duration: '20m',
                  text: 'Take a free Cloud Practitioner practice exam online.',
                },
                {
                  id: 'week-5-day-4-7-review',
                  kind: 'Apply',
                  duration: '40m',
                  text: 'Review every incorrect answer. Look up the official AWS documentation for the ones you missed. If budget allows (~$100), book the actual exam.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'phase-3',
      label: 'Phase 3',
      title: 'The Hands-On Cloud Portfolio',
      range: 'Weeks 6-9',
      color: 'orange',
      weeks: [
        {
          id: 'week-6',
          title: 'Week 6: Secure Account Setup',
          days: [
            {
              id: 'week-6-day-1',
              title: 'Day 1: Account Creation',
              tasks: [
                {
                  id: 'week-6-day-1-action',
                  kind: 'Action',
                  duration: '20m',
                  text: 'Follow the link to open an AWS Free Tier Account.',
                  href: 'https://portal.aws.amazon.com/gp/aws/developer/registration/index.html',
                },
                {
                  id: 'week-6-day-1-read',
                  kind: 'Read',
                  duration: '40m',
                  text: 'Read the official AWS Free Tier Limits documentation carefully. Know exactly what is free (like micro EC2s) and what costs money.',
                },
              ],
            },
            {
              id: 'week-6-day-2-3',
              title: 'Day 2-3: Billing Defense',
              tasks: [
                {
                  id: 'week-6-day-2-3-mfa',
                  kind: 'Action',
                  duration: '20m',
                  text: 'Set up Multi-Factor Authentication (MFA) on your Root Account using a phone app.',
                },
                {
                  id: 'week-6-day-2-3-alarm',
                  kind: 'Action',
                  duration: '40m',
                  text: 'Follow a Billing Alarm tutorial. Set an alarm to email you if your costs ever exceed $0.01. Never pay for mistakes!',
                  href: 'https://www.youtube.com/watch?v=H74F8B708H0',
                },
              ],
            },
            {
              id: 'week-6-day-4-7',
              title: 'Day 4-7: Identity Access setup',
              tasks: [
                {
                  id: 'week-6-day-4-7-user',
                  kind: 'Action',
                  duration: '20m',
                  text: 'Use IAM to create a new user for yourself with "Administrator" access. Add MFA to this user as well.',
                },
                {
                  id: 'week-6-day-4-7-console',
                  kind: 'Action',
                  duration: '40m',
                  text: 'Log out of the Root account forever. Log in as your new IAM user. Spend time clicking through the AWS Console to learn the UI (Do not launch any services yet).',
                },
              ],
            },
          ],
        },
        {
          id: 'week-7',
          title: 'Week 7: Coding the Cloud Resume',
          days: [
            {
              id: 'week-7-day-1-3',
              title: 'Day 1-3: HTML/CSS Basics',
              tasks: [
                {
                  id: 'week-7-day-1-3-learn',
                  kind: 'Learn',
                  duration: '30m',
                  text: 'Read the W3Schools HTML Guide.',
                  href: 'https://www.w3schools.com/html/',
                },
                {
                  id: 'week-7-day-1-3-apply',
                  kind: 'Apply',
                  duration: '30m',
                  text: 'Use Notepad or VS Code to write the code for a basic 1-page digital resume. Include a header with your name, a summary, and your 20-year work history.',
                },
              ],
            },
            {
              id: 'week-7-day-4-5',
              title: 'Day 4-5: S3 Bucket Creation',
              tasks: [
                {
                  id: 'week-7-day-4-5-learn',
                  kind: 'Learn',
                  duration: '20m',
                  text: 'Research "How to create an S3 bucket in AWS Console".',
                },
                {
                  id: 'week-7-day-4-5-apply',
                  kind: 'Apply',
                  duration: '40m',
                  text: 'Log into AWS, create an S3 bucket (name it carefully), and upload your `index.html` resume file into it.',
                },
              ],
            },
            {
              id: 'week-7-day-6-7',
              title: 'Day 6-7: Going Live to the Public',
              tasks: [
                {
                  id: 'week-7-day-6-7-learn',
                  kind: 'Learn',
                  duration: '20m',
                  text: 'Research "S3 Static Website Hosting and Bucket Policies".',
                },
                {
                  id: 'week-7-day-6-7-apply',
                  kind: 'Apply',
                  duration: '40m',
                  text: 'Enable website hosting on your bucket. Write and apply the JSON policy required to make the bucket public. Test the endpoint URL to see your live site!',
                },
              ],
            },
          ],
        },
        {
          id: 'week-8-9',
          title: 'Week 8-9: DNS, Security and GitHub',
          featured: true,
          intro: 'Adding Version Control (Git) makes you highly employable.',
          days: [
            {
              id: 'week-8-day-1-3',
              title: 'Week 8 (Day 1-3): Custom Domain Name',
              tasks: [
                {
                  id: 'week-8-day-1-3-prep',
                  kind: 'Prep',
                  duration: '20m',
                  text: 'Brainstorm professional domain names (e.g., yourname-cloud.com).',
                },
                {
                  id: 'week-8-day-1-3-apply',
                  kind: 'Apply',
                  duration: '40m',
                  text: 'Navigate to AWS Route53, purchase the domain (~$12), and set up a Hosted Zone.',
                },
              ],
            },
            {
              id: 'week-8-day-4-7',
              title: 'Week 8 (Day 4-7): SSL and CloudFront Security',
              tasks: [
                {
                  id: 'week-8-day-4-7-learn',
                  kind: 'Learn',
                  duration: '20m',
                  text: 'Watch a tutorial on "AWS CloudFront static website HTTPS".',
                },
                {
                  id: 'week-8-day-4-7-apply',
                  kind: 'Apply',
                  duration: '40m',
                  text: 'Request a free SSL certificate via AWS Certificate Manager (ACM). Configure CloudFront to serve your S3 site securely over HTTPS using your new domain.',
                },
              ],
            },
            {
              id: 'week-9-day-1-4',
              title: 'Week 9 (Day 1-4): Local Git Mastery',
              tasks: [
                {
                  id: 'week-9-day-1-4-learn',
                  kind: 'Learn',
                  duration: '20m',
                  text: 'Read the GitHub Skills Guide on local commits.',
                  href: 'https://skills.github.com/',
                },
                {
                  id: 'week-9-day-1-4-apply',
                  kind: 'Apply',
                  duration: '40m',
                  text: 'Open your local computer terminal. Initialize a Git repo (`git init`), add your HTML code, and make your first commit history.',
                },
              ],
            },
            {
              id: 'week-9-day-5-7',
              title: 'Week 9 (Day 5-7): Pushing to GitHub',
              tasks: [
                {
                  id: 'week-9-day-5-7-prep',
                  kind: 'Prep',
                  duration: '20m',
                  text: 'Create a free account on GitHub.com.',
                },
                {
                  id: 'week-9-day-5-7-apply',
                  kind: 'Apply',
                  duration: '40m',
                  text: 'Link your local repository to your GitHub account and push your code. Create a professional `README.md` file explaining your cloud architecture. You now have a dev portfolio!',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'phase-4',
      label: 'Phase 4',
      title: 'The Career Transition',
      range: 'Weeks 10-12',
      color: 'red',
      weeks: [
        {
          id: 'week-10',
          title: 'Week 10: Resume Translation',
          days: [
            {
              id: 'week-10-daily',
              title: 'Daily: Translating Experience',
              tasks: [
                {
                  id: 'week-10-daily-prep',
                  kind: 'Prep',
                  duration: '15m',
                  text: 'Review your 20 years of work history. Identify moments you managed projects, budgets, or angry clients.',
                },
                {
                  id: 'week-10-daily-action-teal',
                  kind: 'Action',
                  duration: '30m',
                  text: 'Use Teal to re-write your bullet points into "tech-value" statements. For example, "Customer Service" becomes "End-User Empathy and Escalation Management". Make sure links to your AWS site and GitHub are at the top.',
                  href: 'https://www.tealhq.com/',
                },
                {
                  id: 'week-10-daily-action-resume',
                  kind: 'Action',
                  duration: '15m',
                  text: 'Update the HTML code of your cloud resume to reflect these new, highly-polished bullet points.',
                },
              ],
            },
          ],
        },
        {
          id: 'week-11',
          title: 'Week 11: The Networking Sprint',
          days: [
            {
              id: 'week-11-daily',
              title: 'Daily: LinkedIn Outreach',
              tasks: [
                {
                  id: 'week-11-daily-search',
                  kind: 'Search',
                  duration: '15m',
                  text: 'Find 5 "Tech Recruiters" or "AWS Recruiters" on LinkedIn daily.',
                },
                {
                  id: 'week-11-daily-action-connect',
                  kind: 'Action',
                  duration: '30m',
                  text: 'Send this customized connection note: "Hi [Name], I am a career changer with 20 years of business experience, now AWS certified with a live cloud portfolio. I am actively looking for a Cloud Support or Junior IT Admin role. Would love to connect."',
                },
                {
                  id: 'week-11-daily-action-comment',
                  kind: 'Action',
                  duration: '15m',
                  text: 'Scroll your feed and leave thoughtful, business-minded comments on 2 industry posts to increase your profile visibility.',
                },
              ],
            },
          ],
        },
        {
          id: 'week-12',
          title: 'Week 12: Application Blitz',
          featured: true,
          days: [
            {
              id: 'week-12-daily',
              title: 'Daily: Getting Your Foot in the Door',
              tasks: [
                {
                  id: 'week-12-daily-search',
                  kind: 'Search',
                  duration: '20m',
                  text: 'Look on Indeed and LinkedIn for entry-level titles: "Cloud Support Associate", "IT Helpdesk Tier 1/2", or "Junior System Administrator". Do NOT apply for "Architect" yet.',
                },
                {
                  id: 'week-12-daily-action',
                  kind: 'Action',
                  duration: '40m',
                  text: 'Submit 3-5 highly tailored applications. In any cover letter, leverage your mature business background. You are not just an IT person; you are a professional who understands company priorities.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

let parsedRoadmap = null;
if (planMarkdown && typeof planMarkdown === 'string' && planMarkdown.trim().length > 0) {
  try {
    const result = parsePlan(planMarkdown);
    if (result && result.roadmap && result.roadmap.phases && result.roadmap.phases.length > 0) {
      parsedRoadmap = result.roadmap;
    }
  } catch (e) {
    console.error("Failed to parse plan.md, falling back to default roadmap", e);
  }
}

export const roadmap = parsedRoadmap || fallbackRoadmap;
export const ROADMAP_ID = roadmap.id;

export function flattenDays(source = roadmap) {
  return source.phases.flatMap((phase) =>
    phase.weeks.flatMap((week) =>
      week.days.map((day) => ({
        ...day,
        phaseId: phase.id,
        phaseTitle: phase.title,
        phaseLabel: phase.label,
        phaseColor: phase.color,
        weekId: week.id,
        weekTitle: week.title,
      })),
    ),
  );
}

export function flattenTasks(source = roadmap) {
  return flattenDays(source).flatMap((day) =>
    day.tasks.map((task) => ({
      ...task,
      dayId: day.id,
      dayTitle: day.title,
      phaseId: day.phaseId,
      phaseTitle: day.phaseTitle,
      phaseLabel: day.phaseLabel,
      phaseColor: day.phaseColor,
      weekId: day.weekId,
      weekTitle: day.weekTitle,
    })),
  );
}
