# Sagor Sharif — Portfolio Website Content Guide

This document consolidates the strongest public portfolio material identified from:

- Facebook: https://www.facebook.com/sagorsharif.SH/
- GitHub: https://github.com/Sagor-Sharif
- LinkedIn: https://www.linkedin.com/in/sagor-sharif-9327b427b/

> Note: Facebook blocks reliable direct profile extraction in many cases, so Facebook-only details should not be invented. Use Facebook mainly as a social/contact link unless you manually add more verified information.

---

# 1. Recommended Personal Brand

## Name

**Sagor Sharif**

## Main Title

**Robotics Enthusiast · Competitive Programmer · Developer**

Alternative:

**CSE Student · Robotics & Embedded Systems Enthusiast · Software Developer**

More distinctive hero line:

**I build things that move, think, connect, and solve real problems.**

## Hero Description

BSc in Computer Science & Engineering student from Barishal, Bangladesh, passionate about robotics, embedded systems, competitive programming, and modern software development. I build practical projects ranging from Arduino-powered automation systems to interactive web applications.

## Hero Tags

- Robotics
- Embedded Systems
- C++
- Arduino
- Competitive Programming
- Web Development
- IoT

## Hero Buttons

- View My Work
- GitHub
- Download Resume
- Let's Connect

---

# 2. About Me

I'm Sagor Sharif, a Computer Science & Engineering student at the University of Global Village (UGV) in Barishal, Bangladesh. My interests sit at the intersection of software and hardware—from competitive programming and web applications to robotics, embedded systems, IoT, and automation.

I enjoy turning ideas into practical projects, whether that means programming an Arduino-powered robot, building a safety device, creating an interactive web application, or solving algorithmic problems under competition pressure.

Beyond building technology, I enjoy sharing what I learn. I've had opportunities to work with young learners through programming and STEM sessions, and I'm always interested in collaborating on meaningful technical projects.

---

# 3. Education

## University of Global Village — UGV

**BSc in Computer Science & Engineering**  
**2023 – 2026**

LinkedIn also exposes older education date ranges, but the public result does not clearly identify the institution names. Do not guess the school or college names. Add them manually only when verified.

---

# 4. Technical Skills

## Programming

- C
- C++
- JavaScript
- TypeScript
- HTML
- CSS

## Web Development

- Next.js
- React
- Supabase
- Frontend Development
- Authentication Flows
- E-commerce UI
- Responsive Web Design

## Embedded Systems

- Arduino
- Embedded C/C++
- PWM
- Sensor Integration
- Microcontroller Programming

## Robotics

- Line-Following Systems
- Motor Control
- Robotic Automation
- Mobile Robot Control
- Loading/Unloading Mechanisms

## IoT / Electronics

- GSM
- GPS
- Bluetooth
- MPU6050
- IR Sensors
- RGB LED Matrices
- Sensor-Based Automation

## Hardware

- Arduino UNO
- Arduino Nano / Pro Mini
- L298N Motor Driver
- HC-05 Bluetooth Module
- DC Motors
- SIM800L
- NEO-6M GPS

## Backend / Data

- Supabase
- SQL
- Database Schema Design
- Authentication
- User Account Flows

## Systems / Networking

- Ubuntu
- Asterisk PBX
- SIP
- VoIP
- Local Intercom Systems

## Problem Solving

- Competitive Programming
- Algorithms
- Logical Problem Solving

## Teaching / Communication

- Scratch Programming
- STEM Workshops
- Robotics Instruction
- Technical Communication
- Mentoring
- Public Speaking
- Workshop Facilitation

## Tools

- Git
- GitHub

> Do not automatically claim Tailwind CSS unless you want to add it manually and confirm it. The GitHub profile README appears to have a mismatched Tailwind/IoT icon reference.

---

# 5. Strongest Portfolio Projects

## 5.1 Digital Sand Hourglass

**Category:** Embedded Systems / Robotics / Interactive Hardware

### Short Description

Interactive electronic hourglass that simulates realistic falling sand using two 8×8 RGB LED matrices and reacts to physical orientation.

### Tech / Concepts

- Arduino
- MPU6050
- Dual 8×8 RGB LED matrices
- I2C
- Embedded C++
- Gravity sensing
- Motion/orientation sensing
- Real-time simulation
- Physics-inspired animation

