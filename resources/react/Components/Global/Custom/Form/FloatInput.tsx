// Dependencies
import { forwardRef } from 'react';

// Hooks
import useTheme from '@/hooks/useTheme';

// Components
import { Input } from '@material-tailwind/react';

// Utils
import { cn } from '@/utilities/tailwind/cn';

// Types
import type { FloatInputProps } from '@/types/Components/Global/Custom/Form';

const FloatInput = forwardRef<HTMLInputElement, FloatInputProps>(
  (props, ref) => {
    const theme = useTheme();
    const formTheme = theme.global.components.form;

    return (
      <Input
        {...(props as any)}
        className={cn(formTheme.float_input.base, props.className)}
        inputRef={ref}
      />
    );
  },
);

export default FloatInput;
