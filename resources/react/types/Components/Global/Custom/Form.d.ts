import { ComponentPropsWithRef, ReactNode } from "react";


export type FormProps<P = {}> = ComponentPropsWithRef<'form'> & P;
export type FormGroupProps<P = {}> = ComponentPropsWithRef<'div'> & P;
export type FloatInputProps<P = {}> = ComponentPropsWithRef<'input'> & P & {
  label?: ReactNode;
  labelClassName?: string;
  divClassName?: string;
  error?: string;
  icon?: ReactNode,
};