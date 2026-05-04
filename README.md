# <img src="https://raw.githubusercontent.com/Appriyo/.github/main/profile/assets/logo.png" width="30" height="30" alt="Appriyo Logo"> Appriyo – Official Website

[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE.txt)
[![Security: Responsible Disclosure](https://img.shields.io/badge/Security-Responsible%20Disclosure-brightgreen.svg)](SECURITY.md)
[![PRs: Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](.github/PULL_REQUEST_TEMPLATE.md)
[![Issues: Welcome](https://img.shields.io/badge/Issues-Welcome-brightgreen.svg)](.github/ISSUE_TEMPLATE/bug_report.md)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)](https://vitejs.dev/)
[![AI-Powered](https://img.shields.io/badge/AI-Powered-FF6B35?logo=openai)](https://appriyo.com)

**Modern, responsive website for Appriyo — an AI-powered digital transformation and software solutions company focused on solving real-world business problems through simple, efficient, and practical technology.**

👉 **[Visit Live Website](https://appriyo.com)** 👈

---

## 📋 Table of Contents

- [ Appriyo – Official Website](https://appriyo.com)
  - [📋 Table of Contents](#-table-of-contents)
  - [🌟 Overview](#-overview)
  - [🎯 Live Purpose](#-live-purpose)
  - [🧩 Website Sections](#-website-sections)
  - [💰 Core Services](#-core-services)
    - [❌ What We Don't Do](#-what-we-dont-do)
    - [🚀 Our Products (Built from Real Problems)](#-our-products-built-from-real-problems)
  - [🛠 Tech Stack](#-tech-stack)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Build for Production](#build-for-production)
  - [📁 Project Structure](#-project-structure)
  - [🎨 Design \& UI](#-design--ui)
  - [🔧 Planned Improvements](#-planned-improvements)
  - [🤝 Team \& Collaboration](#-team--collaboration)
  - [📍 Company Information](#-company-information)
  - [📚 Documentation](#-documentation)
    - [Issue \& Pull Request Templates](#issue--pull-request-templates)
  - [🤝 Contributing](#-contributing)
    - [For Team Members (Internal)](#for-team-members-internal)
    - [For External Contributors](#for-external-contributors)
  - [📜 License](#-license)
  - [💬 Final Note](#-final-note)
  - [📞 Contact](#-contact)
  - [Key Changes Made Based on Core Identity:](#key-changes-made-based-on-core-identity)

---

## 🌟 Overview

This repository contains the **official web presence of Appriyo** — an AI-powered digital transformation and software solutions company serving small to medium businesses, startups, and service providers.

**Our Core Identity:**

- **Problem-first, not technology-first** — We solve real business problems
- **Simplicity over complexity** — Practical solutions that actually work
- **Long-term value over short-term gain** — Systems that remain maintainable
- **AI-assisted, not AI-led** — Technology serves the problem, not the other way around

The website showcases:

- Our **core services** (Business Automation, Custom Software, AI Integration)
- **Real-world products** built from actual problems
- Company values and working principles
- Core team information
- Contact and consultation pathways

**Built with clarity, responsibility, and long-term thinking.**

---

## 🎯 Live Purpose

| Purpose                | Description                                                           |
|------------------------|-----------------------------------------------------------------------|
| **Present Services**   | Clearly communicate our AI-powered automation services                |
| **Build Trust**        | Convey professionalism, technical capability, and reliability         |
| **Educate Businesses** | Help SMBs understand how to replace manual workflows                  |
| **Enable Contact**     | Make it easy to start a conversation about operational inefficiencies |

---

## 🧩 Website Sections

The website delivers a clean, structured experience:

| Section          | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| **Hero**         | AI-powered digital transformation positioning                            |
| **Services**     | Business Process Automation, Custom Software, AI Integration, Consulting |
| **Solutions**    | Problem-driven solutions with measurable outcomes                        |
| **Why Appriyo**  | Simplicity, practicality, long-term partnership                          |
| **Our Approach** | Direct collaboration, transparency, problem-first methodology            |
| **About**        | Company principles, working style, and core team                         |
| **Contact**      | Consultation for replacing manual workflows                              |
| **Footer**       | Company info, legal links, and social connections                        |

---

## 💰 Core Services

Appriyo offers ONLY these focused services:

| Service                               | Description                                                      |
|---------------------------------------|------------------------------------------------------------------|
| **Business Process Automation**       | Replace repetitive manual tasks with automated workflows         |
| **Custom Business Software**          | Build tools tailored to replace paper-based/inefficient systems  |
| **AI Integration & Smart Systems**    | AI-powered assistants and smart automation workflows             |
| **Digital Transformation Consulting** | Analyze operations, identify inefficiencies, implement solutions |

### ❌ What We Don't Do

- Generic website-only projects (unless part of system)
- One-off freelance tasks without long-term value
- Projects without clear business impact
- Pure design-only work without functionality

### 🚀 Our Products (Built from Real Problems)

- **Amar Repair** - Repair store management system
- **Amar Batch** - Teacher/Batch management system
- **Amar Card** - NFC digital contact card

---

## 🛠 Tech Stack

| Technology            | Purpose                              |
|-----------------------|--------------------------------------|
| **React 18**          | UI Library                           |
| **Vite**              | Build tool & development server      |
| **Tailwind CSS**      | Utility-first styling                |
| **DaisyUI**           | Component library on top of Tailwind |
| **JavaScript (ES6+)** | Core language                        |
| **HTML5 & CSS3**      | Markup and base styles               |

**Architecture:** Component-first, designed for easy scaling into a multi-page application.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Appriyo/appriyo-website.git

# Navigate to project directory
cd appriyo-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
appriyo-website/
├── .github/                    # GitHub templates & workflows
│   ├── ISSUE_TEMPLATE/         # Bug, feature, security templates
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── CODEOWNERS
├── docs/
├── public/                     # Static assets
├── src/
│   ├── components/             # Reusable UI components
│   ├── sections/               # Page sections (Hero, Services, etc.)
│   ├── styles/                 # Global styles & Tailwind config
│   └── App.jsx                 # Main application
├── README.md                   # You are here
├── TEAMS.md                    # Core team information
├── PRIVACY.md                  # Privacy policy
├── TERMS.md                    # Terms of service
├── SECURITY.md                 # Security vulnerability policy
├── LICENSE.txt                 # Proprietary license
└── ...
```

---

## 🎨 Design & UI

| Feature                                    | Status         |
|--------------------------------------------|----------------|
| Fully responsive (desktop, tablet, mobile) | ✅ Complete     |
| Dark / Light theme support                 | ✅ Complete     |
| Clean typography and spacing               | ✅ Complete     |
| Readability and trust focus                | ✅ Complete     |
| Cross-browser compatibility                | ✅ Complete     |
| Accessibility (WCAG 2.1 AA)                | 🔄 In Progress |

**Design Collaboration:** UI/UX design by Preota, implemented in code with pixel-level attention.

---

## 🔧 Planned Improvements

- [ ] Convert sections into dedicated routes (`/services`, `/solutions`, `/about`)
- [ ] Add React Router for scalable navigation
- [ ] SEO optimization with meta tags and structured data
- [ ] Analytics integration (privacy-friendly)
- [ ] Blog / Insights section focused on automation & AI for SMBs
- [ ] Product pages for Amar Repair, Amar Batch, Amar Card
- [ ] Performance optimizations (Core Web Vitals)
- [ ] Contact form with validation and email integration

---

## 🤝 Team & Collaboration

| Role                           | Team Member       | Main Responsibilities                                 |
|--------------------------------|-------------------|-------------------------------------------------------|
| **Development & Architecture** | Shahajalal Mahmud | Tech decisions, code review, security, architecture   |
| **UI & Design**                | Preota Saha       | Frontend architecture, design systems, themes         |
| **Testing & QA**               | Md Munna Sardar   | Quality assurance, testing strategy, bug verification |
| **Marketing & Social Media**   | Hazera Islam Mim  | Brand communication, content strategy, visual assets  |

📖 **Detailed team information:** See [TEAMS.md](TEAMS.md)

---

## 📍 Company Information

| Detail           | Information                                            |
|------------------|--------------------------------------------------------|
| **Company Name** | Appriyo Technologies                                   |
| **Industry**     | AI-Powered Digital Transformation & Software Solutions |
| **Location**     | Khulna, Bangladesh                                     |
| **Service Area** | Remote services worldwide                              |
| **Email**        | <contact@appriyo.com>                                  |
| **Phone**        | +880 1410394038                                        |
| **Office Hours** | Sunday – Thursday, 9:00 AM – 6:00 PM (GMT+6)           |

---

## 📚 Documentation

| File                       | Description                                           |
|----------------------------|-------------------------------------------------------|
| [TEAMS.md](TEAMS.md)       | Core team member profiles and responsibilities        |
| [PRIVACY.md](PRIVACY.md)   | Privacy policy covering data collection and usage     |
| [TERMS.md](TERMS.md)       | Terms of service for website use                      |
| [SECURITY.md](SECURITY.md) | Security vulnerability reporting policy               |
| [LICENSE.txt](LICENSE.txt) | Proprietary license (viewing only, no commercial use) |

### Issue & Pull Request Templates

| Template                    | Purpose                                  |
|-----------------------------|------------------------------------------|
| `bug_report.md`             | Report bugs or unexpected behavior       |
| `feature_request.md`        | Suggest improvements or new features     |
| `security_vulnerability.md` | Private security vulnerability reporting |
| `PULL_REQUEST_TEMPLATE.md`  | PR checklist and review process          |
| `CODEOWNERS`                | Automatic code review assignment         |

---

## 🤝 Contributing

**Appriyo is a proprietary project maintained by the core team.**

### For Team Members (Internal)

- Follow the [Pull Request Template](.github/PULL_REQUEST_TEMPLATE.md)
- Ensure all checks pass before requesting review
- Reference related issues in PR descriptions

### For External Contributors

We appreciate bug reports and security disclosures:

- **Bugs:** Use the [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md)
- **Security Issues:** Follow [SECURITY.md](SECURITY.md) – do NOT create public issues
- **Feature Requests:** Use the [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md)

**Note:** Direct code contributions from external contributors require explicit permission due to proprietary licensing.

---

## 📜 License

```
Appriyo Proprietary License

Copyright (c) 2026 Appriyo. All rights reserved.

This project is proprietary and maintained by Appriyo.
Unauthorized commercial use, reproduction, or redistribution is not permitted.

You MAY view the source code for educational or reference purposes.
You MAY fork the repository for personal, non-commercial use.

You MAY NOT use this project for commercial purposes, redistribute it,
claim it as your own, or use Appriyo branding without permission.
```

📧 For licensing inquiries: **<contact@appriyo.com>**

---

## 💬 Final Note

> _Appriyo exists to solve problems—not to build software for the sake of building software._
>
> _Problem-first, not technology-first. Simplicity over complexity. Practical over theoretical._

We help small and medium businesses replace manual workflows with simple, automated, and AI-assisted systems. We build systems that remain maintainable long after launch. We partner with businesses — we don't just write code for them.

---

## 📞 Contact

| Method       | Details                                                     |
|--------------|-------------------------------------------------------------|
| **Email**    | <contact@appriyo.com>                                       |
| **Phone**    | +880 1410394038                                             |
| **LinkedIn** | [Appriyo on LinkedIn](https://linkedin.com/company/appriyo) |
| **GitHub**   | [github.com/Appriyo](https://github.com/Appriyo)            |

---

**Built with React, Tailwind CSS, and DaisyUI**  
**© 2026 Appriyo Technologies. All rights reserved.**

---

<div align="center">
  <sub>Small team. Direct communication. Long-term responsibility.</sub>
  <br/>
  <sub>Helping businesses replace manual work with simple, AI-powered systems.</sub>
</div>
```

## Key Changes Made Based on Core Identity:

| Area                   | Change                                                                        |
|------------------------|-------------------------------------------------------------------------------|
| **Tagline**            | Updated to reflect "AI-powered digital transformation and software solutions" |
| **Overview**           | Added Core Identity section with 4 key principles from the constitution       |
| **Services Section**   | Completely revamped to match the 4 core services from §5 of the constitution  |
| **"What We Don't Do"** | Added clear boundaries from §5 (services Appriyo will NOT focus on)           |
| **Products Section**   | Added Amar Repair, Amar Batch, Amar Card from §6 (Product Strategy)           |
| **Purpose**            | Changed "replace manual workflows" language to match primary focus from §2    |
| **Blog Plans**         | Changed to "automation & AI for SMBs" (aligned with target market from §4)    |
| **Industry**           | Updated to "AI-Powered Digital Transformation & Software Solutions"           |
| **Final Note**         | Replaced with the exact final principle from §12 of the constitution          |
| **Footer**             | Added the one-line positioning from §11                                       |
