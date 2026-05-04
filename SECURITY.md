# Security Policy

**Effective Date:** January 1, 2026
**Last Updated:** May 5, 2026

---

## 1. Our Commitment

At Appriyo Technologies, security is not an afterthought — it is a core responsibility. We are committed to maintaining the security and integrity of our systems, website, products (Amar Repair, Amar Batch, Amar Card), and the data entrusted to us by our clients.

We genuinely appreciate the efforts of security researchers, developers, and the broader community who help us identify and resolve vulnerabilities responsibly.

---

## 2. Scope

This policy applies to:

| In Scope                                              | Out of Scope                                                     |
|-------------------------------------------------------|------------------------------------------------------------------|
| [appriyo.com](https://appriyo.com) and all subdomains | Third-party services we integrate with (report to them directly) |
| Appriyo-owned GitHub repositories                     | Issues with no practical security impact                         |
| Amar Repair, Amar Batch, Amar Card products           | UI/UX or visual design issues without a security vector          |
| APIs and backend systems operated by Appriyo          | Performance or availability issues unrelated to security         |
| Authentication and access control systems             | Non-exploitable theoretical vulnerabilities                      |

If you are unsure whether your finding is in scope, report it anyway — we will evaluate it fairly.

---

## 3. Reporting a Vulnerability

If you discover a security vulnerability, please report it **privately and responsibly**.

### Primary Contact

📧 **security@appriyo.com**
*(If unavailable, use: contact@appriyo.com with subject: "Security Vulnerability Report")*

### What to Include in Your Report

Please provide as much detail as possible:

- **Summary** — A clear, concise description of the vulnerability
- **Affected System** — Website, product, API, or repository
- **Severity Assessment** — Your estimate of the impact (critical, high, medium, low)
- **Steps to Reproduce** — Detailed, step-by-step instructions to trigger the issue
- **Proof of Concept** — Screenshots, screen recordings, logs, or code snippets (if applicable)
- **Potential Impact** — What an attacker could achieve if this were exploited
- **Your Contact Info** — So we can follow up with you directly

The more detail you provide, the faster we can assess and resolve the issue.

---

## 4. Responsible Disclosure Guidelines

We ask that all security researchers follow these guidelines:

### You MUST:
- Report the vulnerability to us privately before any public disclosure
- Give us a reasonable amount of time to investigate and remediate the issue
- Act in good faith — your goal should be improving security, not causing harm

### You must NOT:
- Publicly disclose the vulnerability until it has been resolved and we have given clearance
- Access, modify, delete, or exfiltrate user or client data
- Disrupt, degrade, or deny service to our systems or users
- Perform social engineering attacks on Appriyo team members
- Attempt physical access to our infrastructure
- Conduct automated scanning that generates significant traffic load without prior permission
- Demand payment or threaten disclosure in exchange for vulnerability details

Researchers who follow this policy will not face legal action from Appriyo for good-faith security research.

---

## 5. Response Timeline

We are committed to timely communication:

| Stage                            | Target Timeline                                      |
|----------------------------------|------------------------------------------------------|
| **Initial Acknowledgement**      | Within 2 business days of receiving your report      |
| **Triage & Severity Assessment** | Within 5 business days                               |
| **Status Update**                | Within 10 business days                              |
| **Resolution (Critical)**        | As fast as possible — typically within 7 days        |
| **Resolution (High)**            | Within 14 days                                       |
| **Resolution (Medium/Low)**      | Within 30 days                                       |
| **Disclosure Coordination**      | After resolution, we will coordinate timing with you |

Timelines may vary depending on the complexity of the issue. We will keep you informed throughout the process.

---

## 6. Severity Classification

We assess vulnerabilities using the following framework:

| Severity          | Description                                 | Examples                                                                         |
|-------------------|---------------------------------------------|----------------------------------------------------------------------------------|
| **Critical**      | Direct, immediate risk to data or systems   | Remote code execution, authentication bypass, mass data exposure                 |
| **High**          | Significant risk requiring urgent attention | SQL injection, stored XSS, privilege escalation                                  |
| **Medium**        | Notable risk with limited scope             | Reflected XSS, CSRF on non-critical functions, insecure direct object reference  |
| **Low**           | Minor risk with minimal real-world impact   | Verbose error messages, missing security headers, clickjacking on low-risk pages |
| **Informational** | No direct risk, but worth addressing        | Best practice recommendations, configuration improvements                        |

---

## 7. Supported Versions

Only the **latest production version** of our website and products is actively maintained and receives security updates. If you are testing an older version, please verify the issue still exists in the current live environment before reporting.

---

## 8. What We Will Not Fix

The following categories are generally considered out of scope and will not result in a security fix:

- Missing security headers with negligible practical impact in our context
- Rate limiting on low-sensitivity, non-authenticated public endpoints
- Self-XSS (requires a user to attack themselves)
- Open redirect that does not facilitate phishing or token theft
- Email spoofing without demonstrated impact (SPF/DMARC informational only)
- Outdated software versions without a demonstrated exploitable vulnerability
- Social engineering or physical attack scenarios
- Vulnerabilities requiring physical device access

---

## 9. Acknowledgements

We value and respect the work of the security research community. Researchers who responsibly disclose valid, in-scope vulnerabilities will be:

- Acknowledged in our **Security Hall of Fame** (if they consent to being named)
- Credited in the relevant security advisory or release notes
- Treated with respect and professionalism throughout the process

We currently do not operate a paid bug bounty program. This may change in the future as our products scale.

---

## 10. Legal

Appriyo will not pursue legal action against researchers who:
- Discover and report vulnerabilities in good faith
- Follow the guidelines in this policy
- Do not exploit vulnerabilities beyond what is necessary to demonstrate the issue
- Do not harm users, systems, or data in the course of their research

Appriyo reserves the right to take legal action against individuals who use security research as a pretext to perform malicious activity, extortion, or unauthorized access.

---

## 11. Contact

| Purpose                        | Contact                                                 |
|--------------------------------|---------------------------------------------------------|
| Security vulnerability reports | security@appriyo.com                                    |
| General security questions     | contact@appriyo.com                                     |
| Urgent / critical issues       | Contact via email with subject: **[CRITICAL SECURITY]** |

**Appriyo Technologies**
Khulna, Bangladesh
🕘 Sunday – Thursday, 9:00 AM – 6:00 PM (GMT+6)

---

*Security is a shared responsibility. We thank you for helping us protect our systems and the businesses that trust us.*

*© 2026 Appriyo Technologies. All rights reserved.*