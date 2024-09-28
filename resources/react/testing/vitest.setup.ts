// Dependencies
import themeDefault from '@/themes/default';

beforeAll(() => {
  window.theme_object = themeDefault;
  window.route = ((name: string) => `${name}`) as unknown as any;
});
