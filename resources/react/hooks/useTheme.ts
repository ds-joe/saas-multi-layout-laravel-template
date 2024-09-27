// Hooks
import { ThemeObject } from '@/types/Services/ThemeManager';

const useTheme = (): ThemeObject => window.theme_object;

export default useTheme;
