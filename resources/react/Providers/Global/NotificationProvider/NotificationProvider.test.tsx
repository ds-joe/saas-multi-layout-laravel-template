// Dependencies
import { render, screen } from '@testing-library/react';

// Hook
import useNotification from '@/hooks/useNotification';

// Component
import NotificationProvider from './index';

// A simple test component to use the hook
const TestComponent = () => {
  const toast = useNotification();
  toast('Notification triggered!', 'default');

  return <div data-testid="render-element">Notification Test</div>;
};

test('useNotification hook works within NotificationProvider', () => {
  render(
    <NotificationProvider>
      <TestComponent />
    </NotificationProvider>,
  );

  const heading = screen.getByTestId('render-element');
  expect(heading).toBeInTheDocument();
});
