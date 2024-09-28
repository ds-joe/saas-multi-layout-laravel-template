// Dependencies
import { render, screen, waitFor } from '@testing-library/react';

// Provider
import ThemeProvider from './index';

test('Global Theme Provider Render', async function () {
  render(
    <ThemeProvider>
      <h1 data-testid="heading-element">Render Successfully.</h1>
    </ThemeProvider>,
  );

  const heading = await waitFor(() => screen.getByTestId('heading-element'));
  expect(heading).toBeInTheDocument();
});
