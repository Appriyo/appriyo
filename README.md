# <img src="https://raw.githubusercontent.com/Appriyo/.github/main/profile/assets/logo.png" width="30" height="30" alt="Appriyo Logo"> Appriyo – Official Website

[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE.txt)
[![Security: Responsible Disclosure](https://img.shields.io/badge/Security-Responsible%20Disclosure-brightgreen.svg)](SECURITY.md)
[![PRs: Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](.github/PULL_REQUEST_TEMPLATE.md)
[![Issues: Welcome](https://img.shields.io/badge/Issues-Welcome-brightgreen.svg)](.github/ISSUE_TEMPLATE/bug_report.md)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)](https://vitejs.dev/)

**Modern, responsive website for Appriyo — a software development company focused on building practical, reliable, and scalable digital solutions for real business problems.**

👉 **[Visit Live Website](https://appriyo.com)** 👈

---

## 📋 Table of Contents

- [ Appriyo – Official Website](#-appriyo--official-website)
  - [📋 Table of Contents](#-table-of-contents)
  - [🌟 Overview](#-overview)
  - [🎯 Live Purpose](#-live-purpose)
  - [🧩 Website Sections](#-website-sections)
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
  - [Key Improvements Made](#key-improvements-made)

---

## 🌟 Overview

This repository contains the **official web presence of Appriyo** — a custom software development company serving startups, small to mid-sized businesses, and service teams.

The website showcases:

- Our services and solutions
- Case studies and business impact
- Company values and working principles
- Core team information
- Contact and consultation pathways

**Built with clarity, responsibility, and long-term thinking.**

---

## 🎯 Live Purpose

| Purpose                | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| **Present Services**   | Clearly communicate what we build and how we help              |
| **Build Trust**        | Convey professionalism, technical capability, and reliability  |
| **Educate Businesses** | Help potential clients understand our problem-solving approach |
| **Enable Contact**     | Make it easy to start a conversation about business challenges |

---

## 🧩 Website Sections

The website delivers a clean, structured experience:

| Section          | Description                                               |
| ---------------- | --------------------------------------------------------- |
| **Hero**         | Company positioning and core value proposition            |
| **Services**     | What we build (MVP, custom software, SaaS, consulting)    |
| **Solutions**    | Problem-driven solutions with measurable outcomes         |
| **Why Appriyo**  | Our differentiators and partnership advantages            |
| **Our Approach** | Direct collaboration, transparency, sustainable standards |
| **About**        | Company principles, working style, and core team          |
| **Contact**      | Direct communication with clear expectations              |
| **Footer**       | Company info, legal links, and social connections         |

---

## 🛠 Tech Stack

| Technology            | Purpose                              |
| --------------------- | ------------------------------------ |
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
| ------------------------------------------ | -------------- |
| Fully responsive (desktop, tablet, mobile) | ✅ Complete    |
| Dark / Light theme support                 | ✅ Complete    |
| Clean typography and spacing               | ✅ Complete    |
| Readability and trust focus                | ✅ Complete    |
| Cross-browser compatibility                | ✅ Complete    |
| Accessibility (WCAG 2.1 AA)                | 🔄 In Progress |

**Design Collaboration:** UI/UX design by Preota, implemented in code with pixel-level attention.

---

## 🔧 Planned Improvements

- [ ] Convert sections into dedicated routes (`/services`, `/solutions`, `/about`)
- [ ] Add React Router for scalable navigation
- [ ] SEO optimization with meta tags and structured data
- [ ] Analytics integration (privacy-friendly)
- [ ] Blog / Insights section
- [ ] Careers page
- [ ] Performance optimizations (Core Web Vitals)
- [ ] Contact form with validation and email integration

---

## 🤝 Team & Collaboration

| Role                           | Team Member       | Main Responsibilities                                 |
| ------------------------------ | ----------------- | ----------------------------------------------------- |
| **Development & Architecture** | Shahajalal Mahmud | Tech decisions, code review, security, architecture   |
| **UI & Design**                | Preota Saha       | Frontend architecture, design systems, themes         |
| **Testing & QA**               | Md Munna Sardar   | Quality assurance, testing strategy, bug verification |
| **Marketing & Social Media**   | Hazera Islam Mim  | Brand communication, content strategy, visual assets  |

📖 **Detailed team information:** See [TEAMS.md](TEAMS.md)

---

## 📍 Company Information

| Detail           | Information                                  |
| ---------------- | -------------------------------------------- |
| **Company Name** | Appriyo Technologies                         |
| **Industry**     | Software Development & IT Solutions          |
| **Location**     | Khulna, Bangladesh                           |
| **Service Area** | Remote services worldwide                    |
| **Email**        | <contact@appriyo.com>                        |
| **Phone**        | +880 1902182656                              |
| **Office Hours** | Sunday – Thursday, 9:00 AM – 6:00 PM (GMT+6) |

---

## 📚 Documentation

| File                       | Description                                           |
| -------------------------- | ----------------------------------------------------- |
| [TEAMS.md](TEAMS.md)       | Core team member profiles and responsibilities        |
| [PRIVACY.md](PRIVACY.md)   | Privacy policy covering data collection and usage     |
| [TERMS.md](TERMS.md)       | Terms of service for website use                      |
| [SECURITY.md](SECURITY.md) | Security vulnerability reporting policy               |
| [LICENSE.txt](LICENSE.txt) | Proprietary license (viewing only, no commercial use) |

### Issue & Pull Request Templates

| Template                    | Purpose                                  |
| --------------------------- | ---------------------------------------- |
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

> _Appriyo focuses on solving real business problems, not just delivering code._
>
> This website reflects our values: **clarity, responsibility, and long-term thinking.**

We build systems that remain maintainable long after launch. We partner with businesses — we don't just write code for them.

---

## 📞 Contact

| Method       | Details                                                     |
| ------------ | ----------------------------------------------------------- |
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
</div>
```

---

## Key Improvements Made

| Area                      | Improvement                                                                  |
| ------------------------- | ---------------------------------------------------------------------------- |
| **Badges**                | Added status badges for license, security, PRs, issues, and tech stack       |
| **Table of Contents**     | Quick navigation for longer README                                           |
| **Tables**                | Better organization for sections, tech stack, team roles, and documentation  |
| **Getting Started**       | Clear installation and build commands                                        |
| **Project Structure**     | Visual tree showing all new files (TEAMS, PRIVACY, TERMS, .github templates) |
| **Documentation Section** | Explicit table linking to all `.md` files you requested                      |
| **Contributing**          | Clear distinction between internal team and external contributors            |
| **Contact Table**         | Organized contact information                                                |
| **Visual Hierarchy**      | Better emoji usage and section separation                                    |
| **Status Indicators**     | ✅ Complete / 🔄 In Progress for design features                             |
| **Final Note**            | Preserved your original closing message with emphasis                        |

The README now serves as a complete **entry point** for anyone visiting your GitHub repo — whether they're a potential client, a security researcher, a job seeker, or a team member.
