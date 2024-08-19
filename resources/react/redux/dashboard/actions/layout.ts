// Enums
import { DashboardLayoutTheme } from "../initialStates/layout";

// Types
import type { PayloadAction } from "@reduxjs/toolkit";
import type { LayoutState } from "../types/Layout";


export default {

  /**
   * Change theme
   * 
   * @param { LayoutState } state
   * @param { PayloadAction<DashboardLayoutTheme> } theme
   * @return { void }
   */
  changeLayoutTheme: (state: LayoutState, theme: PayloadAction<DashboardLayoutTheme>): void => {
    state.currentTheme = theme.payload;
  }

}