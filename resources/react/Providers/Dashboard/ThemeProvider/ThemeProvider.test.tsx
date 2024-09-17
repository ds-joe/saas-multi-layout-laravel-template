// Dependencies
import { render, screen } from '@testing-library/react';

// Provider
import ThemeProvider from './index';

test('Dashboard Theme Provider Render', function () {
  render(
    <ThemeProvider>
      <h1 data-testid="heading-element">Render Successfully.</h1>
    </ThemeProvider>,
  );

  const heading = screen.getByTestId('heading-element');
  expect(heading).toBeInTheDocument();
});