### Key Features

- Realistic falling sand simulation
- Diagonal grain movement
- Tilt-based sand behavior
- Left/right sand spreading
- Pyramid formation at the bottom
- Moving hole animation at the top
- Automatic restart when flipped
- Potentiometer-based timer duration selection
- Timer presets:
  - 30 seconds
  - 1 minute
  - 2 minutes
  - 5 minutes
  - 10 minutes
  - 30 minutes

### Portfolio Title

**Digital Sand Hourglass**

### Portfolio Subtitle

**Recreating physical sand behavior with LEDs, sensors and embedded software.**

### Case Study Angle

This should be one of the most visual projects in the portfolio. Use:

- Hardware photos
- Close-up LED display photos
- A short video showing the device being rotated
- Circuit/build process
- Software logic overview
- How the sand simulation works

### Priority

**Featured Project**

GitHub:  
https://github.com/Sagor-Sharif/Digital_Sand_Watch

---

## 5.2 Smart Child Safety & Tracking Device

**Category:** IoT / Embedded Systems / Safety Technology

### Short Description

A wearable emergency communication device designed to help children quickly contact their parents and share their location during an emergency.

### Problem

Children may not be able to communicate their location quickly during an emergency.

### Solution

A low-cost wearable device with dedicated emergency calling and SMS functionality.

### Hardware / Tech

- Arduino
- SIM800L
- GSM
- NEO-6M GPS
- Embedded C/C++
- Physical buttons
- Electronics

### Key Features

- Emergency call
- Emergency SMS
- Location information
- Simple physical interface
- Low-cost hardware
- Parent notification
- Child-friendly interaction

### Portfolio Description

A wearable tracking and emergency communication device designed for school-age children. The device lets a child quickly trigger a call or SMS and provide location information to a parent during an emergency.

### Useful Repository Assets

The repository contains:

- Arduino source code
- Circuit design
- Multiple physical device photographs

Use the real device photos in the portfolio instead of generated mockups.

### Priority

**Featured Project**

GitHub:  
https://github.com/Sagor-Sharif/Security-Device-for-child.

---

## 5.3 Bluetooth Controlled Load-Unload Robot

**Category:** Robotics / Automation / Embedded Systems

### Portfolio Title

**Bluetooth Controlled Load-Unload Robot**

### Short Description

A mobile Arduino-powered automation platform capable of navigating in multiple directions while remotely controlling a dedicated loading and unloading mechanism.

### Tech

- Arduino UNO
- L298N Motor Driver
- HC-05 Bluetooth Module
- DC Motors
- PWM
- Mobile App Control
- Serial Communication

### Key Features

- Forward movement
- Backward movement
- Left movement
- Right movement
- Motorized loading/unloading mechanism
- Bluetooth smartphone control
- PC serial control
- Remote load handling
- PWM motor control
- Automatic motor reset after operation

### Command Examples

- `F` = Forward
- `B` = Backward
- `L` = Left
- `R` = Right
- `U` = Unload Forward
- `u` = Unload Reverse

### Potential Applications

- Warehouse automation
- Factory conveyor systems
- Robotics education
- Small-scale industrial automation

### Portfolio Value

This project is important because it demonstrates:

- Hardware design
- Motor control
- Wireless communication
- Mobile interaction
- Embedded software
- Mechanical automation

### Priority

**Featured Project**

GitHub:  
https://github.com/Sagor-Sharif/Arduino-Based-Load-Unload-Track-with-Mobile-App-Control

---

## 5.4 Line Following Robot

**Category:** Robotics / Embedded Systems

### Short Description

An autonomous robot that detects and follows a predefined contrasting path using sensors.

### Tech

- Arduino
- C++
- IR Sensors
- Motors
- Motor Driver
- Basic Autonomous Navigation

### Portfolio Description

A mobile robot designed to detect and follow a line on the floor using sensor feedback and motor control logic.

### Repository Assets

- Arduino source code
- Circuit image

### Portfolio Value

This project demonstrates:

- Sensor feedback
- Autonomous motion
- Embedded control
- Basic robotics algorithms

### Priority

**Featured / Strong Supporting Project**

GitHub:  
https://github.com/Sagor-Sharif/Line-Following-Robot

---

