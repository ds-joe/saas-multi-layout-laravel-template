// Dependencies
import { forwardRef } from "react";

// Utils
import { cn } from "@/utilities/tailwind/cn";

// Types
import type { FormErrorsProps } from "@/types/Components/Global/Custom/Form";

// Icons
import { FiAlertTriangle } from "react-icons/fi";

const FormErrors = forwardRef<HTMLDivElement, FormErrorsProps>(function (props, ref) {
  const errors = Object.values(props.errors ?? {});

  return errors.length > 0 && (
    <div
      ref={ref}
      {...props}
      className={cn('form-errors', props.className)}>
      {
        errors.map((error, index) => (
          <p key={`${error} + ${index * Math.random()}`} className="error">
            <FiAlertTriangle className="icon" />
            {error}
          </p>
        ))
      }
    </div>
  )
})
export default FormErrors;
