import { ComponentPropsWithRef } from 'react';

export type ImageViewerProps = ComponentPropsWithRef<'section'> & {
  visible?: string | boolean;
  onClose: () => void;
  images: Array<string | null | undefined>;
  current_index?: number;
};
