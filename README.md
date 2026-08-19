# Equip Dashboard Portfolio

A single-page, static portfolio site for showcasing data dashboards (Power BI, Tableau, Looker Studio, custom HTML dashboards on their own GitHub Pages, etc). Built in the Equip brand — dark navy, gold, cream — with a tile grid inspired by Ogilvy's work page: hover a tile and it crossfades into a title card with a gold foil sweep; click it and the dashboard opens in a new tab.

No build step, no framework, no dependencies to install. It's plain HTML/CSS/JS, so it runs straight on GitHub Pages.

## 1. Publish it on GitHub Pages

1. Create a new GitHub repository (public, so Pages is free) and push everything in this folder to it.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save. GitHub will give you a URL like `https://yourusername.github.io/repo-name/` within a minute or two.

That's the whole deployment — every time you push to `main`, the live site updates.

## 2. Add a new dashboard (the only file you need to touch)

Open **`js/projects.js`** and copy one of the existing objects in the `PROJECTS` array, then edit the fields:

```js
{
  id: "my-new-dashboard",       // unique, no spaces
  title: "Quarterly Sales Overview",
  client: "Client or Programme Name",
  platform: "Power BI",         // shows as the small badge on hover
  url: "https://app.powerbi.com/view?r=xxxxxxx",  // required — where the tile links to
  thumbnail: "assets/thumbs/sales-overview.jpg",  // screenshot, or null for a placeholder
  accent: "gold",               // "gold" | "navy" | "slate" — only used if thumbnail is null
  size: "wide"                  // "normal" | "wide" | "tall" | "large"
}
```

Save the file, commit, push. No HTML editing required — the grid renders itself from this array.

### Getting a good thumbnail
- **Power BI / Tableau / Looker Studio:** take a clean screenshot of the published dashboard (hide any filter panes you don't want visible) and export/crop it to roughly a **4:3 or 1:1** ratio so it crops well in both square and wide tiles.
- **Custom HTML dashboards (e.g. hosted on another GitHub Pages repo):** a full-page screenshot works well — tools like [Percy](https://percy.io), or your browser's own "Capture full size screenshot" (Chrome DevTools → Cmd/Ctrl+Shift+P → "screenshot"), do this without any extra software.
- Drop the image file into `assets/thumbs/` and point `thumbnail` at it. If you leave `thumbnail: null`, the tile shows a generated navy/gold gradient with a subtle chart watermark instead — good enough to demo with before you have real screenshots.

### Tile sizes
The grid is 3 columns wide on desktop (collapses to 1 column on mobile). Mix sizes so the wall doesn't feel repetitive — a good ratio is roughly 1 `wide` or `tall` for every 3–4 `normal` tiles, with `large` used sparingly for a flagship dashboard.

## 3. Editing brand content

- **Hero headline / copy:** in `index.html`, inside `<section class="hero">`.
- **Impact stats bar:** the four numbers just under the hero (`data-count` attributes) count up on scroll — edit the numbers and labels in `index.html`.
- **About / Contact copy:** further down in `index.html`, inside `<section class="about">` and `<section class="contact">`.
- **Colours, type, spacing:** all defined as CSS variables at the top of `css/style.css` (`:root { ... }`) — change a value there and it updates everywhere.
- **Social links:** currently placeholders (`href="#"`) in the Contact section of `index.html` — swap in your real LinkedIn/Instagram/WhatsApp URLs.

## File structure

```
index.html          all page content and copy
css/style.css        brand tokens, layout, tile grid, animations
js/projects.js       ← the dashboard list — edit this to add projects
js/main.js           renders the grid from projects.js + interactions
assets/equip-mark.svg  the Square-E brand icon (used in header/footer)
assets/thumbs/         put your dashboard screenshots here
```
