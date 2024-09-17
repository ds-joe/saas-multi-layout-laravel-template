// Dependencies
import { render, screen } from '@testing-library/react';

// Provider
import StoreProvider from './index';

test('Dashboard Redux Store Provider Render', function () {
  render(
    <StoreProvider>
      <h1 data-testid="heading-element">Render Successfully.</h1>
    </StoreProvider>,
  );

  const heading = screen.getByTestId('heading-element');
  expect(heading).toBeInTheDocument();
});
