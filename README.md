# Portfolio

My personal site: quant research, software projects, experience and contact details.

Built with Next.js (App Router) and plain CSS. No UI framework.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

`npm run build` makes a production build and `npm run lint` runs ESLint.

## Where things live

| What | File |
|---|---|
| Profile photo | `public/pp.jpg` |
| Résumé (linked from the hero) | `public/Resume.pdf` |
| Small project cards | `data/projects.ts` |
| Hero text, stats and coursework | `components/Hero.tsx` |
| Featured research write-ups | `components/StatArbFeature.tsx`, `components/NoSqlFeature.tsx` |
| Experience and education | `components/Experience.tsx` |
| Skills | `components/Toolkit.tsx` |
| Awards | `components/Honours.tsx` |
| Highlights strip | `components/Ticker.tsx` |
| Colours, fonts and animation | `app/globals.css`, `app/layout.tsx` |

To swap the photo or résumé, replace the file in `public/` and keep the same name.

The price paths behind the hero and the histogram above the footer are simulated with a fixed seed in `lib/simulate.ts`, so they look the same on every load.
