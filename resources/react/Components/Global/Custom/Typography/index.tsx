// Dependencies
import { forwardRef } from 'react';

// Hooks
import useTheme from '@/hooks/useTheme';

// Component
import { Typography as MTypography } from '@material-tailwind/react';

// Utils
import { cn } from '@/utilities/tailwind/cn';

// Types
import type {
  TypographyComponent,
  TypographyProps,
} from '@/types/Components/Global/Custom/Typography';

const Typography: TypographyComponent = forwardRef<
  HTMLParagraphElement,
  TypographyProps<'p'>
>((props, ref) => {
  const theme = useTheme();
  const typographyTheme = theme.global.components.typography;

  return (
    <MTypography
      {...(props as any)}
      ref={ref}
      className={cn(typographyTheme.base, props.className)}
    ></MTypography>
  );
});

export default Typography;
