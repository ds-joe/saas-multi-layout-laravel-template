// Test Dependencies
import { screen, render } from '@testing-library/react';

// Provider
import MaterialUiProvider from '.';

test('MaterialUiProvider render correctly', function () {
  render(
    <div data-testid="material-ui-provider">
      <MaterialUiProvider>
        <h1>Hello World</h1>
      </MaterialUiProvider>
    </div>,
  );

  const provider = screen.getByTestId('material-ui-provider');
  expect(provider).toBeInTheDocument();
});
