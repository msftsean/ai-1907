/**
 * Alpha AI Learning Site - Main JavaScript
 * Minimal, progressive enhancement for learning progress and interactions
 */

(function() {
  'use strict';

  // ==========================================================================
  // Progress Tracking (localStorage-based)
  // ==========================================================================

  const STORAGE_KEY = 'alpha-ai-progress';

  /**
   * Get saved progress from localStorage
   * @returns {Object} Progress data object
   */
  function getProgress() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : { completedModules: [], lastUpdated: null };
    } catch (e) {
      console.warn('Could not load progress from localStorage:', e);
      return { completedModules: [], lastUpdated: null };
    }
  }

  /**
   * Save progress to localStorage
   * @param {Object} progress - Progress data to save
   */
  function saveProgress(progress) {
    try {
      progress.lastUpdated = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('Could not save progress to localStorage:', e);
    }
  }

  /**
   * Toggle module completion status
   * @param {string} moduleId - The module identifier
   * @returns {boolean} New completion status
   */
  function toggleModuleCompletion(moduleId) {
    const progress = getProgress();
    const index = progress.completedModules.indexOf(moduleId);

    if (index > -1) {
      progress.completedModules.splice(index, 1);
    } else {
      progress.completedModules.push(moduleId);
    }

    saveProgress(progress);
    return index === -1; // Return true if now completed
  }

  /**
   * Check if a module is completed
   * @param {string} moduleId - The module identifier
   * @returns {boolean} Whether the module is completed
   */
  function isModuleCompleted(moduleId) {
    const progress = getProgress();
    return progress.completedModules.includes(moduleId);
  }

  /**
   * Get completion statistics
   * @param {number} totalModules - Total number of modules
   * @returns {Object} Stats object with count and percentage
   */
  function getCompletionStats(totalModules) {
    const progress = getProgress();
    const completed = progress.completedModules.length;
    const percentage = totalModules > 0 ? Math.round((completed / totalModules) * 100) : 0;
    return { completed, total: totalModules, percentage };
  }

  // ==========================================================================
  // Progress Bar UI
  // ==========================================================================

  /**
   * Update the progress bar display
   */
  function updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar-fill');
    const progressText = document.querySelector('.progress-text');
    const checkboxes = document.querySelectorAll('.module-checkbox');

    if (!progressBar || checkboxes.length === 0) return;

    const stats = getCompletionStats(checkboxes.length);
    progressBar.style.width = stats.percentage + '%';

    if (progressText) {
      progressText.textContent = `${stats.completed} of ${stats.total} modules complete`;
    }
  }

  /**
   * Initialize checkboxes with saved state and event listeners
   */
  function initializeCheckboxes() {
    const checkboxes = document.querySelectorAll('.module-checkbox');

    checkboxes.forEach(function(checkbox) {
      const moduleId = checkbox.dataset.moduleId;
      if (!moduleId) return;

      // Set initial state
      checkbox.checked = isModuleCompleted(moduleId);
      updateModuleItemState(checkbox);

      // Add change listener
      checkbox.addEventListener('change', function() {
        toggleModuleCompletion(moduleId);
        updateModuleItemState(checkbox);
        updateProgressBar();
      });
    });

    updateProgressBar();
  }

  /**
   * Update visual state of module item based on checkbox
   * @param {HTMLElement} checkbox - The checkbox element
   */
  function updateModuleItemState(checkbox) {
    const moduleItem = checkbox.closest('.module-item');
    if (moduleItem) {
      if (checkbox.checked) {
        moduleItem.classList.add('module-completed');
      } else {
        moduleItem.classList.remove('module-completed');
      }
    }
  }

  // ==========================================================================
  // Tab Navigation (Quick Reference)
  // ==========================================================================

  /**
   * Initialize tab navigation
   */
  function initializeTabs() {
    const tabButtons = document.querySelectorAll('[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons.length === 0) return;

    tabButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const targetTab = button.dataset.tab;

        // Update button states
        tabButtons.forEach(function(btn) {
          btn.classList.remove('selected');
          btn.setAttribute('aria-selected', 'false');
        });
        button.classList.add('selected');
        button.setAttribute('aria-selected', 'true');

        // Update content visibility
        tabContents.forEach(function(content) {
          if (content.id === targetTab) {
            content.classList.add('active');
            content.removeAttribute('hidden');
          } else {
            content.classList.remove('active');
            content.setAttribute('hidden', '');
          }
        });
      });
    });

    // Activate first tab by default
    if (tabButtons[0]) {
      tabButtons[0].click();
    }
  }

  // ==========================================================================
  // Search/Filter (Quick Reference)
  // ==========================================================================

  /**
   * Initialize search functionality
   */
  function initializeSearch() {
    const searchBox = document.querySelector('#search-box');
    if (!searchBox) return;

    searchBox.addEventListener('input', function() {
      const query = searchBox.value.toLowerCase().trim();
      const searchableItems = document.querySelectorAll('[data-searchable]');

      searchableItems.forEach(function(item) {
        const text = item.textContent.toLowerCase();
        if (query === '' || text.includes(query)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // ==========================================================================
  // Smooth Scroll
  // ==========================================================================

  /**
   * Initialize smooth scroll for anchor links
   */
  function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Update focus for accessibility
          target.setAttribute('tabindex', '-1');
          target.focus();
        }
      });
    });
  }

  // ==========================================================================
  // Week Accordion (Optional enhancement for learning plan)
  // ==========================================================================

  /**
   * Initialize week accordion functionality
   */
  function initializeAccordion() {
    const weekHeaders = document.querySelectorAll('[data-accordion-toggle]');

    weekHeaders.forEach(function(header) {
      header.addEventListener('click', function() {
        const targetId = header.dataset.accordionToggle;
        const content = document.querySelector('#' + targetId);
        const isExpanded = header.getAttribute('aria-expanded') === 'true';

        // Toggle state
        header.setAttribute('aria-expanded', !isExpanded);

        if (content) {
          if (isExpanded) {
            content.setAttribute('hidden', '');
          } else {
            content.removeAttribute('hidden');
          }
        }
      });
    });
  }

  // ==========================================================================
  // Reset Progress (For testing/demo)
  // ==========================================================================

  /**
   * Reset all progress data
   * @returns {boolean} Success status
   */
  function resetProgress() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
      return true;
    } catch (e) {
      console.warn('Could not reset progress:', e);
      return false;
    }
  }

  // Expose reset function globally for testing
  window.resetAlphaAIProgress = resetProgress;

  // ==========================================================================
  // Initialization
  // ==========================================================================

  function init() {
    initializeCheckboxes();
    initializeTabs();
    initializeSearch();
    initializeSmoothScroll();
    initializeAccordion();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
