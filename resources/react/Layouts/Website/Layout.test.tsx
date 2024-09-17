// Layout.test.tsx
import { render, screen } from '@testing-library/react';
import { expect, vi, describe, it } from 'vitest';
import Layout from './index';

vi.mock('@inertiajs/react', async (importOriginal) => {
  const actual = (await importOriginal()) as {};
  return {
    ...actual,
    usePage: () => ({
      props: {
        errors: {},
      },
    }),
    Head: () => null,
  };
});

describe('Website Layout', function () {
  // Check if render correctly
  it('Render Correctly', function () {
    render(
      <Layout>
        <h1 data-testid="render-element">Hello, John Doe!</h1>
      </Layout>,
    );

    const heading = screen.getByTestId('render-element');
    expect(heading).toBeInTheDocument();
  });

  // Other tests here..
});
