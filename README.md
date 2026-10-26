# KD Portfolio

Next.js (App Router) + TypeScript + Tailwind + Lucide.

    npm install
    npm run dev

## Edit content
Everything lives in `lib/data.ts`: email, social URLs, projects, principles, skills, availability.
**TODO:** replace the placeholder GitHub / LinkedIn / X URLs and each project's `href` (case study).

## Images (`public/images/`)
- `hero-architecture.jpg`, `workspace.jpg` were cropped from the reference image (low-res). Swap in higher-res photos with the same filenames.
- Project previews are SVG interface mockups (`components/ProjectMockup.tsx`), labelled "Interface preview". Replace with real screenshots when available.

## Notes
- Theme toggle persists to localStorage; default is light.
- Animations are CSS-only and respect `prefers-reduced-motion`.
