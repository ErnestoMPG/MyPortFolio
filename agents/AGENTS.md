# Repository instructions for coding agents

## Before working

- Inspect the relevant files and Git status; preserve existing user changes. Follow the user's requested scope and interaction mode.
- Read `.clinerules/portfolio.md` and the relevant portions of `docs/requirements.md` and `docs/implementation-plan.md`. Follow applicable higher-priority instructions if guidance conflicts.
- Verify the current stack, scripts, dependencies, and hosting configuration rather than relying on historical assumptions. This project currently uses React and Vite.
- Ask focused questions when a decision requires information or approval that cannot be inferred safely.

## Skills and specialist roles

- When changing domain terminology, a glossary, or an architectural decision record, read and follow `agents/skills/domain-modeling/SKILL.md` and its referenced formats. Resolve terminology with the owner; create glossary entries and ADRs only when justified by that guide.
- For portfolio content, project research, visual design, GitHub Pages, and launch review, use the corresponding specialist skill if the agent's environment provides it and the task warrants it. Otherwise follow the relevant repository guidance and disclose any meaningful limitations. Do not claim a skill was invoked or a separate agent was run when it was not.
- Skill availability and invocation depend on the coding tool. This file defines instructions, not autonomous agents or tool configuration.
- Read the applicable local `agents/skills/<skill-name>/SKILL.md` before performing a matching task. The skill directories contain portable instructions and do not imply automatic registration with the current tool. If a matching native skill is available, invoke it according to the tool's instructions as well.
- Skill index: `domain-modeling` for domain terminology and decisions; `github-portfolio-research` for project evidence; `portfolio-storytelling` for portfolio content; `portfolio-web-design` for site design; `github-pages-portfolio` for deployment; `website-quality-launch` for quality review; `remotion-video-workflow`, `short-form-video`, `youtube-video-planning`, and `youtube-publishing` for explicitly requested video tasks. Video work is outside the current portfolio scope unless the owner changes it.

## Engineering and content standards

- Keep changes focused, maintainable, and consistent with existing code. Avoid unnecessary dependencies and architecture; explain consequential tradeoffs before changing the stack or installing dependencies.
- Preserve the GitHub Pages project base path `/MyPortFolio/` unless the hosting configuration is intentionally changed. Check links and assets against the actual deployment setup.
- Use semantic markup, responsive layouts, keyboard-accessible interactions, visible focus, appropriate accessible names, and reduced-motion support where relevant.
- Treat existing biographical and project claims as unverified until the owner approves them for public release. Never invent credentials, contributions, outcomes, or metrics. Do not expose private information or copy private materials into public-facing files without approval.
- Do not commit, push, deploy, change GitHub settings, or publish personal details without explicit user approval.

## Verification and handoff

- Run checks appropriate to the change. For site changes, run `npm run build` when the environment permits; check project-base-path behavior and relevant accessibility or responsive behavior when feasible.
- Inspect the final diff and verify edited files. Report commands and results, relevant assumptions, and tests or reviews that could not be performed. Do not claim an unperformed test or audit passed.