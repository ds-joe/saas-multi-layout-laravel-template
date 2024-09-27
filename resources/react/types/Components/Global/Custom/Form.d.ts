import type React, { ComponentPropsWithRef, ReactNode } from 'react';
import type { InputProps, Checkbox } from '@material-tailwind/react';
import type {
  variant,
  color,
  size,
  label,
  error,
  success,
  icon,
  labelProps,
  containerProps,
  shrink,
  className,
} from '@material-tailwind/react/types/components/input';
import type {
  color,
  label,
  icon,
  ripple,
  className,
  disabled,
  objectType,
} from '@material-tailwind/react/types/components/checkbox';

export type FormProps = ComponentPropsWithRef<'form'>;
export type FormGroupProps = ComponentPropsWithRef<'div'> & {
  double?: string | boolean;
};

// Form Errors
export type FormErrorsProps = ComponentPropsWithRef<'div'> & {
  errors?: Record<string, string>;
};

// Float Input
export type FloatInputProps = ComponentPropsWithRef<'input'> & {
  variant?: variant;
  size?: size;
  color?: color;
  label?: label;
  error?: error;
  success?: success;
  icon?: icon;
  labelProps?: labelProps;
  containerProps?: containerProps;
  className?: className;
  shrink?: shrink;
  inputRef?: React.Ref<HTMLInputElement>;
};

// Checkbox
export type CheckboxProps = ComponentPropsWithRef<'input'> & {
  color?: color;
  label?: label;
  icon?: icon;
  ripple?: ripple;
  className?: className;
  disabled?: disabled;
  containerProps?: objectType;
  labelProps?: objectType;
  iconProps?: objectType;
  inputRef?: React.Ref<HTMLInputElement>;
};
