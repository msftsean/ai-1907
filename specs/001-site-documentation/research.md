# Research: Site Documentation

**Feature**: 001-site-documentation
**Date**: 2025-12-25
**Purpose**: Analyze known issues and document resolution approaches

---

## Known Issues Analysis

### Issue 1: Email Placeholder Not Updated

**Location**:
- `docs/learning-plan.html` line 379
- `docs/quick-reference.html` line 551

**Current State**: `your@email.com`
**Expected State**: `uberdev@gmail.com`

**Decision**: Replace placeholder with correct email
**Rationale**: Ensures help button actually sends emails to the author
**Alternatives Considered**: None - this is a simple find/replace fix

---

### Issue 2: Quick Reference Video Links Outdated

**Location**: `docs/quick-reference.html` Videos tab

**Current State**: Videos tab references different YouTube links than Learning Plan
- Quick Reference: `27AxmEh3qEA` (Perplexity + NotebookLM Workflow)
- Learning Plan: `dE_nUrYBYiA` (20+ AI Hacks)

**Decision**: Keep both - they serve different purposes
**Rationale**:
- Quick Reference "Phase 1" videos are supplementary deep-dive content
- Learning Plan Week 1 videos are the primary curriculum
- The Quick Reference is meant to be a reference card with additional resources

**Alternatives Considered**:
1. Sync all videos to match Learning Plan - REJECTED (loses supplementary content)
2. Remove Quick Reference videos tab - REJECTED (users find it useful)
3. Add labels to distinguish primary vs supplementary - RECOMMENDED enhancement

---

### Issue 3: Checklists Tab Content Mismatch

**Location**: `docs/quick-reference.html` Checklists tab

**Current State**: References "Phase 1-4" structure
**Learning Plan State**: Uses "Week 1-4" structure

**Decision**: Update Checklists tab to use "Week 1-4" terminology
**Rationale**:
- Consistency with Learning Plan reduces confusion
- Users see "Week X" in Learning Plan, should see same in Quick Reference
- Constitution Principle IV (Non-Technical Audience Focus) requires consistent language

**Alternatives Considered**:
1. Keep "Phase" terminology in Quick Reference only - REJECTED (confusing)
2. Update Learning Plan to use "Phase" - REJECTED (Week is more accessible)

---

### Issue 4: No 404 Page

**Location**: Missing `404.html` at repository root

**Current State**: GitHub Pages shows default 404
**Expected State**: Custom branded 404 page

**Decision**: Create minimal 404.html matching site branding
**Rationale**:
- Maintains brand consistency (Principle III)
- Helps lost users navigate back to content
- Constitution Principle II (Simplicity) - keep it minimal

**Design Requirements**:
- Alpha colors and fonts
- "Page not found" message in friendly tone
- Link back to homepage
- No JavaScript required (static page)

**Alternatives Considered**:
1. Use Jekyll 404 with complex routing - REJECTED (adds build complexity)
2. Skip 404 page - REJECTED (poor user experience)

---

### Issue 5: No sitemap.xml or robots.txt

**Location**: Missing files at repository root

**Current State**: No SEO files
**Meta Tags**: `noindex, nofollow` set in HTML

**Decision**: Create minimal robots.txt only, skip sitemap
**Rationale**:
- Site has `noindex, nofollow` meta tags - intentionally not indexed
- robots.txt can formalize the no-crawl preference
- sitemap.xml unnecessary for non-indexed private site

**robots.txt Content**:
```
User-agent: *
Disallow: /
```

**Alternatives Considered**:
1. Full sitemap.xml - REJECTED (site is noindex by design)
2. Allow indexing - REJECTED (private fraternity content)
3. Skip both files - ACCEPTABLE but robots.txt adds clarity

---

## Technology Decisions

### localStorage Schema Stability

**Decision**: Keep current schema unchanged
**Schema**:
```json
{
  "completedModules": ["week1-module1", "week2-module1"],
  "lastUpdated": "2025-12-25T10:30:00.000Z"
}
```

**Rationale**: Schema is simple and sufficient. No migration needed.

### CDN Dependency (Primer CSS)

**Decision**: Keep unpkg.com CDN
**Current**: `https://unpkg.com/@primer/css@21.3.3/dist/primer.css`

**Rationale**:
- unpkg.com is reliable (backed by Cloudflare)
- Pinned version prevents breaking changes
- No local copy needed (reduces maintenance burden)

**Risk Mitigation**: If CDN fails, custom.css provides all critical styling. Site remains usable.

---

## Browser Compatibility

**Tested Browsers**: Chrome, Firefox, Safari, Edge (modern versions)
**Not Supported**: IE11 (per README)

**Decision**: No polyfills needed
**Rationale**:
- ES6+ features used are supported in all target browsers
- localStorage API universally available
- No complex DOM APIs requiring polyfills

---

## Summary of Decisions

| Issue | Decision | Impact |
|-------|----------|--------|
| Email placeholder | Fix with correct email | Low effort, high value |
| Video links | Keep both, add labels | Documentation clarification |
| Phase/Week mismatch | Update to Week terminology | Consistency improvement |
| No 404 page | Create minimal branded page | User experience improvement |
| No robots.txt | Create minimal disallow-all | SEO clarity |

All decisions align with Constitution principles. No complexity additions required.
