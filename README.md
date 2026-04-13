# Cyberpunq 2045

An interactive narrative project built for UTC1102S.

This repository contains a standalone React JSX experience:

- CyberpunQ 2045: a branching, choice-driven cyberpunk story game.

## Project Contents

- `the-chip-game.jsx`: main game component (`export default function Game()`)
- `the-meridian-news.jsx`: news app component (`export default function App()`)
- `img/`: image assets used for story scenes and outcomes
- `manus-image-prompts.md`: prompt/source notes for image generation

## Story Context

The project explores a near-future world where technology infrastructure, governance, and humanitarian systems are deeply tied to a single platform ecosystem. The game and the news app are companion pieces:

- The game puts the player inside a personal, decision-heavy narrative.
- The news app presents broader geopolitical and ethical context through articles and opinion pieces.

## How To Run

This repository is already scaffolded as a Vite React app and currently configured to launch the chip game.

1. Install dependencies:

	```bash
	npm install
	```

2. Start the app:

	```bash
	npm run dev
	```

3. Open the local URL shown by Vite.

## Deploying To Vercel

This repo is already set up for chip game deployment (`src/App.jsx` imports `the-chip-game.jsx`, and static images are under `public/img`).

1. Test production build locally:

	```bash
	npm install
	npm run build
	npm run preview
	```

2. Push changes to GitHub, then import the repo in Vercel.

3. In Vercel project settings, use:

	- Framework Preset: Vite
	- Install Command: npm install
	- Build Command: npm run build
	- Output Directory: dist

4. Deploy. Each push to `main` will auto-redeploy.

### Optional: Deploy the news app instead

If you later want to deploy the news experience, change `src/App.jsx` to import `the-meridian-news.jsx` and redeploy.

### Alternative: Vercel CLI

If Vercel CLI is installed and authenticated:

```bash
vercel --prod
```

## Notes

- Both experiences are self-contained components with inline styling.
- `the-meridian-news.jsx` imports web fonts from Google Fonts at runtime.
- `the-chip-game.jsx` includes large embedded scene image data and may be heavy in editor/runtime memory.

## License

Academic project for coursework use.