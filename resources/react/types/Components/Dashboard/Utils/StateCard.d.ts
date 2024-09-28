import type { ComponentPropsWithRef } from 'react';
import type { IconType } from 'react-icons';

export type StateCardProps = ComponentPropsWithRef<'div'> & {
  value?: string | number;
  title?: string;
  Icon: IconType;
  free_space_icon?: boolean;
  percentage?: number;
  percentage_position?: 'up' | 'down';
  icon_className?: string;
};
