<div align="center">
<img src="assets/images/beta_logo.jpg" alt="Beta Chapter Logo" width="200"/>

# Alpha Phi Alpha AI Learning Path
## "Learning AI, Together" - Beta Chapter

**Created by Sean Gayle**

[View Live Site](https://msftsean.github.io/ai-1907/) · [Learning Plan](https://msftsean.github.io/ai-1907/docs/learning-plan.html) · [Quick Reference](https://msftsean.github.io/ai-1907/docs/quick-reference.html)

</div>

---

## About This Site

This is a simple, supportive learning path designed to help Alpha Phi Alpha Beta Chapter brothers master AI tools in 4 weeks. No technical skills required - if you can text, you can use AI.

### Target Audience
- Non-technical professionals ages 30-60+
- Business owners, ministers, corporate professionals, retirees
- Anyone who wants to use AI to make work/life easier

---

## The 4-Week Curriculum

### Week 1: Understand the Power (~35 min)
See exactly how AI tools work together - this is the "aha" moment
- **20+ AI Hacks That Save Hours Every Day** - Learn practical ways to use AI in everyday life
- **Best Ways to Use NotebookLM** - Organize your data into actionable intelligence

### Week 2: Understanding AI Workflows (~17 min)
You don't need more tools - you need better workflows
- **8 AI Workflows That Actually Work** - Chain tools together like a personal team
- Reference table with all 8 workflows from Grace Leung's video

### Week 3: Using AI for Productivity (~30 min)
Learn the 6 essential skills that separate casual AI users from power users
- **6 AI Skills 99% of People Don't Know** - Alicia from Enovair Partners breaks down the essentials:
  1. Tool Selection
  2. Problem Clarification
  3. Effective AI Communication
  4. Verification
  5. Workflow Orchestration
  6. The Human Polish

### Week 4: Make It Your Own (~1 hour)
This is what separates talkers from doers
- Pick ONE workflow from Week 2
- Run ONE experiment (30-60 min)
- Message Sean what you discovered

---

## Quick Start

1. Visit the [live site](https://msftsean.github.io/ai-1907/)
2. Click "Start Week 1"
3. Follow the 4-week curriculum (5 modules total)
4. Track your progress (saved automatically in your browser)
5. Run your experiment in Week 4
6. Share results with your brothers

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
│   ├── images/
│   │   ├── bros/               # Brotherhood photos (backgrounds & headshot)
│   │   ├── beta_logo.jpg       # Beta Chapter logo
│   │   ├── alpha-crest.png     # Alpha Phi Alpha crest (nav/footer)
│   │   └── alpha_learning_flowchart.svg  # Learning flowchart
│   └── icons/
│       ├── favicon.ico         # Site favicon
│       ├── favicon-16x16.png   # Small favicon
│       ├── favicon-32x32.png   # Medium favicon
│       └── apple-touch-icon.png # iOS icon
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
- Update the progress text in the header (currently "0 of 5 modules complete")

#### Adding Your Photo
Photo is located at `assets/images/bros/headshot2025.png` and displayed in the About section.

#### Demo Video
Demo video is embedded from YouTube in the Video Preview section.

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
- **Enovair Partners**: https://www.youtube.com/@EnovairPartners
- **Primer CSS Docs**: https://primer.style/css/

---

## Inspiration

This learning path was created with love and fraternity, inspired by a Zoom call celebrating the **118th Anniversary of the Chartering of the Beta Chapter of Alpha Phi Alpha Fraternity, Inc.** on December 20th, 2025.

To my brothers: May this resource help you harness the power of AI to build stronger businesses, serve our communities more effectively, and continue our legacy of excellence.

**"First of All, Servants of All, We Shall Transcend All"**

---

## Status

![Status](https://img.shields.io/badge/Status-Active-success)
![Version](https://img.shields.io/badge/Version-3.0-blue)
![Last Updated](https://img.shields.io/badge/Last%20Updated-Dec%202025-orange)

---

**Alpha Phi Alpha Fraternity, Inc. - Beta Chapter**

*For questions or contributions, contact Sean Gayle at [@msftsean](https://github.com/msftsean)*

*Last Updated: December 2025*
