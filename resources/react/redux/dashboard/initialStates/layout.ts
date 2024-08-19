// Dependencies
import { v4 as uuid } from "uuid";

// Types
import type { LayoutState } from "../types/Layout"

const initialState: LayoutState = {
  currentTheme: "",
  themeId: uuid(),
}

// Enums
export enum DashboardLayoutTheme {
  'bootstrap_light' = 'bootstrap4-light-blue',
  'bootstrap4_dark' = "bootstrap4-dark-blue",
  'lara_light' = 'lara-light-blue',
  'lara_dark' = 'lara-dark-blue',
};

export default initialState;