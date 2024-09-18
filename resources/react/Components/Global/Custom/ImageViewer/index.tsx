// Dependencies
import { useState, forwardRef } from 'react';

// Utils
import { cn } from '@/utilities/tailwind/cn';

// Icons
import { HiXMark } from 'react-icons/hi2';

// Types
import type { ImageViewerProps } from '@/types/Components/Global/Custom/ImageViewer';

const ImageViewer = forwardRef<HTMLSelectElement, ImageViewerProps>(
  (props, ref) => {
    const [images, _setImages] = useState<Array<string | undefined | null>>(
      props.images ?? [],
    );
    const [currentIndex, _setCurrentIndex] = useState<number>(
      props.current_index ?? 0,
    );

    return (
      <section
        {...props}
        ref={ref}
        className={cn(
          'transition-all duration-500 w-screen min-h-screen fixed top-0 left-0 bg-white/60 dark:bg-black/60 backdrop-blur z-50',
          props.visible
            ? 'flex flex-col scale-100 items-center justify-center '
            : 'hidden scale-0',
          props.className,
        )}
        onClick={props.onClose}
      >
        <div className="container h-full flex flex-col items-center justify-center">
          <img
            src={images[currentIndex] ?? ''}
            alt="Image"
            className="h-full object-cover max-w-2xl"
          />
        </div>
        <HiXMark
          onClick={props.onClose}
          className="absolute top-5 right-5 text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white text-4xl cursor-pointer"
        />
      </section>
    );
  },
);

export default ImageViewer;
