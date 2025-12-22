# Site Structure & Technical Documentation

This document explains how the Alpha AI Learning Site is built and organized.

---

## Architecture Overview

This is a **static HTML site** hosted on GitHub Pages. There is:
- No backend server
- No database
- No build process
- No API endpoints

Just HTML, CSS, and minimal JavaScript.

---

## Framework: GitHub Primer CSS

We use [GitHub Primer CSS](https://primer.style/css/) as the foundation:

```html
<link rel="stylesheet" href="https://unpkg.com/@primer/css@21.3.3/dist/primer.css">
```

### Why Primer?
- Built by GitHub - reliable and well-documented
- Excellent accessibility (WCAG 2.1 AA compliant)
- Mobile-responsive by default
- Lightweight (~50KB minified)
- Perfect for GitHub Pages

### Primer Components Used
- **Layout**: `container-lg`, `p-responsive`, `col-*` grid classes
- **Box**: Cards and sections (`Box`, `Box-header`, `Box-body`)
- **Header**: Site navigation (`Header`, `Header-item`, `Header-link`)
- **Breadcrumb**: Navigation path (`Breadcrumb`, `Breadcrumb-item`)
- **UnderlineNav**: Tab navigation (`UnderlineNav`, `UnderlineNav-item`)
- **Buttons**: `btn`, `btn-primary`, `btn-large`
- **Typography**: `h1`-`h4`, `f2`-`f6` font sizes
- **Utilities**: `d-flex`, `flex-items-center`, `color-fg-muted`, spacing (`p-*`, `m-*`, `mb-*`)

---

## Custom Styling

### File: `assets/css/custom.css`

Custom CSS adds fraternity branding and components that need personality beyond Primer.

#### CSS Custom Properties

```css
:root {
  /* Fraternity Colors */
  --alpha-gold: #CFB53B;
  --alpha-gold-light: #e0c85c;
  --alpha-gold-dark: #b89b2f;
  --alpha-black: #000000;

  /* Functional Colors */
  --whatsapp-green: #25D366;
  --success-green: #2da44e;

  /* Typography - Larger for Older Eyes */
  --font-size-base: 18px;
  --line-height-base: 1.6;

  /* Touch Targets */
  --touch-target-min: 48px;
}
```

#### Key Custom Components

| Component | Class | Purpose |
|-----------|-------|---------|
| Hero Section | `.hero-section` | Full-width banner on homepage |
| Gold Button | `.btn-alpha-gold` | Primary CTA buttons |
| WhatsApp Button | `.btn-whatsapp` | Help/contact buttons |
| Week Card | `.week-card` | Learning journey boxes |
| Module Item | `.module-item` | Checkbox modules in learning plan |
| Progress Bar | `.progress-bar-fill` | Visual progress indicator |
| Help Button | `.help-button-fixed` | Fixed position help button |

#### Hybrid Approach (70/30 Split)

**Use Primer (70%):**
- Layout and grid
- Typography scale
- Navigation
- Box components
- Utility classes

**Custom CSS (30%):**
- Hero section styling
- Fraternity color overrides
- Week cards with gold headers
- Progress tracking UI
- Fixed help button

---

## JavaScript: `assets/js/main.js`

Minimal, progressive enhancement JavaScript. The site works without JS, but JS adds:

### Features

1. **Progress Tracking (localStorage)**
   - Saves completed modules
   - Persists across sessions
   - Updates progress bar automatically

2. **Tab Navigation**
   - Quick reference page sections
   - Shows/hides content

3. **Search/Filter**
   - Filters content on quick reference page
   - Simple text matching

4. **Smooth Scroll**
   - Anchor link navigation

### Key Functions

```javascript
// Save/load progress
getProgress()        // Returns { completedModules: [], lastUpdated: null }
saveProgress(data)   // Saves to localStorage

// Module management
toggleModuleCompletion(moduleId)  // Toggle and save
isModuleCompleted(moduleId)       // Check status
getCompletionStats(totalModules)  // Get stats

// UI Updates
updateProgressBar()   // Recalculate and display
initializeCheckboxes() // Set up event listeners

// For testing
window.resetAlphaAIProgress()  // Clear all progress
```

### Data Structure

```javascript
// localStorage key: 'alpha-ai-progress'
{
  completedModules: ['week1-module1', 'week1-module2'],
  lastUpdated: '2025-12-22T10:30:00.000Z'
}
```

---

## HTML Structure

### Page Template

Every page follows this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags -->
    <!-- Primer CSS (CDN) -->
    <!-- Custom CSS -->
</head>
<body>
    <!-- Skip link for accessibility -->
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <!-- Header with navigation -->
    <header class="Header">...</header>

    <!-- Main content -->
    <main id="main-content">...</main>

    <!-- Footer -->
    <footer class="site-footer">...</footer>

    <!-- Fixed help button -->
    <div class="help-button-fixed">...</div>

    <!-- JavaScript -->
    <script src="assets/js/main.js"></script>
</body>
</html>
```

### Module Item Structure

For progress tracking to work, modules need this structure:

```html
<div class="module-item d-flex flex-items-start" data-searchable>
    <input type="checkbox"
           class="module-checkbox mr-3 mt-1"
           data-module-id="week1-module1"
           id="w1m1">
    <div class="flex-auto">
        <label for="w1m1" class="d-block">
            <span class="module-title">Module Title</span>
            <span class="module-duration">20 min</span>
        </label>
        <p class="module-description">Description text</p>
        <a href="URL" class="btn btn-sm mt-2">Watch Video</a>
    </div>
</div>
```

**Required attributes:**
- `data-module-id` - Unique identifier (used for localStorage)
- `class="module-checkbox"` - JavaScript hooks onto this

---

## Accessibility Features

### For Older Users (50-60+)

1. **Large Font Sizes**
   - Base: 18px (vs typical 16px)
   - Body text: 20px
   - Line height: 1.6-1.8

2. **High Contrast**
   - Text: near-black `#24292f`
   - Muted text: darker gray `#57606a` (not light gray)

3. **Large Touch Targets**
   - Minimum 48px height for buttons
   - Large padding on interactive elements

4. **Clear Visual Hierarchy**
   - Gold headers on week cards
   - Distinct sections
   - Generous whitespace

### WCAG Compliance

- Skip links for keyboard navigation
- Semantic HTML5 elements
- ARIA labels where needed
- Proper heading hierarchy (one `<h1>` per page)
- Focus states on interactive elements
- Reduced motion support (`prefers-reduced-motion`)

---

## File Paths

### From Root (`index.html`)
```html
<link rel="stylesheet" href="assets/css/custom.css">
<script src="assets/js/main.js"></script>
<img src="assets/beta_logo.jpg">
```

### From Docs (`docs/*.html`)
```html
<link rel="stylesheet" href="../assets/css/custom.css">
<script src="../assets/js/main.js"></script>
<img src="../assets/beta_logo.jpg">
```

---

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+
- iOS Safari 14+
- Android Chrome 90+

No IE11 support (uses CSS custom properties, flexbox, etc.)

---

## Performance Considerations

1. **Minimal Dependencies**
   - One CSS framework (CDN)
   - One custom CSS file
   - One small JS file (~5KB)

2. **No Build Process**
   - Direct HTML editing
   - No bundling or compilation

3. **Fast Loading**
   - Primer CSS is cached by CDN
   - Small custom CSS (~10KB)
   - Lazy load images (when added)

4. **GitHub Pages Optimizations**
   - Automatic gzip compression
   - CDN distribution
   - HTTPS enforced

---

## Adding Features

### To Add a New Section to Homepage

1. Add HTML in `index.html` within `<main>`
2. Add custom CSS in `assets/css/custom.css`
3. Follow existing patterns (Primer layout + custom styling)

### To Add a New Page

1. Copy `docs/learning-plan.html` as template
2. Update `<title>` and content
3. Update header nav links on all pages
4. Update footer links on all pages
5. Update paths (use `../` prefix for assets)

### To Add Interactive Features

1. Add HTML with appropriate classes/data attributes
2. Add JavaScript in `assets/js/main.js`
3. Keep it simple - progressive enhancement only
4. Test without JS to ensure baseline works

---

## Troubleshooting

### Progress Not Saving
- Check browser localStorage is enabled
- Check for JavaScript errors in console
- Verify `data-module-id` attributes are unique

### Styles Not Applying
- Check CSS file is linked correctly
- Check class names match exactly
- Clear browser cache

### Tab Navigation Not Working
- Ensure `data-tab` attributes match `id` attributes
- Check JavaScript is loaded
- Check for JS errors in console

---

## Future Considerations

### Potential Additions (Code is Structured For)
- User accounts (would need backend)
- Community features
- Certificate generation
- Email notifications
- More interactive progress tracking

### What NOT to Add
- Complex frameworks (React, Vue)
- Heavy animations
- Gamification elements
- Multiple learning tracks
- Tool comparison tables

Keep it simple. This is for intimidated, non-technical users.

---

*Last Updated: December 2025*
