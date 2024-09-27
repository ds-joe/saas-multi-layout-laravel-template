import _default from '@/themes/default';

export type Theme = 'default';

export type ThemeObject = typeof _default;

declare global {
  interface Window {
    theme_object: ThemeObject;
  }
}
