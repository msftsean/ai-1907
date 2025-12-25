# Maintenance Contracts

**Feature**: 001-site-documentation
**Date**: 2025-12-25

---

## Overview

This document defines standard procedures for common site maintenance tasks. Follow these contracts to ensure consistency and avoid breaking changes.

---

## Contract 1: Adding a New Learning Module

### Prerequisites
- Video URL ready (YouTube)
- Module duration known
- Module description written

### Procedure

1. **Edit `docs/learning-plan.html`**

   Locate the appropriate week section and add:
   ```html
   <div class="module-item d-flex flex-items-start" data-searchable>
       <input type="checkbox" class="module-checkbox mr-3 mt-1"
              data-module-id="weekX-moduleY" id="wXmY">
       <div class="flex-auto">
           <label for="wXmY" class="d-block">
               <span class="module-title">Your Module Title</span>
               <span class="module-duration">XX min</span>
           </label>
           <p class="module-description">Your description here.</p>
           <a href="YOUR-VIDEO-URL" target="_blank" rel="noopener noreferrer"
              class="btn btn-sm mt-2">
               Watch Video
           </a>
       </div>
   </div>
   ```

2. **Update module count**

   Find and update the progress text:
   ```html
   <span class="f5 color-fg-muted progress-text">0 of N modules complete</span>
   ```
   Change `N` to the new total.

3. **Update spec.md**

   Add the new module to the "Module IDs" table in `specs/001-site-documentation/spec.md`.

4. **Test**
   - Load page in browser
   - Verify checkbox appears
   - Check and uncheck - verify progress bar updates
   - Refresh page - verify state persists

### Validation
- [ ] Module ID follows pattern `weekX-moduleY`
- [ ] Module ID is unique
- [ ] Checkbox has matching `id` and `for` attributes
- [ ] Video link works
- [ ] Progress bar updates correctly

---

## Contract 2: Updating Video Links

### Procedure

1. **Find all occurrences**

   Search for the old YouTube video ID across:
   - `index.html`
   - `docs/learning-plan.html`
   - `docs/quick-reference.html`

2. **Replace with new link**

   Ensure URL format is correct:
   - Embedded: `https://www.youtube.com/embed/VIDEO_ID`
   - External link: `https://www.youtube.com/watch?v=VIDEO_ID` or `https://youtu.be/VIDEO_ID`

3. **Test**
   - Click link to verify it works
   - If embedded, verify video plays in iframe

### Validation
- [ ] All instances updated
- [ ] Links are accessible (not private/deleted)
- [ ] Embedded videos play correctly

---

## Contract 3: Changing Brand Colors

### Procedure

1. **Edit CSS variables** in `assets/css/custom.css`:
   ```css
   :root {
     --alpha-gold: #NEW_COLOR;
     --alpha-gold-light: #LIGHTER_VARIANT;
     --alpha-gold-dark: #DARKER_VARIANT;
   }
   ```

2. **Check inline styles**

   Search all HTML files for hardcoded color values:
   - `#CFB53B` (gold)
   - `#000000` or `#000` (black)

   Replace any hardcoded values with CSS variable references where possible.

3. **Test**
   - Visual inspection of all 3 pages
   - Check contrast ratios (must be WCAG AA: 4.5:1)

### Validation
- [ ] All pages use new colors consistently
- [ ] Contrast ratio >= 4.5:1 for text
- [ ] No hardcoded colors remain in HTML

---

## Contract 4: Adding a New Page

### Procedure

1. **Copy template**

   Copy an existing page (recommend `docs/learning-plan.html`) as starting point.

2. **Update paths**

   If new page is in `docs/`:
   ```html
   <!-- CSS -->
   <link rel="stylesheet" href="../assets/css/custom.css">
   <!-- JS -->
   <script src="../assets/js/main.js"></script>
   <!-- Images -->
   <img src="../assets/images/...">
   ```

   If new page is in root:
   ```html
   <link rel="stylesheet" href="assets/css/custom.css">
   ```

3. **Update navigation**

   Add link to header in ALL pages:
   ```html
   <div class="Header-item">
       <a href="path/to/new-page.html" class="Header-link">New Page</a>
   </div>
   ```

4. **Update footer** (if adding to Resources section)

5. **Set aria-current** on the new page's nav link:
   ```html
   <a href="new-page.html" class="Header-link" aria-current="page">New Page</a>
   ```

### Validation
- [ ] All relative paths work
- [ ] Navigation links work from all pages
- [ ] Header/footer consistent across all pages
- [ ] Skip link works (`#main-content` exists)
- [ ] Page title is unique and descriptive

---

## Contract 5: Updating Progress Tracking Logic

### Prerequisites
- Understand current localStorage schema (see data-model.md)

### Procedure

1. **Edit `assets/js/main.js`**

2. **Maintain backward compatibility**

   If changing schema:
   ```javascript
   function getProgress() {
     const saved = localStorage.getItem(STORAGE_KEY);
     const data = saved ? JSON.parse(saved) : { completedModules: [] };

     // Migration logic for old schema
     if (!data.version) {
       data.version = 2;
       // ... migrate old format
     }

     return data;
   }
   ```

3. **Test thoroughly**
   - Clear localStorage and test fresh state
   - Test with existing data (old schema if applicable)
   - Test edge cases (corrupted data, missing fields)

### Validation
- [ ] Existing user progress not lost
- [ ] Default state works correctly
- [ ] Error handling for corrupted data
- [ ] Progress bar updates correctly

---

## Contract 6: Deploying Changes

### Procedure

1. **Test locally**
   ```bash
   # Start local server
   npx serve
   # Or
   python -m http.server
   ```

2. **Commit changes**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

3. **Push to main**
   ```bash
   git push origin main
   ```

4. **Verify deployment**
   - Wait 2-5 minutes for GitHub Pages to rebuild
   - Check live site: https://msftsean.github.io/ai-1907/
   - Hard refresh (Ctrl+Shift+R) to bypass cache

### Validation
- [ ] Local testing passed
- [ ] Commit message is descriptive
- [ ] Live site reflects changes
- [ ] No console errors in browser

---

## Emergency Rollback

If a deployment breaks the site:

1. **Identify last working commit**
   ```bash
   git log --oneline
   ```

2. **Revert to previous state**
   ```bash
   git revert HEAD
   # Or for multiple commits:
   git revert HEAD~N..HEAD
   ```

3. **Push revert**
   ```bash
   git push origin main
   ```

4. **Verify rollback**
   - Check live site after GitHub Pages rebuilds
