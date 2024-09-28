// Dependencies
import { forwardRef } from 'react';

// Hooks
import useTheme from '@/hooks/useTheme';

// Components
import { Checkbox as MCheckbox } from '@material-tailwind/react';

// Utils
import { cn } from '@/utilities/tailwind/cn';

// Types
import type { CheckboxProps } from '@/types/Components/Global/Custom/Form';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const theme = useTheme();
  const checkboxTheme = theme.global.components.custom.checkbox;
  return (
    <MCheckbox
      color={checkboxTheme.color}
      {...(props as any)}
      ref={ref}
      className={cn(props.className)}
    />
  );
});

export default Checkbox;
