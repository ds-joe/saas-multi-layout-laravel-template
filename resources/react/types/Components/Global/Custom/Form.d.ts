import { ComponentPropsWithRef, ReactNode } from 'react';

export type FormProps<P = {
}> = ComponentPropsWithRef<'form'> & P;
export type FormGroupProps<P = {
  double?: string | boolean;
}> = ComponentPropsWithRef<'div'> & P;
export type FloatInputProps<P = {}> = ComponentPropsWithRef<'input'> &
  P & {
    label?: ReactNode;
    labelClassName?: string;
    divClassName?: string;
    error?: string;
    icon?: ReactNode;
  };

export type FormErrorsProps<P = {
  errors?: Record<string, string>;
}> = ComponentPropsWithRef<'div'> & P;
