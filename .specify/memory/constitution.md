<!--
===============================================================================
SYNC IMPACT REPORT
===============================================================================
Version Change: N/A → 1.0.0 (initial ratification)
Modified Principles: N/A (new constitution)
Added Sections:
  - Core Principles (5 principles derived from codebase analysis)
  - Target Audience section
  - Content Standards section
  - Governance section
Removed Sections: N/A
Templates Requiring Updates:
  - .specify/templates/plan-template.md - Constitution Check section now aligned
  - .specify/templates/spec-template.md - No changes needed
  - .specify/templates/tasks-template.md - No changes needed
Follow-up TODOs: None
===============================================================================
-->

# Alpha AI Learning Path Constitution

## Core Principles

### I. Accessibility First

All design and development decisions MUST prioritize accessibility for users aged 30-60+. This is non-negotiable.

**Requirements:**
- Base font size MUST be 18px minimum; headings proportionally larger
- Touch targets MUST be 48px minimum for all interactive elements
- Color contrast MUST meet WCAG AA standards (4.5:1 for text)
- All images MUST have meaningful alt text
- Focus states MUST be visible with 2px gold outline
- Skip links MUST be present for keyboard navigation
- Reduced motion preferences MUST be respected via `prefers-reduced-motion`

**Rationale:** The target audience includes non-technical professionals who may have reduced visual acuity or be less familiar with small UI patterns. Accessibility is not optional - it is the foundation.

### II. Simplicity Over Sophistication

The codebase MUST remain simple enough that a junior developer can understand and modify it within 30 minutes.

**Requirements:**
- No build step required - HTML, CSS, and JS files work directly
- Vanilla JavaScript only - no frameworks (React, Vue, Angular, etc.)
- CSS framework limited to CDN-hosted Primer CSS plus custom overrides
- No package.json dependencies required for runtime (dev tools acceptable)
- LocalStorage for client-side persistence - no backend database
- New features MUST NOT add complexity unless absolutely necessary

**Rationale:** This is an educational site, not a production application. Simplicity ensures maintainability by non-experts and fast deployment via GitHub Pages. YAGNI (You Aren't Gonna Need It) applies strictly.

### III. Fraternity Brand Integrity

All visual elements MUST maintain Alpha Phi Alpha Beta Chapter brand consistency.

**Requirements:**
- Primary colors: Black (#000000) and Old Gold (#CFB53B) only
- Accent variations permitted: Gold light (#e0c85c), Gold dark (#b89b2f), Black soft (#1a1a1a)
- Fraternity motto ("First of All, Servants of All, We Shall Transcend All") MUST appear in footer
- Beta Chapter logo and Alpha crest MUST be used per brand guidelines
- Tone MUST be warm, encouraging, and brotherly - never condescending
- Language MUST reflect fraternity values: excellence, service, leadership

**Rationale:** This site represents the Beta Chapter. Brand consistency reinforces trust and organizational identity.

### IV. Non-Technical Audience Focus

All content MUST be written for users with zero technical background.

**Requirements:**
- No jargon without immediate plain-language explanation
- Instructions MUST assume the user has never used AI tools before
- Analogies MUST reference familiar experiences (texting, Siri, etc.)
- Reassurance language MUST be present: "No coding required", "If you can text..."
- Time estimates MUST be realistic and include flexibility ("Go at your own pace")
- Error states MUST be friendly and provide clear next steps

**Rationale:** The target audience explicitly includes "non-technical professionals ages 30-60+". Content that assumes technical knowledge alienates the people this site exists to serve.

### V. Progressive Enhancement

The site MUST function without JavaScript and degrade gracefully on older browsers.

**Requirements:**
- Core content MUST be accessible with JavaScript disabled
- CSS MUST be loaded from CDN with fallback considerations
- Interactive features (progress tracking, tabs, search) are enhancements, not requirements
- Mobile-first responsive design MUST work on all modern browsers
- Print styles MUST be provided for offline reference
- No critical functionality behind JavaScript-only features

**Rationale:** Users may access this site on older devices, work computers with restrictions, or slow connections. Core educational content must always be accessible.

## Target Audience

This site serves Alpha Phi Alpha Beta Chapter brothers with the following characteristics:

- **Age Range:** 30-60+ years old
- **Technical Background:** None assumed - business owners, ministers, corporate professionals, retirees
- **Device Usage:** Mix of desktop and mobile, potentially older devices
- **Goal:** Learn practical AI skills to improve work and daily life
- **Time Commitment:** ~4 hours per week, flexible pacing

All decisions MUST be evaluated against this audience profile.

## Content Standards

### Curriculum Structure

- Four-week learning path with clear weekly objectives
- Modules MUST be independently completable (no strict prerequisites)
- Progress tracking via browser localStorage
- External video content embedded from YouTube
- Quick reference materials for ongoing use

### Tone Guidelines

- Encouraging and supportive ("I'm here to help")
- Brotherhood-focused ("Your brothers are waiting")
- Honest about time investment ("Real Talk About Time")
- Free of condescension or over-explanation
- Personal and authentic (author's voice preserved)

## Governance

### Amendment Process

1. Proposed changes MUST be documented with rationale
2. Changes affecting principles require explicit justification
3. All amendments MUST be recorded in version history
4. Breaking changes (principle removal/redefinition) require MAJOR version bump

### Versioning Policy

- **MAJOR:** Backward-incompatible principle changes or removals
- **MINOR:** New principles added or significant clarifications
- **PATCH:** Wording improvements, typo fixes, non-semantic changes

### Compliance Review

- All PRs SHOULD be checked against these principles
- Accessibility violations are blocking issues
- Complexity additions require explicit justification
- Brand deviations require documented approval

**Version**: 1.0.0 | **Ratified**: 2025-12-25 | **Last Amended**: 2025-12-25
