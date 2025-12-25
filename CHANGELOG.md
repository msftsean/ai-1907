# Changelog

All notable changes to the Alpha AI Learning Path site will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [3.1.0] - 2025-12-25

### Added
- **404.html**: Custom branded 404 page with Alpha colors, navigation, and fraternity motto
- **Playwright test suite**: 28 automated tests covering all pages, progress tracking, accessibility
- **Site specification**: Complete reverse-engineered documentation in `specs/001-site-documentation/`
- **Project constitution**: Governance principles in `.specify/memory/constitution.md`
- **Maintenance guides**: Quickstart, data model, and maintenance contracts for future contributors

### Fixed
- **Email placeholders**: Replaced `your@email.com` with `uberdev@gmail.com` in help buttons
- **Terminology mismatch**: Updated "Phase 1-4" to "Week 1-4" in Quick Reference reflection questions

### Changed
- **Videos tab**: Added clarifying note explaining supplementary deep-dive content vs. curriculum

### Technical
- Added `package.json` with test scripts (`npm test`, `npm run test:headed`, `npm run serve`)
- Added `playwright.config.js` for headless browser testing
- Verified `robots.txt` exists with `Disallow: /` directive

---

## [3.0.0] - 2025-12-20

### Changed
- Refactored Week 2 to focus on AI Workflows
- Added 8 AI Workflows reference table
- Refactored learning plan to focus on skills, not products
- Updated homepage week cards to match learning plan content
- Replaced Week 1 first video with AI Hacks video

---

## [2.0.0] - 2025-12-15

### Added
- Quick Reference page with tabbed navigation (Videos, Workflows, Checklists, Tools)
- Search/filter functionality on Quick Reference page
- Progress tracking with localStorage persistence

### Changed
- Restructured curriculum from 3 weeks to 4 weeks
- Updated Week 3 to "Using AI for Productivity"

---

## [1.0.0] - 2025-12-10

### Added
- Initial site launch
- Homepage with hero section and curriculum overview
- Learning Plan page with video modules
- Progress tracking (localStorage)
- Alpha Phi Alpha branding (gold/black colors, fraternity motto)
- Responsive design for mobile devices
- Accessibility features (skip links, focus states, 18px base font)
