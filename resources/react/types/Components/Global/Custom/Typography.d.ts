import type {
  variant,
  color,
  textGradient,
  asType,
} from '@material-tailwind/react/types/components/typography';
import type { ComponentPropsWithRef } from 'react';

export type TypographyProps = ComponentPropsWithRef<'h1'> & {
  variant?: variant;
  color?: color;
  textGradient?: textGradient;
  as?: asType;
};
