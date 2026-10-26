# Kasali Damilola — Portfolio

Personal portfolio site showcasing selected projects, my engineering approach, and ways to get in touch.

**Live:** <your-deployed-url>

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- Lucide icons

## Getting started

```bash
git clone https://github.com/theRealNexa/<repo-name>.git
cd <repo-name>
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/          Layout, global styles, and the single page
components/   Sections (Hero, SelectedWork, About, Contact, ...) and UI pieces
lib/data.ts   All site content: projects, links, skills, availability
public/images Hero, workspace, and project screenshots
```

## Editing content

All content lives in `lib/data.ts`; components don't hardcode copy.

- **Projects:** edit the `projects` array. Set `image` to a path in `public/images/` to show a screenshot. Without it, the card falls back to an SVG mockup.
- **Links and contact:** update `site`, `social`, and `links`.
- **Images:** file names are case-sensitive on most hosts, so match the extension exactly (e.g. `acadalert.PNG`).

## Notes

- The theme toggle persists to localStorage; the default is light.
- Animations are CSS-only and respect `prefers-reduced-motion`.

## License

The source code is released under the [MIT License](./LICENSE).

The personal content in this repository (text, biography, photographs, and project screenshots) is © Kasali Damilola and is not covered by the MIT License. Please don't reuse it without permission.
