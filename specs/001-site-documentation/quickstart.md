# Quickstart: Alpha AI Learning Path

**Feature**: 001-site-documentation
**Date**: 2025-12-25

---

## Overview

This guide helps new contributors get up and running quickly with the Alpha AI Learning Path site.

**Site URL**: https://msftsean.github.io/ai-1907/

---

## Prerequisites

- Git installed
- Text editor (VS Code recommended)
- Web browser (Chrome, Firefox, Safari, or Edge)
- Basic HTML/CSS knowledge helpful but not required

**No build tools required.** The site is pure HTML/CSS/JS.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/msftsean/ai-1907.git
cd ai-1907
```

### 2. Open in Editor

```bash
code .  # Opens in VS Code
```

### 3. Start Local Server

Option A - Using Node.js:
```bash
npx serve
```

Option B - Using Python:
```bash
python -m http.server 3000
```

Option C - Just open the file:
```bash
# Double-click index.html in your file explorer
# Note: Some features may not work with file:// protocol
```

### 4. View the Site

Open `http://localhost:3000` (or `http://localhost:8000` for Python) in your browser.

---

## Project Structure

```
ai-1907/
├── index.html              # Homepage
├── docs/
│   ├── learning-plan.html  # Main curriculum page
│   └── quick-reference.html # Reference card
├── assets/
│   ├── css/custom.css      # All custom styles
│   ├── js/main.js          # Progress tracking & interactions
│   └── images/             # Logos, photos, icons
├── specs/                  # Feature specifications
└── README.md               # Project overview
```

---

## Key Files to Know

| File | Purpose | When to Edit |
|------|---------|--------------|
| `index.html` | Homepage | Update hero content, week cards |
| `docs/learning-plan.html` | Curriculum | Add/edit modules, update progress |
| `docs/quick-reference.html` | Reference | Update videos, tools, checklists |
| `assets/css/custom.css` | Styling | Change colors, fonts, layouts |
| `assets/js/main.js` | Interactivity | Modify progress tracking |

---

## Common Tasks

### Add a New Module

1. Open `docs/learning-plan.html`
2. Find the week you want to add to
3. Copy an existing `<div class="module-item">` block
4. Update:
   - `data-module-id` (must be unique, e.g., `week2-module2`)
   - `id` and `for` attributes to match
   - Title, duration, description, and video link
5. Update the "X of N modules complete" text

### Change Colors

1. Open `assets/css/custom.css`
2. Find the `:root` section at the top
3. Modify the color variables:
   ```css
   --alpha-gold: #CFB53B;
   --alpha-black: #000000;
   ```

### Update Contact Email

Search for `uberdev@gmail.com` across all HTML files and replace as needed.

---

## Testing Checklist

Before pushing changes, verify:

- [ ] All 3 pages load without errors
- [ ] Progress tracking works (check a module, refresh, still checked)
- [ ] All links work (videos, navigation)
- [ ] Mobile view looks correct (use browser dev tools)
- [ ] No JavaScript errors in console

---

## Deployment

Changes pushed to `main` branch automatically deploy via GitHub Pages.

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

Wait 2-5 minutes, then check the live site.

---

## Troubleshooting

### Progress not saving

- Check browser console for errors
- Verify localStorage is not disabled
- Try incognito mode to test fresh state

### Styles not updating

- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check if CSS file path is correct

### Video not playing

- Verify YouTube URL is correct
- Check if video is public/unlisted (not private)
- For embeds, use format: `youtube.com/embed/VIDEO_ID`

---

## Key Resources

- **Spec**: `specs/001-site-documentation/spec.md`
- **Constitution**: `.specify/memory/constitution.md`
- **Maintenance Guide**: `specs/001-site-documentation/contracts/maintenance.md`
- **Data Model**: `specs/001-site-documentation/data-model.md`

---

## Getting Help

- **GitHub Issues**: https://github.com/msftsean/ai-1907/issues
- **Email**: uberdev@gmail.com
- **Maintainer**: Sean Gayle (@msftsean)
