## Goal
Upgrade the Batchmates Connect section so users can update their info via an embedded Google Form and view batchmates directly from an embedded Google Sheet, while keeping the existing blue/white theme.

## Changes (single file: `src/components/BatchmatesConnect.tsx`)

Restructure the card to use **Tabs** (shadcn `Tabs`) with two panels — "Batchmates List" and "Update Your Info" — instead of the current single collapsible. This keeps the section compact while exposing both embeds.

### 1. Batchmates List tab
- Embedded read-only Google Sheet via iframe:
  - URL: `https://docs.google.com/spreadsheets/d/1AS9VR1LUKlNAFpF6EcaM86SXOM6HXup9WOb3W9WRDYQ/pubhtml?widget=true&headers=false` (using the standard published-to-web embed pattern; falls back to `/htmlembed` if needed)
  - Wrapped in a rounded, bordered container with `bg-card`, subtle `border-primary/20`, fixed height (~420px), responsive width 100%.
- Prominent **"View Full List"** button (primary variant, `ExternalLink` icon) below the iframe linking to the original sheet URL, `target="_blank"`.

### 2. Update Your Info tab
- Embedded Google Form iframe:
  - URL: `https://docs.google.com/forms/d/e/1FAIpQLS.../viewform?embedded=true` derived from the short link `https://forms.gle/UjwycnRMwZxU2Smt8` (resolved at implementation time; iframe `src` will use the `?embedded=true` form).
  - Container styled to match: rounded, bordered, `bg-card`, height ~600px, responsive width 100%.
- Small fallback link "Open form in new tab" below in case the embed is blocked.

### 3. Header copy
- Keep the existing section title.
- Add the instructional line under the subtitle:
  > "Fill out the form to be added to the directory and connect with your fellow GSV students!"
- Keep the "Credits: Mandeep Nehra" line at the bottom of the card.

### 4. Styling
- Use only semantic tokens (`bg-card`, `border-primary/20`, `text-primary`, `text-muted-foreground`) — no raw colors.
- Card widened from `max-w-lg` to `max-w-3xl` to comfortably hold both embeds.
- Tabs styled with primary accent on the active state (default shadcn styling already matches the theme).

## Out of scope
- No backend, RLS, or data-fetching changes.
- No edits to other components or routes.

## Technical notes
- Google Sheet must be "Published to the web" by the owner for the iframe to render. If it's only "Anyone with link can view", the embed will show a Google login wall — in that case the "View Full List" button still works as a guaranteed fallback. I'll add a short note in the UI if the embed fails to load (graceful degradation via the visible fallback button).
- Google Form short links (`forms.gle/...`) redirect to the full `viewform` URL; appending `?embedded=true` removes the Google chrome inside the iframe.
