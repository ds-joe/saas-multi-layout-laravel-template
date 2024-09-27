// Dependencies
import { render, screen } from '@testing-library/react';

// Component
import ImageViewer from './index';

test('Image Viewer visible', function () {
  render(
    <ImageViewer
      images={['https://via.placeholder.com/150']}
      current_index={0}
      onClose={() => { }}
      visible={'true'}
      data-testid="image-viewer"
    />,
  );

  const imageViewer = screen.getByTestId('image-viewer');
  expect(imageViewer).toBeInTheDocument();
  expect(imageViewer).toHaveClass('flex flex-col scale-100');
});

test('Image Viewer hidden', function () {
  render(
    <ImageViewer
      images={['https://via.placeholder.com/150']}
      current_index={0}
      onClose={() => { }}
      data-testid="image-viewer"
    />,
  );

  const imageViewer = screen.queryByTestId('image-viewer');
  expect(imageViewer).toHaveClass('hidden scale-0');
});
