// Types
import type { LayoutState } from "../types/Layout"



const initialState: LayoutState = {
  darkMode: (() => {
    const storedDarkMode = localStorage.getItem('dark-theme');
    if (storedDarkMode) {
      return storedDarkMode === 'true';
    }
    return false;
  })(),
  sidebarOpen: false
}


export default initialState;