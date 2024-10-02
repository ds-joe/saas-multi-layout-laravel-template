import type { ButtonProps as MButtonProps } from '@material-tailwind/react';
import type { ComponentPropsWithRef } from 'react';
import type {
  variant,
  size,
  color,
  fullWidth,
  ripple,
  className,
  children,
} from '@material-tailwind/react/types/components/button';

export type ButtonProps = ComponentPropsWithRef<'button'> & {
  variant?: variant;
  size?: size;
  color?: color;
  fullWidth?: fullWidth;
  ripple?: ripple;
  className?: className;
  children: children;
  loading?: boolean;
};
