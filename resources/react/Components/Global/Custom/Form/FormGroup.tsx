// Dependencies
import { forwardRef } from 'react';
import { cn } from '@/utilities/tailwind/cn';

// Types
import type { FormGroupProps } from '@/types/Components/Global/Custom/Form';

const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>((props, ref) => {
  const isDouble = props.double == false || !props.double ? false : true;

  return (
    <div
      {...props}
      ref={ref}
      className={cn('form-group', isDouble && 'double', props.className)}
    >
      {props.children}
    </div>
  );
});

export default FormGroup;
