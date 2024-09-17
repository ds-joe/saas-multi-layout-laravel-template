// Dependencies
import '@/bootstrap/bootstrap';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// Components
import AppContainer from './App';

createInertiaApp({
  title: (title) => `${title}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}/index.tsx`,
      import.meta.glob('./Pages/**/*.tsx'),
    ),
  setup({ el, App: Page, props }) {
    const root = createRoot(el);
    root.render(
      <AppContainer>
        <Page {...props} />
      </AppContainer>,
    );
  },
  progress: {
    color: '#7C00FE',
  },
});
