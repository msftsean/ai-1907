# Tasks: Site Documentation

**Input**: Design documents from `/specs/001-site-documentation/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/

**Tests**: No automated tests - manual browser testing per spec.md Success Criteria.

**Organization**: Tasks fix the 5 known issues identified in spec.md and research.md.

## Format: `[ID] [P?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

---

## Phase 1: Setup

**Purpose**: Verify current state and prepare for fixes

- [x] T001 Verify all 3 pages load correctly at http://localhost:3000 (run `npx serve`)
- [x] T002 [P] Confirm current email placeholder locations in docs/learning-plan.html line 379
- [x] T003 [P] Confirm current email placeholder locations in docs/quick-reference.html line 551

**Checkpoint**: Current state verified - ready for fixes

---

## Phase 2: Fix Email Placeholders (Issue 1)

**Goal**: Replace `your@email.com` with `uberdev@gmail.com` in help buttons

**Independent Test**: Click "Need Help? Email Sean" button - should open email client with correct address

- [x] T004 [P] Replace `your@email.com` with `uberdev@gmail.com` in docs/learning-plan.html line 379
- [x] T005 [P] Replace `your@email.com` with `uberdev@gmail.com` in docs/quick-reference.html line 551
- [x] T006 Verify both help buttons launch email with correct recipient

**Checkpoint**: Email placeholders fixed

---

## Phase 3: Fix Terminology Mismatch (Issue 3)

**Goal**: Update "Phase 1-4" to "Week 1-4" in Quick Reference Checklists tab

**Independent Test**: Compare Learning Plan week labels with Quick Reference checklist labels - should match

- [x] T007 Update Checklists tab header "Phase 1" to "Week 1" in docs/quick-reference.html (already correct)
- [x] T008 Update Checklists tab header "Phase 2" to "Week 2" in docs/quick-reference.html (already correct)
- [x] T009 Update Checklists tab header "Phase 3" to "Week 3" in docs/quick-reference.html (already correct)
- [x] T010 Update Checklists tab header "Phase 4" to "Week 4" in docs/quick-reference.html (already correct)
- [x] T011 Update Workflows tab "Phase" references to "Week" in docs/quick-reference.html (reflection questions section)
- [x] T012 Verify terminology is consistent across Learning Plan and Quick Reference

**Checkpoint**: Terminology consistent

---

## Phase 4: Create 404 Page (Issue 4)

**Goal**: Create branded 404.html for GitHub Pages

**Independent Test**: Navigate to non-existent URL (e.g., `/nonexistent`) - should show custom 404 page

- [x] T013 Create 404.html at repository root with Alpha branding
- [x] T014 Add skip-to-content link for accessibility in 404.html
- [x] T015 Add header with logo and nav links in 404.html
- [x] T016 Add friendly "Page not found" message with link to homepage in 404.html
- [x] T017 Add footer with fraternity motto in 404.html
- [x] T018 Verify 404.html uses correct relative paths for assets (root level)
- [ ] T019 Test 404 page renders correctly (deploy to GitHub Pages to verify)

**Checkpoint**: 404 page ready

---

## Phase 5: Create robots.txt (Issue 5)

**Goal**: Create robots.txt to formalize noindex preference

**Independent Test**: Access /robots.txt - should return Disallow: / directive

- [x] T020 Create robots.txt at repository root with Disallow: / directive (already existed)
- [ ] T021 Verify robots.txt is accessible at https://msftsean.github.io/ai-1907/robots.txt after deploy

**Checkpoint**: SEO files complete

---

## Phase 6: Documentation Update (Issue 2)

**Goal**: Clarify that Quick Reference videos are supplementary (per research.md decision)

**Independent Test**: Read Quick Reference Videos tab - purpose should be clear

- [x] T022 Add clarifying note to Videos tab in docs/quick-reference.html explaining these are supplementary deep-dive videos
- [x] T023 Update spec.md Known Issues section to mark Issue 2 as "Documented (by design)"

**Checkpoint**: Documentation clarified

---

## Phase 7: Verification & Cleanup

**Purpose**: Final testing and documentation updates

- [ ] T024 Test all 3 pages in Chrome, Firefox, Safari, Edge
- [ ] T025 [P] Verify progress tracking still works (check module, refresh, verify persistence)
- [ ] T026 [P] Verify tab navigation works on Quick Reference page
- [ ] T027 [P] Verify search filtering works on Quick Reference page
- [ ] T028 Run Lighthouse accessibility audit - confirm score >= 90
- [x] T029 Update spec.md to mark all 5 known issues as resolved
- [ ] T030 Commit all changes with message: "fix: resolve 5 known issues per spec"

**Checkpoint**: All tasks complete

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: No dependencies - start immediately
- **Phase 2-6**: Depend on Phase 1; can run in parallel with each other
- **Phase 7 (Verification)**: Depends on Phases 2-6 completion

### Parallel Opportunities

Phases 2, 3, 4, 5, 6 are independent and can be worked on in parallel:

```text
Phase 1 (Setup)
     │
     ├──► Phase 2 (Email fix) ──────────┐
     ├──► Phase 3 (Terminology fix) ────┤
     ├──► Phase 4 (404 page) ───────────┼──► Phase 7 (Verification)
     ├──► Phase 5 (robots.txt) ─────────┤
     └──► Phase 6 (Documentation) ──────┘
```

Within Phase 2: T004 and T005 are parallel (different files)
Within Phase 7: T025, T026, T027 are parallel (independent tests)

---

## Implementation Strategy

### MVP First (Phases 1-2 only)

The highest-impact fix is the email placeholder (Phase 2). This ensures the "Need Help?" button actually works.

1. Complete Phase 1: Setup verification
2. Complete Phase 2: Email fix
3. **STOP and VALIDATE**: Test help buttons work
4. Deploy if needed urgently

### Full Implementation

1. Phase 1: Setup (5 min)
2. Phase 2-6: Parallel fixes (30-45 min total)
3. Phase 7: Verification (15 min)
4. Deploy to GitHub Pages
5. Verify live site

### Time Estimates

| Phase | Estimated Time |
|-------|----------------|
| Phase 1 | 5 min |
| Phase 2 | 5 min |
| Phase 3 | 10 min |
| Phase 4 | 15 min |
| Phase 5 | 2 min |
| Phase 6 | 5 min |
| Phase 7 | 15 min |
| **Total** | **~1 hour** |

---

## Notes

- All fixes align with Constitution principles
- No JavaScript changes required
- No new dependencies added
- Changes are purely HTML/content updates plus 2 new static files
