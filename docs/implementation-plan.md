# Portfolio implementation plan

**Status:** Proposed; maintain checkboxes as work is completed.  
**Scope and release gates:** [Project requirements](requirements.md)

## Working approach

Work in the local copy at `C:\Users\ernes\Projects\MyPortFolio`; do not assume the separate Google Drive copy stays synchronized. Preserve existing uncommitted work. Review the current repository and Git status at each session. The existing React/Vite prototype is a starting point, not a finished or publicly approved site.

Target a polished launch within a few weeks. No exact calendar or effort estimate is committed; timing depends on project selection, owner approvals, and test results. A phase can overlap another when its prerequisites are met, but missing required public content blocks release.

## Phase 1 — Content discovery and privacy review

- [ ] Confirm the positioning, introduction, education, and experience wording with the owner; use the replacement résumé only as source material, not blanket permission to publish.
- [ ] Review candidate résumé projects one at a time for disclosure, rights, individual contributions, and evidence. Select two or three explicitly approved case studies.
- [ ] Collect approved public email and profile links, and an explicitly approved public résumé PDF. Do not use the work email or private résumé by default.
- [ ] Build a content inventory: owner, section, source/evidence, draft status, approval status, and outstanding questions. Keep confidential details outside files intended for a public repository.

**Done when:** Every required section has approved source material or a named owner action, and sensitive content is excluded. Final approval of all release content remains a launch gate.

## Phase 2 — Structure and navigation

- [ ] Review the prototype, existing dependencies, build commands, and the Vite `/MyPortFolio/` base path before changing code.
- [ ] Organize content for maintainability without introducing unnecessary libraries. Keep semantic landmarks and section links.
- [ ] Retain desktop sidebar and scrolling sections; replace the current mobile horizontal navigation with the requested compact menu.
- [ ] Implement keyboard-operable controls, visible focus, accurate expanded state, sensible focus behavior, and reduced-motion support. Test navigation across viewport sizes.

**Done when:** The menu and section navigation work by mouse, touch, and keyboard on tested sizes, and known gaps are recorded.

## Phase 3 — Design and section implementation

- [ ] Refine typography, spacing, color contrast, visual hierarchy, and subtle space-inspired accents within the agreed dark blue/cyan direction.
- [ ] Implement the introduction/About and detailed Experience cards with approved copy; highlight integration, testing, and reliable systems.
- [ ] Create two or three approved project case studies covering problem, role, approach, technologies, and supported results; include only approved assets.
- [ ] Reorder Skills to emphasize integration and testing, complete Education, and reduce astronomy to a short mention and visual accent.
- [ ] Add approved email, LinkedIn, GitHub, and public résumé PDF links; verify each. Keep development placeholders clearly labeled and remove or resolve them before public release.

**Done when:** All required sections are complete and accurate, approved by the owner, and consistent across desktop and mobile.

## Phase 4 — Quality assurance and release review

- [ ] Run a clean dependency install when appropriate, production build, and available automated checks. Record versions, commands, outcomes, and limitations.
- [ ] Serve the production build under `/MyPortFolio/`; verify entry page, assets, section anchors, links, and résumé download.
- [ ] Test desktop and mobile in agreed representative browsers/devices, including resizing, zoom, navigation, and overflow. Record actual test environments.
- [ ] Review keyboard access, screen-reader labels and landmarks, focus handling, contrast, reduced motion, and meaningful alternatives. Use automated tooling where available and document what remains untested.
- [ ] Check content, metadata, secrets, sensitive details, external assets, and public PDF. Verify project and contact approvals and rights.
- [ ] Review remaining defects with the owner; fix launch blockers and document accepted limitations.

**Done when:** Required content and approvals are complete, checks are recorded, and no unresolved launch blocker remains. Do not claim compliance or browser coverage beyond testing performed.

## Phase 5 — Authorized GitHub Pages launch

- [ ] Confirm repository, branch, publishing source, build artifact, project base path, and current GitHub Pages guidance.
- [ ] Obtain explicit approval before commits, pushes, GitHub setting changes, workflow activation, or publication. Agree on rollback before deploying.
- [ ] Once approved, configure and publish using the simplest suitable method; do not add secrets to client assets.
- [ ] Check the actual deployment status and public site, including assets, anchors, links, résumé, and mobile view. Report the verified URL and rollback steps.

**Done when:** The owner approves release, deployment is confirmed, and post-launch checks are recorded. If required approvals/content are missing, delay launch.

## Phase 6 — Maintenance

- [ ] Document how to update content, run locally, build, and publish after authorization; keep the working-copy location clear.
- [ ] Periodically review dependencies, links, project accuracy, résumé, and contact details. Reassess privacy and permissions before new public content.

## Decision log and open questions

The [requirements decision log and approval queue](requirements.md#6-decision-log) are the source of truth; update them when the owner makes a decision. Current critical-path unknowns: approved projects and details, experience copy, exact public contact links, approved résumé PDF, test environments, and deployment settings. Record decisions and dates as they are confirmed; never convert a proposed item into an approved one by assumption.