// Types
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { LayoutState } from "../types/Layout";


export default {

  /**
   * Toggle dark theme
   * 
   * @param { LayoutState } state
   * @return { void }
   */
  toggleDarkTheme: (state: LayoutState): void => {
    const darkMode = !state.darkMode;
    localStorage.setItem('dark-theme', darkMode as any);
    document.documentElement.classList.toggle('dark', darkMode);
    state.darkMode = darkMode;
  },

  /**
   * Toggle sidebar open.
   * 
   * @param { LayoutState } state
   * @return { void }
   */
  toggleSidebarOpen: (state: LayoutState): void => {
    state.sidebarOpen = !state.sidebarOpen;
  },

}