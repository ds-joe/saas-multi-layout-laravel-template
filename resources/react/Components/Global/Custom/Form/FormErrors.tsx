// Dependencies
import { forwardRef } from 'react';

// Hooks
import useTheme from '@/hooks/useTheme';

// Utils
import { cn } from '@/utilities/tailwind/cn';

// Types
import type { FormErrorsProps } from '@/types/Components/Global/Custom/Form';

// Icons
import { FiAlertTriangle } from 'react-icons/fi';

const FormErrors = forwardRef<HTMLDivElement, FormErrorsProps>(
  function (props, ref) {
    const errors = Object.values(props.errors ?? {});
    const theme = useTheme();
    const formTheme = theme.global.components.form;

    return (
      errors.length > 0 && (
        <div
          ref={ref}
          {...props}
          className={cn(formTheme.form_errors.base, props.className)}
        >
          {errors.map((error, index) => (
            <p
              key={`${error} + ${index * Math.random()}`}
              className={formTheme.form_errors.error.base}
            >
              <FiAlertTriangle className={formTheme.form_errors.error.icon} />
              {error}
            </p>
          ))}
        </div>
      )
    );
  },
);
export default FormErrors;
