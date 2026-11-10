# Portfolio project requirements

**Status:** Planning baseline; subject to owner review.  
**Owner:** Ernesto M. Perez Garcia  
**Related document:** [Phased implementation plan](implementation-plan.md)

## 1. Purpose and success

Create a polished, professional personal portfolio for a mixed audience, prioritizing systems-engineering recruiters and hiring managers. The central message is: **Ernesto builds and supports reliable systems through integration and testing.** The public title is **Systems Engineer & Software Developer**. The voice should be professional with a personal touch.

Success means a visitor can quickly understand the owner's background, review verified experience and two or three approved project case studies, and use approved contact or résumé links. A polished first release is the goal within a few weeks; the date is a target, not a commitment. Delay launch if required content or approvals are not ready.

## 2. Scope and section requirements

| Area | Requirements | Acceptance criteria for first public release |
| --- | --- | --- |
| Introduction / About | Present name, title, and a concise summary focused on systems integration, testing, and reliability. | Accurate, owner-approved copy is legible immediately; key navigation and contact paths are clear. |
| Experience | Use detailed cards emphasizing responsibilities and supported outcomes. Describe the current role broadly without naming its employer or projects. The University of Florida may be named; do not name the other private employer. | Each card's dates, role, claims, and public wording are approved; outcomes are supported rather than invented. |
| Projects | Feature two or three in-depth projects. Consider the replacement résumé as a starting point, but select and review each project individually. | Each approved case study covers problem, individual role, approach, technologies, and verified results where available; unknown results are explicitly omitted or identified, not fabricated. All details and assets are approved for public release. |
| Skills | Lead with systems integration and testing, followed by relevant supporting languages, tools, and technologies. | Skills are accurate, relevant, grouped clearly, and reviewed by the owner; no unsupported proficiency ratings or years are implied. |
| Education | Present University of Florida degrees, graduation date, and Physics minor. | Degree wording and May 2026 graduation are accurate and owner-approved. |
| Astronomy | Keep astronomy/astrophysics to a brief mention and visual accent supporting the professional story. | It does not overwhelm engineering content; copy and visuals are approved and accessible. |
| Contact | Provide a personal email link plus LinkedIn and GitHub links. | Exact addresses and URLs are supplied, explicitly approved, tested, and clearly labeled. No work email or phone number is published by default. |
| Résumé | Offer an owner-approved public PDF. | Correct file and contents are approved, accessible through a working link, and tested before launch; no private résumé is copied by default. |

YouTube and video creation are outside the scope of this professional site. No analytics are planned for the initial release. A server-backed contact form is not required; use an email link.

## 3. Design and user experience

- Use a section-based scrolling layout inspired by the organizational approach of the supplied references, with original implementation and a distinct visual identity. Do not copy their assets or text without rights and approval.
- Refine the existing dark, professional, subtly space-inspired look with deep blue and cool cyan accents. Use initials as the initial identity mark unless the owner chooses another asset.
- Keep a persistent desktop sidebar. On mobile, replace the current horizontally scrolling navigation with a compact menu button and section list. The button must expose its state, work with keyboard and assistive technologies, and make the links usable without trapping focus.
- Use subtle transitions and small space-inspired details; respect reduced-motion preferences. Ensure contrast, readable typography, clear focus states, and practical touch targets.
- During development, clearly labeled placeholders are acceptable. The public release must not depend on unapproved placeholder content; complete or resolve all required sections before launch.

## 4. Technical and operational requirements

- Maintain a React + Vite static site. Prefer existing dependencies; justify and approve consequential additions. Keep section content maintainable and avoid unsupported claims.
- Target GitHub Pages as a project site initially. Preserve the `/MyPortFolio/` base path in build configuration and test navigation and asset URLs under it; reassess if hosting or domain changes. No custom domain is required for the first release.
- Use the local working copy at `C:\Users\ernes\Projects\MyPortFolio` unless the owner changes it. The Google Drive copy is separate and can become stale; do not silently overwrite either copy. Dependency installation in the Drive-backed directory previously produced corrupted files.
- Never commit secrets or private material. Assume site content, public assets, and repository documentation may become public if pushed to a public repository.
- Do not push, commit, configure GitHub, or deploy without explicit owner approval. Confirm personal details and rights before public release.

## 5. Quality and release criteria

Before requesting launch approval:

1. Run the production build and relevant automated checks; document commands, results, and any unavailable tests. Test the built site under the project base path.
2. Manually test desktop and mobile layouts, including navigation, touch targets, zoom, overflow, and representative browsers/devices available to the team. Record exact environments and untested gaps.
3. Test keyboard navigation, visible focus, semantic headings and landmarks, accessible names and mobile-menu state, contrast, image alternatives, and reduced motion. Automated checks supplement rather than replace manual testing; define tools and detailed targets before execution.
4. Verify all approved content, external links, email link, project assets, and résumé download. Confirm no sensitive or unapproved material is included in the site, repository, or generated output.
5. Check page metadata and basic loading behavior. Do not claim measured performance or accessibility conformance without evidence.
6. Obtain explicit owner approval before public deployment. After authorized deployment, smoke-test the actual public URL and record results and rollback steps.

## 6. Decision log

| Decision | Status |
| --- | --- |
| React + Vite; GitHub Pages project site | Agreed; deployment not yet approved. |
| Desktop sidebar and scrolling sections; mobile compact menu | Agreed; mobile menu remains to implement and test. |
| Dark professional palette, blue/cyan accents, restrained space theme | Agreed; design refinement remains. |
| Two or three approved in-depth projects and a public résumé | Required before launch; specific content not yet approved. |
| Current employer/projects unnamed; only the university may be named among résumé organizations | Agreed; review all wording before release. |
| No citizenship or clearance, no initial analytics, no YouTube section | Agreed. |
| Polished release in a few weeks, delayed if approvals are incomplete | Target agreed; exact date unspecified. |

## 7. Open questions and approval queue

- Which two or three projects and which specific details, assets, links, and outcomes can be shared publicly?
- What exact wording, dates, responsibilities, and supported outcomes are approved for each experience card?
- Which exact personal email, LinkedIn URL, and GitHub URL are approved for public contact?
- Which PDF is approved for public résumé download, and has its content and metadata been reviewed?
- Which skills should be emphasized or omitted, and what evidence supports each claim?
- Which target browsers/devices, accessibility tools, and measurable quality thresholds will be used for release?
- What is the target launch date, publishing source, and rollback approach? GitHub account changes and deployment remain subject to explicit approval.

Do not put private résumé contents or confidential work details into these public-facing project documents merely to resolve an open question.