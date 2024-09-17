import { render, screen } from '@testing-library/react';
import App from './App';

test('App component render correctly.', () => {
  render(
    <App>
      <h1 data-testid="render-element">Render</h1>
    </App>,
  );

  const heading = screen.getByTestId('render-element');
  expect(heading).toBeInTheDocument();
});
