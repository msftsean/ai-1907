# Data Model: Alpha AI Learning Path

**Feature**: 001-site-documentation
**Date**: 2025-12-25

---

## Overview

The site uses browser localStorage for client-side persistence. There is no backend database. All data is stored locally in the user's browser.

---

## Entities

### UserProgress

**Storage Key**: `alpha-ai-progress`
**Persistence**: Browser localStorage
**Scope**: Per-browser, per-domain

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| `completedModules` | `string[]` | Array of completed module IDs | Valid module IDs only |
| `lastUpdated` | `string` | ISO 8601 timestamp | Auto-generated on save |

**Example**:
```json
{
  "completedModules": ["week1-module1", "week1-module2", "week2-module1"],
  "lastUpdated": "2025-12-25T14:30:00.000Z"
}
```

**Default Value** (when localStorage is empty or corrupt):
```json
{
  "completedModules": [],
  "lastUpdated": null
}
```

---

### Module

**Storage**: HTML data attributes (not persisted)
**Location**: `docs/learning-plan.html`

| Field | Type | Source | Description |
|-------|------|--------|-------------|
| `id` | `string` | `data-module-id` attribute | Unique identifier |
| `title` | `string` | `.module-title` text content | Display name |
| `duration` | `string` | `.module-duration` text content | Estimated time |
| `description` | `string` | `.module-description` text content | Module summary |
| `videoUrl` | `string` | `a.btn` href attribute | External video link |
| `week` | `number` | Derived from ID prefix | Week number (1-4) |

**Valid Module IDs** (5 total):

| ID | Week | Title |
|----|------|-------|
| `week1-module1` | 1 | 20+ AI Hacks That Save Hours Every Day |
| `week1-module2` | 1 | Best Ways to Use NotebookLM |
| `week2-module1` | 2 | 8 AI Workflows That Actually Work |
| `week3-module1` | 3 | 6 AI Skills 99% of People Don't Know |
| `week4-module1` | 4 | Run Your AI Experiment |

---

## Relationships

```
UserProgress 1 ──────────── * Module
              (completedModules contains module IDs)
```

- One UserProgress record per browser
- UserProgress.completedModules references Module.id values
- Modules are defined in HTML, not stored in localStorage

---

## State Transitions

### Module Completion State

```
┌─────────────────┐
│   INCOMPLETE    │
│  (default)      │
└────────┬────────┘
         │ User checks checkbox
         ▼
┌─────────────────┐
│   COMPLETED     │
│  (in storage)   │
└────────┬────────┘
         │ User unchecks checkbox
         ▼
┌─────────────────┐
│   INCOMPLETE    │
│  (removed)      │
└─────────────────┘
```

### Progress Reset

```
┌─────────────────┐
│  ANY STATE      │
└────────┬────────┘
         │ window.resetAlphaAIProgress()
         ▼
┌─────────────────┐
│  INITIAL STATE  │
│  (storage cleared, page reloads)
└─────────────────┘
```

---

## Validation Rules

### Module ID Validation

- MUST match pattern: `week[1-4]-module[1-9]`
- MUST exist in HTML as `data-module-id` attribute
- Invalid IDs are silently ignored (no error thrown)

### localStorage Validation

- JSON parse errors return default empty object
- Missing `completedModules` key treated as empty array
- Non-array `completedModules` treated as empty array

---

## Data Volume

| Metric | Value |
|--------|-------|
| Total modules | 5 |
| Max storage size | < 1KB |
| Storage quota | Not a concern (localStorage limit is 5-10MB) |

---

## Privacy & Security

| Aspect | Implementation |
|--------|----------------|
| Data location | Local browser only |
| Data transmission | None (no backend) |
| PII stored | None |
| Encryption | None needed (no sensitive data) |
| GDPR impact | Minimal (browser storage, user controls) |

---

## Migration Strategy

**Current Version**: Implicit v1 (no version field)
**Future Migrations**: Add `version` field if schema changes

```javascript
// Future migration pattern (not currently implemented)
function migrateProgress(data) {
  if (!data.version) {
    // v1 to v2 migration
    data.version = 2;
    // ... migration logic
  }
  return data;
}
```

**Current Policy**: No migrations planned. Schema is stable.
