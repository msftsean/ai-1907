# Implementation Plan: Site Documentation

**Branch**: `001-site-documentation` | **Date**: 2025-12-25 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-site-documentation/spec.md`

## Summary

This plan documents the existing Alpha AI Learning Path site for maintainability. The site is a static 3-page educational website targeting non-technical users (ages 30-60+) learning AI tools. The primary deliverables are:

1. Complete site specification (done)
2. Data model documentation for localStorage schema
3. Maintenance contracts/procedures
4. Quickstart guide for future contributors
5. Fix 5 known technical debt items

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript ES6+
**Primary Dependencies**: GitHub Primer CSS v21.3.3 (CDN)
**Storage**: Browser localStorage (client-side only)
**Testing**: Manual browser testing (Chrome, Firefox, Safari, Edge)
**Target Platform**: GitHub Pages (static hosting)
**Project Type**: Static web site (no build step)
**Performance Goals**: Lighthouse accessibility score >= 90
**Constraints**: No JavaScript frameworks, no build tools, WCAG AA compliance
**Scale/Scope**: 3 pages, 5 learning modules, ~1300 lines of custom CSS/JS

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Evidence |
|-----------|--------|----------|
| **I. Accessibility First** | PASS | 18px base font, 48px touch targets, skip links, focus states, reduced motion support documented in spec |
| **II. Simplicity Over Sophistication** | PASS | Vanilla JS, no build step, Primer CSS via CDN, localStorage only |
| **III. Fraternity Brand Integrity** | PASS | Alpha colors (#000, #CFB53B), motto in footer, warm tone |
| **IV. Non-Technical Audience Focus** | PASS | Plain language, reassurance messaging, flexible pacing |
| **V. Progressive Enhancement** | PASS | Core content accessible without JS, print styles provided |

**Gate Status**: ALL PASS - Proceeding to Phase 0

## Project Structure

### Documentation (this feature)

```text
specs/001-site-documentation/
├── plan.md              # This file
├── research.md          # Phase 0 output - known issues analysis
├── data-model.md        # Phase 1 output - localStorage schema
├── quickstart.md        # Phase 1 output - contributor guide
├── contracts/           # Phase 1 output - maintenance procedures
│   └── maintenance.md   # Update procedures for common tasks
└── tasks.md             # Phase 2 output (/speckit.tasks command)
```

### Source Code (repository root)

```text
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
│   │   ├── beta_logo.jpg           # Beta Chapter logo
│   │   ├── alpha-crest.png         # Alpha Phi Alpha crest
│   │   └── alpha_learning_flowchart.svg
│   └── icons/                      # Favicons
├── README.md                       # Project documentation
└── STRUCTURE.md                    # Technical documentation
```

**Structure Decision**: Static site with flat HTML structure. No build step. CSS/JS in assets folder. Specs in separate `specs/` folder for documentation purposes.

## Complexity Tracking

> No violations identified. All patterns align with constitution principles.

| Aspect | Decision | Rationale |
|--------|----------|-----------|
| No build step | Keep as-is | Constitution Principle II requires simplicity |
| localStorage only | Keep as-is | Constitution Principle II - no backend complexity |
| CDN dependencies | Keep as-is | Primer CSS via unpkg.com is reliable |