## 5.5 DotProject — Custom 3D Printing E-Commerce Platform

**Category:** Full-Stack Web Development / E-commerce

### Portfolio Title

**DotProject**

### Subtitle

**Custom 3D Printing E-Commerce Platform**

### Short Description

A full-stack storefront for browsing and ordering custom 3D printed products, featuring user authentication, product management, cart functionality, customer accounts and a Supabase-backed data layer.

### Tech

- Next.js
- React
- TypeScript
- Supabase
- SQL

### Features Found in the Project

- Customer authentication
- Sign in
- Sign up
- Email verification
- Magic link authentication
- Password recovery
- Customer account area
- Shopping cart
- Cart drawer
- Product detail views
- Product reviews UI
- Quantity controls
- Buy now flow
- Checkout navigation
- Shipping information
- Order/account sections
- Admin interface
- Product management
- Supabase-backed data
- SQL schema

### Portfolio Value

This project proves that your experience is not limited to robotics or hardware. It gives you a strong software-development story and shows experience with a modern full-stack web stack.

### Priority

**Featured Project**

GitHub:  
https://github.com/Sagor-Sharif/DotProject

---

## 5.6 Intelligent Paper Currency Recognition System

**Category:** Pattern Recognition / Accessibility / Computer Vision

### Title

**Intelligent Paper Currency Recognition System for Blind and Visually Impaired Persons in Bangladesh**

### Date

**August 2023 – November 2023**

### Role

**Project Supporting Position**

### Portfolio Description

An assistive-technology project focused on helping blind and visually impaired users identify Bangladeshi paper currency.

### Strong Case Study Topics to Add

If available, include:

- Problem statement
- Dataset
- Currency classes
- Recognition technique
- Feature extraction
- Model or algorithm
- Accuracy/results
- Prototype
- User interaction
- Screenshots
- Your exact contribution
- Accessibility impact

### Portfolio Value

This is potentially one of your strongest projects because it combines:

- Pattern recognition
- Computer vision
- Accessibility
- Real-world social impact
- Bangladesh-specific use case

### Priority

**Featured Project**

---

## 5.7 Asterisk PBX Setup with Ubuntu

**Category:** Systems / Networking / VoIP

### Portfolio Title

**Local PBX-Based Smartphone Intercom System**

### Short Description

A local smartphone intercom/PBX system configured using Asterisk on Ubuntu with SIP extensions and voicemail.

### Tech

- Ubuntu
- Asterisk
- SIP
- PBX
- VoIP
- Configuration Files

### Repository Includes

- `extensions.conf`
- `sip.conf`
- `voicemail.conf`
- Project PDF

### Portfolio Value

Shows experience beyond application development, especially:

- Linux systems
- Telecommunication configuration
- Networking concepts
- SIP
- PBX systems

### Priority

**Strong Supporting Project**

GitHub:  
https://github.com/Sagor-Sharif/Asterisk-PBX-Setup-with-Ubuntu

---

## 5.8 UGV Student Attendance Portal

**Category:** Web Development / University Tool

### Short Description

Interactive student attendance portal with login and attendance-related interfaces.

### Tech

- HTML
- CSS
- JavaScript

### UI Characteristics

- Branded login screen
- Animated visual background
- Student portal layout
- Attendance-focused interface

### Portfolio Value

Useful as a supporting web project showing:

- UI design
- Form interfaces
- Responsive layout
- Frontend interaction

### Priority

**Strong Supporting Project**

GitHub:  
https://github.com/Sagor-Sharif/ugv-studentportal

---

## 5.9 WeMasterTrade Lucky Draw

**Category:** Interactive Web App

### Portfolio Title

**WeMasterTrade Lucky Draw**

### Short Description

A browser-based spinning lucky-draw application with editable participants, winner history, sorting, shuffling and customization features.

### Tech

- HTML
- CSS
- JavaScript
- HTML Canvas

### Features

- Editable participant list
- Shuffle
- Sort
- Winner history
- Optional winner removal
- Download entries
- Copy entries
- Color/background customization
- Canvas-based wheel
- Spin interaction
- Keyboard shortcut support
- Winner dialog
- Confetti layer

### Portfolio Value

Shows:

- Interactive UI programming
- Canvas work
- Client-side state
- Event-driven JavaScript

### Priority

**Strong Supporting Project**

