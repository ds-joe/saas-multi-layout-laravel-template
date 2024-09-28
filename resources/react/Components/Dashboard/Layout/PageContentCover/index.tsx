// Dependencies
import { forwardRef } from 'react';

// Hooks
import useTheme from '@/hooks/useTheme';

// Utils
import { cn } from '@/utilities/tailwind/cn';

// Types
import type { PageContentCoverProps } from '@/types/Components/Dashboard/Layout/PageContentCover';

const PageContentCover = forwardRef<HTMLDivElement, PageContentCoverProps>(
  (props, ref) => {
    const visible = props.visible == 'false' || !props.visible ? false : true;
    const theme = useTheme().dashboard.components.layout.page_content_cover;

    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          theme.backdrop.base,
          visible ? theme.backdrop.visible : theme.backdrop.hidden,
          props.className
        )}
      />
    );
  },
);

export default PageContentCover;
