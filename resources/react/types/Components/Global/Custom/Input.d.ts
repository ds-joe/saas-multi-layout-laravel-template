import { ComponentPropsWithRef } from 'react';
import type { InputProps as MInputProps } from '@material-tailwind/react';
import type {
  variant,
  color,
  size,
  error,
  success,
  icon,
  labelProps,
  containerProps,
  shrink,
  className,
} from '@material-tailwind/react/types/components/input';

export type InputProps = ComponentPropsWithRef<'input'> & {
  variant?: variant;
  size?: size;
  color?: color;
  error?: error;
  success?: success;
  icon?: icon;
  labelProps?: labelProps;
  containerProps?: containerProps;
  className?: className;
  shrink?: shrink;
  inputRef?: React.Ref<HTMLInputElement>;
}
