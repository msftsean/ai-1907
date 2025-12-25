# Feature Specification: Alpha AI Learning Path - Complete Site Documentation

**Feature Branch**: `001-site-documentation`
**Created**: 2025-12-25
**Status**: Active
**Purpose**: Reverse-engineered specification of the existing site for maintainability

---

## Overview

The Alpha AI Learning Path is a static educational website designed to teach Alpha Phi Alpha Beta Chapter brothers how to use AI tools. The site targets non-technical professionals ages 30-60+ and provides a 4-week curriculum with progress tracking.

**Live Site**: https://msftsean.github.io/ai-1907/

---

## Site Architecture

### Pages (3 total)

| Page | File | Purpose |
|------|------|---------|
| Homepage | `index.html` | Landing page with value proposition, curriculum overview, and CTAs |
| Learning Plan | `docs/learning-plan.html` | 4-week curriculum with video modules and progress tracking |
| Quick Reference | `docs/quick-reference.html` | Tabbed reference card with videos, workflows, checklists, and tools |

### Technology Stack

| Component | Technology | Version/Source |
|-----------|------------|----------------|
| CSS Framework | GitHub Primer CSS | v21.3.3 via CDN (`unpkg.com`) |
| Custom Styles | `assets/css/custom.css` | ~980 lines |
| JavaScript | Vanilla JS | `assets/js/main.js` (~315 lines) |
| Hosting | GitHub Pages | Auto-deploy from `main` branch |
| Build | None | No build step required |

---

## User Scenarios & Testing

### User Story 1 - First-Time Visitor (Priority: P1)

A non-technical professional (ages 30-60+) visits the site for the first time after hearing about it from a fraternity brother.

**Why this priority**: This is the primary acquisition path - the site must immediately communicate value and reduce intimidation.

**Independent Test**: Can be verified by loading `index.html` and confirming all hero content, reassurance messaging, and CTA buttons render correctly.

**Acceptance Scenarios**:

1. **Given** a new visitor lands on the homepage, **When** the page loads, **Then** they see:
   - Hero section with "Master AI in 4 Weeks" headline
   - Reassurance messaging ("If You Can Text, You Can Use AI")
   - Video preview embed
   - 4-week curriculum overview cards
   - Clear "Start Week 1" CTA button

2. **Given** a visitor is on any page, **When** they look at typography, **Then** all text is 18px minimum with high contrast for readability.

3. **Given** a visitor is on mobile, **When** they tap buttons, **Then** all touch targets are 48px minimum.

---

### User Story 2 - Learning Progress Tracking (Priority: P1)

A user works through the curriculum over multiple sessions and wants to track what they've completed.

**Why this priority**: Progress persistence across sessions is the core feature that enables the 4-week learning journey.

**Independent Test**: Check a module checkbox, close browser, reopen - checkbox should remain checked.

**Acceptance Scenarios**:

1. **Given** a user is on the Learning Plan page, **When** they check a module checkbox, **Then**:
   - The checkbox state is saved to localStorage
   - The progress bar updates (e.g., "1 of 5 modules complete")
   - The module item gets `module-completed` class (strikethrough styling)

2. **Given** a user has completed 3 of 5 modules, **When** they return to the site later, **Then** their 3 completed modules are still checked and progress shows "3 of 5 modules complete".

3. **Given** a user has completed modules, **When** they call `window.resetAlphaAIProgress()` in console, **Then** all progress is cleared and page reloads.

---

### User Story 3 - Quick Reference Navigation (Priority: P2)

A user wants to quickly find specific information (videos, tools, workflows, checklists) without scrolling through everything.

**Why this priority**: The reference page has 4 distinct sections - tabbed navigation improves findability.

**Independent Test**: Click each tab and verify only that tab's content is visible.

**Acceptance Scenarios**:

1. **Given** a user is on the Quick Reference page, **When** they click the "Workflows" tab, **Then**:
   - The Workflows tab becomes `selected` (aria-selected="true")
   - The workflows content is visible
   - Other tab contents are hidden

2. **Given** a user types in the search box, **When** they enter "NotebookLM", **Then** only items containing "NotebookLM" remain visible (items without it are `display: none`).

---

### User Story 4 - Accessibility Navigation (Priority: P2)

A user navigates the site using keyboard only or screen reader.

**Why this priority**: Target audience may have reduced vision or prefer keyboard navigation.