GitHub:  
https://github.com/Sagor-Sharif/Lucky-Draw-Wheel

---

## 5.10 XPSC Problem Solving

**Category:** Competitive Programming

### Description

A collection demonstrating ongoing competitive-programming practice and algorithmic problem solving.

### Tech / Skills

- C++
- Algorithms
- Competitive Programming
- Problem Solving

### Portfolio Value

Use this as proof of consistent coding practice.

### Priority

**Supporting Project / Coding Practice**

GitHub:  
https://github.com/Sagor-Sharif/XPSC-Problem-Solving

---

## 5.11 DBMS Assignment

**Category:** Coursework / Database Fundamentals

### Description

Application-form-oriented coursework project connected to database-management concepts.

### Tech

- HTML
- Forms
- DBMS Concepts

### Portfolio Recommendation

Keep this in an **Other Projects** or **Coursework** section instead of the homepage.

GitHub:  
https://github.com/Sagor-Sharif/DBMS_assignment

---

## 5.12 do-you-love-me

**Category:** Fun / Experimental Web Project

### Portfolio Recommendation

If you want to show personality, place this in a small section such as:

**Experiments / Fun Builds**

Do not feature it above your major robotics, software, or competition work.

GitHub:  
https://github.com/Sagor-Sharif/do-you-love-me

---

## 5.13 workspace

### Portfolio Recommendation

Do not feature this as a portfolio project unless it later becomes something substantial.

GitHub:  
https://github.com/Sagor-Sharif/workspace

---

## 5.14 GitHub Profile Repository

Repository:

https://github.com/Sagor-Sharif/Sagor-Sharif

This is your profile README repository. Do not display it as a project.

---

# 6. Competitive Programming & Achievements

Create a dedicated section titled:

## Competitive Programming

Possible subtitle:

**Turning pressure into structured problem solving.**

### Achievements

1. **Winner — 21st Intra University Programming Contest, UGV**
   - Team: **NooB_55**
   - Teammate mentioned publicly: Rakib

2. **1st Position — 19th Intra-University Programming Contest**

3. **DUET IUPC Participant**
   - Competitive programming
   - Algorithmic problem solving

4. **C++ Gold Star — HackerRank**

5. **XPSC Problem Solving Repository**
   - Ongoing algorithm practice
   - C++ problem solving

### Good Portfolio Elements

- Contest timeline
- Contest rank cards
- HackerRank badge
- GitHub coding activity
- Problem-solving statistics
- Favorite problem categories
- Languages used in contests

---

# 7. Training, Leadership & Community Experience

## Guest Trainer — American Space Barishal

### Scratch Programming Basics

**Dates:** July 29 & August 1, 2026

### Topics

- Visual programming
- Programming basics
- Logical thinking
- Simple interactive projects
- Beginner-friendly coding

### Portfolio Skills Demonstrated

- Teaching
- Communication
- Mentoring
- Public speaking
- Workshop facilitation

---

## Guest Trainer — Freedom 250

### American Innovation History & NASA Mini Mars Rovers

**Organization:** American Space Barishal  
**Year:** 2026

### Workshop Details

- Three-day workshop
- 50+ students
- Participants from Classes 7, 8 and HSC levels
- Space exploration
- Innovation
- STEM learning
- Mini Mars Rover concepts

### Portfolio Skills Demonstrated

- STEM education
- Robotics communication
- Workshop facilitation
- Youth mentoring
- Technical presentation

---

## Campus Ambassador — Phitron

### Focus

- Representing UGV
- Programming education
- Technical learning opportunities
- Student outreach
- Community engagement

### Portfolio Skills Demonstrated

- Leadership
- Community building
- Technical advocacy
- Communication
- Campus engagement

---

# 8. Events & Community Involvement

Create a section such as:

## Events & Community

---

## IFIT Firm — Rajshahi Branch Seminar 2026

### Publicly Described Involvement

Attended as a guest representing WeMasterTrade Bangladesh.

### Topics Mentioned

- Digital skills
- Financial education
- Career development
- Continuous learning

### Audience

**200+ participants**

### Portfolio Use

Present this as:

- Guest/event participation
- Community involvement
- Speaking/networking experience

Do not claim formal employment at WeMasterTrade unless you want to add your exact verified title.

---

