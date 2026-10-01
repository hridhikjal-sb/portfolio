# hridhikjal-data-portfolio

Portfolio site for Hridhikjal S B, a Data Analyst focused on analytics, machine learning and AI-powered applications.

## Stack
Next.js 14 (App Router), React 18, Tailwind CSS 3, Poppins + Inter via next/font (downloaded at build time). No API keys or environment variables.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000. Production: `npm run build && npm start`.

## Customize
All content lives in `data/content.js` (profile, projects, experience, skills, education, certifications).
Colors (light and dark) are CSS variables at the top of `app/globals.css`.
To update the resume, replace `public/Hridhikjal_SB_Resume.pdf` (keep the filename).
Gradient colors: `--g1`, `--g2`, `--g3` in `app/globals.css`.
Sections (Home, About, Resume, Projects, Contact) are components in `components/`.

## Structure
```
app/            layout.js, page.js, globals.css
components/     Hero, About, Resume, Projects, Contact, Section, Reveal, DataGraphic
data/content.js all portfolio content
```
