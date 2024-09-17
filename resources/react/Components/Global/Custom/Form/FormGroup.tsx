// Dependencies
import { forwardRef } from 'react';
import { cn } from '@/utilities/tailwind/cn';

// Types
import type { FormGroupProps } from '@/types/Components/Global/Custom/Form';

const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>((props, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={cn('form-group', props.className)}
    >
      {props.children}
    </div>
  );
});

export default FormGroup;
