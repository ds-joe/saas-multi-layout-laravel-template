// Dependencies
import { forwardRef } from 'react';

import useTheme from '@/hooks/useTheme';

// Utils
import { cn } from '@/utilities/tailwind/cn';

// Types
import type { FormGroupProps } from '@/types/Components/Global/Custom/Form';

const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>((props, ref) => {
  const isDouble = props.double == false || !props.double ? false : true;
  const theme = useTheme();
  const formTheme = theme.global.components.custom.form;

  return (
    <div
      {...props}
      ref={ref}
      className={cn(
        formTheme.form_group.base,
        isDouble && formTheme.form_group.double,
        props.className,
      )}
    >
      {props.children}
    </div>
  );
});

export default FormGroup;