**Independent Test**: Tab through the page and verify all interactive elements are reachable with visible focus states.

**Acceptance Scenarios**:

1. **Given** a keyboard user lands on any page, **When** they press Tab, **Then** the first focusable element is the "Skip to main content" link.

2. **Given** a user activates the skip link, **When** they press Enter, **Then** focus moves to `#main-content`.

3. **Given** any interactive element receives focus, **When** focused, **Then** it shows a 2px gold outline (`--alpha-gold`).

---

### Edge Cases

- **Empty localStorage**: Site works correctly with no saved progress
- **Corrupted localStorage**: `getProgress()` catches JSON parse errors and returns empty default
- **JavaScript disabled**: Core content (text, images, videos) is still accessible; progress tracking is unavailable
- **Slow connection**: CSS loads from CDN; custom CSS is small (~50KB)
- **Print**: Print styles hide buttons, nav, and help button; content is readable in black and white

---

## Requirements

### Functional Requirements

- **FR-001**: System MUST display 3 pages: Homepage, Learning Plan, Quick Reference
- **FR-002**: System MUST persist module completion state in localStorage under key `alpha-ai-progress`
- **FR-003**: System MUST display progress bar showing completed/total modules on Learning Plan page
- **FR-004**: System MUST provide tabbed navigation on Quick Reference page with 4 tabs (Videos, Workflows, Checklists, Tools)
- **FR-005**: System MUST provide search/filter functionality on Quick Reference page
- **FR-006**: System MUST include skip-to-content links for keyboard navigation
- **FR-007**: System MUST include fixed "Need Help? Email Sean" button on all pages
- **FR-008**: System MUST embed YouTube videos via iframe
- **FR-009**: System MUST display fraternity motto in footer on all pages
- **FR-010**: System MUST work without JavaScript (graceful degradation for progress tracking)

### Non-Functional Requirements

- **NFR-001**: Base font size MUST be 18px; headings proportionally larger
- **NFR-002**: Touch targets MUST be 48px minimum
- **NFR-003**: Color contrast MUST meet WCAG AA (4.5:1 for text)
- **NFR-004**: No build step required - HTML/CSS/JS files work directly
- **NFR-005**: No runtime dependencies beyond CDN-hosted Primer CSS
- **NFR-006**: Reduced motion preferences MUST be respected via `prefers-reduced-motion`
- **NFR-007**: Print styles MUST be provided

---

## Data Model

### localStorage Schema

**Key**: `alpha-ai-progress`

**Value Structure**:
```json
{
  "completedModules": ["week1-module1", "week2-module1"],
  "lastUpdated": "2025-12-25T10:30:00.000Z"
}
```

### Module IDs (5 total)

| Module ID | Week | Title |
|-----------|------|-------|
| `week1-module1` | Week 1 | 20+ AI Hacks That Save Hours Every Day |
| `week1-module2` | Week 1 | Best Ways to Use NotebookLM |
| `week2-module1` | Week 2 | 8 AI Workflows That Actually Work |
| `week3-module1` | Week 3 | 6 AI Skills 99% of People Don't Know |
| `week4-module1` | Week 4 | Run Your AI Experiment |

### Progress Calculation

```javascript
percentage = Math.round((completedModules.length / totalModules) * 100)
// totalModules = 5 (count of .module-checkbox elements)
```

---

## Page Components

### Shared Components (All Pages)

| Component | Location | Description |
|-----------|----------|-------------|
| Header | `<header class="Header">` | Logo, site name, nav links |
| Footer | `<footer class="site-footer">` | Logo, motto, resources links, attribution |
| Skip Link | `<a class="skip-link">` | Hidden until focused; jumps to `#main-content` |
| Help Button | `<div class="help-button-fixed">` | Fixed position bottom-right; mailto link |

### Homepage Components

| Component | Description |
|-----------|-------------|
| Hero Section | Black/gold gradient, "Master AI in 4 Weeks" headline, stats badges |
| Reassurance Section | "If You Can Text, You Can Use AI" comparison boxes |
| Video Preview | YouTube embed with demo video |
| Week Cards (4) | Gold header, bullet list of topics, estimated time |
| Outcomes Section | Checkmark list of what users will learn |
| About Section | Author photo, bio, contact info |
| Inspiration Box | Fraternity anniversary tribute |
| Final CTA | Gold gradient, "Ready to Get Started?" with button |

