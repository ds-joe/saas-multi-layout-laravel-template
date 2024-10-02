// Types
import type { ComponentPropsWithoutRef } from "react";
import type {
  variant,
  color,
  size,
  label,
  error,
  success,
  arrow,
  value,
  onChange,
  selected,
  offset,
  dismiss,
  animate,
  lockScroll,
  labelProps,
  menuProps,
  containerProps
} from '@material-tailwind/react/types/components/select';

export type SelectProps = ComponentPropsWithoutRef<'select'> & {
  variant?: variant;
  color?: color;
  size?: size;
  label?: label;
  error?: error;
  success?: success;
  arrow?: arrow;
  value?: value;
  onChange?: onChange;
  selected?: selected;
  offset?: offset;
  dismiss?: dismiss;
  animate?: animate;
  lockScroll?: lockScroll;
  labelProps?: labelProps;
  menuProps?: menuProps;
  containerProps?: containerProps;
};
export type SelectOptionProps = ComponentPropsWithoutRef<'option'> & {
  index?: number
};

