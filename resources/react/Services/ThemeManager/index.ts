// Dependencies
import { Theme } from '@/types/Services/ThemeManager';

// Default theme object
import _default from '@/themes/default';

// Types
import type { ThemeObject } from '@/types/Services/ThemeManager';

/**
 * Class to handle application theme management.
 * It retrieves the theme from local storage, provides dynamic theme loading, and allows theme switching.
 */
class ThemeManager {
  private theme: Theme;
  private readonly storageKey = 'APP_THEME';

  constructor() {
    this.theme = 'default'; // Default theme
  }

  /**
   * Loads the theme from local storage if it exists, otherwise keeps the default theme.
   *
   * @return { Promise<void> }
   */
  public async loadStoredTheme(): Promise<void> {
    try {
      // Get theme name from local storage.
      const storedTheme = localStorage.getItem(this.storageKey);
      if (storedTheme) {
        this.theme = storedTheme as Theme;
      }

      // Load theme to window object
      if (!window.theme_object) {
        window.theme_object = await this.getThemeObject();
      }
    } catch (error) {
      throw new Error('Cannot load theme from local storage');
    }
  }

  /**
   * Retrieves the current theme object dynamically.
   *
   * @async
   * @returns {Promise<ThemeObject> } Returns a promise that resolves to the theme data object.
   * @throws Will throw an error if the theme is not found.
   */
  public async getThemeObject(): Promise<ThemeObject> {
    let themeObj;

    switch (this.theme) {
      case 'default': {
        themeObj = await import('@/themes/default');
        break;
      }
      default: {
        throw new Error(`${this.theme} theme not found.`);
      }
    }

    return themeObj.default as unknown as ThemeObject;
  }

  /**
   * Changes the current theme and saves it to local storage.
   * Reloads the page to apply the new theme.
   *
   * @param {Theme} newTheme - The theme to switch to.
   * @returns {void}
   */
  public changeTheme(newTheme: Theme): void {
    this.theme = newTheme;
    localStorage.setItem(this.storageKey, newTheme);
    location.reload(); // Reload page to apply the theme
  }

  /**
   * Returns the currently selected theme.
   *
   * @returns {Theme} The current theme.
   */
  public getCurrentTheme(): Theme {
    return this.theme;
  }

  /**
   * Get words from window object,
   *
   * @return { ThemeObject }
   */
  public getFromWindow(): ThemeObject {
    return window.theme_object;
  }
}

export default ThemeManager;
