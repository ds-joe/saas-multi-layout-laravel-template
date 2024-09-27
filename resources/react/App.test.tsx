import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('App component render correctly.', async () => {
  render(
    <App>
      <h1 data-testid="render-element">Render</h1>
    </App>,
  );

  const heading = await waitFor(() => screen.getByTestId('render-element'));
  expect(heading).toBeInTheDocument();
});