## Khulna Trading Community Meetup 2026

**Date:** 25 July 2026

### Organized By

- WeMasterTrade
- WeGolden

### Portfolio Use

Include under:

- Community events
- Networking
- Professional development
- Event participation

---

# 9. Social Links

## GitHub

https://github.com/Sagor-Sharif

## LinkedIn

https://www.linkedin.com/in/sagor-sharif-9327b427b/

## Facebook

https://www.facebook.com/sagorsharif.SH/

## Instagram

**@sagor_sharif_**

## Threads

**@sagor_sharif_**

---

# 10. Recommended Portfolio Structure

Use this page order:

1. Hero
2. Selected Projects
3. About
4. Technical Skills
5. Competitive Programming
6. Training & Leadership
7. Achievements
8. Education
9. Events & Community
10. All Projects
11. GitHub Activity
12. Contact
13. Footer

---

# 11. Recommended Featured Project Order

The homepage should prioritize:

1. **Digital Sand Hourglass**
2. **Smart Child Safety & Tracking Device**
3. **Bluetooth Controlled Load-Unload Robot**
4. **DotProject**
5. **Intelligent Paper Currency Recognition System**
6. **Line Following Robot**

This order creates a strong story across:

- Embedded systems
- Robotics
- Assistive technology
- Full-stack development
- Pattern recognition
- Automation

---

# 12. Projects to Keep Lower on the Page

Keep these in supporting sections:

- Asterisk PBX Setup with Ubuntu
- UGV Student Attendance Portal
- WeMasterTrade Lucky Draw
- XPSC Problem Solving
- DBMS Assignment

---

# 13. Projects to Hide or Place in Experiments

## Keep Out of Main Featured Projects

- workspace
- GitHub profile repository
- DBMS Assignment as a homepage feature

## Optional Experiments Section

- do-you-love-me

Suggested section title:

**Experiments / Fun Builds**

---

# 14. Strongest Portfolio Positioning

Your portfolio should not present you as only a web developer.

Your strongest identity is:

> **A developer who works across software, robotics, embedded electronics, problem solving and STEM education.**

A stronger brand sentence:

> **I combine software, electronics and problem solving to build practical systems—from autonomous robots and IoT devices to modern web applications.**

---

# 15. Recommended Homepage Hero Copy

## Option A

### Sagor Sharif

**Robotics Enthusiast · Competitive Programmer · Developer**

I build practical systems across software and hardware—from embedded robotics and IoT devices to interactive web applications.

**Buttons:**  
View Projects · GitHub · LinkedIn

---

## Option B

### I build things that move, think, connect and solve real problems.

I'm Sagor Sharif, a CSE student focused on robotics, embedded systems, competitive programming and software development.

**Buttons:**  
Explore My Work · Let's Connect

---

## Option C

### From code to circuits.

I design and build software, robotics and embedded systems that turn ideas into working products.

**Tags:**  
Arduino · C++ · Robotics · IoT · React · Next.js

---

# 16. Recommended About Section Headings

Possible headings:

- About Me
- Beyond the Code
- Building Across Hardware & Software
- From Algorithms to Automation
- Engineer in Progress
- Code. Circuits. Curiosity.

---

# 17. Recommended Skills Section Headings

Possible titles:

- Technical Toolkit
- What I Work With
- Skills & Technologies
- My Engineering Stack
- Technologies I Build With

---

# 18. Recommended Achievement Section Headings

Possible titles:

- Competitive Programming
- Problem Solving Under Pressure
- Milestones
- Awards & Achievements
- Programming Highlights

---

# 19. Recommended Training Section Headings

Possible titles:

- Teaching & Mentoring
- Sharing What I Learn
- Training & Leadership
- STEM Community
- Beyond My Own Projects

---

# 20. Recommended Project Card Information

Every major project card should contain:

- Project title
- Category
- 1–2 sentence summary
- Tech stack
- Project image
- GitHub link
- Live demo if available
- Case study button
- Year
- Your role
- Key challenge
- Key result

For hardware projects also include:

- Circuit
- Sensors/components
- Build photos
- Short demo video
- Hardware architecture

---

# 21. Recommended Case Study Structure

For major projects, use:

## Overview

What the project is.

## Problem

What problem you wanted to solve.

## Goal

What the system should achieve.

## My Role

