# lannin-nakai.dev (GitHub Pages)

Personal portfolio site - React + Vite, no UI framework/CSS library, deployed
to GitHub Pages via GitHub Actions. Lives at this repo's Pages URL since the
repo is named `<username>.github.io`, so it serves from the root domain.

## Sections

- **Hero** - name, one-line pitch, resume download, contact links
- **About** - bio + education timeline
- **Skills** - grouped by category (languages/data tools, data & analytics,
  collection/automation, working tools)
- **Projects** - [UFC Fighter Stats](https://github.com/LNakai-OSU/ufc-data-insights-web-app),
  a full-stack fighter/fight-stats dashboard with an NL-to-SQL chat assistant
- **Experience** - work + research history
- **Contact** - email, GitHub, LinkedIn

Content lives in `src/data.js` - update it there rather than in the
components when adding a new project or job.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site with Vite and publishes `dist/` via `actions/deploy-pages`. No manual
build/push step needed - just commit and push.

The resume PDF lives at `public/assets/Lannin-Nakai-Resume.pdf`; replace that
file (same name) to update the downloadable resume without touching any code.
