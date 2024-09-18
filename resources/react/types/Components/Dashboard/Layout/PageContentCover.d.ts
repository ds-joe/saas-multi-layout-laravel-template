import type { ComponentPropsWithRef } from 'react';

export type PageContentCoverProps = ComponentPropsWithRef<'div'> & {
  visible?: boolean | string;
};
