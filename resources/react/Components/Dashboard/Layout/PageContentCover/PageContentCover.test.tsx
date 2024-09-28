// Dependencies
import { screen, render } from '@testing-library/react';
import { it } from 'node:test';

// Component
import PageContentCover from './index';

test('Dashboard Page Content Cover Component', function () {
  it('Component Visible', function () {
    render(
      <PageContentCover
        visible={'true'}
        data-testid="page-content-cover-visible"
      />,
    );

    const cover = screen.getByTestId('page-content-cover-visible');
    expect(cover).toBeInTheDocument();
    expect(cover).toHaveClass('inline-block');
  });

  it('Component Hidden', function () {
    render(<PageContentCover data-testid="page-content-cover-hidden" />);

    const cover = screen.getByTestId('page-content-cover-hidden');
    expect(cover).toBeInTheDocument();
    expect(cover).toHaveClass('hidden');
  });
});