### Learning Plan Components

| Component | Description |
|-----------|-------------|
| Progress Header | Progress text ("X of 5 modules complete") and progress bar |
| Welcome Message | Personal letter format with author voice |
| Week Boxes (4) | Collapsible sections with module items |
| Module Item | Checkbox + title + duration badge + description + video link |
| 8 Workflows Table | Reference table with workflow name, tools, use case |
| 6 Skills List | Numbered list of AI productivity skills |
| Bottom Line Box | Motivational closing section |
| Final Notes | Cost/ROI summary |

### Quick Reference Components

| Component | Description |
|-----------|-------------|
| Search Box | Text input with real-time filtering |
| Tab Navigation | UnderlineNav with 4 tabs |
| Videos Tab | Tables organized by phase (1-4) |
| Workflows Tab | Numbered workflow cards + reflection questions |
| Checklists Tab | Weekly checklists with checkbox symbols + experiment template |
| Tools Tab | Tool comparison table + success metrics |
| Big Idea Box | "You don't need more tools. You need better workflows." |

---

## CSS Architecture

### CSS Custom Properties (Variables)

```css
/* Fraternity Colors */
--alpha-gold: #CFB53B;
--alpha-gold-light: #e0c85c;
--alpha-gold-dark: #b89b2f;
--alpha-black: #000000;
--alpha-black-soft: #1a1a1a;

/* Typography */
--font-size-base: 18px;
--line-height-base: 1.6;
--touch-target-min: 48px;
```

### Key CSS Classes

| Class | Purpose |
|-------|---------|
| `.btn-alpha-gold` | Primary CTA button with gold gradient |
| `.btn-whatsapp` | Green button for help/contact |
| `.hero-section` | Black gradient section with white text |
| `.week-card` | Card with gold header |
| `.module-item` | Flexbox container for checkbox + content |
| `.module-checkbox` | 24x24px checkbox with gold accent |
| `.module-completed` | Strikethrough styling for completed modules |
| `.progress-bar-fill` | Green gradient progress indicator |
| `.tab-content` | Hidden by default; `.active` shows it |
| `.bg-bros-{1-11}` | Brotherhood background image overlays |
| `.skip-link` | Hidden until focused accessibility link |

---

## JavaScript Functions

### Progress Tracking

| Function | Purpose |
|----------|---------|
| `getProgress()` | Read from localStorage, return default if missing/corrupt |
| `saveProgress(progress)` | Write to localStorage with timestamp |
| `toggleModuleCompletion(moduleId)` | Add/remove module from completedModules array |
| `isModuleCompleted(moduleId)` | Check if module ID is in completedModules |
| `getCompletionStats(totalModules)` | Return { completed, total, percentage } |

### UI Updates

| Function | Purpose |
|----------|---------|
| `updateProgressBar()` | Update progress bar width and text |
| `initializeCheckboxes()` | Set initial checkbox states + add change listeners |
| `updateModuleItemState(checkbox)` | Add/remove `module-completed` class |

### Tab Navigation

| Function | Purpose |
|----------|---------|
| `initializeTabs()` | Add click listeners to `[data-tab]` buttons |

### Search

| Function | Purpose |
|----------|---------|
| `initializeSearch()` | Add input listener to `#search-box`, filter `[data-searchable]` items |

### Utilities

| Function | Purpose |
|----------|---------|
| `initializeSmoothScroll()` | Handle `a[href^="#"]` clicks with smooth scroll |
| `initializeAccordion()` | Handle `[data-accordion-toggle]` clicks |
| `resetProgress()` | Clear localStorage and reload (exposed as `window.resetAlphaAIProgress`) |

---

## File Structure

```
ai-1907/
├── index.html                      # Homepage
├── docs/
│   ├── learning-plan.html          # 4-week curriculum with progress tracking
│   └── quick-reference.html        # Tabbed reference card
├── assets/
│   ├── css/
│   │   └── custom.css              # Custom styles (~980 lines)
│   ├── js/
│   │   └── main.js                 # Progress tracking & interactions (~315 lines)
│   ├── images/
│   │   ├── bros/                   # Brotherhood photos
│   │   │   ├── bros-1.jpg through bros-11.jpg  # Background images
│   │   │   └── headshot2025.png    # Author photo
│   │   ├── beta_logo.jpg           # Beta Chapter logo
│   │   ├── alpha-crest.png         # Alpha Phi Alpha crest
│   │   └── alpha_learning_flowchart.svg
│   └── icons/
│       ├── favicon.ico
│       ├── favicon-16x16.png
│       ├── favicon-32x32.png
│       └── apple-touch-icon.png
├── specs/                          # Feature specifications (this folder)
├── .specify/                       # Speckit configuration
├── README.md                       # Project documentation
└── STRUCTURE.md                    # Technical documentation
```

