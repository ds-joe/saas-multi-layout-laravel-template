import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Button from '.';
import MaterialUiProvider from '@/Providers/Global/MaterialUiProvider';

vi.mock('react', async function (original) {
  const a = await original();
  return {
    ...(a as any),
    useContext: vi.fn().mockReturnValue({
      theme: {
        colors: {
          primary: 'blue',
        },
      },
    }),
  };
});

test.skip('Button Render Correctly', () => {
  render(
    <MaterialUiProvider>
      <Button data-testid="global-button">Hello World</Button>
    </MaterialUiProvider>,
  );

  const globalButton = screen.getByTestId('global-button');
  expect(globalButton).toBeInTheDocument();
});
