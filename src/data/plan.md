---
title: Cloud Architect Career Sprint
subtitle: The "Zero-to-Architect" 30-Week Daily Study Plan (Mid-Career Edition)
target: Cloud Architect — Job Ready in 210 Days
commitment: 60 minutes per day | 7 days per week
---

> **Timeline Note:** This plan spans 30 calendar weeks — the original 28 weeks of curriculum plus two dedicated Job Pivot Weeks inserted at career-critical milestones. Job Pivot Week 1 fires after your CCP certification (Week 10) and targets entry-level tech roles you can land NOW. Job Pivot Week 2 fires after your SAA certification (Week 16) and targets Cloud Support Engineer and Junior Cloud roles. The remaining curriculum (Phases 5–6) is designed to be studied while you are working, accelerating your path to Cloud Architect from inside the industry.

# Phase 1: IT Foundation and Helpdesk Readiness | Weeks 1-4 | indigo

*Portfolio artifact: A personal "IT Runbook" — a living Markdown document with troubleshooting checklists and OS command references you will use for years.*

## Week 1: Hardware, Operating Systems and The Troubleshooting Mindset {open}

Resources: [Professor Messer A+ Core 1](https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video/220-1101-training-course/) | [VirtualBox](https://www.virtualbox.org/) | [Ubuntu 22.04 ISO](https://ubuntu.com/download/desktop)

### Day 1: Storage and System Inventory

- [10m] Prep: Download [Professor Messer's free A+ Core 1 study guide](https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video/220-1101-training-course/). Create a Notion or [Obsidian](https://obsidian.md/) page called "IT Runbook."
- [25m] Learn: Watch [Messer's A+ intro video](https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video/220-1101-training-course/). Take notes on the 5 exam domains — Mobile Devices, Networking, Hardware, Virtualization, and Troubleshooting.
- [25m] Apply: On your computer, open System Information (`msinfo32` on Windows, `system_profiler SPHardwareDataType` on Mac). Document your CPU, RAM, and storage type in your IT Runbook. Write a 3-sentence plain-English explanation of what each component does.

### Day 2: Home Network Diagram

- [10m] Prep: Review Day 1 notes. Read [this 5-minute HDD vs SSD vs NVMe explainer](https://www.crucial.com/articles/about-ssd/ssd-vs-hdd) on Crucial.
- [25m] Learn: Watch [Messer A+ Core 1 — Section 1.1](https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video/220-1101-training-course/) (Mobile Devices) and the first 25 minutes of Section 1.2 (Networking). Focus on how data moves between devices at a physical level.
- [25m] Apply: Draw a simple network diagram in [draw.io](https://app.diagrams.net/): Phone → WiFi Router → Modem → ISP → Internet. Label each device's role. Photograph or export it and paste it into your IT Runbook.

### Day 3: Hardware Deep Dive

- [10m] Prep: Review your network diagram. Quiz yourself: what is the difference between a hub, a switch, and a router? Read [this quick explainer](https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/networking-basics.html) if needed.
- [25m] Learn: Watch [Messer A+ Core 1 — Section 1.3](https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video/220-1101-training-course/) (Hardware). Focus on CPU socket types, RAM form factors (DIMM vs SODIMM), and PCIe slots.
- [25m] Apply: Visit [crucial.com/store/advisor](https://www.crucial.com/store/advisor) and run a scan on your computer. In your IT Runbook, document your RAM type, max capacity, and the exact part number you would order to upgrade it professionally.

### Day 4: Virtualization and Cloud Concepts

- [10m] Prep: Review hardware notes. Look up ["POST (Power-On Self-Test)" on Wikipedia](https://en.wikipedia.org/wiki/Power-on_self-test) and read what beep codes indicate.
- [25m] Learn: Watch [Messer A+ Core 1 — Section 1.4](https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video/220-1101-training-course/) (Virtualization and Cloud Computing). Focus on Type 1 vs Type 2 hypervisors and the definitions of IaaS, PaaS, and SaaS.
- [25m] Apply: Download [VirtualBox](https://www.virtualbox.org/wiki/Downloads). In the "New VM" wizard, configure a VM for Ubuntu 22.04 (4GB RAM, 25GB disk). Take a screenshot. Document what each setting means in your IT Runbook.

### Day 5: The Troubleshooting Methodology

- [10m] Prep: Review the IaaS/PaaS/SaaS definitions. Write one real-world sentence for each (e.g., "IaaS is renting land and building your own house").
- [25m] Learn: Watch [Messer A+ Core 1 — Section 1.5](https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video/220-1101-training-course/) (Hardware and Network Troubleshooting). Study the 7-step CompTIA methodology: Identify → Establish Theory → Test → Establish Plan → Implement → Verify → Document.
- [25m] Apply: Write the 7-step methodology in your IT Runbook as a reusable checklist. Apply it in writing to this scenario: "A user's computer can't reach the internet but other devices on the network can." Walk through every step explicitly.

### Day 6: First Linux Server

- [10m] Prep: Download the [Ubuntu 22.04 Desktop ISO](https://ubuntu.com/download/desktop).
- [25m] Learn: Watch [NetworkChuck's "Linux for Beginners" intro](https://www.youtube.com/watch?v=ZtqBQ68cfJc) (~25 min). Focus on the directory structure: `/home`, `/etc`, `/var`, `/usr`.
- [25m] Apply: In VirtualBox, install Ubuntu 22.04 using the ISO. Once it boots, open Terminal. Run `ls /`, `pwd`, and `whoami`. Document what each command returned in your IT Runbook.

### Day 7: Week 1 Review

- [10m] Prep: Open your IT Runbook. Review everything from this week. Identify the one concept that still feels fuzzy.
- [20m] Learn: Rewatch the [Messer video](https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video/220-1101-training-course/) on your fuzzy topic. If nothing is fuzzy, watch his "Troubleshooting Networks" section (Core 1, Domain 5).
- [30m] Apply: Write a "Week 1 Summary" in your IT Runbook from memory: the 5 A+ Core 1 domains (one sentence each), the 7-step troubleshooting methodology, and the difference between HDD/SSD/NVMe. Writing forces recall — the most powerful study technique available.

## Week 2: Windows, macOS and the OS Toolkit

Resources: [Professor Messer A+ Core 2](https://www.professormesser.com/free-a-plus-training/220-1102/220-1102-video/220-1102-training-course/)

### Day 1: Windows Editions and Group Policy

- [10m] Prep: Watch [this 10-minute A+ Core 2 domain overview](https://www.professormesser.com/free-a-plus-training/220-1102/220-1102-video/220-1102-training-course/) from Messer.
- [25m] Learn: Watch [Messer A+ Core 2 — Section 1.1](https://www.professormesser.com/free-a-plus-training/220-1102/220-1102-video/220-1102-training-course/) (Windows Editions). Focus on Home vs Pro vs Enterprise — BitLocker, Remote Desktop, and Group Policy availability.
- [25m] Apply: Open `msconfig` on Windows. Document every tab and its purpose in your IT Runbook. If on Pro or Enterprise, open `gpedit.msc` and explore the Group Policy Editor.

### Day 2: The Windows Technician's Command Kit

- [10m] Prep: Review Windows editions and key features. Read [Microsoft's overview of Windows commands](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands).
- [25m] Learn: Watch [Messer A+ Core 2 — Section 1.2](https://www.professormesser.com/free-a-plus-training/220-1102/220-1102-video/220-1102-training-course/) (Windows Features). Study: `ipconfig`, `ping`, `tracert`, `netstat`, `nslookup`, `sfc /scannow`, `chkdsk`.
- [25m] Apply: Open Command Prompt or PowerShell. Run all 7 tools. For each, document in your IT Runbook: what it does, the output you received, and when a helpdesk professional would use it.

### Day 3: PowerShell and Event Logs

- [10m] Prep: Review command-line notes. Practice typing `ipconfig /all` and `netstat -an` from memory.
- [25m] Learn: Watch [Messer A+ Core 2 — Section 1.3](https://www.professormesser.com/free-a-plus-training/220-1102/220-1102-video/220-1102-training-course/) (continued). Study `net`, `robocopy`, `xcopy`, and Task Scheduler (`taskschd.msc`).
- [25m] Apply: In PowerShell, run `Get-Service` and locate the "Windows Update" service. Then run `Get-EventLog -LogName System -Newest 20`. Document what you found — this is real helpdesk work.

### Day 4: Task Manager and Disk Management

- [10m] Prep: Review PowerShell commands. Look up [Event Viewer on Microsoft Learn](https://learn.microsoft.com/en-us/shows/inside/event-viewer) and understand its 4 main Windows logs.
- [25m] Learn: Watch [Messer A+ Core 2 — Section 1.4](https://www.professormesser.com/free-a-plus-training/220-1102/220-1102-video/220-1102-training-course/) (Control Panel Utilities). Study Device Manager, System Properties, all 7 Task Manager tabs, and Disk Management.
- [25m] Apply: Open Task Manager and go to the Performance tab. Screenshot the CPU, Memory, Disk, and Network graphs. In your IT Runbook, write what high utilization on each graph would indicate and how you would diagnose it.

### Day 5: macOS for the IT Pro

- [10m] Prep: Review Task Manager's tabs. Read [Apple's macOS Terminal command overview](https://support.apple.com/guide/terminal/welcome/mac).
- [25m] Learn: Watch [Messer A+ Core 2 — Section 2.1](https://www.professormesser.com/free-a-plus-training/220-1102/220-1102-video/220-1102-training-course/) (macOS Features). Study the macOS directory structure, Terminal commands, System Information, Activity Monitor, and FileVault.
- [25m] Apply: If on a Mac, run `top`, `df -h`, and `ifconfig` in Terminal. If on Windows, research the macOS equivalents and add a comparison table to your IT Runbook: Windows command → macOS equivalent → what it shows.

### Day 6: Linux Quick Reference

- [10m] Prep: Review your macOS/Windows comparison table. Note how these tools map to cloud equivalents — Task Manager → CloudWatch, Event Viewer → CloudTrail.
- [25m] Learn: Watch [Messer A+ Core 2 — Section 2.2](https://www.professormesser.com/free-a-plus-training/220-1102/220-1102-video/220-1102-training-course/) (Linux Features). Study: `ls`, `cd`, `cp`, `mv`, `rm`, `chmod`, `chown`, `ps`, `grep`, `find`, `df`, `top`, `sudo`, `apt`.
- [25m] Apply: Boot your Ubuntu VM. Run all 14 Linux commands in the terminal. For each, document the command, its flags, and a real-world use case. Add this as your "Linux Quick Reference" in your IT Runbook.

### Day 7: Writing IT Tickets Like a Pro

- [10m] Prep: Review this week's notes. Your IT Runbook should now have Windows, macOS, and Linux commands mapped together.
- [20m] Learn: Watch [this IT Help Desk ticketing overview on YouTube](https://www.youtube.com/results?search_query=ticketing+systems+IT+help+desk). Understand the ticket lifecycle: Open → In Progress → Escalated → Resolved → Closed.
- [30m] Apply: Write 3 sample tickets in your IT Runbook (e.g., "User cannot print," "Password reset request," "Computer won't power on"). For each, fill in: Priority, Category, Troubleshooting Steps, Resolution, and Lessons Learned.

## Week 3: Networking Foundations — The Language of Cloud

Resources: [Professor Messer Network+](https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/) | [TryHackMe Pre-Security](https://tryhackme.com/path/outline/presecurity) | [Subnet Calculator](https://subnet-calculator.com)

### Day 1: The OSI Model

- [10m] Prep: Search ["TCP/IP Model explained"](https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/) and study a clean diagram. The 4 TCP/IP layers are: Network Access, Internet, Transport, Application.
- [25m] Learn: Watch [Messer Network+ — "The OSI Model" and "TCP/IP"](https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/). Study all 7 OSI layers and their protocols (Layer 7 = HTTP/HTTPS/DNS, Layer 4 = TCP/UDP, Layer 3 = IP).
- [25m] Apply: Draw the OSI model by hand — 7 layers with the name, protocol examples, and a 5-word description of each layer. Add it to your IT Runbook. Memorize this model; it appears on every certification exam for the next 5 years.

### Day 2: Subnetting and CIDR Notation

- [10m] Prep: Quiz yourself on all 7 OSI layers from memory. Write them down without looking.
- [25m] Learn: Watch [Messer Network+ — "IP Addressing"](https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/). Study IPv4 address classes, subnet masks, CIDR notation, and private IP ranges (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16).
- [25m] Apply: Practice on [subnet-calculator.com](https://subnet-calculator.com): (1) How many hosts does /26 give you? (2) What are the network and broadcast addresses for 192.168.10.0/24? (3) What CIDR block gives you at least 500 hosts? Document answers in your IT Runbook.

### Day 3: DNS Records

- [10m] Prep: Review CIDR notation. Memorize: /24 = 254 hosts, /25 = 126, /26 = 62, /27 = 30, /28 = 14.
- [25m] Learn: Watch [Messer Network+ — "DNS"](https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/). Study A, AAAA, CNAME, MX, TXT, NS, and SOA records. Understand recursive vs. authoritative DNS and TTL.
- [25m] Apply: Open terminal. Run `nslookup google.com`, `nslookup -type=MX google.com`, and `nslookup -type=NS google.com`. Document what each returned. Add a DNS records reference table to your IT Runbook.

### Day 4: DHCP, NAT and Your Home Router

- [10m] Prep: Review DNS records. Quiz: what does an MX record do? What does a CNAME do? Use [Cloudflare's DNS glossary](https://www.cloudflare.com/learning/dns/dns-records/) if needed.
- [25m] Learn: Watch [Messer Network+ — "DHCP" and "NAT/PAT"](https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/). Understand the DORA process (Discover, Offer, Request, Acknowledge) and how NAT allows multiple private IPs to share one public IP.
- [25m] Apply: Log into your home router (typically 192.168.1.1). Screenshot the DHCP pool (start IP, end IP, lease time). Identify at least 3 devices by MAC address and hostname. Document your findings — this skill maps directly to managing VPC DHCP Option Sets in AWS.

### Day 5: Key Ports Reference

- [10m] Prep: Review DHCP and NAT notes. Read [this AWS VPC overview](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html) to understand how Route Tables = Routers and Security Groups = Firewalls.
- [25m] Learn: Watch [Messer Network+ — "Network Protocols"](https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/). Memorize: FTP (21), SSH (22), SMTP (25), DNS (53), HTTP (80), HTTPS (443), RDP (3389).
- [25m] Apply: Open terminal. Run `nc -zv google.com 443` and `nc -zv google.com 80`. Then run `netstat -tuln` to see ports listening on your machine. Add a "Key Ports Reference" table to your IT Runbook.

### Day 6: Wireless Security

- [10m] Prep: Flashcard session — write 15 port numbers on paper (protocol on front, port on back). Quiz yourself.
- [25m] Learn: Watch [Messer Network+ — "Wireless Networking"](https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/). Study 802.11 standards, 2.4GHz vs 5GHz tradeoffs, WPA2 vs WPA3 encryption, and common attacks (Evil Twin, Deauthentication).
- [25m] Apply: Use a WiFi analyzer app (e.g., [WiFi Analyzer on Android](https://play.google.com/store/apps/details?id=com.farproc.wifi.analyzer) or [NetSpot on Mac/Windows](https://www.netspotapp.com/)) to scan nearby networks. Identify the channel, frequency band, and security type of each. Write a paragraph explaining why channel overlap causes performance issues.

### Day 7: Week 3 Portfolio Entry

- [10m] Prep: Review all Week 3 networking notes. This material is the backbone of cloud networking.
- [20m] Learn: Watch [this "Stateful vs. Stateless Firewalls" explainer](https://www.youtube.com/results?search_query=stateful+vs+stateless+firewall+explained) on YouTube. Map stateless firewalls to AWS Network ACLs and stateful firewalls to AWS Security Groups.
- [30m] Apply: Write a 1-page "Network Architecture Overview" in your IT Runbook as if briefing a new IT colleague. Include: the OSI model, key protocols and ports, subnetting basics, DNS record types, and how DHCP and NAT work together. The ability to explain complex concepts in plain English is an AI-proof skill that defines great architects.

## Week 4: Security Fundamentals and IT Helpdesk Capstone

Resources: [Professor Messer Security+](https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-training-course/)

### Day 1: The CIA Triad

- [10m] Prep: Download the [CompTIA Security+ SY0-701 exam objectives PDF](https://www.comptia.org/certifications/security). You are not studying for this exam yet — just building the mental map.
- [25m] Learn: Watch [Messer's "Security Fundamentals" intro video](https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-training-course/). Focus on the CIA Triad: Confidentiality, Integrity, Availability.
- [25m] Apply: For each leg of the CIA Triad, write 2 real-world AWS examples in your IT Runbook. Confidentiality: [KMS encryption](https://aws.amazon.com/kms/). Integrity: [CloudTrail log validation](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-log-file-validation-intro.html). Availability: [Multi-AZ RDS](https://aws.amazon.com/rds/features/multi-az/).

### Day 2: Authentication and MFA

- [10m] Prep: Review the CIA Triad. Research social engineering attacks on [SANS](https://www.sans.org/blog/what-is-social-engineering/): phishing, spear phishing, whaling, vishing, smishing.
- [25m] Learn: Watch [Messer Security+ — "Authentication"](https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-training-course/). Study MFA, SSO, OAuth 2.0, SAML 2.0, and authentication vs. authorization.
- [25m] Apply: Enable MFA on one account using [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) or [Authy](https://authy.com/). Then write a step-by-step "MFA Onboarding Guide" in your IT Runbook as if writing it for a non-technical employee.

### Day 3: Encryption Fundamentals

- [10m] Prep: Review authentication types. Read [Cloudflare's 5-minute Zero Trust explainer](https://www.cloudflare.com/learning/security/glossary/what-is-zero-trust/).
- [25m] Learn: Watch [Professor Messer's "Encryption Fundamentals"](https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-training-course/). Study symmetric vs. asymmetric encryption, TLS/SSL handshake, AES-256, RSA, digital certificates, and PKI.
- [25m] Apply: In terminal, run `openssl s_client -connect google.com:443 2>/dev/null | openssl x509 -noout -text | head -30`. Document the issuer, validity dates, and subject alternative names in your IT Runbook under "Reading a TLS Certificate."

### Day 4: Malware Incident Response

- [10m] Prep: Review encryption concepts. Read [this AES vs. RSA comparison](https://www.ssl2buy.com/wiki/symmetric-vs-asymmetric-encryption-what-are-differences).
- [25m] Learn: Watch [Messer A+ Core 2 — "Malware and Malware Removal"](https://www.professormesser.com/free-a-plus-training/220-1102/220-1102-video/220-1102-training-course/). Study virus, worm, Trojan, ransomware, spyware, keylogger, and rootkit — plus the safe removal process.
- [25m] Apply: Write a "Malware Incident Response Playbook" in your IT Runbook: (1) Identify the infection. (2) Quarantine the machine. (3) Disable System Restore. (4) Boot Safe Mode. (5) Run multiple scanners. (6) Delete or quarantine threats. (7) Re-enable protections. (8) Document and report. Format it as a numbered checklist a junior technician could follow under pressure.

### Day 5: Change Management

- [10m] Prep: Review the malware playbook. Read [Microsoft's "What is Patch Tuesday"](https://www.microsoft.com/en-us/msrc/update-guide) article.
- [25m] Learn: Watch [this "ITIL Fundamentals for Beginners" video](https://www.youtube.com/results?search_query=ITIL+fundamentals+for+beginners) (~20 minutes). Focus on Incident vs. Problem vs. Change Management.
- [25m] Apply: Create a "Change Request Template" in your IT Runbook. Fields: Change ID, Requester, Date, Description, Business Justification, Risk Assessment (Low/Medium/High), Rollback Plan, and Approval Status.

### Day 6: IT Documentation Standards

- [10m] Prep: Review the Change Request Template. Read [Atlassian's "What is an SLA" article](https://www.atlassian.com/itsm/service-request-management/sla).
- [25m] Learn: Watch [this "How to Write IT Documentation" video](https://www.youtube.com/results?search_query=how+to+write+professional+IT+documentation) on YouTube. Study the difference between runbooks, playbooks, and knowledge base articles.
- [25m] Apply: Go through your entire IT Runbook. Add a table of contents, fix formatting, ensure every entry has a clear title, and add a "Last Updated" date. A well-maintained runbook is a portfolio piece.

### Day 7: Phase 1 Capstone {featured}

- [10m] Prep: Phase 1 is complete. Review the full IT Runbook from Day 1.
- [20m] Learn: Watch [this "Breaking into IT — First 90 Days" video](https://www.youtube.com/results?search_query=breaking+into+IT+helpdesk+first+90+days) (TechWorld with Nana or similar). Note 3 things you would do differently now vs. before this phase.
- [30m] Apply: Write a 1-page "IT Foundation Summary" in Markdown. Include: your troubleshooting methodology, key OS commands for day one, the networking fundamentals every cloud professional needs, and 3 security controls you'd immediately recommend to a small business. Save as `phase1_capstone.md` in a new [GitHub](https://github.com/) repository. This is your first real portfolio commit.

# Phase 2: Networking and Linux Mastery | Weeks 5-7 | violet

*Portfolio artifact: A fully documented home lab network diagram AND a Linux server hardening checklist, both committed to GitHub.*

## Week 5: TCP/IP Deep Dive and Routing {open}

Resources: [TryHackMe Pre-Security](https://tryhackme.com/path/outline/presecurity) | [Wireshark](https://www.wireshark.org/)

### Day 1: Routing and VLANs

- [10m] Prep: Create a free account at [tryhackme.com](https://tryhackme.com) and navigate to the [Pre-Security learning path](https://tryhackme.com/path/outline/presecurity).
- [25m] Learn: Watch [Messer Network+ — "Routing" and "VLANs"](https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/). Study static vs. dynamic routing, OSPF vs. BGP conceptually, and how VLANs segment a Layer 2 network.
- [25m] Apply: Complete TryHackMe's ["What is Networking?" room](https://tryhackme.com/room/whatisnetworking). In your IT Runbook, draw a network topology with 3 VLANs (Management VLAN 10, User VLAN 20, Server VLAN 30) and explain why this segmentation improves security.

### Day 2: WAN Technologies and SDN

- [10m] Prep: Review VLAN and routing notes. Read [AWS's "What is a VPC" overview](https://aws.amazon.com/vpc/) to understand how AWS VPC is fundamentally SDN.
- [25m] Learn: Watch [Messer Network+ — "WAN Technologies"](https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/). Study MPLS, SD-WAN, and point-to-point vs. multipoint connections.
- [25m] Apply: Complete TryHackMe's ["OSI Model" room](https://tryhackme.com/room/osimodelzi). After completing it, write your own OSI model explanation using a postal-system analogy in your IT Runbook.

### Day 3: Network Security Architecture

- [10m] Prep: Review WAN technologies and your OSI analogy.
- [25m] Learn: Watch [Messer Network+ — "Network Security"](https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/). Study stateful vs. stateless firewalls, IDS vs. IPS, honeypots, DMZ architecture, and segmentation principles.
- [25m] Apply: Design a 3-tier network architecture diagram in [draw.io](https://app.diagrams.net/): Public Subnet (Load Balancer) → Private Subnet (Application Servers) → Database Subnet (RDS). Add a security group layer between each tier and label all traffic flows. This is the foundation of every cloud architecture you will ever design.

### Day 4: Packet Capture with Wireshark

- [10m] Prep: Download and install [Wireshark](https://www.wireshark.org/download.html). Read [NIST's Zero Trust Architecture summary](https://www.nist.gov/publications/zero-trust-architecture) for 10 minutes.
- [25m] Learn: Watch [Chris Greer's "Wireshark for Beginners" series](https://www.youtube.com/@ChrisGreer) on YouTube (~25 min). Understand packet capture, the TCP 3-way handshake (SYN → SYN-ACK → ACK), and traffic filtering.
- [25m] Apply: Start a Wireshark capture on your main interface. Visit [http://neverssl.com](http://neverssl.com) (HTTP only). Filter for `http` traffic. Observe the GET request and response in plaintext. Screenshot it. Document what HTTPS would have hidden.

### Day 5: Port Scanning and Server Hardening

- [10m] Prep: Review Wireshark findings. Read [this TCP vs. UDP comparison](https://www.cloudflare.com/learning/ddos/glossary/user-datagram-protocol-udp/) on Cloudflare.
- [25m] Learn: Watch [Messer Network+ — "Network Troubleshooting Tools"](https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/). Study `ping`, `traceroute`, `pathping`, `mtr`, `arp`, `netstat`, and [nmap](https://nmap.org/) basics.
- [25m] Apply: On your Ubuntu VM, install nmap: `sudo apt install nmap`. Run `nmap -sV localhost`. Document every open port and service. Disable unnecessary services with `sudo systemctl disable <service>`. Document what you disabled and why.

### Day 6: Network+ Practice Exam Round 1

- [10m] Prep: Review all Week 5 notes. Read [CompTIA's Network+ exam objectives](https://www.comptia.org/certifications/network) to understand the 5 domains.
- [25m] Learn: Watch [a Messer Network+ domain overview video](https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/) (~25 min). Identify your current confidence level in each domain (1–5 scale).
- [25m] Apply: Take a free Network+ practice test at [ExamCompass](https://www.examcompass.com/comptia/network-plus-certification/free-network-plus-practice-tests). Score your results. For every wrong answer, write one sentence explaining why the correct answer is correct. Identify your top 3 weak areas.

### Day 7: Networking Quick Reference and Phase 2 Foundation

- [10m] Prep: Review your 3 weak areas from yesterday's practice test.
- [20m] Learn: Complete TryHackMe's ["Packets and Frames" room](https://tryhackme.com/room/packetsframes).
- [30m] Apply: Update your IT Runbook with a "Networking Quick Reference" section: OSI layers, key protocols and ports, subnetting cheat sheet (/24–/28 host counts), and your 3-tier architecture diagram. This reference section will be used throughout your entire career.

## Week 6: Linux Command Line Mastery

Resources: [NetworkChuck Linux Series](https://www.youtube.com/watch?v=ZtqBQ68cfJc) | [Linux Journey](https://linuxjourney.com/)

### Day 1: File System and Permissions

- [10m] Prep: Open your Ubuntu VM. Review the Linux Quick Reference from Week 2.
- [25m] Learn: Watch [NetworkChuck "Linux for Beginners" Part 1](https://www.youtube.com/watch?v=ZtqBQ68cfJc) (~25 min, free). Focus on file system navigation, file permissions, and the `man` command.
- [25m] Apply: On your Ubuntu VM: (1) Create a directory `cloudlab` with `mkdir`. (2) Create 3 files with `touch`. (3) Set `chmod 644` on one and `chmod 755` on another. (4) Verify with `ls -la`. Document the permission numbers and their meanings (4=read, 2=write, 1=execute) in your IT Runbook.

### Day 2: Grep, Pipes and Text Editing

- [10m] Prep: Memorize: `chmod 777` (everyone everything), `chmod 644` (owner reads/writes, others read), `chmod 755` (owner all, others read/execute).
- [25m] Learn: Watch [NetworkChuck "Linux for Beginners" Part 2](https://www.youtube.com/watch?v=ZtqBQ68cfJc). Focus on `grep`, `find`, piping (`|`), redirection (`>`, `>>`), and editors (`nano` vs `vim`).
- [25m] Apply: On your Ubuntu VM: (1) Run `grep -r "error" /var/log/`. (2) Run `find / -name "*.conf" -type f 2>/dev/null`. (3) Pipe `ps aux` through `grep python`. (4) Use `nano` to create `server_notes.txt` with 3 lines. Document every command used in your IT Runbook.

### Day 3: User and Group Management

- [10m] Prep: Review grep and find commands. Read [this Linux cron jobs explainer](https://www.hostinger.com/tutorials/cron-job) on Hostinger.
- [25m] Learn: Watch [this "Linux User and Group Management" tutorial](https://www.youtube.com/results?search_query=linux+user+and+group+management+tutorial) (TechHut or Linux Foundation, ~25 min). Study `useradd`, `usermod`, `userdel`, `groupadd`, `passwd`, `sudo`, `/etc/passwd`, and `/etc/sudoers`.
- [25m] Apply: On your Ubuntu VM: (1) `sudo useradd -m cloudadmin`. (2) `sudo passwd cloudadmin`. (3) `sudo usermod -aG sudo cloudadmin`. (4) `su - cloudadmin` and verify sudo access. Document every command — this is how you manage access on every Linux server you will ever provision.

### Day 4: Package Management and Your First Web Server

- [10m] Prep: Review user management commands. Write a 2-sentence definition of "Principle of Least Privilege" in your IT Runbook. Read [NIST's definition](https://csrc.nist.gov/glossary/term/least_privilege) if needed.
- [25m] Learn: Watch [this "Linux Package Management with apt" tutorial](https://www.youtube.com/results?search_query=linux+apt+package+management+tutorial) (~25 min). Study `apt update`, `apt upgrade`, `apt install`, `apt remove`, and `dpkg -l`.
- [25m] Apply: On your Ubuntu VM: (1) `sudo apt update && sudo apt upgrade -y`. (2) `sudo apt install nginx -y`. (3) `sudo systemctl start nginx`. (4) `sudo systemctl status nginx`. (5) Visit `http://localhost` — you should see the nginx welcome page. You just deployed your first web server.

### Day 5: SSH Key Authentication

- [10m] Prep: Review your nginx setup. Read [DigitalOcean's "Understanding Systemd"](https://www.digitalocean.com/community/tutorials/systemd-essentials-working-with-services-units-and-the-journal) tutorial.
- [25m] Learn: Watch [this "SSH Key Authentication" tutorial](https://www.youtube.com/results?search_query=ssh+key+authentication+linux+tutorial) (~25 min). Study SSH key pairs, `ssh-keygen`, `ssh-copy-id`, `~/.ssh/authorized_keys`, and SSH config.
- [25m] Apply: On your Ubuntu VM: (1) `ssh-keygen -t ed25519 -C "your_email@example.com"`. (2) `cat ~/.ssh/id_ed25519.pub`. (3) `cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys`. (4) `chmod 600 ~/.ssh/authorized_keys`. Document every step — you will repeat this process hundreds of times.

### Day 6: UFW Firewall and Server Hardening

- [10m] Prep: Review SSH key concepts. Read [this "What is fail2ban" overview](https://www.fail2ban.org/wiki/index.php/Main_Page).
- [25m] Learn: Watch [this "Linux Server Hardening Best Practices" video](https://www.youtube.com/results?search_query=linux+server+hardening+best+practices+2024) (~25 min). Study: disabling root SSH login, changing the default SSH port, configuring UFW, and setting up fail2ban.
- [25m] Apply: Harden your Ubuntu VM: (1) `sudo apt install ufw`. (2) `sudo ufw allow 22`. (3) `sudo ufw allow 80 && sudo ufw allow 443`. (4) `sudo ufw enable`. (5) `sudo ufw status verbose`. Create your "Linux Server Hardening Checklist" in your IT Runbook with these steps.

### Day 7: First Bash Script and GitHub Push

- [10m] Prep: Review the hardening checklist. Study [Linux cron syntax](https://crontab.guru/) at crontab.guru — `* * * * *` means minute, hour, day, month, weekday.
- [20m] Learn: Watch [this "Bash Scripting for Beginners" video](https://www.youtube.com/results?search_query=bash+scripting+for+beginners+linux) (~20 min). Study `#!/bin/bash`, variables, if/else statements, and for/while loops.
- [30m] Apply: Write `/home/cloudadmin/health_check.sh` — echoes the server date, CPU load (`uptime`), memory usage (`free -h`), disk usage (`df -h /`), and nginx status (`systemctl is-active nginx`). Run `chmod +x health_check.sh`. Schedule with cron: `*/5 * * * * /home/cloudadmin/health_check.sh >> /var/log/health.log 2>&1`. Push to [GitHub](https://github.com/).

## Week 7: Network+ Exam Prep and Phase 2 Capstone {featured}

Resources: [Professor Messer Network+ Practice Exams](https://www.professormesser.com/practice-exams/n10-009-practice-exams/) | [ExamCompass](https://www.examcompass.com/)

### Day 1: Cloud Networking and IaC Concepts

- [10m] Prep: Download the [CompTIA Network+ N10-009 exam objectives PDF](https://www.comptia.org/certifications/network).
- [25m] Learn: Watch [Messer Network+ — "Cloud and Virtualization" and "Infrastructure as Code"](https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/). Study hypervisors, containers vs. VMs, and how network configuration is managed with tools like Ansible and Terraform.
- [25m] Apply: Complete TryHackMe's ["DNS in Detail" room](https://tryhackme.com/room/dnsindetail). Document the full DNS resolution chain in your IT Runbook. This is a common whiteboard question for cloud roles.

### Day 2: HTTP Deep Dive and Log Monitoring

- [10m] Prep: Review the DNS resolution chain. Read [Cloudflare's "What is Anycast routing"](https://www.cloudflare.com/learning/cdn/glossary/anycast-network/) — how CDNs like CloudFront use it.
- [25m] Learn: Watch [Messer Network+ — "Network Operations"](https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/). Study SNMP, NetFlow, and syslog. Map these to [CloudWatch metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/working_with_metrics.html) and VPC Flow Logs in AWS.
- [25m] Apply: Complete TryHackMe's ["HTTP in Detail" room](https://tryhackme.com/room/httpindetail). Document HTTP methods, status codes, and key headers. Then view live logs on your Ubuntu VM: `tail -f /var/log/syslog` and restart nginx to watch the entry appear instantly.

### Day 3: Network+ Practice Exam — Deep Review

- [10m] Prep: Review syslog and monitoring concepts.
- [25m] Learn: Watch [a Messer Network+ practice exam walkthrough on YouTube](https://www.youtube.com/results?search_query=network+plus+exam+walkthrough+professor+messer). Note question patterns, common distractors, and scenario types.
- [25m] Apply: Take a free Network+ practice test at [ExamCompass](https://www.examcompass.com/comptia/network-plus-certification/free-network-plus-practice-tests). Score your results. For every wrong answer, write one sentence explaining the correct answer. Identify your top 3 weak areas.

### Day 4: Network+ Targeted Remediation

- [10m] Prep: Review your 3 weak areas from yesterday. Pull up the specific Messer videos that cover those topics.
- [25m] Learn: Watch [Messer Network+ videos](https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/) specifically covering your 3 weakest domains from yesterday's exam.
- [25m] Apply: Take a second Network+ practice test at [Professor Messer's free practice exam page](https://www.professormesser.com/practice-exams/n10-009-practice-exams/). Compare your score to yesterday. For every wrong answer, write the explanation in your IT Runbook.

### Day 5: Linux Powers the Cloud

- [10m] Prep: Review all networking notes from this week.
- [25m] Learn: Watch [this "How Linux Powers the Cloud" video](https://www.youtube.com/results?search_query=how+linux+powers+the+cloud+AWS) (Linux Foundation or AWS Training YouTube, ~25 min). Focus on how EC2 instances are Linux servers and how Lambda runs in Linux execution environments.
- [25m] Apply: Update your Linux hardening checklist on [GitHub](https://github.com/) with everything learned in Weeks 6–7. Add sections for SSH hardening, UFW configuration, user management, cron scheduling, and log monitoring. Write a README explaining what the checklist is and when to use it.

### Day 6: What is Cloud Computing — Deep Dive

- [10m] Prep: Phase 2 is nearly done. Reflect on how much of your Linux and networking knowledge directly maps to AWS services.
- [25m] Learn: Watch [AWS Training's "What is Cloud Computing" deep dive](https://www.youtube.com/watch?v=M988_fsOSWo) on YouTube. Focus on the shared responsibility model, CapEx vs. OpEx economics, and the 5 NIST characteristics of cloud computing.
- [25m] Apply: In your IT Runbook, write a one-page "Cloud vs. On-Premises Comparison" — documenting the CapEx vs. OpEx distinction, the 5 NIST characteristics (on-demand self-service, broad network access, resource pooling, rapid elasticity, measured service), and 3 real business reasons companies move to cloud.

### Day 7: Phase 2 Capstone

- [10m] Prep: Phase 2 review. You now have strong networking foundations and Linux skills.
- [20m] Learn: Re-read [AWS's Free Tier documentation](https://aws.amazon.com/free/) carefully to understand exactly what is free before you start Phase 3.
- [30m] Apply: Create a [GitHub](https://github.com/) repository called `cloud-foundation-portfolio`. Commit: (1) Your Linux hardening checklist. (2) Your bash health check script. (3) Your network architecture diagram exported as PNG from [draw.io](https://app.diagrams.net/). (4) A README explaining who you are, what these artifacts demonstrate, and what you are working toward. This is the beginning of your public professional portfolio.

# Phase 3: AWS Cloud Practitioner — First Cloud Certification | Weeks 8-10 | emerald

*Portfolio artifact: AWS Free Tier account with 5 documented hands-on labs, plus your Cloud Practitioner certification badge.*

## Week 8: AWS Core Services — Compute, Storage and Networking {open}

Resources: [Stephane Maarek CCP Course](https://www.udemy.com/course/aws-certified-cloud-practitioner-new/) | [AWS Free Tier](https://aws.amazon.com/free/) | [AWS Console](https://console.aws.amazon.com)

### Day 1: AWS Account Setup and First EC2 Server

- [10m] Prep: Create a free AWS account at [aws.amazon.com](https://aws.amazon.com/). Enable MFA on the root account immediately. Create an IAM admin user — never use root for daily tasks. Set up a [billing alarm for $5](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html).
- [25m] Learn: Watch [Maarek's CCP course — first 30 minutes](https://www.udemy.com/course/aws-certified-cloud-practitioner-new/) covering AWS Global Infrastructure (Regions, Availability Zones, Edge Locations).
- [25m] Apply: In the [AWS Console](https://console.aws.amazon.com), launch a t2.micro instance (free tier) running Amazon Linux 2023. Connect via EC2 Instance Connect. Run `whoami` and `uname -a`. Document the instance ID, AMI ID, and AZ in a lab notes file on [GitHub](https://github.com/).

### Day 2: EC2 Pricing and Instance Families

- [10m] Prep: Memorize: Region (geographic area), AZ (one or more data centers), Edge Location (CloudFront CDN point of presence). Read [AWS's regions and AZs overview](https://aws.amazon.com/about-aws/global-infrastructure/).
- [25m] Learn: Watch [Maarek's CCP course — EC2 section](https://www.udemy.com/course/aws-certified-cloud-practitioner-new/). Study instance families (t, m, c, r) and pricing models: On-Demand vs. Reserved vs. Spot vs. Dedicated.
- [25m] Apply: Explore your EC2 instance: (1) Review the Security Group rules. (2) Check the [CloudWatch metrics](https://console.aws.amazon.com/cloudwatch/) tab. (3) Attach an IAM role with S3 read-only access. Document every step.

### Day 3: S3 Storage Classes and Versioning

- [10m] Prep: Review EC2 instance types. Know: t = burstable, m = general purpose, c = compute optimized, r = memory optimized. Read [AWS EC2 instance type overview](https://aws.amazon.com/ec2/instance-types/).
- [25m] Learn: Watch [Maarek's CCP course — S3 section](https://www.udemy.com/course/aws-certified-cloud-practitioner-new/). Study buckets, objects, storage classes (Standard, Standard-IA, Glacier, Deep Archive), versioning, and lifecycle policies.
- [25m] Apply: In the [AWS Console](https://console.aws.amazon.com): (1) Create an S3 bucket with versioning enabled. (2) Upload 3 files. (3) Upload one file again with different content and view both versions in the [S3 console](https://s3.console.aws.amazon.com/).

### Day 4: S3 Lifecycle Policies and Bucket Policies

- [10m] Prep: Review S3 storage classes. Memorize: Standard (frequent access), Standard-IA (infrequent, retrieval fee), Glacier (archival, minutes/hours), Deep Archive (up to 12 hours). Read [AWS S3 storage classes comparison](https://aws.amazon.com/s3/storage-classes/).
- [25m] Learn: Continue [Maarek's CCP S3 section](https://www.udemy.com/course/aws-certified-cloud-practitioner-new/). Study bucket policies vs. ACLs vs. IAM policies and how lifecycle rules automate storage tier transitions.
- [25m] Apply: In the [AWS Console](https://console.aws.amazon.com): Create a lifecycle rule on your S3 bucket — transition objects to S3-IA after 30 days, delete after 365. Screenshot the lifecycle rule configuration. Document it in your GitHub lab notes.

### Day 5: VPC Architecture

- [10m] Prep: Review S3 lifecycle policies. Read [AWS's "What is Amazon VPC"](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html) overview.
- [25m] Learn: Watch [Maarek's CCP course — VPC section](https://www.udemy.com/course/aws-certified-cloud-practitioner-new/). Study: VPC, public vs. private subnets, Internet Gateway, Route Tables, Security Groups (stateful), Network ACLs (stateless), and NAT Gateway.
- [25m] Apply: Explore your default VPC in [the AWS VPC Console](https://console.aws.amazon.com/vpc/): identify the CIDR block, subnets (one per AZ), Internet Gateway, and default route table. Draw the default VPC architecture in [draw.io](https://app.diagrams.net/). Commit the diagram to GitHub.

### Day 6: IAM — Identity and Access Management

- [10m] Prep: Review VPC components. Quiz: what is the difference between a Security Group and a Network ACL? Read [AWS's comparison](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html) if needed.
- [25m] Learn: Watch [Maarek's CCP course — IAM section (complete)](https://www.udemy.com/course/aws-certified-cloud-practitioner-new/). Study users, groups, roles, managed vs. inline policies, JSON policy structure, and IAM best practices.
- [25m] Apply: In the [IAM Console](https://console.aws.amazon.com/iam/): (1) Create a group "Developers" with `AmazonS3ReadOnlyAccess`. (2) Create an IAM user and add them to the group. (3) Use the [IAM Policy Simulator](https://policysim.aws.amazon.com/) to verify the user can call `s3:GetObject` but not `s3:DeleteObject`. Document the simulation results.

### Day 7: CloudWatch and CloudTrail

- [10m] Prep: Write the IAM policy JSON structure from memory: `{"Version": "2012-10-17", "Statement": [{"Effect": "Allow", "Action": [...], "Resource": [...]}]}`.
- [20m] Learn: Watch [Maarek's CCP course — CloudWatch and CloudTrail section](https://www.udemy.com/course/aws-certified-cloud-practitioner-new/). Study CloudWatch metrics, alarms, logs, and dashboards; CloudTrail API auditing; and AWS Config for compliance.
- [30m] Apply: In the [AWS Console](https://console.aws.amazon.com): (1) Create a [CloudWatch alarm](https://console.aws.amazon.com/cloudwatch/) for EC2 CPU > 80% for 2 minutes. (2) In [CloudTrail Event History](https://console.aws.amazon.com/cloudtrail/), find the event where you created the IAM user from Day 6. Screenshot the event detail — note `userIdentity`, `sourceIPAddress`, and `requestParameters`. This is exactly how security teams investigate incidents.

## Week 9: AWS Pricing, Migration and Exam Prep

Resources: [Tutorials Dojo CCP Practice Exams](https://tutorialsdojo.com/courses/aws-certified-cloud-practitioner-practice-exams/) | [AWS Pricing Calculator](https://calculator.aws/)

### Day 1: Shared Responsibility Model and Security Services

- [10m] Prep: Research the [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/) — the single most tested concept on the CCP exam.
- [25m] Learn: Watch [Maarek's CCP — Shared Responsibility Model and Security services](https://www.udemy.com/course/aws-certified-cloud-practitioner-new/). Study: [AWS Shield](https://aws.amazon.com/shield/) (DDoS), [WAF](https://aws.amazon.com/waf/) (web application firewall), [Inspector](https://aws.amazon.com/inspector/) (vulnerability scanning), [GuardDuty](https://aws.amazon.com/guardduty/) (threat detection), and [Macie](https://aws.amazon.com/macie/) (S3 data classification).
- [25m] Apply: Draw the Shared Responsibility Model for 3 service types: EC2 (IaaS), RDS (managed PaaS), and Lambda (serverless). For each, draw a dividing line showing AWS's responsibility vs. yours. Commit the diagram to [GitHub](https://github.com/).

### Day 2: AWS Pricing Models and TCO

- [10m] Prep: Review the Shared Responsibility Model. Read [AWS's Well-Architected Framework 6 pillars overview](https://aws.amazon.com/architecture/well-architected/).
- [25m] Learn: Watch [Maarek's CCP — Pricing, Billing, and Support](https://www.udemy.com/course/aws-certified-cloud-practitioner-new/). Study pricing models, the [TCO Calculator](https://aws.amazon.com/tco-calculator/), [Cost Explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/), [AWS Budgets](https://aws.amazon.com/aws-cost-management/aws-budgets/), and the 4 support tiers (Basic, Developer, Business, Enterprise).
- [25m] Apply: Read [AWS's pricing model guide](https://aws.amazon.com/pricing/). Write a 1-page comparison in your IT Runbook: On-Demand vs. Reserved vs. Spot vs. Savings Plans — use cases, cost differences, and when you'd choose each.

### Day 3: Cost Estimation with the AWS Pricing Calculator

- [10m] Prep: Review AWS pricing models. Know: On-Demand = most flexible, Reserved = up to 72% cheaper for committed use, Spot = up to 90% cheaper for interruptible workloads.
- [25m] Learn: Watch [this AWS Pricing Calculator walkthrough](https://www.youtube.com/watch?v=7uV_Uo0F730) on YouTube to understand how to build cost estimates professionally.
- [25m] Apply: Go to [calculator.aws](https://calculator.aws/). Build a monthly estimate for: 2x t3.small EC2, 1x RDS db.t3.micro MySQL, 100GB S3 Standard, CloudFront with 1TB data transfer. Document the estimate and what drives each cost. Cost estimation is a core Cloud Architect skill.

### Day 4: Migration Strategies

- [10m] Prep: Review the cost estimate you built yesterday. Read [AWS's "Cloud Migration Overview"](https://aws.amazon.com/cloud-migration/).
- [25m] Learn: Watch [Maarek's CCP — Cloud Migration and Adoption Framework](https://www.udemy.com/course/aws-certified-cloud-practitioner-new/). Study the 6 R's of migration: Rehost, Replatform, Repurchase, Refactor, Retire, Retain.
- [25m] Apply: Write a "Migration Assessment" in your IT Runbook for a fictional company moving to AWS. For each of their 4 systems (web servers, database, file storage, email), determine which of the 6 R's applies and justify the recommendation. This is real Cloud Architect consulting work.

### Day 5: CCP Practice Exam — First Attempt

- [10m] Prep: Review the 6 R's and your IT Runbook notes on AWS services. Read [AWS's "AWS Organizations" overview](https://aws.amazon.com/organizations/) and [AWS Control Tower](https://aws.amazon.com/controltower/).
- [25m] Learn: Watch [Maarek's CCP — Governance, Architecture, and Ecosystem](https://www.udemy.com/course/aws-certified-cloud-practitioner-new/). Study Organizations, Service Control Policies, Trusted Advisor, and Service Catalog.
- [25m] Apply: Take a free CCP practice test at [Tutorials Dojo](https://tutorialsdojo.com/courses/aws-certified-cloud-practitioner-practice-exams/) or [ExamTopics](https://www.examtopics.com/exams/amazon/clf-c02/). Score your results. For every wrong answer, write one sentence explaining the correct answer.

### Day 6: CCP Final Review and Weak Area Remediation

- [10m] Prep: Review your wrong answers from yesterday's practice exam. Identify the 3 areas with the most errors.
- [25m] Learn: Watch [Maarek's CCP videos](https://www.udemy.com/course/aws-certified-cloud-practitioner-new/) specifically covering your 3 weakest areas from yesterday. Focus on understanding, not memorization.
- [25m] Apply: Take a second CCP practice test using [Tutorials Dojo's timed mode](https://tutorialsdojo.com/courses/aws-certified-cloud-practitioner-practice-exams/) (65 questions, 90 minutes). Compare your score to yesterday. Document improvement and remaining gaps.

### Day 7: CCP Exam Scheduling and Last-Minute Prep {featured}

- [10m] Prep: Check your practice exam scores. If averaging 80%+ you are ready to schedule.
- [20m] Learn: Watch [Maarek's "Last-Minute CCP Study Guide"](https://www.youtube.com/results?search_query=AWS+cloud+practitioner+last+minute+study+guide) video. Focus on: Global Infrastructure, IAM, S3, EC2, VPC, RDS, Pricing Models, Support Plans, Shared Responsibility.
- [30m] Apply: Schedule your CCP exam at [Pearson VUE](https://home.pearsonvue.com/aws) (~$100 USD, online proctored). Then review your notes one more time. If not at 80% yet, spend the time taking a third practice test at [ExamCompass](https://www.examcompass.com/comptia/aws-cloud-practitioner/free-aws-cloud-practitioner-practice-tests).

## Week 10: CCP Exam Week and SAA Kickoff

Resources: [LinkedIn](https://www.linkedin.com/) | [Stephane Maarek SAA Course](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/)

### Day 1: AWS CCP Exam Day

- [10m] Prep: Light review only — your notes, your SAA Quick-Reference cheat sheet from last week, and water. Do not cram. Rest is more valuable right now.
- [25m] Learn: Do one final pass through the [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/) and skim [AWS's "Exam Readiness: AWS Certified Cloud Practitioner" page](https://aws.amazon.com/certification/certified-cloud-practitioner/).
- [25m] Apply: **Take your AWS CCP Exam.** You are prepared. Trust the process.

### Day 2: Certification Announcement and LinkedIn Update

- [10m] Prep: Log into [AWS Certification](https://www.certmetrics.com/amazon/public/badge.aspx) to download your digital badge from [Credly](https://www.credly.com/).
- [25m] Learn: Watch [this "How to Apply for AWS Cloud Support Engineer Jobs" video](https://www.youtube.com/results?search_query=AWS+cloud+support+engineer+jobs+how+to+apply) (CloudWithSam or A Cloud Guru YouTube). Note what recruiters look for.
- [25m] Apply: Update [LinkedIn](https://www.linkedin.com/) immediately: add "AWS Cloud Practitioner" to your Certifications section using your Credly badge URL. Update your headline to: "AWS Certified Cloud Practitioner | IT Professional | Transitioning to Cloud Architecture." Post a celebration update with your badge link.

### Day 3: SAA Course Introduction and Game Plan

- [10m] Prep: Research the [AWS SAA-C03 exam guide](https://aws.amazon.com/certification/certified-solutions-architect-associate/). Download the [official exam guide PDF](https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS-Certified-Solutions-Architect-Associate_Exam-Guide.pdf).
- [25m] Learn: Watch the first 30 minutes of [Maarek's "AWS Certified Solutions Architect Associate" course](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/). Note: this is a significantly more advanced exam — roughly 40–50 hours of study.
- [25m] Apply: Create a [GitHub](https://github.com/) repository called `aws-saa-study-notes` with folders: `/networking`, `/compute`, `/storage`, `/databases`, `/security`, `/monitoring`, `/architecture`. Write a README describing what you'll document in each folder.

### Day 4: EC2 Advanced — Placement Groups and ENIs

- [10m] Prep: Review your CCP EC2 notes. Read [AWS EC2 instance metadata documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html).
- [25m] Learn: Watch [Maarek's SAA — EC2 Advanced section](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/): instance metadata, placement groups (Cluster, Spread, Partition), and Elastic Network Interfaces (ENIs).
- [25m] Apply: In your SAA notes repo under `/compute`, document the 3 placement group types with diagrams: what each is, when to use each, and the failure implications of each. Example: "Cluster Placement Group: all instances in one AZ, lowest latency, highest failure risk."

### Day 5: EC2 User Data and Auto Scaling Preview

- [10m] Prep: Review placement group notes. Read [AWS's EC2 User Data documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html).
- [25m] Learn: Watch [Maarek's SAA — EC2 User Data and Auto Scaling Groups preview](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/).
- [25m] Apply: In the [AWS Console](https://console.aws.amazon.com), launch an EC2 instance with a User Data script that installs Apache and writes a custom HTML page: `#!/bin/bash`, `yum update -y`, `yum install httpd -y`, `systemctl start httpd`, `echo "<h1>Hello from $(hostname -f)</h1>" > /var/www/html/index.html`. Visit the instance's public IP. Commit the User Data script to your SAA notes repo.

### Day 6: Load Balancing Architecture Preview

- [10m] Prep: Review your EC2 User Data deployment. Read [AWS's ELB overview page](https://aws.amazon.com/elasticloadbalancing/).
- [25m] Learn: Watch [Maarek's SAA — Elastic Load Balancing introduction](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/). Study the 3 ELB types: Application (ALB), Network (NLB), and Gateway (GWLB).
- [25m] Apply: In your SAA notes `/networking` folder, write a "Load Balancer Decision Guide" — when to use ALB vs. NLB vs. GWLB. Format: "Use ALB when: [condition]. Use NLB when: [condition]." Add this decision guide to GitHub.

### Day 7: Week 10 Wrap-Up and Job Pivot Preparation

- [10m] Prep: You have completed Phase 3 and earned your first cloud certification. Take stock of what you've built: IT Runbook, Linux hardening checklist, 5 AWS labs, CCP certification. This is a real portfolio.
- [20m] Learn: Watch [this "How Mid-Career Professionals Break Into Tech" video](https://www.youtube.com/results?search_query=mid+career+professional+break+into+tech+IT) (~20 min). Note how your 20+ years of professional experience is an advantage, not a liability, in your job search.
- [30m] Apply: Pull up [LinkedIn Jobs](https://www.linkedin.com/jobs/) and search for "Cloud Support Associate," "IT Support Specialist," "Help Desk Technician," and "Junior System Administrator." Read 5 job descriptions carefully. Highlight the requirements you already meet. **The next week is dedicated entirely to landing your first tech role.**

---

# Job Pivot Week 1: Entry-Level Tech Role Launch | gold

> **Why This Week Exists:** You have your AWS CCP certification, 10 weeks of documented technical skills, a GitHub portfolio, and 20+ years of professional experience that most candidates in their 20s simply don't have. That combination — business maturity plus emerging technical skills — is rare and valuable. This week, you stop studying and start applying. The SAA curriculum (Phase 4) picks up next week and can be studied while you work. Do not skip this week. Speed into the workforce matters.
>
> **Target Roles This Week:** IT Support Specialist | Cloud Support Associate | Help Desk Tier 1/2 | Junior System Administrator | Technical Support Engineer | IT Operations Analyst

## Day 1: Resume Translation — From Experience to Tech Value

- [10m] Prep: Pull up your current resume. Read [this guide on translating non-tech experience to tech roles](https://www.tealhq.com/post/how-to-write-a-resume-for-a-career-change) on TealHQ.
- [25m] Learn: Watch [this "IT Resume Writing for Career Changers" video](https://www.youtube.com/results?search_query=IT+resume+career+changer+cloud+support) on YouTube. Pay close attention to how professional accomplishments translate — "managed client escalations" becomes "end-user technical support and escalation management."
- [25m] Apply: Using [Teal Resume Builder](https://www.tealhq.com/) (free), rewrite your resume. Add a "Technical Skills" section at the top listing: AWS Cloud Practitioner, Linux (Ubuntu, bash scripting, UFW), Networking (TCP/IP, DNS, subnetting, VPC), and your GitHub portfolio URL. Rewrite 5 bullet points from your prior career into tech-value language.

## Day 2: LinkedIn Profile Optimization

- [10m] Prep: Log into [LinkedIn](https://www.linkedin.com/) and review your profile with fresh eyes — imagine you are a recruiter scanning it for 10 seconds.
- [25m] Learn: Watch [this "LinkedIn Profile Optimization for IT Jobs" tutorial](https://www.youtube.com/results?search_query=linkedin+profile+optimization+IT+jobs+2024) (~25 min). Focus on the headline, About section, and skills endorsements.
- [25m] Apply: Update your [LinkedIn profile](https://www.linkedin.com/) with: (1) Headline: "AWS Certified Cloud Practitioner | IT Professional | Cloud Architecture | 20 Years Business Experience." (2) Rewrite your About section — lead with what you can do for an employer, not what you've done in the past. (3) Add your GitHub URL in the "Featured" section. (4) List all technical skills from your resume. (5) Turn on "Open to Work" for recruiters.

## Day 3: Portfolio Final Polish

- [10m] Prep: Open your [GitHub profile](https://github.com/) and view it as a recruiter would. Read [GitHub's guide on creating a profile README](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme).
- [25m] Learn: Watch [this "GitHub Portfolio for Job Seekers" video](https://www.youtube.com/results?search_query=github+portfolio+for+job+seekers+IT) (~25 min). Focus on what hiring managers actually look at.
- [25m] Apply: Pin your 3 best repositories on GitHub. Write a polished `README.md` for your `cloud-foundation-portfolio` repo — explain what each artifact demonstrates and include your certification badge. Update the [GitHub Skills](https://skills.github.com/) profile section to show: AWS, Linux, Bash, Networking, Cloud Infrastructure.

## Day 4: Target Company Research and Job Mapping

- [10m] Prep: Read [this "How to Research a Company Before Applying" guide](https://www.glassdoor.com/blog/research-an-employer/) from Glassdoor.
- [25m] Learn: Watch [this "How to Use LinkedIn to Find Your First IT Job" video](https://www.youtube.com/results?search_query=linkedin+job+search+strategy+IT+first+job) (~25 min).
- [25m] Apply: On [LinkedIn Jobs](https://www.linkedin.com/jobs/), [Indeed](https://www.indeed.com/), and [Glassdoor](https://www.glassdoor.com/), find 15 entry-level IT/Cloud roles. Create a job tracking spreadsheet (Google Sheets or [Teal's Job Tracker](https://www.tealhq.com/job-tracker)) with columns: Company, Role, Requirements Met (%), Application Status, and Follow-Up Date. Prioritize the 5 jobs where you meet 70%+ of requirements.

## Day 5: Behavioral Interview Preparation

- [10m] Prep: Read [this "STAR Method Interview Guide"](https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-interview-response-technique) from Indeed. The STAR method is your best tool.
- [25m] Learn: Watch [this "IT Support Interview Questions and Answers" video](https://www.youtube.com/results?search_query=IT+support+helpdesk+interview+questions+answers+2024) (~25 min). Note the 5 most common behavioral questions and how your prior career gives you strong answers.
- [25m] Apply: Write 5 STAR-method stories drawn from your previous 20-year career that translate to IT scenarios. Examples: "Tell me about a time you diagnosed and resolved a complex problem under pressure." "Describe a time you explained a technical issue to a non-technical stakeholder." These stories are your biggest competitive advantage over younger candidates.

## Day 6: Technical Interview Preparation

- [10m] Prep: Review your IT Runbook — specifically the troubleshooting methodology, OSI model, key ports, and Linux commands.
- [25m] Learn: Watch [this "IT Help Desk Technical Interview Questions" video](https://www.youtube.com/results?search_query=IT+help+desk+technical+interview+questions+answers) (~25 min). Note which technical topics appear most frequently.
- [25m] Apply: Practice these 5 technical questions out loud (or record yourself on your phone): (1) "Walk me through how you would troubleshoot a user who can't connect to the internet." (2) "What is DNS and how does it work?" (3) "Explain the difference between TCP and UDP." (4) "What is the difference between a public and private IP address?" (5) "What is cloud computing and what is the AWS Shared Responsibility Model?" Speaking your answers aloud is a distinct skill. Practice it.

## Day 7: Application Blitz and Outreach Sprint

- [10m] Prep: Review your job tracking spreadsheet from Day 4. Finalize your top 5 applications.
- [25m] Learn: Watch [this "How to Write a Cover Letter for IT Jobs" video](https://www.youtube.com/results?search_query=cover+letter+IT+job+career+changer) (~25 min). The best cover letters for career changers lead with business maturity, not technical credentials.
- [30m] Apply: Submit applications to your top 5 target companies on [LinkedIn](https://www.linkedin.com/jobs/), [Indeed](https://www.indeed.com/), and company career pages. For each application, personalize the cover letter with: (1) Why you want to work at that specific company. (2) One portfolio example directly relevant to their tech stack. (3) Your 20+ years of professional context as your differentiator. **Additionally:** Find 3 "Tech Recruiters" or "AWS Recruiters" on [LinkedIn](https://www.linkedin.com/) and send this connection note: "Hi [Name], I'm a career changer with 20+ years of business experience, now AWS CCP certified with a live cloud portfolio. Actively targeting Cloud Support and IT roles. Would love to connect."

---

# Phase 4: Cloud Support Engineer — AWS Solutions Architect Associate | Weeks 11-16 | orange

> **Note:** You are now actively job searching while studying for your SAA. This is intentional. Studying while job hunting is efficient — your SAA will only strengthen your applications, and you may land a role before completing the exam. Study Phase 4 during your 60 daily minutes. Apply for jobs, attend interviews, and network in the time outside your study block.

*Portfolio artifact: A fully documented multi-tier AWS architecture deployed with CloudFormation.*

## Week 11: IAM Advanced, EC2 Storage and S3 Architecture {open}

Resources: [Stephane Maarek SAA Course](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/)

### Day 1: IAM Roles and STS

- [10m] Prep: Open your SAA study notes repo. Review the EC2 notes from Week 10. Read [AWS's IAM Roles documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html).
- [25m] Learn: Watch [Maarek's SAA — IAM Advanced](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/): IAM roles for EC2, STS (Security Token Service), cross-account access, IAM conditions, resource-based vs. identity-based policies.
- [25m] Apply: In the [AWS Console](https://console.aws.amazon.com): (1) Create an IAM role with `AmazonS3ReadOnlyAccess`. (2) Attach it to your EC2 instance. (3) SSH in and run `aws s3 ls` — it works. (4) Remove the role and try again — it fails. Document the behavior. This is how production applications access AWS services: via IAM roles, never hard-coded credentials.

### Day 2: EBS Volume Management

- [10m] Prep: Review IAM roles and STS. Understand: IAM roles use temporary tokens from STS, not long-term credentials. Read [AWS EBS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html).
- [25m] Learn: Watch [Maarek's SAA — EC2 Storage](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/): EBS volume types (gp3, io2, st1, sc1), snapshots, encryption, AMI lifecycle, and EC2 Instance Store.
- [25m] Apply: In the [AWS Console](https://console.aws.amazon.com): (1) Create a gp3 EBS volume (8GB). (2) Attach it to EC2. (3) SSH in, run `lsblk`. (4) `mkfs -t xfs /dev/xvdf`. (5) `mkdir /data && mount /dev/xvdf /data`. (6) Create a file. (7) Create a snapshot. Document every command.

### Day 3: Storage Decision Matrix

- [10m] Prep: Review EBS types. Know: gp3 = general purpose (default), io2 = high-performance IOPS for databases, st1 = throughput-optimized HDD for big data, sc1 = cheapest HDD.
- [25m] Learn: Watch [Maarek's SAA — EFS and FSx](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/). Study [EFS](https://aws.amazon.com/efs/) (managed NFS, multi-AZ, Linux), [FSx for Windows](https://aws.amazon.com/fsx/windows/) (SMB), and [FSx for Lustre](https://aws.amazon.com/fsx/lustre/) (HPC).
- [25m] Apply: Create `/storage/storage_decision_matrix.md` in your SAA notes repo. Build a comparison table — EBS vs. EFS vs. S3 — with columns: access type, durability, scalability, cost tier, use cases, and limitations. Commit to [GitHub](https://github.com/).

### Day 4: S3 Advanced — Encryption and Replication

- [10m] Prep: Review the storage decision matrix. Read [AWS's S3 encryption overview](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingEncryption.html).
- [25m] Learn: Watch [Maarek's SAA — S3 Advanced](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/): SSE-S3, SSE-KMS, SSE-C, client-side encryption, CORS, CRR and SRR replication, and pre-signed URLs.
- [25m] Apply: In the [AWS Console](https://console.aws.amazon.com): (1) Enable S3 Cross-Region Replication to a new bucket in a different region. (2) Upload a file and verify it replicates within 1–2 minutes. (3) Enable SSE-KMS using the AWS managed key. Document the configuration and push to [GitHub](https://github.com/).

### Day 5: CloudFront and Origin Access Control

- [10m] Prep: Review S3 encryption. Know: SSE-S3 = AWS manages key, SSE-KMS = you control key via KMS, SSE-C = you provide the key, client-side = encrypted before uploading.
- [25m] Learn: Watch [Maarek's SAA — CloudFront](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/). Study origins, distributions, behaviors, CloudFront Functions vs. Lambda@Edge, and [OAC](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html) for securing S3 origins.
- [25m] Apply: In the [AWS Console](https://console.aws.amazon.com): (1) Create a CloudFront distribution with your S3 bucket as origin, OAC enabled. (2) Disable direct public S3 access. (3) Test: CloudFront URL loads, direct S3 URL is blocked. Document the OAC configuration.

### Day 6: Static Website Architecture Design and ADR

- [10m] Prep: Review CloudFront and OAC. Read [AWS CloudFront cache invalidation docs](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html).
- [25m] Learn: Watch [Maarek's SAA — Global Accelerator vs. CloudFront](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/). Know: Global Accelerator routes TCP/UDP at the network layer; CloudFront is an HTTP/HTTPS CDN.
- [25m] Apply: Design a "Static Website Architecture" diagram in [draw.io](https://app.diagrams.net/): Route 53 → CloudFront → S3 (with OAC). Add WAF, S3 versioning, and CloudTrail. Write an Architecture Decision Record (ADR) documenting the Context, Decision, and Consequences. Commit both to [GitHub](https://github.com/).

### Day 7: Well-Architected Review of Static Site

- [10m] Prep: Review Week 11 materials. Read [AWS Well-Architected Framework Security Pillar overview](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html).
- [20m] Learn: Watch [this AWS Well-Architected Framework overview](https://www.youtube.com/watch?v=MfxkiXt2r88) (AWS Training YouTube, ~20 min).
- [30m] Apply: Conduct a Well-Architected Review of your static website. For each of the 6 pillars, write 2–3 sentences: what you did well, what gaps exist, and what you'd add if cost weren't a constraint. Commit to `/architecture/waf-review-static-site.md` on [GitHub](https://github.com/).

## Week 12: VPC Mastery and Networking Architecture

Resources: [draw.io](https://app.diagrams.net/) | [AWS VPC Documentation](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)

### Day 1: Custom VPC from Scratch

- [10m] Prep: Review VPC fundamentals from Week 8. Read [AWS's "VPC with subnets" tutorial](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-subnets-commands-example.html).
- [25m] Learn: Watch [Maarek's SAA — VPC Deep Dive](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/): CIDR planning, public vs. private subnets, Internet Gateway, NAT Gateway, Bastion Hosts, and SSM Session Manager.
- [25m] Apply: In the [AWS VPC Console](https://console.aws.amazon.com/vpc/): (1) Create a custom VPC (10.0.0.0/16). (2) Create 2 public subnets (10.0.1.0/24, 10.0.2.0/24) in separate AZs. (3) Create 2 private subnets (10.0.3.0/24, 10.0.4.0/24). (4) Create and attach an Internet Gateway. (5) Configure public route tables to route 0.0.0.0/0 to the IGW. Commit documentation to `/networking/custom-vpc-setup.md`.

### Day 2: Enterprise VPC Topology

- [10m] Prep: Review your custom VPC. Read [AWS's "NAT Gateway vs. NAT Instance" comparison](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-comparison.html).
- [25m] Learn: Watch [Maarek's SAA — VPC Peering, Endpoints, PrivateLink, Transit Gateway, and VPN](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/).
- [25m] Apply: Design a complete production VPC architecture in [draw.io](https://app.diagrams.net/): 3 AZs with public/private/database subnets, NAT Gateways, ALB in public layer, app servers in private subnets, RDS in database subnets, VPC Endpoint for S3, and Transit Gateway hub connecting to a second VPC. Commit to [GitHub](https://github.com/).

### Day 3: Security Group Chaining

- [10m] Prep: Review VPC Peering vs. Transit Gateway. Read [AWS's Transit Gateway overview](https://aws.amazon.com/transit-gateway/).
- [25m] Learn: Watch [Maarek's SAA — Security Groups vs. Network ACLs (deep dive)](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/). Study stateful vs. stateless behavior and NACL rule evaluation order.
- [25m] Apply: In your custom VPC: (1) Create a Security Group for web servers (allow 80, 443 from 0.0.0.0/0). (2) One for app servers (allow 8080 from web-server SG only). (3) One for RDS (allow 3306 from app-server SG only). Document the configuration and the security rationale — this chaining pattern is standard for tiered application security.

### Day 4: Hybrid Connectivity Decision Framework

- [10m] Prep: Review Security Group chaining. Read [AWS's "PrivateLink vs. VPC Peering" comparison](https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-overview.html).
- [25m] Learn: Watch [Maarek's SAA — Direct Connect and VPN](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/). Study: Site-to-Site VPN, [Direct Connect](https://aws.amazon.com/directconnect/), and Direct Connect Gateway.
- [25m] Apply: In your SAA notes, write a "Hybrid Connectivity Decision Framework" — a table guiding the choice between Site-to-Site VPN, Direct Connect, and Direct Connect + VPN backup. Include: latency, bandwidth, cost, compliance requirements, and provisioning time. Commit to [GitHub](https://github.com/).

### Day 5: VPC Troubleshooting Guide

- [10m] Prep: Review hybrid connectivity options. Read [AWS Outposts overview](https://aws.amazon.com/outposts/).
- [25m] Learn: Watch [Maarek's SAA — Elastic IP and ENI](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/). Then watch [AWS Support's VPC connectivity troubleshooting video](https://www.youtube.com/results?search_query=AWS+VPC+connectivity+troubleshooting) on YouTube.
- [25m] Apply: Write a "VPC Troubleshooting Guide" in your GitHub repo — step-by-step flow for "My EC2 instance can't reach the internet": (1) Check route table for IGW route. (2) Check Security Groups. (3) Check NACLs bidirectionally. (4) Verify IGW is attached. (5) Confirm public IP or Elastic IP exists. Commit to [GitHub](https://github.com/).

### Day 6: Production Architecture with Direct Connect

- [10m] Prep: Review the VPC troubleshooting guide. Read [AWS Network Architecture Best Practices whitepaper](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-architectures.html).
- [25m] Learn: Watch [an AWS re:Invent talk on "AWS Network Architecture Best Practices"](https://www.youtube.com/results?search_query=AWS+reInvent+network+architecture+best+practices) (free on YouTube, ~25 min). Note 3 architectural patterns used.
- [25m] Apply: Expand your production VPC diagram to include: Direct Connect from on-premises, Transit Gateway with VPN backup, VPC Endpoints for S3/DynamoDB/SSM, and a Route 53 private hosted zone for internal DNS. Write a 300-word "Architecture Rationale" companion document. Commit both to [GitHub](https://github.com/).

### Day 7: Week 12 Review and Job Application Check-In

- [10m] Prep: Review all Week 12 networking content. Check your job application tracker — have you heard back from any applications submitted last week?
- [20m] Learn: Watch [this "AWS Cloud Support Engineer Day in the Life" video](https://www.youtube.com/results?search_query=AWS+cloud+support+engineer+day+in+the+life) on YouTube. Note which of your skills are most relevant.
- [30m] Apply: Send 3 follow-up messages to recruiters you connected with last week on [LinkedIn](https://www.linkedin.com/). Search [Indeed](https://www.indeed.com/) and [LinkedIn Jobs](https://www.linkedin.com/jobs/) for 5 new job postings matching "Cloud Support Engineer" or "Junior Cloud Engineer." Add them to your job tracker. Apply to the top 2.

## Week 13: Databases, Serverless and Application Integration

Resources: [AWS Console](https://console.aws.amazon.com) | [Maarek SAA Course](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/)

### Day 1: RDS Multi-AZ and High Availability

- [10m] Prep: Review database services from Phase 3. Read [AWS RDS Multi-AZ documentation](https://aws.amazon.com/rds/features/multi-az/).
- [25m] Learn: Watch [Maarek's SAA — RDS Deep Dive](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/): Multi-AZ (synchronous replication, auto failover), RDS Proxy, encryption, and automated backups vs. snapshots.
- [25m] Apply: In your SAA notes `/databases` folder, draw the Multi-AZ architecture with a diagram (primary + standby in separate AZs, synchronous replication arrow, and the failover path). Write a 3-sentence explanation of when Multi-AZ is mandatory vs. optional. Commit to [GitHub](https://github.com/).

### Day 2: RDS Read Replicas and Aurora

- [10m] Prep: Review Multi-AZ notes. Read [AWS's "RDS Read Replicas" documentation](https://aws.amazon.com/rds/features/read-replicas/).
- [25m] Learn: Watch [Maarek's SAA — Read Replicas and Aurora Deep Dive](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/). Study Read Replicas (asynchronous, for read scaling), Aurora (5x faster), and Aurora Global Database.
- [25m] Apply: In your SAA notes, draw the Read Replicas architecture (primary + up to 5 replicas) and the Aurora Global Database architecture (primary region + secondary region with < 1 second replication lag). Document: when to use Read Replica vs. Aurora Global. Commit to [GitHub](https://github.com/).

### Day 3: DynamoDB

- [10m] Prep: Review RDS patterns. Read [AWS's "DynamoDB vs. RDS" comparison page](https://aws.amazon.com/nosql/).
- [25m] Learn: Watch [Maarek's SAA — DynamoDB](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/): tables, items, partition keys, sort keys, GSI, LSI, DynamoDB Streams, DAX, and on-demand vs. provisioned capacity.
- [25m] Apply: In the [AWS DynamoDB Console](https://console.aws.amazon.com/dynamodb/): (1) Create a table "UserProfiles" with partition key "userId" (String), on-demand mode. (2) Add 3 items. (3) Run a Query for `userId = "user_001"`. (4) Run a full Scan. Document the critical difference: Query uses the index (efficient), Scan reads every item (never use at scale). Commit notes to [GitHub](https://github.com/).

### Day 4: Lambda and Serverless

- [10m] Prep: Review DynamoDB patterns. Read [AWS's Lambda cold start overview](https://aws.amazon.com/blogs/compute/operating-lambda-understanding-event-driven-architecture-part-1/).
- [25m] Learn: Watch [Maarek's SAA — Lambda Deep Dive](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/): execution environment, memory/CPU allocation, concurrency limits, Lambda Layers, and Lambda destinations.
- [25m] Apply: In the [AWS Lambda Console](https://console.aws.amazon.com/lambda/): (1) Create a Python 3.12 Lambda function that reads from your DynamoDB table and returns items as JSON. (2) Test it. (3) View the CloudWatch Logs REPORT line — note duration, billed duration, and memory used. Document the Lambda + DynamoDB + CloudWatch pattern in your SAA notes.

### Day 5: Event-Driven Messaging with SQS, SNS and Kinesis

- [10m] Prep: Review Lambda concepts. Read [AWS's "SQS vs. SNS vs. Kinesis" comparison](https://aws.amazon.com/blogs/compute/decoupling-larger-applications-with-amazon-sqs/).
- [25m] Learn: Watch [Maarek's SAA — SQS, SNS, and Kinesis](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/). Study: SQS (queuing, decoupling), SNS (pub/sub), Kinesis Data Streams (real-time streaming), and the SNS fan-out pattern.
- [25m] Apply: In the [AWS Console](https://console.aws.amazon.com): (1) Create an SQS Standard Queue. (2) Create an SNS Topic. (3) Subscribe the SQS queue to the SNS topic. (4) Publish a message. (5) Poll the SQS queue. Add a fan-out architecture diagram (SNS → SQS → Lambda) to [GitHub](https://github.com/).

### Day 6: Container Decision Framework

- [10m] Prep: Review SQS vs. SNS vs. Kinesis. Know: SQS = pull model, 1 consumer; SNS = push, multiple consumers; Kinesis = ordered, replayable streaming.
- [25m] Learn: Watch [Maarek's SAA — ECS and Fargate](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/). Study task definitions, ECS services, Fargate, ECS with ALB, and ECS vs. EKS.
- [25m] Apply: Create `/compute/container_decision_framework.md` in your SAA notes. Build a decision table — EC2 vs. ECS on EC2 vs. ECS Fargate vs. EKS vs. Lambda — across: operational overhead, cost profile, use case, scaling behavior, and when to choose. Commit to [GitHub](https://github.com/).

### Day 7: Serverless Architecture Design

- [10m] Prep: Review all Week 13 content — databases, serverless, containers, messaging.
- [20m] Learn: Watch [this AWS re:Invent talk on "Serverless Architectures at Scale"](https://www.youtube.com/results?search_query=AWS+reInvent+serverless+architecture+at+scale) (free on YouTube, ~20 min).
- [30m] Apply: Design a complete serverless order processing architecture in [draw.io](https://app.diagrams.net/): API Gateway → Lambda (order processing) → SQS → Lambda (fulfillment) → DynamoDB (order records) → SNS (customer notification). Write an ADR including the cost model (pay-per-use), scaling behavior (automatic), and operational overhead (minimal). Commit both to [GitHub](https://github.com/).

## Week 14: Monitoring, Security and Cost Optimization

Resources: [Tutorials Dojo SAA Practice Exams](https://tutorialsdojo.com/courses/aws-certified-solutions-architect-associate-saa-c03-practice-exams/)

### Day 1: CloudWatch Deep Dive

- [10m] Prep: Review your Week 7 syslog notes. Read [AWS CloudWatch documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html).
- [25m] Learn: Watch [Maarek's SAA — CloudWatch Deep Dive](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/): standard vs. custom metrics, Alarms, Log Groups and Streams, Log Insights queries, Dashboards, and CloudWatch Synthetics canaries.
- [25m] Apply: In the [AWS CloudWatch Console](https://console.aws.amazon.com/cloudwatch/): (1) Create a custom metric: `aws cloudwatch put-metric-data --metric-name PageViews --namespace MyApp --value 100`. (2) Create a Dashboard with 3 widgets: EC2 CPU, custom metric, and EC2 network. (3) Write a Log Insights query: `filter @message like /ERROR/ | stats count(*) by bin(5m)`. Document the results.

### Day 2: GuardDuty and Security Hub

- [10m] Prep: Review CloudWatch. Read [AWS GuardDuty documentation](https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html).
- [25m] Learn: Watch [Maarek's SAA — CloudTrail, Config, Security Hub, and GuardDuty](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/). Study: CloudTrail (90-day API audit logs), Config (compliance tracking), GuardDuty (ML threat detection), and Security Hub (aggregated findings).
- [25m] Apply: Enable [AWS GuardDuty](https://console.aws.amazon.com/guardduty/) (30-day free trial). Review any existing findings. Research the top 5 GuardDuty finding types at [AWS docs](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-types-active.html) and create `/security/guardduty_runbook.md` — a response playbook for each. Commit to [GitHub](https://github.com/).

### Day 3: KMS and Secrets Manager

- [10m] Prep: Review GuardDuty findings. Read [AWS Security Hub overview](https://aws.amazon.com/security-hub/).
- [25m] Learn: Watch [Maarek's SAA — KMS and Secrets Manager](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/). Study: KMS Customer Managed Key, key policies, envelope encryption, Secrets Manager rotation, and [Parameter Store vs. Secrets Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html).
- [25m] Apply: In the [AWS Console](https://console.aws.amazon.com): (1) Create a KMS CMK with annual key rotation enabled. (2) In [Secrets Manager](https://console.aws.amazon.com/secretsmanager/), store a username/password secret encrypted with your CMK. (3) Enable automatic rotation. (4) Retrieve: `aws secretsmanager get-secret-value --secret-id <name>`. Document the full lifecycle.

### Day 4: FinOps and Cost Optimization

- [10m] Prep: Review KMS and Secrets Manager. Read [AWS WAF documentation](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).
- [25m] Learn: Watch [Maarek's SAA — Cost Optimization](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/): Compute Savings Plans, Reserved Instances, Spot Instances and Spot Fleets, [Trusted Advisor](https://aws.amazon.com/premiumsupport/technology/trusted-advisor/) recommendations, and Cost Anomaly Detection.
- [25m] Apply: In the [AWS Console](https://console.aws.amazon.com): (1) Go to [Cost Explorer → Savings Plans → Get Recommendations](https://console.aws.amazon.com/cost-management/home#/savings-plans). (2) Review [Trusted Advisor → Cost Optimization](https://console.aws.amazon.com/trustedadvisor/). (3) Compare EC2 Spot vs. On-Demand prices for t3.medium in us-east-1 using the [Spot price history page](https://console.aws.amazon.com/ec2/v2/home#SpotInstances). Document findings.

### Day 5: Disaster Recovery Strategy Matrix

- [10m] Prep: Review cost optimization. Read [AWS's "Disaster Recovery on AWS" whitepaper](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-workloads-on-aws.html).
- [25m] Learn: Watch [Maarek's SAA — Disaster Recovery strategies](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/): Backup and Restore, Pilot Light, Warm Standby, Multi-Site Active/Active. Know the RPO/RTO trade-offs for each.
- [25m] Apply: Create a "DR Strategy Decision Matrix" in your [GitHub](https://github.com/) repo. Compare all 4 strategies across: RTO, RPO, cost, complexity, and when to use. Write a 1-paragraph recommendation for a fintech company with a 1-hour RTO and a $5K/month DR budget. Commit.

### Day 6: SAA Full Practice Exam

- [10m] Prep: Review the DR matrix and your SAA notes repo.
- [20m] Learn: Watch [Maarek's SAA video](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/) on your weakest topic area from recent lab work.
- [30m] Apply: Take a full [Tutorials Dojo SAA timed practice exam](https://tutorialsdojo.com/courses/aws-certified-solutions-architect-associate-saa-c03-practice-exams/) (65 questions, timed). Focus on trade-off questions — cost vs. performance vs. reliability. Document your score and your top 5 wrong answers with structured explanations.

### Day 7: Practice Exam Review and Weak Area Fix

- [10m] Prep: Review your top 5 wrong answers from yesterday's practice exam.
- [25m] Learn: Watch [Maarek's SAA](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/) videos specifically covering the domains where you got the most questions wrong.
- [25m] Apply: Take a [Tutorials Dojo domain-specific quiz](https://tutorialsdojo.com/courses/aws-certified-solutions-architect-associate-saa-c03-practice-exams/) on your weakest domain. Score and review every question. Document what you now understand that you didn't before.

## Week 15: Architecture Patterns and Infrastructure as Code

Resources: [AWS CloudFormation Docs](https://docs.aws.amazon.com/cloudformation/) | [AWS Well-Architected Tool](https://console.aws.amazon.com/wellarchitected/)

### Day 1: CloudFormation Fundamentals

- [10m] Prep: Read [AWS CloudFormation "What is" guide](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html). Understand why manual click-ops is an anti-pattern in production.
- [25m] Learn: Watch [this AWS CloudFormation introduction](https://www.youtube.com/watch?v=9Xpuprxg7aY) (AWS YouTube, ~25 min). Study: YAML/JSON templates, stacks, parameters, outputs, exports, and CloudFormation vs. Terraform.
- [25m] Apply: Write your first CloudFormation YAML template: an S3 bucket with versioning enabled, a bucket policy allowing only your IAM user, and an Output exporting the bucket ARN. Deploy via the [AWS Console](https://console.aws.amazon.com/cloudformation/). Commit to `/iac/cloudformation/s3-bucket.yaml` on [GitHub](https://github.com/).

### Day 2: Day 100 Milestone — CloudFormation Static Website

> You have reached Day 100. You are more than halfway through this curriculum.

- [10m] Prep: Review your CloudFormation template from yesterday. Read [AWS CloudFormation advanced features docs](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-whatis-howdoesitwork.html).
- [25m] Learn: Watch [this CloudFormation advanced features tutorial](https://www.youtube.com/results?search_query=AWS+cloudformation+nested+stacks+change+sets+tutorial) (~25 min): Nested Stacks, StackSets, Change Sets, Drift Detection, and CloudFormation Guard.
- [25m] Apply: Expand your CloudFormation template to provision a complete static website: private S3 bucket + CloudFront distribution + OAC. Deploy as a stack. Upload `index.html` and verify the CloudFront URL serves your site. Commit — this is your first complete IaC artifact.

### Day 3: Well-Architected Review

- [10m] Prep: Review your CloudFormation template. Read [AWS CDK documentation](https://docs.aws.amazon.com/cdk/v2/guide/home.html) to understand how CDK lets you write CloudFormation in TypeScript or Python.
- [25m] Learn: Watch [Maarek's SAA — Well-Architected Framework Deep Dive](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/): all 6 pillars, design principles, and trade-offs between pillars.
- [25m] Apply: Conduct a [Well-Architected Review](https://console.aws.amazon.com/wellarchitected/) of your static website. For each of the 6 pillars, write 2–3 sentences: what you did well, what gaps exist, and what you'd add if cost weren't a constraint. Commit to `/architecture/waf-review-static-site.md` on [GitHub](https://github.com/).

### Day 4: Resilient Web Application Architecture — Part 1

- [10m] Prep: Review the Well-Architected Framework pillars. Read [AWS Trusted Advisor overview](https://aws.amazon.com/premiumsupport/technology/trusted-advisor/).
- [25m] Learn: Watch [this AWS Architecture Best Practices video](https://www.youtube.com/results?search_query=AWS+architecture+best+practices+stateless+horizontal+scaling) (~25 min). Study: loosely coupled architecture, stateless application design, horizontal vs. vertical scaling, and event-driven architecture.
- [25m] Apply: Begin designing a "Resilient Web Application Architecture" for a SaaS product serving 100K users in [draw.io](https://app.diagrams.net/). Start with the network layer: Route 53 (failover routing between 2 regions), CloudFront, and WAF. Add the compute layer: ALB and Auto Scaling Group. Label the AZs. Save progress.

### Day 5: Resilient Web Application Architecture — Part 2

- [10m] Prep: Review your architecture diagram progress from yesterday.
- [25m] Learn: Watch [Maarek's SAA — Aurora Global Database and ElastiCache](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/) sections to understand how the database and caching layers work.
- [25m] Apply: Complete the resilient web application diagram. Add: Aurora Global Database (us-east-1 primary, eu-west-1 secondary), ElastiCache Redis (session caching), and SQS for async job processing. Label RPO and RTO targets on the diagram. Export from [draw.io](https://app.diagrams.net/) and commit to [GitHub](https://github.com/).

### Day 6: Data Analytics Decision Guide

- [10m] Prep: Review the resilient web application architecture. Estimate its monthly cost using [calculator.aws](https://calculator.aws/).
- [25m] Learn: Watch [Maarek's SAA — Data and Analytics services](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/): [Athena](https://aws.amazon.com/athena/), [Glue](https://aws.amazon.com/glue/), [Lake Formation](https://aws.amazon.com/lake-formation/), [Redshift](https://aws.amazon.com/redshift/), [OpenSearch](https://aws.amazon.com/opensearch-service/), and [QuickSight](https://aws.amazon.com/quicksight/).
- [25m] Apply: Create `/databases/data_analytics_decision_guide.md` in your SAA notes. For each service, write: the primary use case, data source, query model, and a real-world example. Example: "Athena — Ad-hoc SQL queries against S3. Use case: compliance team queries raw CloudTrail logs without loading into a database. Pay per query." Commit to [GitHub](https://github.com/).

### Day 7: SAA Quick-Reference Decision Guide

- [10m] Prep: Take a full [Tutorials Dojo SAA timed practice exam](https://tutorialsdojo.com/courses/aws-certified-solutions-architect-associate-saa-c03-practice-exams/). Score yourself.
- [20m] Learn: Watch [Maarek's "Last Minute SAA Study Guide"](https://www.youtube.com/results?search_query=AWS+solutions+architect+associate+last+minute+study+guide). Focus on: SQS vs. SNS vs. Kinesis, ALB vs. NLB vs. Route 53, RDS Multi-AZ vs. Read Replica, CloudFront vs. Global Accelerator.
- [30m] Apply: Create a "SAA Quick-Reference Decision Guide" — a 2-page Markdown cheat sheet covering all key architectural decision patterns. Format: "If the question says [X], the answer is [Y] because [Z]." Commit to [GitHub](https://github.com/). This is both your exam insurance and your career reference.

## Week 16: SAA Exam Week and Phase 4 Capstone {featured}

Resources: [Pearson VUE Exam Scheduler](https://home.pearsonvue.com/aws) | [Tutorials Dojo](https://tutorialsdojo.com/)

### Day 1: Final SAA Exam Preparation

- [10m] Prep: Review your SAA Quick-Reference Decision Guide. Do one final pass on your weakest topic area.
- [25m] Learn: Watch [this "How I Passed the AWS SAA" video](https://www.youtube.com/results?search_query=how+I+passed+AWS+solutions+architect+associate+2024) (search YouTube 2024). Note study strategies and time-management tips for the 130-minute, 65-question exam.
- [25m] Apply: Take a final [Tutorials Dojo timed SAA practice exam](https://tutorialsdojo.com/courses/aws-certified-solutions-architect-associate-saa-c03-practice-exams/). If scoring 82%+, you are ready. Schedule at [Pearson VUE](https://home.pearsonvue.com/aws) if not already booked. Below 82%: address your top 2 weak areas before exam day.

### Day 2: SAA Weak Area Final Review

- [10m] Prep: Review wrong answers from Day 1's practice exam.
- [25m] Learn: Watch [Maarek's SAA videos](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/) for your 2 weakest domains specifically. Rewatch — don't just skim.
- [25m] Apply: Revisit 3 architecture scenarios you found most challenging throughout Phase 4. Re-draw them from memory without looking at your notes. This retrieval practice is more effective than re-reading.

### Day 3: AWS Solutions Architect Associate Exam

- [10m] Prep: Light review only. Water, rest, and confidence. Do not cram new content.
- [25m] Learn: Skim your SAA Quick-Reference Decision Guide one final time. Visualize working through a multi-step architecture trade-off question slowly and methodically.
- [25m] Apply: **Take your AWS Solutions Architect Associate exam.** You are prepared. Trust the process.

### Day 4: Certification Announcement and LinkedIn Push

- [10m] Prep: Download your SAA certification badge from [Credly](https://www.credly.com/).
- [25m] Learn: Watch [this "How to Optimize Your LinkedIn Profile After Earning a Certification" video](https://www.youtube.com/results?search_query=linkedin+aws+certification+profile+update) (~25 min).
- [25m] Apply: Update [LinkedIn](https://www.linkedin.com/) immediately: add "AWS Certified Solutions Architect — Associate" to Certifications using your Credly badge URL. Update your headline: "AWS SAA | AWS CCP | Cloud Engineer | Infrastructure | DevOps." Post a milestone update with your badge and a link to your GitHub portfolio. This post generates recruiter inbound — it will pay dividends.

### Day 5: Phase 4 Capstone — CloudFormation Stack Design

- [10m] Prep: Begin your Phase 4 Capstone — a multi-tier AWS application deployed entirely with CloudFormation. Architecture: VPC + subnets → ALB → EC2 Auto Scaling Group (Apache) → RDS MySQL Multi-AZ → S3 static assets → CloudFront.
- [25m] Learn: Watch ["CloudFormation Best Practices" on AWS YouTube](https://www.youtube.com/results?search_query=AWS+cloudformation+best+practices) (~25 min). Focus on parameter validation, stack outputs, cross-stack references, and `AWS::CloudFormation::Init` for EC2 configuration.
- [25m] Apply: Write the CloudFormation YAML template structure — define all Parameters (environment name, DB password, instance type), Resources (VPC, subnets, IGW, route tables, security groups), and Outputs (ALB DNS name, RDS endpoint). Do not deploy yet. Commit the draft template to a new [GitHub](https://github.com/) repo called `aws-three-tier-app`.

### Day 6: Phase 4 Capstone — Deploy and Document

- [10m] Prep: Review your CloudFormation template draft. Read [AWS CloudFormation deployment documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-create-stack.html).
- [25m] Learn: Watch [this AWS CloudFormation stack deployment walkthrough](https://www.youtube.com/results?search_query=aws+cloudformation+deploy+stack+console+walkthrough) (~25 min) to understand the deployment workflow and how to read stack events.
- [25m] Apply: Deploy your CloudFormation stack via the [AWS Console](https://console.aws.amazon.com/cloudformation/). Monitor the Events tab as resources are created. After successful deployment, verify the ALB DNS name loads your Apache page. Screenshot the running stack. Commit any last template fixes to [GitHub](https://github.com/).

### Day 7: Phase 4 Capstone — README and Portfolio Publish

- [10m] Prep: Review your deployed stack. Verify all components are working as expected.
- [20m] Learn: Watch [this "Building a Cloud Portfolio That Gets You Hired" video](https://www.youtube.com/results?search_query=cloud+portfolio+gets+you+hired+AWS) (~20 min). Note the 3 portfolio elements that get the most recruiter attention.
- [30m] Apply: Write the `README.md` for your `aws-three-tier-app` repo. Include: architecture diagram (exported from [draw.io](https://app.diagrams.net/)), component descriptions, deployment instructions (`aws cloudformation deploy...`), security design decisions (Security Group chaining, private subnets, encryption at rest), and estimated monthly cost from [calculator.aws](https://calculator.aws/). Post the GitHub link on [LinkedIn](https://www.linkedin.com/). This is your flagship portfolio project.

---

# Job Pivot Week 2: Cloud Role Launch | gold

> **Why This Week Exists:** You now have two AWS certifications, a three-tier CloudFormation deployment on GitHub, and documented architecture decision records. This combination qualifies you for Cloud Support Engineer and Junior Cloud Engineer roles that pay $65K–$95K. This week, you run a focused job campaign before Phase 5 begins. Phase 5 (DevOps Core) can be studied while you work. The goal is to get inside the industry NOW — not after you've mastered everything.
>
> **Target Roles This Week:** Cloud Support Engineer | Junior Cloud Engineer | AWS Support Engineer | DevOps Associate | Solutions Engineer (Entry) | Cloud Operations Engineer

## Day 1: Resume Upgrade — SAA Tier

- [10m] Prep: Pull up your resume from Job Pivot Week 1. Open [Teal Resume Builder](https://www.tealhq.com/) and your current version.
- [25m] Learn: Watch [this "Cloud Engineer Resume Writing Guide" video](https://www.youtube.com/results?search_query=cloud+engineer+resume+writing+guide+2024) (~25 min). Note the difference in language between helpdesk resumes and cloud engineer resumes.
- [25m] Apply: Update your resume to SAA tier: (1) Add "AWS Certified Solutions Architect — Associate" prominently. (2) Add your `aws-three-tier-app` GitHub project with a 2-sentence description. (3) Add new technical skills: CloudFormation, VPC Architecture, IAM, S3, EC2, RDS, CloudWatch, GuardDuty. (4) Translate your most recent application experience (from Phase 3-4 labs) into 3 new bullet points. Use [Teal's AI bullet point rewriter](https://www.tealhq.com/) to tighten the language.

## Day 2: LinkedIn Deep Optimization

- [10m] Prep: Read [LinkedIn's "Profile Strength" recommendations](https://www.linkedin.com/help/linkedin/answer/a564064) for "All-Star" profile status.
- [25m] Learn: Watch [this "LinkedIn for Cloud Engineers" optimization video](https://www.youtube.com/results?search_query=linkedin+profile+optimization+cloud+engineer+2024) (~25 min).
- [25m] Apply: On [LinkedIn](https://www.linkedin.com/): (1) Update your headline: "AWS SAA | AWS CCP | Cloud Support Engineer | Infrastructure | Transitioning to Cloud Architect." (2) Add your `aws-three-tier-app` to the Featured section with a screenshot. (3) Write a post sharing your SAA achievement: "Just passed the AWS Solutions Architect Associate exam. Here's the 3-tier architecture I deployed with CloudFormation to prep for it: [GitHub link]. Happy to connect with cloud engineers and recruiters." (4) Add your new technical skills and request endorsements from professional contacts.

## Day 3: Target Role and Salary Research

- [10m] Prep: Read [this "Cloud Engineer vs. Cloud Architect" career path overview](https://www.glassdoor.com/Salaries/cloud-engineer-salary-SRCH_KO0,14.htm) on Glassdoor.
- [25m] Learn: Watch [this "How Much Do Cloud Engineers Make" salary breakdown video](https://www.youtube.com/results?search_query=cloud+engineer+salary+2024+AWS) (~25 min). Research market rates for your target roles on [Levels.fyi](https://www.levels.fyi/), [Glassdoor](https://www.glassdoor.com/), and [Indeed Salary](https://www.indeed.com/career/cloud-engineer/salaries).
- [25m] Apply: On [LinkedIn Jobs](https://www.linkedin.com/jobs/), [Indeed](https://www.indeed.com/), [Dice](https://www.dice.com/), and [Built In](https://builtin.com/), search for: "Cloud Support Engineer," "Junior Cloud Engineer," "AWS Cloud Engineer," and "DevOps Associate." Find 20 postings. Filter to the 8 where you meet 70%+ of requirements. Add them to your job tracker.

## Day 4: Technical Interview Preparation — Cloud Tier

- [10m] Prep: Review your SAA Quick-Reference Decision Guide and VPC Troubleshooting Guide — these are your interview cheat sheets.
- [25m] Learn: Watch [this "AWS Cloud Support Engineer Interview Questions" video](https://www.youtube.com/results?search_query=AWS+cloud+support+engineer+interview+questions+answers+2024) (~25 min). Note the most common VPC, IAM, and EC2 scenario questions.
- [25m] Apply: Practice these 5 technical interview answers out loud (record yourself): (1) "Walk me through how you would troubleshoot an EC2 instance that can't reach the internet." (2) "Explain the difference between a Security Group and a Network ACL." (3) "What is the Shared Responsibility Model and what does it mean in practice?" (4) "What is IAM and what are best practices for managing access?" (5) "Design a highly available architecture for a web application." Give your answer to #5 using the architecture you built in Phase 4.

## Day 5: Behavioral Interview Preparation — Cloud Tier

- [10m] Prep: Review your 5 STAR stories from Job Pivot Week 1. Identify which ones need upgrading now that you have more technical context.
- [25m] Learn: Watch [this "Behavioral Interviews for Senior Technical Roles" video](https://www.youtube.com/results?search_query=behavioral+interview+senior+technical+role+STAR+method+2024) (~25 min). Focus on leadership, ambiguity, and learning agility scenarios.
- [25m] Apply: Write 3 new STAR-method stories specifically for cloud engineer behavioral questions. Focus on: (1) A time you built something from scratch to solve a problem (use your CloudFormation project). (2) A time you explained a complex technical concept to a non-technical person (draw from your professional history). (3) A time you identified a risk or inefficiency and proposed a solution (use your FinOps or security work from Phase 4).

## Day 6: Application Blitz — Cloud Tier

- [10m] Prep: Review your target job list from Day 3. Rank the top 5 by fit and excitement level.
- [25m] Learn: Watch [this "How to Write a Cover Letter for Your First Cloud Job" video](https://www.youtube.com/results?search_query=cover+letter+first+cloud+job+AWS+engineer) (~25 min). Note: for cloud roles, specificity wins — mention the exact services you've used.
- [25m] Apply: Submit applications to your top 5 target cloud roles on [LinkedIn](https://www.linkedin.com/), [Indeed](https://www.indeed.com/), and company career pages. In each cover letter: (1) Mention the specific AWS services you've deployed (VPC, EC2, RDS, CloudFormation). (2) Link to your GitHub `aws-three-tier-app` project. (3) Frame your 20+ years of professional experience as your differentiator: "I bring cloud infrastructure skills and the business judgment that comes from 20 years of [your industry] experience."

## Day 7: Recruiter Outreach and AWS Community

- [10m] Prep: Review all Job Pivot Week 2 activities. Set a goal: one job application per day going forward as you work through Phases 5–6.
- [25m] Learn: Watch [this "How to Network into Your First Cloud Job" video](https://www.youtube.com/results?search_query=how+to+network+into+first+cloud+job+AWS+community) (~25 min). Note the importance of in-person communities for career changers.
- [30m] Apply: (1) Find your local [AWS User Group](https://aws.amazon.com/developer/community/usergroups/) on [Meetup.com](https://www.meetup.com/) and register for the next event. (2) Find 5 "AWS Cloud Support Recruiters" on [LinkedIn](https://www.linkedin.com/) and send a personalized connection request: "Hi [Name], I recently earned my AWS SAA and built a three-tier architecture in CloudFormation. Actively looking for Cloud Support Engineer roles. Would love to connect." (3) Follow 10 Cloud Architects on LinkedIn. Comment thoughtfully on 2 of their posts.

---

# Phase 5: Cloud Engineer and DevOps Core | Weeks 17-21 | amber

> **Note:** You are now actively interviewing and possibly working an entry-level tech role while studying. This is the plan working exactly as intended. Study Phase 5 during your 60 daily minutes. Continue applying for cloud roles throughout. The DevOps skills in this phase will dramatically increase your market value.

*Portfolio artifact: A containerized application deployed to AWS ECS via a CI/CD pipeline (GitHub Actions → ECR → ECS) with infrastructure managed by Terraform.*

## Week 17: Terraform — Infrastructure as Code at Scale {open}

Resources: [Terraform Docs](https://developer.hashicorp.com/terraform) | [TechWorld with Nana Terraform Series](https://www.youtube.com/watch?v=7xngnjfIlK4) | [tfsec](https://github.com/aquasecurity/tfsec)

### Day 1: Terraform Init, Plan, Apply

- [10m] Prep: Install Terraform (`brew install terraform` on Mac, or download from [developer.hashicorp.com](https://developer.hashicorp.com/terraform/install)). Install and configure the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) with your IAM user's access keys.
- [25m] Learn: Watch [HashiCorp's "Terraform in 100 Seconds"](https://www.youtube.com/watch?v=tomUWcQ0P3k), then the first 30 minutes of [TechWorld with Nana's "Terraform for Beginners"](https://www.youtube.com/watch?v=7xngnjfIlK4). Study: HCL syntax, providers, resources, variables, outputs, and the init → plan → apply → destroy workflow.
- [25m] Apply: Write your first `main.tf` — an AWS provider block and an `aws_s3_bucket` resource with a random name suffix. Run `terraform init`, `terraform plan`, `terraform apply`. Verify the bucket was created. Run `terraform destroy`. Document the complete workflow in a new [GitHub](https://github.com/) repo called `terraform-aws-foundation`.

### Day 2: Remote State with S3 and DynamoDB

- [10m] Prep: Review the Terraform workflow. Read [HashiCorp's "Terraform state" documentation](https://developer.hashicorp.com/terraform/language/state) — what it is and why it's the source of truth.
- [25m] Learn: Watch [TechWorld with Nana's "Terraform Remote State" section](https://www.youtube.com/watch?v=7xngnjfIlK4). Study why local state is dangerous for teams, S3 backend for state storage, and DynamoDB for state locking.
- [25m] Apply: Configure an S3 remote backend: create an S3 bucket and DynamoDB table (partition key `LockID`) manually in the [AWS Console](https://console.aws.amazon.com), then add the `terraform { backend "s3" { ... encrypt = true } }` block. Run `terraform init` to migrate state. Add `.terraform` and `*.tfstate` to `.gitignore`. Commit to [GitHub](https://github.com/).

### Day 3: Terraform Modules

- [10m] Prep: Review Terraform remote state. Read [HashiCorp's Terraform modules documentation](https://developer.hashicorp.com/terraform/language/modules).
- [25m] Learn: Watch [TechWorld with Nana's "Terraform Modules" section](https://www.youtube.com/watch?v=7xngnjfIlK4). Study: module structure, input variables, module outputs, calling modules, and the [Terraform Registry](https://registry.terraform.io/).
- [25m] Apply: Refactor your project into a `modules/networking/` folder with `main.tf`, `variables.tf`, and `outputs.tf` for VPC creation. In your root `main.tf`, call the module: `module "vpc" { source = "./modules/networking" vpc_cidr = "10.0.0.0/16" environment = "dev" }`. Run `terraform plan` to verify. Commit the modular structure to [GitHub](https://github.com/).

### Day 4: Complete VPC Module with Multi-Environment Support

- [10m] Prep: Review Terraform modules. Read [HashiCorp's "Terraform workspaces" documentation](https://developer.hashicorp.com/terraform/language/state/workspaces).
- [25m] Learn: Watch [Anton Babenko's "Terraform Best Practices" video](https://www.youtube.com/results?search_query=terraform+best+practices+Anton+Babenko) (~25 min). Study: naming conventions, variable validation, and using `tfvars` files per environment.
- [25m] Apply: Extend your module to provision a complete VPC: public/private subnets, Internet Gateway, NAT Gateway, and Route Tables. Create `dev.tfvars` and `prod.tfvars` with different CIDR and environment values. Run `terraform plan -var-file=dev.tfvars`. Commit the reusable "VPC Module" to [GitHub](https://github.com/).

### Day 5: EC2 Auto Scaling with Terraform

- [10m] Prep: Review your VPC Terraform module. Read [this "Terraform vs. CloudFormation vs. Pulumi" comparison](https://www.pulumi.com/docs/intro/vs/terraform/) to understand the trade-offs.
- [25m] Learn: Watch [this "Terraform AWS EC2 and Auto Scaling Group" tutorial](https://www.youtube.com/results?search_query=terraform+AWS+EC2+auto+scaling+group+tutorial) (~25 min).
- [25m] Apply: Add EC2 Auto Scaling to your Terraform project: write `aws_launch_template`, `aws_autoscaling_group`, `aws_lb`, `aws_lb_target_group`, and `aws_lb_listener` resources using your VPC module as the network foundation. Run `terraform plan` and document the resource dependency chain. Push to [GitHub](https://github.com/).

### Day 6: Security Scanning with tfsec

- [10m] Prep: Review your Terraform project structure. Read [Terraform's security best practices guide](https://developer.hashicorp.com/terraform/tutorials/configuration-language/sensitive-variables).
- [25m] Learn: Watch [this "Terraform Security Best Practices" video](https://www.youtube.com/results?search_query=terraform+security+best+practices+tfsec+2024) (~25 min). Study: using AWS Secrets Manager data sources for credentials, S3 bucket versioning for state recovery, and tagging all resources for cost allocation.
- [25m] Apply: Install [tfsec](https://github.com/aquasecurity/tfsec): `brew install tfsec`. Run `tfsec .` against your project. Fix any HIGH severity findings. Document what was flagged and how you fixed it. Commit the fixed version to [GitHub](https://github.com/).

### Day 7: terraform-aws-foundation Repository Polish

- [10m] Prep: Review all Week 17 Terraform content.
- [20m] Learn: Watch [HashiCorp's "Terraform Cloud vs. Self-Managed" overview](https://www.youtube.com/results?search_query=terraform+cloud+vs+self+managed+hashicorp) (~20 min). Understand how teams collaborate on Terraform at scale.
- [30m] Apply: Polish your `terraform-aws-foundation` [GitHub](https://github.com/) repo: organize as `modules/` (vpc, security-groups, ec2, rds), `environments/dev/`, `environments/prod/`. Write a `README.md` with an architecture diagram (from [draw.io](https://app.diagrams.net/)) and usage instructions a new engineer could follow with zero hand-holding. Post the repo link on [LinkedIn](https://www.linkedin.com/).

## Week 18: Docker — Containerization Fundamentals

Resources: [Docker Desktop](https://www.docker.com/products/docker-desktop/) | [TechWorld with Nana Docker Series](https://www.youtube.com/watch?v=3c-iBn73dDE)

### Day 1: Your First Container

- [10m] Prep: Install [Docker Desktop](https://www.docker.com/products/docker-desktop/). Watch [Docker's official "What is Docker" 2-minute video](https://www.youtube.com/watch?v=Gjnup-PuquQ).
- [25m] Learn: Watch [TechWorld with Nana's "Docker Tutorial for Beginners" — first 30 minutes](https://www.youtube.com/watch?v=3c-iBn73dDE). Study: containers vs. VMs, Docker images vs. containers, [Docker Hub](https://hub.docker.com/), and the build → push → pull → run lifecycle.
- [25m] Apply: Run `docker run hello-world`. Then `docker run -d -p 8080:80 nginx` and visit `http://localhost:8080`. Run `docker ps`, `docker stop <id>`, and `docker images`. Document every command and its output in a new `README.md` in your [GitHub](https://github.com/) Flask app repo.

### Day 2: Writing a Dockerfile

- [10m] Prep: Review Docker commands: `run`, `ps`, `stop`, `images`, `pull`, `rm`. Read [Docker's "Dockerfile reference"](https://docs.docker.com/engine/reference/builder/).
- [25m] Learn: Watch [TechWorld with Nana's "Docker Tutorial" — Dockerfile section](https://www.youtube.com/watch?v=3c-iBn73dDE). Study: `FROM`, `RUN`, `COPY`, `WORKDIR`, `EXPOSE`, `ENV`, `CMD`, `ENTRYPOINT`, and multi-stage builds.
- [25m] Apply: Write a Dockerfile for a Python Flask app: `FROM python:3.12-slim`, add a non-root user, install dependencies with `--no-cache-dir`, copy app.py, expose port 5000, set `CMD ["python", "app.py"]`. Build: `docker build -t my-flask-app:v1 .`. Run and verify at `http://localhost:5000`. Commit the Dockerfile to [GitHub](https://github.com/).

### Day 3: Docker Compose for Local Development

- [10m] Prep: Review Dockerfile instructions. Read [Docker's "Layers and caching" guide](https://docs.docker.com/build/guide/layers/).
- [25m] Learn: Watch [TechWorld with Nana's "Docker Compose" section](https://www.youtube.com/watch?v=3c-iBn73dDE). Study: services, networks, volumes, environment variables, and `depends_on`.
- [25m] Apply: Write a `docker-compose.yml` running your Flask app alongside a Redis container. Set `depends_on: [redis]` and pass `REDIS_URL=redis://redis:6379` via environment. Run `docker compose up -d`. Verify with `docker compose ps`. View logs: `docker compose logs web`. Commit to [GitHub](https://github.com/).

### Day 4: Docker Security Best Practices

- [10m] Prep: Review Docker Compose. Read [Docker's "Security best practices" guide](https://docs.docker.com/develop/security-best-practices/).
- [25m] Learn: Watch [this "Docker Security Best Practices" video](https://www.youtube.com/results?search_query=docker+security+best+practices+2024+non+root) (Snyk or Docker official, ~25 min). Study: non-root containers, alpine or distroless base images, scanning with `docker scout`, and never using ENV variables for production secrets.
- [25m] Apply: Add a non-root user to your Dockerfile: `RUN adduser --disabled-password appuser && USER appuser`. Run `docker scout cves my-flask-app:v1` to scan for vulnerabilities. Document any CVEs found and how you'd fix them. Push the hardened Dockerfile to [GitHub](https://github.com/).

### Day 5: Pushing to Amazon ECR

- [10m] Prep: Review Docker security hardening. Read [Amazon ECR documentation](https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html).
- [25m] Learn: Watch [this "Pushing Docker Images to Amazon ECR" tutorial](https://www.youtube.com/results?search_query=push+docker+image+amazon+ECR+tutorial+2024) (AWS YouTube, ~25 min). Study: creating ECR repositories, authenticating with `aws ecr get-login-password`, tagging images, pushing, and ECR lifecycle policies.
- [25m] Apply: Push your Flask image to [ECR](https://console.aws.amazon.com/ecr/): (1) Create an ECR repository. (2) Authenticate: `aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account>.dkr.ecr.us-east-1.amazonaws.com`. (3) Tag. (4) Push. (5) Enable ECR image scanning. Document the complete workflow in your [GitHub](https://github.com/) README.

### Day 6: Deploy to ECS Fargate

- [10m] Prep: Review the ECR push workflow. Read [AWS ECS Fargate documentation](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html).
- [25m] Learn: Watch [this "Deploying a Docker Container to ECS Fargate" tutorial](https://www.youtube.com/results?search_query=docker+container+ECS+fargate+deployment+tutorial+AWS) (AWS YouTube or TechWorld with Nana, ~25 min). Study: ECS clusters, task definitions, services, and the Fargate launch type.
- [25m] Apply: Deploy your Flask app to [ECS Fargate](https://console.aws.amazon.com/ecs/): (1) Create a Fargate cluster. (2) Create a Task Definition pointing to your ECR image (0.25 vCPU, 512MB). (3) Create an ECS Service with 1 desired task in your custom VPC. (4) Verify your app is accessible at the task's public IP. Commit the Task Definition JSON to [GitHub](https://github.com/).

### Day 7: Containerization Guide README

- [10m] Prep: Review your complete container journey: code → Dockerfile → ECR → ECS Fargate.
- [20m] Learn: Watch [this "Containers vs. Serverless — When to Use What" video](https://www.youtube.com/results?search_query=containers+vs+serverless+AWS+when+to+use) (AWS re:Invent or similar, ~20 min). Note the architectural decision criteria.
- [30m] Apply: Write a comprehensive "Containerization Guide" `README.md` for your Flask app [GitHub](https://github.com/) repo. Show the complete journey: local Docker development → ECR push → ECS production deployment. Include architecture diagrams, commands, the security design (non-root user, ECR scanning, private VPC), and the cost model. This is a real portfolio showcase.

## Week 19: CI/CD Pipelines

Resources: [GitHub Actions Docs](https://docs.github.com/en/actions) | [AWS OIDC for GitHub](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services)

### Day 1: First GitHub Actions Workflow

- [10m] Prep: Read [GitHub Actions "Understanding GitHub Actions" overview](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions).
- [25m] Learn: Watch [TechWorld with Nana's "GitHub Actions for Beginners"](https://www.youtube.com/results?search_query=github+actions+for+beginners+TechWorld+with+Nana) (~25 min). Study: workflow YAML files in `.github/workflows/`, triggers (on push, on pull_request), jobs, steps, and runners.
- [25m] Apply: Create `.github/workflows/ci.yml` — a workflow that triggers on push, sets up Python 3.12, installs dependencies, and runs pytest. Push to [GitHub](https://github.com/) and watch the workflow execute under the Actions tab. Document the YAML and its output.

### Day 2: Automated Docker Build and ECR Push Pipeline

- [10m] Prep: Review GitHub Actions workflow structure. Read [GitHub's "Encrypted secrets" documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets).
- [25m] Learn: Watch [this "GitHub Actions Deploy to AWS ECS" tutorial](https://www.youtube.com/results?search_query=github+actions+deploy+AWS+ECS+tutorial+2024) (~25 min). Study the full pattern: build Docker image → push to ECR → update ECS Service.
- [25m] Apply: Add AWS credentials to [GitHub Secrets](https://github.com/settings/tokens) (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`). Extend your workflow with a `deploy` job that only runs on `main`, logs into ECR, builds the image tagged with `$GITHUB_SHA`, and pushes to ECR. Commit and watch the pipeline execute.

### Day 3: Credential-Free Auth with OIDC {featured}

- [10m] Prep: Review your CI/CD pipeline. Read [GitHub's "OIDC with AWS" documentation](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services).
- [25m] Learn: Watch [this "GitHub Actions OIDC with AWS" tutorial](https://www.youtube.com/results?search_query=github+actions+OIDC+AWS+no+credentials+2024) (~25 min). Study: IAM Identity Provider setup for `token.actions.githubusercontent.com`, the trust policy for GitHub, and the `role-to-assume` parameter.
- [25m] Apply: Upgrade your pipeline to OIDC auth: (1) Create an IAM Identity Provider in [AWS IAM Console](https://console.aws.amazon.com/iam/) for GitHub. (2) Create an IAM role with the GitHub trust policy and ECR/ECS permissions. (3) Update your workflow to use `role-to-assume`. (4) Delete the old secrets from GitHub. Test the pipeline. Document this — it demonstrates senior-level security thinking.

### Day 4: Deployment Strategies Documentation

- [10m] Prep: Review OIDC authentication. Read [AWS's "Blue/Green Deployments on AWS" whitepaper summary](https://docs.aws.amazon.com/whitepapers/latest/blue-green-deployments/welcome.html).
- [25m] Learn: Watch [this "Deployment Strategies Explained" video](https://www.youtube.com/results?search_query=deployment+strategies+blue+green+canary+rolling+explained+2024) (~25 min). Study all 4: Recreate, Rolling, Blue/Green, and Canary.
- [25m] Apply: Create `/architecture/deployment-strategies.md` on [GitHub](https://github.com/) — for each strategy, document: how it works, zero-downtime capability, rollback speed, cost, and best use case. Add a `PIPELINE.md` to your Flask repo documenting the pipeline architecture, OIDC security model, and how you would extend it to support blue/green deployments.

### Day 5: GitOps Concepts

- [10m] Prep: Review deployment strategies. Read [Weaveworks' "What is GitOps" guide](https://www.weave.works/technologies/gitops/).
- [25m] Learn: Watch [this "GitOps Explained" video](https://www.youtube.com/results?search_query=gitops+explained+argocd+2024) (CNCF YouTube or Weaveworks, ~25 min). Study the GitOps principles and how ArgoCD watches a Git repo to reconcile cluster state.
- [25m] Apply: In your SAA notes repo, write a `/architecture/gitops-vs-cicd.md` comparison file: GitOps (pull-based, Git as source of truth, ArgoCD) vs. traditional CI/CD (push-based, GitHub Actions). Document: the operational differences, security implications, and when to choose each. Commit to [GitHub](https://github.com/).

### Day 6: Kubernetes Introduction

- [10m] Prep: Review GitOps concepts. Read [Kubernetes' official "What is Kubernetes" overview](https://kubernetes.io/docs/concepts/overview/).
- [25m] Learn: Watch [TechWorld with Nana's "Kubernetes in 5 Minutes"](https://www.youtube.com/watch?v=X48VuDVv0do) and then the first 15 minutes of her [full Kubernetes tutorial](https://www.youtube.com/watch?v=X48VuDVv0do). Study core objects: Pod, Deployment, Service, Ingress, ConfigMap, Secret.
- [25m] Apply: In your SAA notes, create `/compute/kubernetes_objects_reference.md`. For each of the 6 Kubernetes objects above, write: what it is, its YAML kind field, and a real-world use case. Example: "Deployment — Manages a set of identical Pod replicas. Kind: Deployment. Use case: Run 3 replicas of your Flask app, auto-restart on failure." Commit to [GitHub](https://github.com/).

### Day 7: Phase 5 Portfolio Update and LinkedIn Post

- [10m] Prep: Review all Phase 5 work so far: Terraform, Docker, CI/CD, GitOps concepts.
- [20m] Learn: Watch [this "Platform Engineering vs. DevOps" video](https://www.youtube.com/results?search_query=platform+engineering+vs+devops+2024+explained) (~20 min) to understand where the industry is heading.
- [30m] Apply: Update your master [GitHub](https://github.com/) portfolio README to list all Phase 5 work: Terraform VPC module, Docker/Docker Compose, GitHub Actions CI/CD pipeline with OIDC, and ECS Fargate deployment. Post a [LinkedIn](https://www.linkedin.com/) update: "Built end-to-end CI/CD pipeline: GitHub Actions → Docker → ECR → ECS Fargate with OIDC — no long-lived AWS credentials. Here's the repo: [GitHub link]."

## Week 20: Kubernetes Fundamentals

Resources: [minikube](https://minikube.sigs.k8s.io/) | [TechWorld with Nana K8s Series](https://www.youtube.com/watch?v=X48VuDVv0do) | [Kubernetes Docs](https://kubernetes.io/docs/home/)

### Day 1: Your First Kubernetes Deployment

- [10m] Prep: Install [kubectl](https://kubernetes.io/docs/tasks/tools/) and [minikube](https://minikube.sigs.k8s.io/docs/start/). Start minikube: `minikube start`.
- [25m] Learn: Watch [TechWorld with Nana's "Kubernetes Tutorial for Beginners" — first 30 minutes](https://www.youtube.com/watch?v=X48VuDVv0do). Study: Pod, ReplicaSet, Deployment, Service (ClusterIP, NodePort, LoadBalancer), Namespace, and key `kubectl` commands.
- [25m] Apply: Deploy your Flask app: `kubectl create deployment flask-app --image=<your-ecr-image>`. Expose it: `kubectl expose deployment flask-app --port=5000 --type=NodePort`. Access: `minikube service flask-app`. Run `kubectl describe pod <pod-name>` and document the Events section in your [GitHub](https://github.com/) Kubernetes folder.

### Day 2: Kubernetes Deployment YAML

- [10m] Prep: Review kubectl commands: `get`, `describe`, `logs`, `exec`, `apply`, `delete`. Read [Kubernetes Deployment documentation](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/).
- [25m] Learn: Watch [TechWorld with Nana's "Kubernetes YAML configuration" section](https://www.youtube.com/watch?v=X48VuDVv0do). Study: Deployment YAML structure (apiVersion, kind, metadata, spec, selector, template), Service YAML, ConfigMap, and Secret.
- [25m] Apply: Write a `deployment.yaml` for your Flask app: 3 replicas, `matchLabels` selector, `containerPort: 5000`, and resource requests/limits (`cpu: "100m"/"500m"`, `memory: "128Mi"/"256Mi"`). Apply: `kubectl apply -f deployment.yaml`. Verify 3 pods running. Commit to [GitHub](https://github.com/).

### Day 3: Liveness and Readiness Probes

- [10m] Prep: Review Kubernetes Deployment YAML. Read [Kubernetes "Configure Liveness and Readiness Probes" documentation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/).
- [25m] Learn: Watch [TechWorld with Nana's "Kubernetes Services and Ingress" section](https://www.youtube.com/watch?v=X48VuDVv0do). Study: ClusterIP, NodePort, LoadBalancer, and Ingress (Layer 7 routing with a single external IP).
- [25m] Apply: Add probes to your Deployment YAML: `livenessProbe` hitting `/health` on port 5000 every 10 seconds, and `readinessProbe` with a 5-second interval. Add a `/health` endpoint to your Flask app returning HTTP 200. Redeploy and watch: `kubectl get pods -w`. Document the probe behavior. Commit to [GitHub](https://github.com/).

### Day 4: EKS vs. ECS Decision Guide

- [10m] Prep: Review probes. Read [AWS's "EKS vs. ECS" comparison page](https://aws.amazon.com/blogs/containers/amazon-ecs-vs-amazon-eks-making-sense-of-aws-container-services/).
- [25m] Learn: Watch [this "AWS EKS Introduction" video](https://www.youtube.com/results?search_query=AWS+EKS+elastic+kubernetes+service+introduction+2024) (AWS YouTube, ~25 min). Study: EKS managed node groups, Fargate profiles for serverless pods, EKS Add-ons, and IAM Roles for Service Accounts (IRSA).
- [25m] Apply: Create `/compute/eks-vs-ecs-decision-guide.md` in your [GitHub](https://github.com/) portfolio. Document: operational overhead, cost model, workload fit, team expertise requirements, and migration path. Example: "EKS: better when your team has Kubernetes expertise or needs multi-cloud portability. ECS Fargate: better when you want AWS-native simplicity without managing a control plane." Commit.

### Day 5: Helm Package Manager

- [10m] Prep: Review the EKS vs. ECS guide. Read [Helm's "What is Helm?" documentation](https://helm.sh/docs/).
- [25m] Learn: Watch [TechWorld with Nana's "Helm for Beginners" tutorial](https://www.youtube.com/results?search_query=helm+kubernetes+beginners+TechWorld+Nana) (~25 min). Study: Helm charts, values.yaml, `helm install`, `helm upgrade`, `helm rollback`, and [Artifact Hub](https://artifacthub.io/) for pre-built charts.
- [25m] Apply: Install Helm: `brew install helm`. Deploy nginx-ingress-controller on minikube: `helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx && helm install ingress-nginx ingress-nginx/ingress-nginx`. Verify: `kubectl get pods -n ingress-nginx`. Create an Ingress resource for your Flask app and commit the Ingress YAML to [GitHub](https://github.com/).

### Day 6: Kubernetes Security with Network Policies

- [10m] Prep: Review Kubernetes and Helm. Read [Kubernetes "Network Policies" documentation](https://kubernetes.io/docs/concepts/services-networking/network-policies/).
- [25m] Learn: Watch [this "Kubernetes Security Best Practices" video](https://www.youtube.com/results?search_query=kubernetes+security+best+practices+RBAC+network+policies+2024) (Aqua Security or CKS prep, ~25 min). Study: RBAC, Namespace isolation, Network Policies, Pod Security Standards, and External Secrets Operator.
- [25m] Apply: Write a NetworkPolicy restricting traffic to your Flask pods — only allowing traffic from the Ingress controller and denying all other ingress. Apply to minikube and test. Document the NetworkPolicy YAML and explain the security model — why this is the Kubernetes equivalent of Security Group chaining. Commit to [GitHub](https://github.com/).

### Day 7: Kubernetes Portfolio Update

- [10m] Prep: Review all Week 20 Kubernetes content.
- [20m] Learn: Watch [this "The Future of Platform Engineering" CNCF talk](https://www.youtube.com/results?search_query=CNCF+platform+engineering+2024) (free on YouTube, ~20 min). Understand how large organizations abstract Kubernetes complexity for developers.
- [30m] Apply: Update your [GitHub](https://github.com/) portfolio's `kubernetes/` folder with all artifacts from this week: Deployment YAML, Service YAML, Ingress YAML, NetworkPolicy, and a `README.md` explaining local minikube deployment and production EKS deployment steps. Post on [LinkedIn](https://www.linkedin.com/): "Deploying containerized applications to Kubernetes this week — here's the NetworkPolicy I wrote to restrict Pod-to-Pod traffic without a bastion host: [GitHub link]."

## Week 21: Python Automation and Phase 5 Capstone {featured}

Resources: [Boto3 Docs](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html) | [AWS Step Functions](https://aws.amazon.com/step-functions/)

### Day 1: Boto3 Introduction and S3 Compliance Checker

- [10m] Prep: Read [Boto3 "Quickstart" documentation](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html). Install it: `pip install boto3`.
- [25m] Learn: Watch [this "Boto3 Tutorial for Beginners" video](https://www.youtube.com/results?search_query=boto3+tutorial+for+beginners+python+AWS+2024) (Tech With Tim or similar, ~25 min). Study: session creation, client vs. resource API, pagination, `ClientError` handling, and using IAM roles instead of access keys.
- [25m] Apply: Write `/automation/s3_compliance_check.py` — a Python script that: (1) Lists all S3 buckets. (2) Checks if versioning is enabled on each. (3) Prints `COMPLIANT: my-bucket (versioning enabled)` or `NON-COMPLIANT: other-bucket (versioning disabled)`. Run it locally. Commit to [GitHub](https://github.com/).

### Day 2: Boto3 EC2 Automation — Inventory Script

- [10m] Prep: Review Boto3 basics. Read [AWS Boto3 EC2 documentation](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/ec2.html).
- [25m] Learn: Watch [this "Boto3 EC2 Automation" tutorial](https://www.youtube.com/results?search_query=boto3+EC2+automation+python+tutorial+2024) (~25 min). Study: listing EC2 instances, starting/stopping instances by tag, and filtering resources with the `Filters` parameter.
- [25m] Apply: Write `/automation/ec2_inventory_report.py` — a script that: (1) Describes all EC2 instances across all regions. (2) Generates a CSV report: instance ID, type, state, region, launch time, owner tag, cost center tag. (3) Saves the report to S3. Commit to [GitHub](https://github.com/).

### Day 3: Lambda Automation — EC2 Cost Savings

- [10m] Prep: Review the EC2 inventory script. Read [AWS EventBridge Scheduler documentation](https://docs.aws.amazon.com/scheduler/latest/UserGuide/what-is-scheduler.html).
- [25m] Learn: Watch [this "AWS Lambda Python Automation" video](https://www.youtube.com/results?search_query=AWS+lambda+python+automation+EC2+stop+start+2024) (~25 min) covering Lambda-triggered EC2 management.
- [25m] Apply: Write a Python Lambda function that runs on an [EventBridge](https://console.aws.amazon.com/events/) schedule (6 PM UTC daily) and stops all EC2 instances tagged `Environment=dev`. Deploy via the [Lambda Console](https://console.aws.amazon.com/lambda/). Document: the Lambda code, the IAM role permissions required, and the EventBridge rule configuration. Commit to [GitHub](https://github.com/).

### Day 4: Step Functions Orchestration Design

- [10m] Prep: Review your EC2 automation Lambda. Read [AWS Step Functions "What is" documentation](https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html).
- [25m] Learn: Watch [this "AWS Step Functions Tutorial" video](https://www.youtube.com/results?search_query=AWS+step+functions+tutorial+2024+lambda+orchestration) (AWS YouTube, ~25 min). Study: orchestrating Lambda functions, the ASL definition language, and parallel and choice states.
- [25m] Apply: Design a Step Functions image-processing pipeline in [draw.io](https://app.diagrams.net/): S3 upload → Lambda (validate) → If valid: 3 Lambdas in parallel (resize, watermark, thumbnail) → S3 outputs → SNS notification. Draw the state machine diagram and write the ASL JSON for the parallel state. Commit to [GitHub](https://github.com/).

### Day 5: AWS Config Custom Compliance Rule

- [10m] Prep: Review Step Functions. Read [AWS Config "Custom Rules with Lambda" documentation](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules_lambda-functions.html).
- [25m] Learn: Watch [this "AWS Config Custom Rules with Lambda" tutorial](https://www.youtube.com/results?search_query=AWS+config+custom+rule+lambda+python+tutorial) (AWS YouTube, ~25 min). Understand how custom Config Rules use Lambda to evaluate resource compliance.
- [25m] Apply: Write `/automation/config-cloudtrail-check/lambda_function.py` — a custom AWS Config Rule Lambda that checks: "Is CloudTrail enabled in every region?" If not, marks the account as NON_COMPLIANT. Document the function, the required IAM permissions, and when you would use it. Commit to [GitHub](https://github.com/).

### Day 6: SSM Session Manager — No Bastion Hosts

- [10m] Prep: Review your automation scripts. Read [AWS Systems Manager "Session Manager" documentation](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html).
- [25m] Learn: Watch [this "AWS Systems Manager for Beginners" tutorial](https://www.youtube.com/results?search_query=AWS+systems+manager+session+manager+tutorial+2024) (AWS YouTube, ~25 min). Study: SSM Session Manager (replaces Bastion Hosts), SSM Run Command, SSM Parameter Store, and Patch Manager.
- [25m] Apply: Use [SSM Session Manager](https://console.aws.amazon.com/systems-manager/) to connect to your EC2 instance: (1) Attach `AmazonSSMManagedInstanceCore` to the instance's IAM role. (2) In Session Manager, start a session — you have a terminal with zero open ports. Add to your [GitHub](https://github.com/) portfolio: "Eliminated Bastion Host requirement using SSM Session Manager — reduced attack surface with zero open inbound ports."

### Day 7: Phase 5 Capstone

- [10m] Prep: Review all Phase 5 material. You are now at a Cloud/DevOps Engineer skill level.
- [20m] Learn: Watch [this "What Makes Someone a Cloud Architect" video](https://www.youtube.com/results?search_query=what+makes+a+cloud+architect+skills+career) (~20 min). Note the differentiators: design thinking, stakeholder communication, breadth of knowledge, and business context.
- [30m] Apply: Create a `cloud-devops-portfolio` [GitHub](https://github.com/) repo containing all Phase 5 work: Terraform VPC module, Docker/Docker Compose files, GitHub Actions CI/CD pipeline (OIDC), ECS Fargate deployment, Kubernetes YAML files, Python Boto3 automation scripts, Step Functions design, and SSM setup guide. Write a 500-word `README.md` explaining the complete DevOps pipeline: code commit → automated testing → Docker build → ECR push → ECS Fargate deployment, with security and cost model explained. Post on [LinkedIn](https://www.linkedin.com/).

# Phase 6: Cloud Architect Mastery | Weeks 22-28 | red

*Portfolio artifact: A complete Enterprise Cloud Architecture Design document — the type of deliverable Cloud Architects produce for clients.*

## Week 22: Advanced AWS Architecture and The Professional Mindset {open}

Resources: [AWS Whitepapers](https://aws.amazon.com/whitepapers/) | [Stephane Maarek SAP Course](https://www.udemy.com/course/aws-certified-solutions-architect-professional/) | [AWS Well-Architected Tool](https://console.aws.amazon.com/wellarchitected/)

### Day 1: SAP Course Introduction and Whitepaper Study

- [10m] Prep: Research the [AWS SAP-C02 exam guide](https://aws.amazon.com/certification/certified-solutions-architect-professional/). Download the [official exam guide PDF](https://d1.awsstatic.com/training-and-certification/docs-sa-pro/AWS-Certified-Solutions-Architect-Professional_Exam-Guide.pdf).
- [25m] Learn: Watch the first 30 minutes of [Maarek's SAP course](https://www.udemy.com/course/aws-certified-solutions-architect-professional/) (~$15 on Udemy sale). Focus on exam strategy and what distinguishes SAA from SAP-level thinking.
- [25m] Apply: Read the executive summaries of 3 AWS whitepapers: ["AWS Well-Architected Framework"](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html), ["Microservices on AWS"](https://docs.aws.amazon.com/whitepapers/latest/microservices-on-aws/microservices-on-aws.html), and ["Building a Scalable and Reliable Two-Tier Application"](https://aws.amazon.com/whitepapers/). Start `/architecture/aws-whitepaper-notes.md` and document 3 key insights from each paper. Commit to [GitHub](https://github.com/).

### Day 2: Enterprise Landing Zone Design

- [10m] Prep: Review the SAP exam domains. Read [AWS Control Tower documentation](https://aws.amazon.com/controltower/).
- [25m] Learn: Watch [Maarek's SAP — Organizations and Multi-Account Architecture](https://www.udemy.com/course/aws-certified-solutions-architect-professional/). Study: SCP patterns, Control Tower, Account Factory for Terraform, Landing Zone patterns, and tagging strategies for cost allocation.
- [25m] Apply: Design a complete "Enterprise AWS Landing Zone" for a 500-person SaaS company in [draw.io](https://app.diagrams.net/): Management Account OU structure (Security, Infrastructure, Sandbox, Workloads OUs), SCPs per OU, Control Tower guardrails, centralized logging account, centralized networking account (Transit Gateway hub), and shared services account. Commit to [GitHub](https://github.com/).

### Day 3: IAM Federation and Identity Architecture

- [10m] Prep: Review the Enterprise Landing Zone. Read [AWS IAM Identity Center documentation](https://aws.amazon.com/iam/identity-center/).
- [25m] Learn: Watch [Maarek's SAP — Identity Federation and SSO](https://www.udemy.com/course/aws-certified-solutions-architect-professional/). Study: AWS IAM Identity Center, SAML 2.0 federation with Active Directory, cross-account access patterns, and permission sets.
- [25m] Apply: Write an "Identity and Access Management Architecture" document: (1) How employees authenticate via SAML → IAM Identity Center. (2) How developers get Console access via permission sets. (3) How applications access services (IAM roles only). (4) How contractors get time-bounded access. (5) How break-glass privileged access is managed. This is what you'd present to a CISO. Commit to [GitHub](https://github.com/).

### Day 4: Enterprise Networking Topology

- [10m] Prep: Review the IAM federation architecture. Read [AWS Directory Service documentation](https://aws.amazon.com/directoryservice/).
- [25m] Learn: Watch [Maarek's SAP — Advanced Networking](https://www.udemy.com/course/aws-certified-solutions-architect-professional/). Study: Transit Gateway inter-region peering, Centralized Egress Architecture, Centralized Inspection with Network Firewall, and Shared VPCs via Resource Access Manager.
- [25m] Apply: Extend your Enterprise Landing Zone diagram in [draw.io](https://app.diagrams.net/) with the full networking architecture: Networking account as TGW hub, spoke VPCs in each workload account, centralized Internet Egress through a single NAT Gateway account, [AWS Network Firewall](https://aws.amazon.com/network-firewall/) in the inspection account, and on-premises Direct Connect to TGW. Write the architecture rationale document alongside. Commit both to [GitHub](https://github.com/).

### Day 5: Multi-Region Disaster Recovery Architecture

- [10m] Prep: Review the enterprise networking topology. Read [AWS's "Disaster Recovery on AWS" whitepaper](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-workloads-on-aws.html).
- [25m] Learn: Watch [Maarek's SAP — Disaster Recovery at Scale](https://www.udemy.com/course/aws-certified-solutions-architect-professional/). Study: multi-region active/active vs. active/passive, Route 53 Application Recovery Controller, AWS Backup, and DR testing automation.
- [25m] Apply: Design a "Multi-Region DR Architecture" for a fintech app with RPO = 15 min and RTO = 30 min in [draw.io](https://app.diagrams.net/): warm standby in secondary region, [Aurora Global Database](https://aws.amazon.com/rds/aurora/global-database/), [DynamoDB Global Tables](https://aws.amazon.com/dynamodb/global-tables/), S3 CRR, CloudFront with failover origin, Route 53 health check-based failover, and a weekly automated DR test pipeline. Write the architecture with RTO/RPO justification. Commit to [GitHub](https://github.com/).

### Day 6: DR Runbook

- [10m] Prep: Review the DR architecture. Read [AWS Resilience Hub documentation](https://aws.amazon.com/resilience-hub/).
- [25m] Learn: Watch [this AWS re:Invent "Chaos Engineering on AWS" talk](https://www.youtube.com/results?search_query=AWS+reInvent+chaos+engineering+fault+injection+simulator) (free on YouTube, ~25 min). Study [AWS FIS](https://aws.amazon.com/fis/) and how chaos testing validates DR.
- [25m] Apply: Write a "DR Runbook" for your fintech architecture. Include: trigger criteria (CloudWatch alarm on primary region health), step-by-step failover procedure (Route 53 update, Aurora failover, application verification), stakeholder communication plan (who to notify, what to say), and failback procedure. Format it as an incident response playbook an on-call engineer could execute at 3 AM under pressure. Commit to [GitHub](https://github.com/).

### Day 7: Enterprise Landing Zone Portfolio Assembly

- [10m] Prep: Review all Week 22 content.
- [20m] Learn: Watch [this "How Cloud Architects Collaborate with Engineering Teams" video](https://www.youtube.com/results?search_query=cloud+architect+collaboration+engineering+teams+role) (~20 min). Note the cultural and communication dimensions.
- [30m] Apply: Create `/architecture/enterprise-landing-zone/` in your [GitHub](https://github.com/) portfolio with: multi-account diagram, networking topology diagram, IAM architecture document, and DR runbook. Write a top-level README presenting this as a reference architecture for a fictitious enterprise client. Post on [LinkedIn](https://www.linkedin.com/): "Documenting enterprise-grade AWS Landing Zone architecture as I progress toward Cloud Architect. Here's the multi-account structure, centralized networking, and DR design: [GitHub link]."

## Week 23: System Design Thinking

Resources: [System Design Primer](https://github.com/donnemartin/system-design-primer) | [Gaurav Sen YouTube](https://www.youtube.com/@gkcs) | [ByteByteGo YouTube](https://www.youtube.com/@ByteByteGo)

### Day 1: URL Shortener System Design

- [10m] Prep: Bookmark the [System Design Primer on GitHub](https://github.com/donnemartin/system-design-primer). Read [Cloudflare's "CAP Theorem explained"](https://www.cloudflare.com/learning/ddos/glossary/cap-theorem/).
- [25m] Learn: Watch [Gaurav Sen's "System Design Interview Fundamentals" video](https://www.youtube.com/watch?v=0163cssUxLA). Study: horizontal vs. vertical scaling, CAP theorem, stateless vs. stateful services, and load balancing algorithms.
- [25m] Apply: Design a URL shortener (like bit.ly) in 25 minutes. Framework: (1) Clarify requirements. (2) Design the API. (3) Design the data model (DynamoDB: shortCode → longURL). (4) Design the system (API Gateway → Lambda → DynamoDB, CloudFront for redirect caching). (5) Address reliability. Document your design in [draw.io](https://app.diagrams.net/) and commit to [GitHub](https://github.com/).

### Day 2: Rate Limiting Architecture

- [10m] Prep: Review your URL shortener design. What would you change? Read [AWS API Gateway throttling documentation](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html).
- [25m] Learn: Watch [Gaurav Sen's "Design a Rate Limiter" video](https://www.youtube.com/watch?v=FU4WlwfS3G0). Study the token bucket algorithm, Redis for distributed rate limiting, and accuracy vs. performance trade-offs.
- [25m] Apply: Design a rate-limiting architecture for an API serving 10M requests/day: API Gateway with usage plans (coarse-grained), ElastiCache Redis with token bucket (fine-grained per-user), Lambda Authorizer for validation, and CloudWatch metrics for violations. Draw in [draw.io](https://app.diagrams.net/), write the component justification, and commit to [GitHub](https://github.com/).

### Day 3: Black Friday Order Processing at Scale

- [10m] Prep: Review the rate limiting design. Read [AWS's "Consistent Hashing" primer](https://aws.amazon.com/builders-library/reliability-and-constant-work/).
- [25m] Learn: Watch [Alex Xu's "Design Amazon" system design video](https://www.youtube.com/watch?v=EpASu_1dUdE) (ByteByteGo, ~25 min). Study: event-driven architecture for order processing, idempotency keys, and DynamoDB deduplication.
- [25m] Apply: Design an event-driven order processing system handling 1M orders/hour (Black Friday scale): API Gateway → Lambda → SQS (order intake) → Lambda (idempotent validation with DynamoDB deduplication) → SNS fan-out (inventory, payment, fulfillment in parallel) → Step Functions for complex fulfillment. Annotate throughput at each stage. Commit to [GitHub](https://github.com/).

### Day 4: Streaming Platform Microservices Design

- [10m] Prep: Review event-driven patterns. Read [AWS's "Saga Pattern" implementation guide](https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/implement-the-serverless-saga-pattern-by-using-aws-step-functions.html).
- [25m] Learn: Watch [this "Microservices Design Patterns" video](https://www.youtube.com/results?search_query=microservices+design+patterns+circuit+breaker+saga+CQRS+2024) (InfoQ or AWS re:Invent, ~25 min). Study: API Gateway pattern, Circuit Breaker, Event Sourcing with CQRS.
- [25m] Apply: Design a microservices architecture for a streaming video platform at 10% Netflix scale in [draw.io](https://app.diagrams.net/): User Service (RDS), Content Service (DynamoDB), Recommendation Service (SageMaker endpoint), Streaming Service (CloudFront + S3), Transcoding Service (Step Functions + MediaConvert), Search Service (OpenSearch), API Gateway as the edge. Define inter-service communication patterns. Commit to [GitHub](https://github.com/).

### Day 5: FinOps Architecture Review of Streaming Platform

- [10m] Prep: Review the streaming platform design. Open [calculator.aws](https://calculator.aws/) in your browser.
- [25m] Learn: Watch [this AWS re:Invent "Designing for Cost Optimization at Scale" talk](https://www.youtube.com/results?search_query=AWS+reInvent+cost+optimization+architecture+2023+2024) (free on YouTube, ~25 min). Note how architectural choices drive cost at scale.
- [25m] Apply: Perform a "Cost Architecture Review" of your streaming platform. Estimate monthly cost for each major component using [calculator.aws](https://calculator.aws/). Identify the top 3 cost drivers. Propose an optimization for each. Example: "Replace always-on EC2 for transcoding with Step Functions + EC2 Spot — saves 90% on batch compute." Commit the optimization recommendations to [GitHub](https://github.com/).

### Day 6: FinOps Strategy Document

- [10m] Prep: Review FinOps concepts. Read [FinOps Foundation's "What is FinOps" overview](https://www.finops.org/introduction/what-is-finops/).
- [25m] Learn: Watch [this FinOps Foundation video on "Cloud Cost Management Principles"](https://www.youtube.com/c/FinOpsFoundation) (finops.org YouTube, ~25 min). Study: the FinOps lifecycle (Inform → Optimize → Operate), chargeback vs. showback, and unit economics.
- [25m] Apply: Write a "FinOps Strategy Document" for a 100-engineer startup spending $200K/month on AWS: (1) Mandatory tagging strategy (Environment, Team, CostCenter, Project). (2) Per-team budget alerting hierarchy. (3) Monthly cost review cadence. (4) Savings plan strategy (1-year Compute Savings Plan for baseline, Spot for burst). (5) Unit economics target: cost per active user < $2/month. Commit to [GitHub](https://github.com/).

### Day 7: Dual-Audience Architecture Communication

- [10m] Prep: Review all Week 23 system design work.
- [20m] Learn: Watch [this "How to Present Architecture to Executives" talk](https://www.youtube.com/results?search_query=how+to+present+architecture+to+executives+non+technical+stakeholders) (InfoQ or Thoughtworks YouTube, ~20 min). Note the BLUF (Bottom Line Up Front) communication approach.
- [30m] Apply: For each of your 4 system designs this week (URL shortener, rate limiter, order processing, streaming platform), write 2 audience-specific summaries: (1) A 2-sentence executive summary with zero technical jargon, focused on business value. (2) 2–3 technical sentences for an engineering audience. Practicing these two modes of explanation is how you become an architect who is effective with both the C-suite and engineers. Commit to [GitHub](https://github.com/).

## Week 24: Security Architecture

Resources: [AWS Security Reference Architecture](https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/welcome.html) | [NIST SP 800-207](https://csrc.nist.gov/publications/detail/sp/800-207/final)

### Day 1: Centralized Security Architecture

- [10m] Prep: Read the [AWS Security Reference Architecture overview](https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/welcome.html) — AWS's recommended security blueprint for multi-account environments.
- [25m] Learn: Watch [Maarek's SAP — Security at Scale](https://www.udemy.com/course/aws-certified-solutions-architect-professional/). Study: Organization-wide CloudTrail, Security Hub delegated administrator, GuardDuty central management, IAM Access Analyzer, and Macie for S3 data classification.
- [25m] Apply: Design a "Centralized Security Architecture" for your Enterprise Landing Zone in [draw.io](https://app.diagrams.net/): Security account receives all CloudTrail logs, Security Hub aggregates findings across all accounts, GuardDuty in master-member configuration, Macie scans S3 buckets, and Security Event Response Runbook triggered by SNS. Commit to `/security/centralized-security-architecture.md` on [GitHub](https://github.com/).

### Day 2: Zero Trust Transition Plan

- [10m] Prep: Review the centralized security architecture. Read [NIST SP 800-207 "Zero Trust Architecture" summary](https://csrc.nist.gov/publications/detail/sp/800-207/final) — the 7 tenets of Zero Trust.
- [25m] Learn: Watch [this "Zero Trust on AWS" video](https://www.youtube.com/results?search_query=zero+trust+architecture+AWS+2024+verified+access) (AWS Security YouTube, ~25 min). Study: [AWS Verified Access](https://aws.amazon.com/verified-access/) (Zero Trust network access without VPN), [AWS Private CA](https://aws.amazon.com/private-ca/), and how mTLS enforces identity between microservices.
- [25m] Apply: Write a "Zero Trust Transition Plan" for a company on traditional VPN-based access. Phase 1 (months 1–3): IAM Identity Center. Phase 2 (months 4–6): AWS Verified Access. Phase 3 (months 7–9): mTLS between services. Phase 4 (months 10–12): Decommission VPN. Document benefits and risks mitigated at each phase. Commit to [GitHub](https://github.com/).

### Day 3: IAM Key Exposure Incident Playbook

- [10m] Prep: Review the Zero Trust plan. Read [AWS's "Incident Response Whitepaper"](https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/welcome.html).
- [25m] Learn: Watch [this "Incident Response in AWS" video](https://www.youtube.com/results?search_query=AWS+incident+response+security+2024) (AWS Security YouTube, ~25 min). Study the NIST Incident Response lifecycle and how AWS services support each phase.
- [25m] Apply: Write a "Cloud Incident Response Playbook" for: "An IAM access key has been publicly exposed in a GitHub repository." Steps: (1) Detection (GitHub token scanning or GuardDuty). (2) Containment (immediately deactivate the key: `aws iam update-access-key --status Inactive`). (3) Assessment (CloudTrail: what did the key do in the last 24 hours?). (4) Eradication (delete key, rotate credentials). (5) Recovery (verify no unauthorized resources). (6) Post-Incident (pre-commit hooks, mandatory secret scanning). Commit to [GitHub](https://github.com/).

### Day 4: Well-Architected Security Review

- [10m] Prep: Review the incident playbook. Read [AWS Security Hub "Finding types" documentation](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format-type-taxonomy.html).
- [25m] Learn: Watch [this "AWS Well-Architected — Security Pillar Deep Dive" video](https://www.youtube.com/results?search_query=AWS+well+architected+security+pillar+deep+dive+2024) (AWS YouTube, ~25 min). Study all 6 best practice areas: Identity, Detection, Infrastructure Protection, Data Protection, Incident Response, and Application Security.
- [25m] Apply: Conduct a Well-Architected Security Review of your three-tier CloudFormation app from Phase 4. For each of the 6 best practice areas, write: (1) What you did well. (2) What gaps exist. (3) What you would implement to close the gaps. Format it as a structured security review report. Commit to [GitHub](https://github.com/).

### Day 5: Data Classification and Encryption Policy

- [10m] Prep: Review the security review findings. Read [AWS KMS "Envelope encryption" documentation](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#enveloping).
- [25m] Learn: Watch [Maarek's SAP — Data Encryption Deep Dive](https://www.udemy.com/course/aws-certified-solutions-architect-professional/). Study: client-side vs. server-side encryption, KMS key hierarchy (CMK → Data Key via envelope encryption), TLS in transit, and [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/).
- [25m] Apply: Write a "Data Classification and Encryption Policy" for an enterprise. Define 4 tiers: (1) Public (no encryption required). (2) Internal (S3 SSE-S3). (3) Confidential (S3 SSE-KMS with CMK). (4) Restricted (S3 SSE-KMS with CMK + MFA delete policy + [S3 Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html)). Commit to [GitHub](https://github.com/).

### Day 6: SAP Practice Exam — Security and Governance Focus

- [10m] Prep: Review all Week 24 security content.
- [25m] Learn: Watch [Maarek's SAP course](https://www.udemy.com/course/aws-certified-solutions-architect-professional/) videos on any security or governance topics that still feel fuzzy.
- [25m] Apply: Take a [Tutorials Dojo SAP practice exam](https://tutorialsdojo.com/courses/aws-certified-solutions-architect-professional-sap-c02-practice-exams/) (full 75 questions, 180-minute timed mode). Focus on multi-account governance, security architecture, and cost optimization questions. Document your score and top 5 wrong answers with structured explanations.

### Day 7: Security Portfolio and LinkedIn Update

- [10m] Prep: Review SAP practice exam wrong answers. Note the most common pattern in questions you got wrong — is it organization-level architecture, service-level security, or DR planning?
- [20m] Learn: Watch [Maarek's SAP videos](https://www.udemy.com/course/aws-certified-solutions-architect-professional/) for your weakest area identified above.
- [30m] Apply: Add a complete `/security` section to your [GitHub](https://github.com/) portfolio: centralized security architecture, Zero Trust transition plan, IAM key incident playbook, Well-Architected Security Review, and data encryption policy. Post a [LinkedIn](https://www.linkedin.com/) update: "This week I documented a Zero Trust transition plan and cloud incident response playbook for a multi-account AWS environment. Here's the architecture: [GitHub link]."

## Week 25: Cloud Architecture Communication and Leadership

Resources: [ADR GitHub](https://adr.github.io/) | [AWS Well-Architected Tool](https://console.aws.amazon.com/wellarchitected/) | [The Pragmatic Engineer Newsletter](https://newsletter.pragmaticengineer.com/)

### Day 1: Architecture Decision Records

- [10m] Prep: Read [Michael Nygard's "Documenting Architecture Decisions" post](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) — the original ADR format.
- [25m] Learn: Watch [this "Architecture Decision Records Explained" video](https://www.youtube.com/results?search_query=architecture+decision+records+ADR+explained+2024) (InfoQ or Thoughtworks, ~25 min). Study the ADR template: Status → Context → Decision → Consequences.
- [25m] Apply: Write 3 ADRs for your enterprise architecture on [GitHub](https://github.com/): "ADR-001: Transit Gateway over VPC Peering for multi-VPC connectivity," "ADR-002: Aurora over RDS MySQL for primary database," "ADR-003: ECS Fargate over EKS for container orchestration." Each should be 1 page in the `/architecture/decisions/` folder.

### Day 2: AWS Well-Architected Tool Review

- [10m] Prep: Review the 3 ADRs from yesterday. Read [AWS Well-Architected Tool documentation](https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html).
- [25m] Learn: Watch [this "AWS Well-Architected Tool Walkthrough" video](https://www.youtube.com/results?search_query=AWS+well+architected+tool+walkthrough+2024) (AWS YouTube, ~25 min). Study how to run a formal review, create milestones, and generate improvement plan reports.
- [25m] Apply: In the [AWS Well-Architected Tool](https://console.aws.amazon.com/wellarchitected/), create a workload called "Enterprise Reference Architecture." Answer the Security and Reliability pillar questions based on your existing designs. Download the milestone report as PDF. Write a summary of findings and remediation plan in Markdown. Commit to [GitHub](https://github.com/).

### Day 3: Architecture Design Review Checklist

- [10m] Prep: Review the WAF Tool findings. Read [Martin Fowler's "Software Architecture Guide"](https://martinfowler.com/architecture/).
- [25m] Learn: Watch [this "Technical Mentorship and Engineering Excellence" talk](https://www.youtube.com/results?search_query=technical+mentorship+engineering+leadership+staff+engineer) (InfoQ or Engineering Manager channel, ~25 min). Note what separates individual contributors from architects.
- [25m] Apply: Write a "Cloud Architecture Design Review Checklist" on [GitHub](https://github.com/) — the questions a Cloud Architect asks before any design goes to production: (1) Have we tested failure of every dependency? (2) What is the backup and recovery strategy? (3) Are all secrets in Secrets Manager? (4) Have we estimated cost at 2x expected load? (5) Is every API endpoint rate-limited? (6) What is the on-call runbook for the top 3 expected failures? Commit.

### Day 4: Writing an RFC

- [10m] Prep: Read [Gergely Orosz's "A Practical Guide to RFCs"](https://newsletter.pragmaticengineer.com/p/software-engineering-rfc-and-design) from The Pragmatic Engineer.
- [25m] Learn: Watch [this "Writing Technical RFCs" video](https://www.youtube.com/results?search_query=writing+technical+RFC+software+engineering+2024) (~25 min). Study the RFC template: background, problem statement, proposed solution, alternatives considered, open questions.
- [25m] Apply: Write a fictional RFC: "RFC-001: Migrate Payment Service from EC2 to ECS Fargate." Include: Background (patching overhead, slow deployments), Problem (2-hour deployment time vs. 10-minute target), Proposed Solution (ECS Fargate + GitHub Actions CI/CD), Alternatives Considered (EKS, Lambda — and why rejected), Open Questions (database migration, rollout plan). Commit to [GitHub](https://github.com/).

### Day 5: Cloud Architect Value Proposition

- [10m] Prep: Review the RFC. Read [Will Larson's "Staff Engineer" overview](https://staffeng.com/guides/staff-archetypes) to understand how Cloud Architects and Staff Engineers overlap.
- [25m] Learn: Watch [this "A Day in the Life of a Cloud Architect" AWS re:Invent talk](https://www.youtube.com/results?search_query=AWS+reInvent+day+in+the+life+cloud+architect) (free on YouTube, ~25 min). Note the business problems being solved, not just the technology.
- [25m] Apply: Write your "Cloud Architect Value Proposition" — a 1-page document (not a resume) articulating: (1) The business problems you solve (cost, resilience, security, delivery speed). (2) The architectural approaches you use. (3) Three specific portfolio examples demonstrating this. Save to your personal files — this document informs your interview talking points and LinkedIn About section.

### Day 6: Whiteboard Interview Practice — Round 1

- [10m] Prep: Review your Cloud Architect Value Proposition. Read [this "System Design Interview Tips" article](https://www.educative.io/blog/how-to-system-design-interview).
- [25m] Learn: Watch [this "Cloud Architect Interview Questions and Answers" video](https://www.youtube.com/results?search_query=cloud+architect+interview+questions+answers+2024+AWS) (~25 min). Note the emphasis on trade-off reasoning.
- [25m] Apply: Practice these 3 whiteboard scenarios out loud (record yourself on your phone): (1) "We have a monolith serving 10K users. Design a microservices migration." (2) "Our AWS bill is $500K/month. Walk me through a 30% cost reduction approach." (3) "Our app goes down 3x per month due to database failures. Design a highly available architecture." Speaking your architectural reasoning aloud is a distinct skill from knowing the answer.

### Day 7: Full Portfolio Review and LinkedIn Milestone Post

- [10m] Prep: Review your entire [GitHub](https://github.com/) portfolio — you now have: IT Runbook, VPC architecture, CloudFormation stacks, SAA study notes, Terraform modules, CI/CD pipeline, Kubernetes configs, Python automation scripts, enterprise architecture, and security designs.
- [20m] Learn: Watch [this "Building a Personal Brand as a Cloud Architect" video](https://www.youtube.com/results?search_query=personal+brand+cloud+architect+linkedin+2024) (~20 min).
- [30m] Apply: Update your master [GitHub](https://github.com/) portfolio README to reflect the complete Phase 6 work. Write a [LinkedIn](https://www.linkedin.com/) article: "5 Architecture Patterns I Documented While Studying for My AWS SAP." Include one diagram from your enterprise architecture. Articles on LinkedIn get 5–10x more reach than plain posts — this is a high-leverage career action.

## Week 26: SAP Exam Preparation {featured}

Resources: [Tutorials Dojo SAP Practice Exams](https://tutorialsdojo.com/courses/aws-certified-solutions-architect-professional-sap-c02-practice-exams/) | [Maarek SAP Course](https://www.udemy.com/course/aws-certified-solutions-architect-professional/)

### Day 1: Migration Strategies Deep Dive

- [10m] Prep: Review SAP exam domains and your practice exam weak areas.
- [25m] Learn: Watch [Maarek's SAP — Migration Strategies Deep Dive](https://www.udemy.com/course/aws-certified-solutions-architect-professional/). Study: [AWS Migration Hub](https://aws.amazon.com/migration-hub/), [DMS](https://aws.amazon.com/dms/) (homogeneous vs. heterogeneous migrations), [DataSync](https://aws.amazon.com/datasync/) for large-scale data transfer, and [Snowball/Snowmobile](https://aws.amazon.com/snowball/) for petabyte-scale migration.
- [25m] Apply: Design a "Cloud Migration Plan" for a company with 50 on-premises servers, a 10TB Oracle database, 500TB of NAS file storage, and a 1 Gbps Direct Connect link. Include 5 phases: discovery, non-critical app rehost, Oracle to Aurora PostgreSQL via DMS, file storage to S3/EFS via DataSync, and decommission. Commit to [GitHub](https://github.com/).

### Day 2: Caching Strategies

- [10m] Prep: Review migration strategies. Read [AWS ElastiCache "Caching Strategies" documentation](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Strategies.html).
- [25m] Learn: Watch [Maarek's SAP — Caching Strategies](https://www.udemy.com/course/aws-certified-solutions-architect-professional/). Study: CloudFront TTL and invalidation, ElastiCache Redis patterns (lazy loading, write-through, session management), and [DAX for DynamoDB](https://aws.amazon.com/dynamodb/dax/).
- [25m] Apply: Take a [Tutorials Dojo SAP topic-specific quiz](https://tutorialsdojo.com/courses/aws-certified-solutions-architect-professional-sap-c02-practice-exams/) on "Caching and CDN." Score and review. Write a 1-page "Caching Architecture Decision Guide" in your GitHub portfolio. Commit.

### Day 3: SAP Full Practice Exam — Round 1

- [10m] Prep: Review your previous SAP practice exam scores. Know: the SAP exam is significantly harder than the SAA — it tests multi-constraint trade-offs, not recall.
- [20m] Learn: Watch [Maarek's SAP videos](https://www.udemy.com/course/aws-certified-solutions-architect-professional/) on your 2 weakest domains from previous practice exams.
- [30m] Apply: Take a full [Tutorials Dojo SAP practice exam](https://tutorialsdojo.com/courses/aws-certified-solutions-architect-professional-sap-c02-practice-exams/) (75 questions, 180-minute timed mode). For every wrong answer, write: "I chose [X] because I thought [Y]. The correct answer is [Z] because [reason]." Commit your analysis to [GitHub](https://github.com/).

### Day 4: SAP Targeted Remediation

- [10m] Prep: Review your wrong answers from yesterday's practice exam.
- [25m] Learn: Watch [Maarek's SAP course](https://www.udemy.com/course/aws-certified-solutions-architect-professional/) videos specifically for the 3 topics where you got the most questions wrong. Re-watch them — don't just skim.
- [25m] Apply: Take a [Tutorials Dojo domain-specific SAP quiz](https://tutorialsdojo.com/courses/aws-certified-solutions-architect-professional-sap-c02-practice-exams/) on your weakest domain. Score and review every question. Add insights to your SAP study notes on [GitHub](https://github.com/).

### Day 5: SAP Full Practice Exam — Round 2

- [10m] Prep: Review your rolling practice exam average. You should be approaching 75%+ to feel confident on the real exam.
- [20m] Learn: Watch [this "AWS SAP Exam Tips" video](https://www.youtube.com/results?search_query=AWS+solutions+architect+professional+exam+tips+2024) on YouTube (~20 min). Focus on how to approach multi-constraint scenario questions.
- [30m] Apply: Take a second full [Tutorials Dojo SAP timed practice exam](https://tutorialsdojo.com/courses/aws-certified-solutions-architect-professional-sap-c02-practice-exams/). Track your rolling average across all SAP exams. If averaging 78%+, schedule your exam at [Pearson VUE](https://home.pearsonvue.com/aws).

### Day 6: SAP Exam Cheat Sheet

- [10m] Prep: Review all SAP practice exam wrong answers this week.
- [25m] Learn: Watch [Maarek's SAP course](https://www.udemy.com/course/aws-certified-solutions-architect-professional/) on any topic still unclear. Prioritize organization-level architecture questions — these are the most common SAP question type.
- [25m] Apply: Create a "SAP Exam Cheat Sheet" — a 2-page Markdown file covering: key architectural decision patterns for the exam, the trade-off matrix (RTO/RPO vs. cost vs. complexity), and the most common wrong-answer traps. Publish it publicly on [GitHub](https://github.com/) — contributing study resources to the community builds your professional brand.

### Day 7: SAP Final Readiness Check

- [10m] Prep: Light review only. Rest is important before a certification exam.
- [20m] Learn: Review your SAA Quick-Reference Decision Guide from Week 15, updated for SAP-level complexity. Skim your SAP Exam Cheat Sheet one final time.
- [30m] Apply: Take one final full [Tutorials Dojo SAP timed practice exam](https://tutorialsdojo.com/courses/aws-certified-solutions-architect-professional-sap-c02-practice-exams/). If scoring 78%+, you are ready. Schedule at [Pearson VUE](https://home.pearsonvue.com/aws) if not already done. Target for real exam confidence: 80%+.

## Week 27: SAP Exam Week and Job Campaign

Resources: [LinkedIn Jobs](https://www.linkedin.com/jobs/) | [Levels.fyi](https://www.levels.fyi/) | [AWS User Groups](https://aws.amazon.com/developer/community/usergroups/) | [Meetup.com](https://www.meetup.com/)

### Day 1: SAP Final Exam Preparation

- [10m] Prep: Final SAP exam review — one last pass through the cheat sheet. Water, rest, confidence.
- [25m] Learn: Watch [this "How I Passed the AWS SAP" video](https://www.youtube.com/results?search_query=how+I+passed+AWS+solutions+architect+professional+2024) (search YouTube 2024). Note specific time management strategies for the 180-minute exam.
- [25m] Apply: Review your top architecture patterns in your IT Runbook. Practice explaining the "Hub-and-spoke Transit Gateway + centralized egress" pattern out loud in 90 seconds. This is likely to appear on the exam as a scenario.

### Day 2: SAP Exam Day

- [10m] Prep: Eat well, sleep well, arrive or log in early. This is the pinnacle cloud credential.
- [20m] Learn: Light skim of the SAP Cheat Sheet. Nothing new — just confidence building.
- [30m] Apply: **Take your AWS Solutions Architect Professional exam.** You are prepared.

### Day 3: SAP Certification Announcement

- [10m] Prep: Download your SAP badge from [Credly](https://www.credly.com/).
- [25m] Learn: Watch [this "How to Position Your AWS SAP Certification for a Cloud Architect Role" video](https://www.youtube.com/results?search_query=AWS+solutions+architect+professional+career+cloud+architect+role) (~25 min).
- [25m] Apply: Update [LinkedIn](https://www.linkedin.com/) immediately: add "AWS Certified Solutions Architect — Professional" to Certifications using your Credly badge. Update your headline: "AWS SAP | AWS SAA | AWS CCP | Cloud Architect | Enterprise Infrastructure." Write and publish a LinkedIn article: "My 28-Week Journey from IT Foundations to AWS SAP — Here's What I Built Along the Way." Include your key architecture diagrams and your GitHub portfolio link. This article will be your highest-performing career content.

### Day 4: Cloud Architect Job Application Research

- [10m] Prep: Read [this "What Do Cloud Architects Actually Do" breakdown](https://www.glassdoor.com/Career/cloud-architect-career_KO0,15.htm) on Glassdoor.
- [25m] Learn: Watch [this "Cloud Architect Salary and Career Path 2024" video](https://www.youtube.com/results?search_query=cloud+architect+salary+career+path+2024+AWS) (~25 min). Research market rates on [Levels.fyi](https://www.levels.fyi/), [Glassdoor](https://www.glassdoor.com/), and [Dice](https://www.dice.com/).
- [25m] Apply: On [LinkedIn Jobs](https://www.linkedin.com/jobs/), [Indeed](https://www.indeed.com/), and [Dice](https://www.dice.com/), search for "Cloud Architect," "Senior Cloud Engineer," "Principal Cloud Engineer," and "Solutions Architect." Find 20 postings. Note: many list 5–10 years of experience as a requirement — do not let this discourage you. These are aspirational. Map your portfolio to the requirements of the top 5 postings.

### Day 5: Cloud Architect Behavioral Interview Preparation

- [10m] Prep: Review your STAR stories from the Job Pivot weeks. They need upgrading now that you have SAP-level knowledge and a full enterprise architecture portfolio.
- [25m] Learn: Watch [this "Staff Engineer Behavioral Interview Questions" video](https://www.youtube.com/results?search_query=staff+engineer+behavioral+interview+questions+2024) (~25 min). Note the emphasis on influence, organizational impact, and navigating ambiguity.
- [25m] Apply: Write 5 updated STAR-method stories for Cloud Architect-level behavioral questions: (1) "Tell me about a time you influenced an organization to adopt a new technology." (2) "Describe a time you made an architecture decision with incomplete information." (3) "Tell me about a time you reduced cost while improving performance." (4) "Describe a situation where you identified a security vulnerability before it became an incident." (5) "Tell me about a time you had to explain a complex architectural trade-off to a non-technical executive." Practice delivering each in 90 seconds.

### Day 6: Cloud Architect Job Applications

- [10m] Prep: Review your target job list. Prioritize companies with publicly available engineering blogs — they signal a strong engineering culture.
- [25m] Learn: Watch [this "How to Apply for Cloud Architect Roles" video](https://www.youtube.com/results?search_query=how+to+apply+cloud+architect+jobs+AWS+portfolio+2024) (~25 min). Study how to tailor applications to match job description language exactly.
- [25m] Apply: Submit applications to your top 5 target Cloud Architect roles. For each: (1) Customize the resume to echo the JD's exact language. (2) In the cover letter, cite a specific architecture from your portfolio that's directly relevant to their scale. (3) Link to your GitHub portfolio prominently. (4) Frame your 20+ years of professional experience as the business context judgment that younger candidates cannot provide.

### Day 7: AWS Community Engagement

- [10m] Prep: Review all Week 27 job campaign activities. Set a goal: one Cloud Architect application per day going forward.
- [20m] Learn: Watch [this "How to Build Your Cloud Career Through Community" video](https://www.youtube.com/results?search_query=build+cloud+career+through+community+AWS+user+group) (~20 min).
- [30m] Apply: (1) Attend your local [AWS User Group](https://aws.amazon.com/developer/community/usergroups/) meetup — in-person networking creates opportunities that job boards cannot. (2) Submit a talk proposal for your user group's next event: "How I Built an Enterprise-Grade AWS Landing Zone as a Career Changer." (3) Follow 10 Cloud Architects on [LinkedIn](https://www.linkedin.com/) and engage genuinely with their content. (4) Apply to speak at a local tech conference using [PaperCall](https://www.papercall.io/).

## Week 28: Phase 6 Capstone and Career Launch {featured}

### Day 1: Enterprise Architecture Design Document — Executive Summary

- [10m] Prep: Begin your final capstone — a comprehensive architecture proposal for a fictional enterprise client. Client: a Series B SaaS company (200 employees, $20M ARR, targeting 10x growth) moving from a single-account AWS setup to enterprise-grade architecture.
- [25m] Learn: Watch [this "How to Write an Enterprise Architecture Proposal" video](https://www.youtube.com/results?search_query=enterprise+architecture+proposal+cloud+AWS+document+2024) (~25 min). Note the structure: executive summary, current state, future state, implementation plan, cost, risk.
- [25m] Apply: Write the Executive Summary of your capstone document: problem statement (current single-account setup can't scale), proposed architecture (enterprise Landing Zone + microservices + multi-region DR), timeline (12-month phased migration), and ROI justification (estimate reduced overhead cost + improved uptime SLA economics). Commit the draft to [GitHub](https://github.com/).

### Day 2: Current State Assessment and Future State Architecture

- [10m] Prep: Review the Executive Summary. Is the business value clear in the first paragraph?
- [25m] Learn: Watch [this "Cloud Architecture Design Document" walkthrough](https://www.youtube.com/results?search_query=cloud+architecture+design+document+example+AWS+2024) (~25 min) to understand what makes an architecture document compelling to decision-makers.
- [25m] Apply: Write the "Current State Assessment" and "Future State Architecture" sections. Draw the current state diagram (single account, monolith, no DR) and the future state diagram (multi-account Organization, microservices on ECS Fargate, multi-region DR) using [draw.io](https://app.diagrams.net/). The before/after contrast makes the business case visually immediate. Commit both diagrams and the document to [GitHub](https://github.com/).

### Day 3: Implementation Plan

- [10m] Prep: Review the architecture diagrams. Does each future state component map clearly to a business benefit?
- [25m] Learn: Watch [Maarek's SAP course](https://www.udemy.com/course/aws-certified-solutions-architect-professional/) on any remaining topic you want to solidify before completing the capstone.
- [25m] Apply: Write the "Implementation Plan" — 5 phases, each with deliverables, success criteria, and estimated cost: Phase 1 (months 1–2): AWS Organizations + Landing Zone + centralized logging. Phase 2 (months 3–4): Networking account + Transit Gateway. Phase 3 (months 5–6): Migrate application to ECS Fargate with CI/CD pipeline. Phase 4 (months 7–8): Multi-region DR. Phase 5 (months 9–12): Security hardening (GuardDuty, Security Hub, WAF, Zero Trust). Commit to [GitHub](https://github.com/).

### Day 4: Cost Analysis and ROI

- [10m] Prep: Review the implementation plan. Open [calculator.aws](https://calculator.aws/) to build cost estimates.
- [25m] Learn: Watch [this "Cloud Migration Business Case and ROI" video](https://www.youtube.com/results?search_query=cloud+migration+business+case+ROI+AWS+2024) (~25 min). Note how to frame cost savings in terms of FTE hours, operational overhead, and SLA improvement.
- [25m] Apply: Write the "Cost Analysis" section. Include: current AWS spend estimate (based on the monolith single-account setup), projected spend after architecture optimization (with breakdown by phase), and a 3-year ROI analysis: reduced operational overhead (fewer manual deployments), improved uptime (SLA improvement from 99.5% to 99.99%), and cost efficiency (Savings Plans, auto-scaling, right-sizing). Use real numbers from [calculator.aws](https://calculator.aws/). Commit to [GitHub](https://github.com/).

### Day 5: Risk Assessment

- [10m] Prep: Review the Cost Analysis. Read [AWS's "Cloud Migration Risk Assessment" guide](https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-readiness/welcome.html).
- [25m] Learn: Watch [this "Risk Management in Cloud Architecture" video](https://www.youtube.com/results?search_query=risk+management+cloud+architecture+AWS+2024) (~25 min). Study how to identify, quantify, and mitigate architectural risks.
- [25m] Apply: Write the "Risk Assessment" section — identify the top 5 migration risks (data loss during cutover, service disruption, team skill gaps, cost overrun, vendor lock-in). For each: likelihood (High/Medium/Low), impact (High/Medium/Low), and mitigation strategy. A Cloud Architect who proactively identifies and mitigates risks earns their salary on the first project alone. Commit to [GitHub](https://github.com/).

### Day 6: Capstone Final Polish

- [10m] Prep: Review the complete Enterprise Architecture Design Document. Does it tell a coherent story from business problem to technical solution to measurable ROI?
- [25m] Learn: Watch [this "Technical Document Formatting Best Practices" video](https://www.youtube.com/results?search_query=technical+document+formatting+best+practices+markdown+github+2024) (~25 min). Focus on using headers, diagrams, and callout boxes to guide the reader.
- [25m] Apply: Polish and finalize the Enterprise Cloud Architecture Design Document. Format it professionally in Markdown with: a table of contents, executive summary at the top, embedded architecture diagrams, and an appendix with component-level technical specifications. This document should be something you are proud to attach in a job application email. Commit the final version to [GitHub](https://github.com/) as your capstone project.

### Day 7: Career Launch Day

- [10m] Reflect: Today marks the completion of this curriculum. Write a private entry in your IT Runbook: what did you learn about learning? What was harder than expected? What are you most proud of? This reflection will serve you in every interview when asked "Tell me about a time you had to learn a completely new skill quickly from scratch."
- [20m] Review: Look back at Day 1 — your first `ping google.com`, your first Linux command. You have come an extraordinary distance in 210 days. You have certifications, a real portfolio, documented architecture designs, and the professional credibility that comes from a 20+ year career. Trust the journey.
- [30m] Launch: Execute all 5 of these today — no deferring: (1) Pin your 3 best [GitHub](https://github.com/) repositories to your profile. (2) Update your [LinkedIn](https://www.linkedin.com/) headline: "AWS SAP | AWS SAA | Cloud Architect | Enterprise Infrastructure | FinOps | DevOps." (3) Add your full AWS certification stack to LinkedIn using [Credly](https://www.credly.com/) badge links. (4) Write and publish a [LinkedIn](https://www.linkedin.com/) article: "My 30-Week Journey from IT Foundations to Cloud Architect — What I Built, What I Learned, and What's Next." Include your architecture diagrams, portfolio link, and 3 lessons for others making the same transition. (5) Apply to 3 Cloud Architect roles today. The interviews are next. You are ready.

---

# Continuous Growth: Life After Landing the Cloud Architect Role

*Landing the role is not the end of the journey — it is the beginning of the next one. The cloud industry evolves faster than any single curriculum can capture.*

## The First 90 Days on the Job

- **Day 1–30 (Listen):** Do not propose sweeping changes immediately. Learn the existing systems, the team dynamics, the business context, and the political landscape. Every architecture decision was made by someone with context you don't yet have.
- **Day 31–60 (Contribute):** Begin adding value with quick wins — cost optimization findings, security improvements, documentation gaps. Build trust through delivery, not just ideas.
- **Day 61–90 (Lead):** Present your first significant architectural proposal using an RFC or ADR format. Frame everything in business terms first, technology second. Use your 20+ years of professional experience here — you know how to navigate organizations and communicate with executives in ways many engineers do not.

## Advanced Certifications

**Next 6–12 months after landing the role:**
- [AWS Certified Security – Specialty (SCS-C02)](https://aws.amazon.com/certification/certified-security-specialty/): Deep dives into encryption, identity, incident response, and compliance. Highly valued by security-conscious enterprises.
- [AWS Certified Advanced Networking – Specialty (ANS-C01)](https://aws.amazon.com/certification/certified-advanced-networking-specialty/): Mastery of BGP, Direct Connect, and Transit Gateway at enterprise scale.
- [HashiCorp Certified: Terraform Associate](https://www.hashicorp.com/certification/terraform-associate): Validates your Terraform skills and complements your AWS credentials for DevOps-adjacent architect roles.

**12–24 months after landing the role:**
- [Certified Kubernetes Application Developer (CKAD)](https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/) or [CKA](https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/): If your organization runs significant Kubernetes workloads.
- [Google Cloud Professional Cloud Architect](https://cloud.google.com/certification/cloud-architect) or [Azure Solutions Architect Expert](https://learn.microsoft.com/en-us/certifications/azure-solutions-architect/): Multi-cloud proficiency is increasingly valued by enterprises and consultancies.
- [FinOps Certified Practitioner](https://www.finops.org/certification/): Formalizes your cloud cost management expertise — increasingly required as cloud bills scale.

## Leadership Track

- **Technical writing and public speaking:** Present at [AWS re:Invent](https://reinvent.awsevents.com/) (submit a talk proposal), write on the [AWS Community Blog](https://community.aws/), or start a technical newsletter on [Substack](https://substack.com/). Thought leadership creates career opportunities that job boards cannot.
- **Mentorship:** Coach junior engineers on cloud fundamentals. Teaching accelerates your own understanding and builds your reputation inside your organization.
- **Business acumen:** Study financial modeling, product management, and organizational design. Cloud Architects who understand the P&L become indispensable strategic partners to the C-suite. Your 20+ year career background already gives you a head start here.

## High-Value Specializations (2025–2030+)

- **AI/ML Infrastructure Architecture:** Designing GPU compute clusters ([AWS Trn/Inf instances](https://aws.amazon.com/machine-learning/trainium/)), ML training pipelines, feature stores, and model serving infrastructure for generative AI. The fastest-growing cloud specialty right now.
- **Platform Engineering:** Building internal developer platforms using [Backstage](https://backstage.io/), [Crossplane](https://www.crossplane.io/), and [ArgoCD](https://argo-cd.readthedocs.io/). Reduces cognitive load for engineering teams at scale.
- **Cloud-Native Security (AppSec/SecDevOps):** Embedding security into CI/CD pipelines — IaC scanning with [Checkov](https://www.checkov.io/), SBOM management, and runtime protection with [Falco](https://falco.org/).
- **FinOps Engineering:** As cloud bills scale to millions per month, organizations need architects who design cost-efficient systems from the ground up. The [FinOps Foundation](https://www.finops.org/) is the industry body for this specialization.

## Habits That Keep You Current

- **Read [AWS What's New](https://aws.amazon.com/new/) weekly:** 10 minutes every Monday reviewing new service launches.
- **Listen to one cloud podcast per week:** [The AWS Podcast](https://aws.amazon.com/podcasts/aws-podcast/), [The Cloud Pod](https://www.thecloudpod.net/), or [Screaming in the Cloud](https://www.lastweekinaws.com/podcast/screaming-in-the-cloud/).
- **Attend [AWS re:Invent](https://reinvent.awsevents.com/) annually** (in-person or via [YouTube](https://www.youtube.com/@AWSEventsChannel)): The single best source of advanced architectural patterns and emerging capabilities.
- **Participate in your [AWS User Group](https://aws.amazon.com/developer/community/usergroups/):** The in-person community is where you build the relationships that lead to referrals and opportunities.
- **Keep your [GitHub](https://github.com/) portfolio current:** Every significant architecture you design (sanitized of proprietary data) belongs in your portfolio. It is a living professional document, not a one-time creation.

---

*210 days | 30 weeks | 60 minutes per day | Two job pivot weeks | Cloud Architect*