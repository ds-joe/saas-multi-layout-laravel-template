// Dependencies
import { forwardRef } from 'react';

// Hooks
import useTheme from '@/hooks/useTheme';

// Components
import { Button as MButton } from '@material-tailwind/react';

// Utils
import { cn } from '@/utilities/tailwind/cn';

// Types
import type { ButtonProps } from '@/types/Components/Global/Custom/Button';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const theme = useTheme();
  const buttonTheme = theme.global.components.custom.button;

  return (
    <MButton
      color={buttonTheme.color}
      {...(props as any)}
      ref={ref}
      className={cn(buttonTheme.base, props.className)}
    >
      {props.children}
    </MButton>
  );
});

export default Button;
