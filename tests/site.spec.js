// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Homepage', () => {
  test('should load without errors', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Alpha AI/);
  });

  test('should display hero section', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Master AI in 4 Weeks');
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');

    // Check Learning Plan link
    const learningPlanLink = page.locator('a[href="docs/learning-plan.html"]').first();
    await expect(learningPlanLink).toBeVisible();

    // Check Quick Reference link
    const quickRefLink = page.locator('a[href="docs/quick-reference.html"]').first();
    await expect(quickRefLink).toBeVisible();
  });

  test('should have correct email in help button', async ({ page }) => {
    await page.goto('/');
    const helpButton = page.locator('.help-button-fixed a[href*="mailto:uberdev@gmail.com"]');
    await expect(helpButton).toBeVisible();
  });
});

test.describe('Learning Plan Page', () => {
  test('should load without errors', async ({ page }) => {
    await page.goto('/docs/learning-plan.html');
    await expect(page).toHaveTitle(/Learning Plan/);
  });

  test('should display progress bar', async ({ page }) => {
    await page.goto('/docs/learning-plan.html');
    await expect(page.locator('.progress-bar-container')).toBeVisible();
  });

  test('should have 5 module checkboxes', async ({ page }) => {
    await page.goto('/docs/learning-plan.html');
    const checkboxes = page.locator('.module-checkbox');
    await expect(checkboxes).toHaveCount(5);
  });

  test('should persist checkbox state in localStorage', async ({ page }) => {
    await page.goto('/docs/learning-plan.html');

    // Check first module
    const firstCheckbox = page.locator('.module-checkbox').first();
    await firstCheckbox.check();

    // Verify localStorage was updated
    const progress = await page.evaluate(() => {
      return localStorage.getItem('alpha-ai-progress');
    });
    expect(progress).toContain('week1-module1');

    // Reload and verify persistence
    await page.reload();
    await expect(firstCheckbox).toBeChecked();
  });

  test('should update progress bar when checkbox is checked', async ({ page }) => {
    await page.goto('/docs/learning-plan.html');

    // Clear any existing progress
    await page.evaluate(() => {
      localStorage.removeItem('alpha-ai-progress');
    });
    await page.reload();

    // Check first module
    const firstCheckbox = page.locator('.module-checkbox').first();
    await firstCheckbox.check();

    // Verify progress text updates
    const progressText = page.locator('.progress-text');
    await expect(progressText).toContainText('1 of 5');
  });

  test('should have correct email in help button', async ({ page }) => {
    await page.goto('/docs/learning-plan.html');
    const helpButton = page.locator('a[href*="mailto:uberdev@gmail.com"]');
    await expect(helpButton).toBeVisible();
  });

  test('should have fraternity motto in footer', async ({ page }) => {
    await page.goto('/docs/learning-plan.html');
    await expect(page.locator('.footer-motto')).toContainText('First of All');
  });
});

test.describe('Quick Reference Page', () => {
  test('should load without errors', async ({ page }) => {
    await page.goto('/docs/quick-reference.html');
    await expect(page).toHaveTitle(/Quick Reference/);
  });

  test('should have 4 tabs', async ({ page }) => {
    await page.goto('/docs/quick-reference.html');
    const tabs = page.locator('.UnderlineNav-item');
    await expect(tabs).toHaveCount(4);
  });

  test('should switch tabs correctly', async ({ page }) => {
    await page.goto('/docs/quick-reference.html');

    // Videos tab should be active by default
    await expect(page.locator('#videos')).toBeVisible();

    // Click Workflows tab
    await page.locator('[data-tab="workflows"]').click();
    await expect(page.locator('#workflows')).toBeVisible();
    await expect(page.locator('#videos')).toBeHidden();

    // Click Checklists tab
    await page.locator('[data-tab="checklists"]').click();
    await expect(page.locator('#checklists')).toBeVisible();

    // Click Tools tab
    await page.locator('[data-tab="tools"]').click();
    await expect(page.locator('#tools')).toBeVisible();
  });

  test('should have search functionality', async ({ page }) => {
    await page.goto('/docs/quick-reference.html');
    const searchBox = page.locator('#search-box');
    await expect(searchBox).toBeVisible();

    // Type in search box
    await searchBox.fill('NotebookLM');

    // Wait for filtering to take effect
    await page.waitForTimeout(300);
  });

  test('should have Week terminology in reflection questions', async ({ page }) => {
    await page.goto('/docs/quick-reference.html');

    // Switch to Workflows tab
    await page.locator('[data-tab="workflows"]').click();

    // Check for Week terminology
    await expect(page.locator('text=Week 1:')).toBeVisible();
    await expect(page.locator('text=Week 2:')).toBeVisible();
    await expect(page.locator('text=Week 3:')).toBeVisible();
    await expect(page.locator('text=Week 4:')).toBeVisible();
  });

  test('should have clarifying note in Videos tab', async ({ page }) => {
    await page.goto('/docs/quick-reference.html');
    await expect(page.locator('text=supplementary deep-dive videos')).toBeVisible();
  });

  test('should have correct email in help button', async ({ page }) => {
    await page.goto('/docs/quick-reference.html');
    const helpButton = page.locator('a[href*="mailto:uberdev@gmail.com"]');
    await expect(helpButton).toBeVisible();
  });
});

test.describe('404 Page', () => {
  test('should load without errors', async ({ page }) => {
    await page.goto('/404.html');
    await expect(page).toHaveTitle(/Page Not Found/);
  });

  test('should display friendly message', async ({ page }) => {
    await page.goto('/404.html');
    await expect(page.locator('h1')).toContainText('Page Not Found');
    await expect(page.locator('text=took a detour')).toBeVisible();
  });

  test('should have link back to home', async ({ page }) => {
    await page.goto('/404.html');
    const homeLink = page.locator('a[href="index.html"]').first();
    await expect(homeLink).toBeVisible();
  });

  test('should have navigation header', async ({ page }) => {
    await page.goto('/404.html');
    await expect(page.locator('header.Header')).toBeVisible();
  });

  test('should have fraternity motto in footer', async ({ page }) => {
    await page.goto('/404.html');
    await expect(page.locator('.footer-motto')).toContainText('First of All');
  });

  test('should have skip-to-content link', async ({ page }) => {
    await page.goto('/404.html');
    const skipLink = page.locator('.skip-link');
    await expect(skipLink).toHaveAttribute('href', '#main-content');
  });
});

test.describe('Accessibility', () => {
  test('homepage should have skip link', async ({ page }) => {
    await page.goto('/');
    const skipLink = page.locator('.skip-link');
    await expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  test('learning plan should have skip link', async ({ page }) => {
    await page.goto('/docs/learning-plan.html');
    const skipLink = page.locator('.skip-link');
    await expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  test('quick reference should have skip link', async ({ page }) => {
    await page.goto('/docs/quick-reference.html');
    const skipLink = page.locator('.skip-link');
    await expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  test('all pages should have main content area', async ({ page }) => {
    for (const url of ['/', '/docs/learning-plan.html', '/docs/quick-reference.html', '/404.html']) {
      await page.goto(url);
      await expect(page.locator('#main-content')).toBeVisible();
    }
  });
});
