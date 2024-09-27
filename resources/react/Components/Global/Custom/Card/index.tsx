// Dependencies
import { forwardRef } from 'react';

// Hooks
import useTheme from '@/hooks/useTheme';

// Components
import {
  Card as MCard,
  CardBody as MCardBody,
  CardHeader as MCardHeader,
  CardFooter as MCardFooter,
  Typography,
} from '@material-tailwind/react';

// Utils
import { cn } from '@/utilities/tailwind/cn';

// Types
import type {
  CardProps,
  CardBodyProps,
  CardDescriptionProps,
  CardFooterProps,
  CardHeaderProps,
  CardTitleProps,
} from '@/types/Components/Global/Custom/Card';

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => (
  <MCard
    {...(props as any)}
    ref={ref}
    className={cn(props.className)}
  />
));

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  (props, ref) => (
    <MCardHeader
      {...(props as any)}
      ref={ref}
      className={cn(props.className)}
    />
  ),
);

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  (props, ref) => (
    <MCardBody
      {...(props as any)}
      ref={ref}
      className={cn(props.className)}
    />
  ),
);

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  (props, ref) => (
    <MCardFooter
      {...(props as any)}
      ref={ref}
      className={cn(props.className)}
    />
  ),
);

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  (props, ref) => {
    const theme = useTheme();
    const cardTheme = theme.global.components.card;

    return (
      <Typography
        {...(props as any)}
        ref={ref}
        variant="h5"
        color="black"
        className={cn(cardTheme.title, props.className)}
      />
    );
  },
);

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>((props, ref) => {
  const theme = useTheme();
  const cardTheme = theme.global.components.card;

  return (
    <Typography
      {...(props as any)}
      ref={ref}
      variant="paragraph"
      component="p"
      className={cn(cardTheme.description, props.className)}
    />
  );
});
