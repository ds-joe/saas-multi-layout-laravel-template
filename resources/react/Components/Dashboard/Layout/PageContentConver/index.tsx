// Dependencies
import { forwardRef } from 'react';

// Utils
import { cn } from '@/utilities/tailwind/cn';

// Types
import type { PageContentCoverProps } from '@/types/Components/Dashboard/Layout/PageContentCover';

const PageContentCover = forwardRef<HTMLDivElement, PageContentCoverProps>(
  (props, ref) => {
    const visible = props.visible == 'false' || !props.visible ? false : true;

    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          `w-screen h-screen fixed top-0 left-0 bg-background z-[9] lg:hidden ${visible ? 'inline-block' : 'hidden'}`,
          props.className,
        )}
      ></div>
    );
  },
);

export default PageContentCover;