Your exact contribution.

## Hardware / Software

Components and technologies used.

## Architecture

How everything connects.

## Challenges

What was difficult.

## Solution

How you solved those problems.

## Results

What worked.

## What I Learned

Technical and personal learning.

## Future Improvements

How you would improve the project.

---

# 22. Visual Asset Suggestions

For your portfolio, prioritize real project visuals.

## Use Real Photos For

- Child Safety Device
- Load-Unload Robot
- Digital Sand Hourglass
- Line Following Robot
- Workshops
- Competition events
- Training sessions

## Use Screen Captures For

- DotProject
- UGV Attendance Portal
- Lucky Draw
- Other web projects

## Use Generated Google Flow Visuals For

- Hero atmosphere
- Abstract robotics backgrounds
- Section transitions
- Cinematic technology visuals
- Project intro backgrounds

Do not replace real hardware evidence with generated visuals when authentic project photos exist.

---

# 23. Recommended Contact Section

## Heading

**Let's Build Something Interesting.**

## Text

I'm open to collaborations, technical projects, robotics work, software development opportunities and meaningful ideas that combine technology with real-world problem solving.

## Buttons

- LinkedIn
- GitHub
- Facebook
- Email
- Download Resume

---

# 24. Good Portfolio Keywords

Use naturally across the website:

- Robotics
- Embedded Systems
- Arduino
- IoT
- Competitive Programming
- C++
- Full-Stack Development
- Next.js
- React
- Supabase
- Automation
- Sensors
- Bluetooth
- GPS
- GSM
- Assistive Technology
- Pattern Recognition
- STEM Education
- Problem Solving
- Technical Training

---

# 25. What Makes Your Portfolio Different

Most student portfolios focus only on:

- Web design
- Small coding assignments
- Generic skill badges

Your stronger story includes:

- Physical hardware
- Robotics
- Sensors
- Embedded programming
- Wireless control
- GPS/GSM
- Competitive programming
- Full-stack web software
- Linux/VoIP systems
- Pattern recognition
- Assistive technology
- Teaching
- STEM workshops
- Community participation

That combination should be visible immediately.

---

# 26. Best Final Brand Message

> **I build across software and hardware—combining code, electronics, robotics and problem solving to create practical systems and meaningful experiences.**

Alternative:

> **From algorithms and embedded systems to modern web applications, I enjoy building technology that works beyond the screen.**

Alternative:

> **Robotics, software, problem solving and teaching—connected by curiosity and a drive to build things that actually work.**

---

# 27. Useful Links

## GitHub Profile

https://github.com/Sagor-Sharif

## LinkedIn

https://www.linkedin.com/in/sagor-sharif-9327b427b/

## Facebook

https://www.facebook.com/sagorsharif.SH/

## Main Project Repositories

### Digital Sand Hourglass

https://github.com/Sagor-Sharif/Digital_Sand_Watch

### Child Safety Device

https://github.com/Sagor-Sharif/Security-Device-for-child.

### Arduino Load-Unload Robot

https://github.com/Sagor-Sharif/Arduino-Based-Load-Unload-Track-with-Mobile-App-Control

### Line Following Robot

https://github.com/Sagor-Sharif/Line-Following-Robot

### DotProject

https://github.com/Sagor-Sharif/DotProject

### Asterisk PBX

https://github.com/Sagor-Sharif/Asterisk-PBX-Setup-with-Ubuntu

### UGV Student Portal

https://github.com/Sagor-Sharif/ugv-studentportal

### Lucky Draw

https://github.com/Sagor-Sharif/Lucky-Draw-Wheel

### XPSC Problem Solving

https://github.com/Sagor-Sharif/XPSC-Problem-Solving

### DBMS Assignment

https://github.com/Sagor-Sharif/DBMS_assignment

---

# 28. Final Homepage Story

The homepage should communicate this story:

**Sagor Sharif is a Computer Science & Engineering student who builds across software and hardware. He works with robotics, Arduino, embedded systems, IoT, competitive programming and modern web technologies. His work includes physical safety devices, autonomous robots, Bluetooth-controlled automation systems, interactive embedded simulations and full-stack web applications. Beyond building, he also participates in programming competitions, technical training, STEM workshops and student community activities.**

That is the strongest overall narrative for the portfolio.
