<div align="center">
<img src="assets/beta_logo.jpg" alt="Beta Chapter Logo" width="200"/>

# Alpha Phi Alpha AI Learning Path
## "Learning AI, Together" - Beta Chapter

**Created by Sean Gayle, Beta '91**

[View Live Site](https://msftsean.github.io/ai-1907/) | [Learning Plan](docs/learning-plan.html) | [Quick Reference](docs/quick-reference.html)

</div>

---

## About This Site

This is a simple, supportive learning path designed to help Alpha Phi Alpha Beta Chapter brothers master AI tools in 4 weeks. No technical skills required - if you can text, you can use AI.

### Target Audience
- Non-technical professionals ages 30-60+
- Business owners, ministers, corporate professionals, retirees
- Anyone who wants to use AI to make work/life easier

---

## Quick Start

1. Visit the [live site](https://msftsean.github.io/ai-1907/)
2. Click "Start Week 1"
3. Follow the 4-week curriculum
4. Track your progress (saved automatically in your browser)
5. Run your experiment in Week 4
6. Share results with your brother

---

## File Structure

```
ai-1907/
├── index.html                  # Homepage
├── docs/
│   ├── learning-plan.html      # 4-week curriculum with progress tracking
│   └── quick-reference.html    # Quick reference card with tabs
├── assets/
│   ├── css/
│   │   └── custom.css          # Custom styles (fraternity branding)
│   ├── js/
│   │   └── main.js             # Progress tracking & interactions
│   ├── images/                 # Placeholder for additional images
│   ├── beta_logo.jpg           # Beta Chapter logo
│   ├── alpha_learning_flowchart.svg  # Learning flowchart
│   ├── favicon.ico             # Site favicon
│   └── favicon-*.png           # Various favicon sizes
├── README.md                   # This file
└── STRUCTURE.md                # Technical documentation
```

---

## Content Management Guide

### How to Update Content

#### Updating Text
1. Open the relevant HTML file in a text editor
2. Find the text you want to change
3. Edit and save the file
4. Commit and push to GitHub - changes go live automatically

#### Adding a New Video Module
In `docs/learning-plan.html`, copy an existing module block:

```html
<div class="module-item d-flex flex-items-start" data-searchable>
    <input type="checkbox" class="module-checkbox mr-3 mt-1" data-module-id="weekX-moduleX" id="wXmX">
    <div class="flex-auto">
        <label for="wXmX" class="d-block">
            <span class="module-title">Your Module Title</span>
            <span class="module-duration">XX min</span>
        </label>
        <p class="module-description">Your description here.</p>
        <a href="YOUR-VIDEO-URL" target="_blank" rel="noopener noreferrer" class="btn btn-sm mt-2">
            Watch Video
        </a>
    </div>
</div>
```

**Important:**
- Give each module a unique `data-module-id` (e.g., `week2-module3`)
- Update the `id` and `for` attributes to match
- Update the progress text in the header (e.g., "0 of 13 modules complete")

#### Updating Contact Information
Search for `your@email.com` across all HTML files and replace with your actual email address.

#### Adding Your Photo
1. Add your photo to `assets/` folder (e.g., `sean-photo.jpg`)
2. In `index.html`, replace the placeholder:
```html
<!-- Change this: -->
<div class="about-photo-placeholder">SG</div>

<!-- To this: -->
<img src="assets/sean-photo.jpg" alt="Sean Gayle" class="about-photo">
```

#### Adding a Demo Video
In `index.html`, find the video placeholder and replace:

```html
<!-- Replace the video-placeholder div with: -->
<iframe
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/YOUR-VIDEO-ID"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
```

### How to Customize Colors

Edit `assets/css/custom.css` - key variables are at the top:

```css
:root {
  /* Fraternity Colors */
  --alpha-gold: #CFB53B;
  --alpha-gold-light: #e0c85c;
  --alpha-gold-dark: #b89b2f;
  --alpha-black: #000000;

  /* Change these to adjust the site */
}
```

### How to Add New Pages

1. Copy an existing HTML file as a template
2. Update the `<title>` and content
3. Ensure the header and footer navigation links are correct
4. Use relative paths for CSS/JS:
   - From root: `assets/css/custom.css`
   - From docs/: `../assets/css/custom.css`

---

## Technical Details

### Framework
- **GitHub Primer CSS** (v21.3.3) - via CDN
- **Custom CSS** - `assets/css/custom.css` for fraternity branding
- **Vanilla JavaScript** - `assets/js/main.js` for interactions

### Features
- **Progress Tracking**: Uses localStorage - persists across sessions
- **Tab Navigation**: On quick reference page
- **Search/Filter**: On quick reference page
- **Responsive Design**: Mobile-first, works on all devices
- **Accessibility**: WCAG AA compliant, large fonts for older eyes

### Browser Support
- Chrome, Firefox, Safari, Edge (modern versions)
- iOS Safari, Android Chrome
- No IE11 support required

---

## Deployment

This site uses **GitHub Pages** for hosting.

### Automatic Deployment
1. Push changes to the `main` branch
2. GitHub Pages automatically rebuilds
3. Changes are live within a few minutes

### Manual Deployment
No build step required - just push HTML files directly.

---

## Development

### Local Testing
1. Clone the repository
2. Open `index.html` in a browser
3. Or use a local server: `npx serve` or `python -m http.server`

### Making Changes
1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test locally
4. Commit and push
5. Create a pull request (or merge directly to main)

---

## Key Resources

- **Perplexity**: https://www.perplexity.ai
- **NotebookLM**: https://notebooklm.google.com
- **Claude**: https://claude.ai
- **Gemini**: https://gemini.google.com
- **Primer CSS Docs**: https://primer.style/css/

---

## Inspiration

This learning path was created with love and fraternity, inspired by a Zoom call celebrating the **118th Anniversary of the Chartering of the Beta Chapter of Alpha Phi Alpha Fraternity, Inc.** on December 20th, 2025.

To my brothers: May this resource help you harness the power of AI to build stronger businesses, serve our communities more effectively, and continue our legacy of excellence.

**"First of All, Servants of All, We Shall Transcend All"**

---

## Status

![Status](https://img.shields.io/badge/Status-Active-success)
![Version](https://img.shields.io/badge/Version-2.0-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-Dec%202025-orange)

---

**Alpha Phi Alpha Fraternity, Inc. - Beta Chapter**

*For questions or contributions, contact Sean Gayle at [@msftsean](https://github.com/msftsean)*

*Last Updated: December 2025*
