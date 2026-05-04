---
title: Cloud Architect Pivot
subtitle: The "Zero-to-Cloud" 12-Week Accelerated Sprint (Mid-40s Edition)
target: Job Ready in 84 Days
commitment: 1 hour per day - high intensity
---

# Phase 1: The Hardware and Network Foundation | Weeks 1-2 | indigo

## Week 1: Hardware and IP Networking {open}

Resources: [Messer Core 1](https://www.youtube.com/playlist?list=PLG49S3nxzAnlGHY8ObL8Diyn3nd-varg3) | [NetworkChuck](https://www.youtube.com/watch?v=S7MNX_UD7vY)

### Day 1: Storage and Memory Foundation

- [10m] Prep: Get a notebook ready. You will need to take handwritten notes to retain info.
- [30m] Learn: Watch Messer Videos 1.1 and 1.2 (Laptops and Storage Types).
- [20m] Apply: In your notebook, define the speed differences between HDD, SSD, and NVMe. Explain RAM in your own words.

### Day 2: The Machine's Brain

- [10m] Prep: Review yesterday's notes on RAM and Storage.
- [30m] Learn: Watch Video 1.3 (Motherboards/CPUs).
- [20m] Apply: Sketch a rough layout of a motherboard. Label where the CPU, RAM, and Storage connect.

### Day 3: Introduction to IP Addresses

- [15m] Learn: Watch NetworkChuck "What is an IP?".
- [15m] Read: Google "What is IPv4 format" and read for 15 minutes to grasp the numbers (e.g., 192.168.1.1).
- [30m] Apply: Open Command Prompt (Windows) or Terminal (Mac). Type `ping google.com`. Record the IP address the terminal returns to you.

### Day 4: Public vs. Private Networks

- [20m] Learn: Watch a YouTube video specifically explaining "Public vs Private IP Addresses".
- [40m] Apply: Search Google for "What is my IP" (This is your Public IP). Then, find your computer's Private IP in your network settings. Write down why these numbers are different.

### Day 5-7: The Hardware of the Internet

> Repeat this block daily to solidify knowledge.

- [20m] Learn: Watch NetworkChuck videos explaining Switches and Routers.
- [40m] Apply: Draw a physical diagram of your home internet. Map a line from your Phone -> WiFi Router -> Modem -> ISP (Internet Provider) -> Google Servers. Label every piece of hardware.

## Week 2: Protocols and The Linux CLI

Resources: [DNS Guide](https://www.youtube.com/watch?v=HndV87RoS2A) | [Linux Journey](https://linuxjourney.com/)

### Day 1: DNS (The Internet's Phonebook)

- [30m] Learn: Watch the DNS Guide video to understand how text domains turn into IPs.
- [30m] Apply: Search online for a "DNS Lookup Tool". Enter 5 of your favorite websites and write down the IP addresses powering them.

### Day 2: Web Traffic and Ports

- [20m] Learn: Read articles on HTTP (Port 80) vs HTTPS (Port 443).
- [40m] Apply: Open a web browser, hit `F12` to open Developer Tools, click the "Network" tab, and refresh a webpage. Watch the data load securely over Port 443.

### Day 3-4: Linux Navigation

- [15m] Learn: Read the "Navigating" module on LinuxJourney.com.
- [45m] Apply: Use their interactive terminal to master `ls` (list files), `cd` (change directory), and `pwd` (print working directory). Practice moving around without a mouse.

### Day 5-6: Linux Creation

- [15m] Learn: Read the "Files and Directories" module on LinuxJourney.
- [45m] Apply: Practice creating folders with `mkdir` and blank files with `touch`. Challenge: Create a 3-level deep folder structure using only text commands.

### Day 7: Permissions and Sudo

- [20m] Learn: Read about Linux User Permissions and why the `sudo` command (Super User Do) is dangerous.
- [40m] Apply: Create a "Cheat Sheet" in your notebook listing all the Linux commands you learned this week. You will need this later.

# Phase 2: AWS Certified Cloud Practitioner | Weeks 3-5 | emerald

Resources: [Official AWS Skill Builder Course (Free)](https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials)

## Week 3: Compute and Global Infrastructure

### Day 1-2: AWS and EC2 Introduction

- [10m] Prep: Log into your AWS Skill Builder account.
- [30m] Learn: Complete Modules 1 and 2 (Cloud Concepts and Virtual Servers/EC2).
- [20m] Apply: Write a 3-sentence summary of why a business would rent an EC2 server in the cloud instead of buying a physical server for their office.

### Day 3-4: Global Architecture

- [30m] Learn: Complete Module 3 covering Global Regions and Availability Zones (AZs).
- [30m] Apply: Sketch an AWS Region on paper containing two AZs. Write down a business disaster scenario where having two AZs saves the company from going offline.

### Day 5-7: Networking in the Cloud

- [30m] Learn: Complete Module 4 (VPC - Virtual Private Cloud).
- [30m] Apply: Apply your Week 1 IP knowledge. Draw a VPC map containing one Public Subnet (for a website) and one Private Subnet (hidden, for a database). Draw the firewall (Security Group) protecting them.

## Week 4: Storage, Databases and Security

### Day 1-3: Data Storage Options

- [30m] Learn: Complete Module 5 (S3, EBS, and RDS Databases).
- [30m] Apply: Create a decision-chart in your notes: When should an Architect use S3 (Objects like photos) vs EBS (Hard drives for EC2) vs RDS (Structured databases).

### Day 4-6: The Security Matrix

- [30m] Learn: Complete Module 6 (Security and IAM).
- [30m] Apply: Draw the "Shared Responsibility Model". List 3 specific things AWS secures (e.g., physical data centers), and 3 things YOU must secure (e.g., user passwords, customer data).

### Day 7: Monitoring and Alerts

- [30m] Learn: Complete Module 7 (CloudWatch and Monitoring).
- [30m] Apply: Design a mock alert scenario. If an EC2 server hits 90% CPU usage, write down the exact steps CloudWatch should take to alert the IT team.

## Week 5: The "FinOps" Pivot and Exam Prep {featured}

Resources: [AWS Pricing Explained](https://www.youtube.com/watch?v=7uV_Uo0F730)

### Day 1-3: Cloud Cost Control (Crucial for 40+)

- [20m] Learn: Watch AWS Pricing strategy videos. Understand Capex vs Opex.
- [40m] Apply: Open the online "AWS Pricing Calculator". Build a monthly budget estimate for 1 EC2 instance, 1 RDS Database, and 50GB of S3 storage. See how business costs scale.

### Day 4-7: Exam Simulation

- [20m] Apply: Take a free Cloud Practitioner practice exam online.
- [40m] Apply: Review every incorrect answer. Look up the official AWS documentation for the ones you missed. If budget allows (~$100), book the actual exam.

# Phase 3: The Hands-On Cloud Portfolio | Weeks 6-9 | orange

## Week 6: Secure Account Setup

### Day 1: Account Creation

- [20m] Action: Follow the link to open an AWS Free Tier Account. | [Open](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html)
- [40m] Read: Read the official AWS Free Tier Limits documentation carefully. Know exactly what is free (like micro EC2s) and what costs money.

### Day 2-3: Billing Defense

- [20m] Action: Set up Multi-Factor Authentication (MFA) on your Root Account using a phone app.
- [40m] Action: Follow a Billing Alarm tutorial. Set an alarm to email you if your costs ever exceed $0.01. Never pay for mistakes! | [Open](https://www.youtube.com/watch?v=H74F8B708H0)

### Day 4-7: Identity Access setup

- [20m] Action: Use IAM to create a new user for yourself with "Administrator" access. Add MFA to this user as well.
- [40m] Action: Log out of the Root account forever. Log in as your new IAM user. Spend time clicking through the AWS Console to learn the UI (Do not launch any services yet).

## Week 7: Coding the Cloud Resume

### Day 1-3: HTML/CSS Basics

- [30m] Learn: Read the W3Schools HTML Guide. | [Open](https://www.w3schools.com/html/)
- [30m] Apply: Use Notepad or VS Code to write the code for a basic 1-page digital resume. Include a header with your name, a summary, and your 20-year work history.

### Day 4-5: S3 Bucket Creation

- [20m] Learn: Research "How to create an S3 bucket in AWS Console".
- [40m] Apply: Log into AWS, create an S3 bucket (name it carefully), and upload your `index.html` resume file into it.

### Day 6-7: Going Live to the Public

- [20m] Learn: Research "S3 Static Website Hosting and Bucket Policies".
- [40m] Apply: Enable website hosting on your bucket. Write and apply the JSON policy required to make the bucket public. Test the endpoint URL to see your live site!

## Week 8-9: DNS, Security and GitHub {featured}

*Adding Version Control (Git) makes you highly employable.*

### Week 8 (Day 1-3): Custom Domain Name

- [20m] Prep: Brainstorm professional domain names (e.g., yourname-cloud.com).
- [40m] Apply: Navigate to AWS Route53, purchase the domain (~$12), and set up a Hosted Zone.

### Week 8 (Day 4-7): SSL and CloudFront Security

- [20m] Learn: Watch a tutorial on "AWS CloudFront static website HTTPS".
- [40m] Apply: Request a free SSL certificate via AWS Certificate Manager (ACM). Configure CloudFront to serve your S3 site securely over HTTPS using your new domain.

### Week 9 (Day 1-4): Local Git Mastery

- [20m] Learn: Read the GitHub Skills Guide on local commits. | [Open](https://skills.github.com/)
- [40m] Apply: Open your local computer terminal. Initialize a Git repo (`git init`), add your HTML code, and make your first commit history.

### Week 9 (Day 5-7): Pushing to GitHub

- [20m] Prep: Create a free account on GitHub.com.
- [40m] Apply: Link your local repository to your GitHub account and push your code. Create a professional `README.md` file explaining your cloud architecture. You now have a dev portfolio!

# Phase 4: The Career Transition | Weeks 10-12 | red

## Week 10: Resume Translation

### Daily: Translating Experience

- [15m] Prep: Review your 20 years of work history. Identify moments you managed projects, budgets, or angry clients.
- [30m] Action: Use Teal to re-write your bullet points into "tech-value" statements. For example, "Customer Service" becomes "End-User Empathy and Escalation Management". Make sure links to your AWS site and GitHub are at the top. | [Open](https://www.tealhq.com/)
- [15m] Action: Update the HTML code of your cloud resume to reflect these new, highly-polished bullet points.

## Week 11: The Networking Sprint

### Daily: LinkedIn Outreach

- [15m] Search: Find 5 "Tech Recruiters" or "AWS Recruiters" on LinkedIn daily.
- [30m] Action: Send this customized connection note: "Hi [Name], I am a career changer with 20 years of business experience, now AWS certified with a live cloud portfolio. I am actively looking for a Cloud Support or Junior IT Admin role. Would love to connect."
- [15m] Action: Scroll your feed and leave thoughtful, business-minded comments on 2 industry posts to increase your profile visibility.

## Week 12: Application Blitz {featured}

### Daily: Getting Your Foot in the Door

- [20m] Search: Look on Indeed and LinkedIn for entry-level titles: "Cloud Support Associate", "IT Helpdesk Tier 1/2", or "Junior System Administrator". Do NOT apply for "Architect" yet.
- [40m] Action: Submit 3-5 highly tailored applications. In any cover letter, leverage your mature business background. You are not just an IT person; you are a professional who understands company priorities.
