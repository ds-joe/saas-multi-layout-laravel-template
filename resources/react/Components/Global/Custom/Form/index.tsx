// Dependencies
import { forwardRef } from 'react';
import { cn } from '@/utilities/tailwind/cn';

// Hooks
import useTheme from '@/hooks/useTheme';

// Nested Components
import FormGroup from './FormGroup';
import FloatInput from './FloatInput';
import FormErrors from './FormErrors';

// Types
import type { FormProps } from '@/types/Components/Global/Custom/Form';

const Form = forwardRef<HTMLFormElement, FormProps>((props, ref) => {
  const theme = useTheme();
  const formTheme = theme.global.components.form;

  return (
    <form
      {...props}
      ref={ref}
      className={cn(formTheme.base, props.className)}
    >
      {props.children}
    </form>
  );
});

export default Form;
export { FormGroup, FloatInput, FormErrors };
