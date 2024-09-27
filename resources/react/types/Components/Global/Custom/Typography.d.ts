import type {
  variant,
  color,
  textGradient,
  asType,
} from '@material-tailwind/react/types/components/typography';
import type { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';
import type { TypographyProps } from '@material-tailwind/react';

export type TypographyProps<D extends asType> = ComponentPropsWithRef<D> & {
  variant: variant;
  color: color;
  textGradient: textGradient;
  as: D;
};
export type TypographyComponent<D extends asType = 'p'> =
  ForwardRefExoticComponent<ComponentPropsWithRef, TypographyProps<D>>;