---

## External Dependencies

### CDN Resources

| Resource | URL | Purpose |
|----------|-----|---------|
| Primer CSS | `unpkg.com/@primer/css@21.3.3/dist/primer.css` | Base CSS framework |

### External Video Links

| Video | URL | Week |
|-------|-----|------|
| 20+ AI Hacks | `youtube.com/watch?v=dE_nUrYBYiA` | Week 1 |
| NotebookLM | `youtu.be/dYi2FY3-XNY` | Week 1 |
| 8 AI Workflows | `youtu.be/zFcxA9T_BWs` | Week 2 |
| 6 AI Skills | `youtu.be/mz3wWBIT-q4` | Week 3 |
| Demo Video | `youtube.com/embed/s2O_0tOPNz0` | Homepage |

### External Tool Links

| Tool | URL |
|------|-----|
| Perplexity | `perplexity.ai` |
| NotebookLM | `notebooklm.google.com` |
| Claude | `claude.ai` |
| Gemini | `gemini.google.com` |

---

## Success Criteria

### Measurable Outcomes

- **SC-001**: All 3 pages load without JavaScript errors in Chrome, Firefox, Safari, Edge
- **SC-002**: Progress tracking persists across browser sessions (localStorage)
- **SC-003**: Lighthouse accessibility score >= 90
- **SC-004**: All text passes WCAG AA contrast ratio (4.5:1)
- **SC-005**: Site functions without JavaScript (content accessible, videos playable)
- **SC-006**: Mobile usability: all touch targets >= 48px, text readable without zoom
- **SC-007**: Print styles produce readable black-and-white output

---

## Known Issues / Technical Debt

*All issues resolved as of 2025-12-25*

1. ~~**Email placeholder**~~: RESOLVED - Replaced `your@email.com` with `uberdev@gmail.com` in both docs pages

2. ~~**Quick Reference video links outdated**~~: DOCUMENTED (by design) - Videos tab contains supplementary deep-dive content, distinct from Learning Plan curriculum. Added clarifying note to Videos tab.

3. ~~**Checklists tab content mismatch**~~: RESOLVED - Updated "Phase 1-4" to "Week 1-4" in Workflows tab reflection questions. Checklists tab already used correct terminology.

4. ~~**No 404 page**~~: RESOLVED - Created branded 404.html with Alpha colors, navigation, and fraternity motto

5. ~~**No sitemap.xml or robots.txt**~~: RESOLVED - robots.txt exists with Disallow: / directive. Sitemap not needed for noindex site.

---

## Maintenance Guide

### Adding a New Module

1. Add checkbox HTML in `docs/learning-plan.html`:
```html
<div class="module-item d-flex flex-items-start" data-searchable>
    <input type="checkbox" class="module-checkbox mr-3 mt-1"
           data-module-id="weekX-moduleX" id="wXmX">
    <div class="flex-auto">
        <label for="wXmX" class="d-block">
            <span class="module-title">Title</span>
            <span class="module-duration">XX min</span>
        </label>
        <p class="module-description">Description</p>
        <a href="URL" target="_blank" class="btn btn-sm mt-2">Watch Video</a>
    </div>
</div>
```

2. Update progress text: Change "0 of 5 modules complete" to "0 of 6 modules complete"

3. JavaScript automatically counts `.module-checkbox` elements - no code change needed

### Changing Colors

Edit CSS variables in `assets/css/custom.css`:
```css
:root {
  --alpha-gold: #CFB53B;  /* Change this value */
}
```

### Adding a New Page

1. Copy existing HTML file as template
2. Update `<title>` and content
3. Fix relative paths:
   - From root: `assets/css/custom.css`
   - From docs/: `../assets/css/custom.css`
4. Update header nav links on all pages
5. Update footer resource links if needed
