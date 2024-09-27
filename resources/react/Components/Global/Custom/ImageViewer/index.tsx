// Dependencies
import { useState, forwardRef, useMemo } from 'react';

// Hooks
import useTheme from '@/hooks/useTheme';

// Utils
import { cn } from '@/utilities/tailwind/cn';

// Icons
import { HiXMark } from 'react-icons/hi2';

// Types
import type { ImageViewerProps } from '@/types/Components/Global/Custom/ImageViewer';

const ImageViewer = forwardRef<HTMLSelectElement, ImageViewerProps>(
  (props, ref) => {
    const theme = useTheme();
    const imageViewerTheme = theme.global.components.image_viewer;
    const images = useMemo(() => {
      return props.images;
    }, [props.images]);

    const [currentIndex, _setCurrentIndex] = useState<number>(
      props.current_index ?? 0,
    );

    return (
      <section
        {...props}
        ref={ref}
        className={cn(
          imageViewerTheme.base,
          props.visible ? imageViewerTheme.visible : imageViewerTheme.hidden,
          props.className,
        )}
        onClick={props.onClose}
      >
        <div className={imageViewerTheme.content.base}>
          <img
            src={images[currentIndex] ?? ''}
            alt="Image"
            className={imageViewerTheme.content.image}
          />
        </div>
        <HiXMark
          onClick={props.onClose}
          className={imageViewerTheme.content.btn_close}
        />
      </section>
    );
  },
);

export default ImageViewer;
