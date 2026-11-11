---
name: github-pages-portfolio
description: Plan, configure, and troubleshoot GitHub Pages for the portfolio.
---

# GitHub Pages deployment

1. Inspect the remote, branch, Git status, build configuration, and hosting constraints. Consult current official documentation for exact settings and workflow versions.
2. Compare branch publishing and GitHub Actions; confirm the publishing source before configuration. Preserve the project base path and check assets, navigation, static hosting, and client-side route refreshes.
3. If a build is needed, ensure the artifact contains its entry file at the root, use least privilege, and never expose credentials. Validate the build locally under the intended base path.
4. Obtain explicit approval before pushing, changing settings, enabling workflows, or deploying. After an authorized deployment, inspect the workflow and public site, smoke-test routes and assets, and report verified URLs and rollback steps.