# BlueCheck Advisory

A React + Vite marketing site for an advisory practice, with Home, About, Services, Blogs and Contact pages, theme support, and animated/interactive page backgrounds. Frontend only — this repo contains no backend or API.

## Pages

- `/` — Home
- `/about` — About
- `/services` — Services
- `/blogs` — Blogs
- `/contact` — Contact

Shared UI includes a navbar, footer, theme toggle (`ThemeContext`), an interactive particle background, and tilt cards.

## Tech stack

- React 19, React DOM 19, React Router 7
- Vite (rolldown-vite) with `@vitejs/plugin-react`
- Framer Motion for animation, Lucide React for icons
- Plain CSS per page/component (no CSS framework)

## Getting started

Prerequisites: Node.js and npm.

```bash
git clone https://github.com/AnujDubeyy/bluecheck-advisory.git
cd bluecheck-advisory
npm install
npm run dev
```

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
bluecheck-advisory/
├── index.html
├── vite.config.js
├── eslint.config.js
└── src/
    ├── main.jsx             # Entry point
    ├── App.jsx              # Router, navbar/footer, theme provider
    ├── pages/               # Home, About, Services, Blogs, Contact (+ CSS)
    ├── components/          # Navbar, Footer, ThemeToggle, InteractiveBackground, ParticleNetwork, TiltCard
    └── context/             # ThemeContext
```
