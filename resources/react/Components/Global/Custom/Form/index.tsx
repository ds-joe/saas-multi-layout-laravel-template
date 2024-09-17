// Dependencies
import { forwardRef } from "react";
import { cn } from "@/utilities/tailwind/cn";

// Nested Components
import FormGroup from "./FormGroup";
import FloatInput from "./FloatInput";

// Types
import type { FormProps } from "@/types/Components/Global/Custom/Form";

const Form = forwardRef<HTMLFormElement, FormProps>((props, ref) => {
  return (
    <form
      {...props}
      ref={ref}
      className={cn('form', props.className)}>
      {props.children}
    </form>
  )
})


export default Form;
export {
  FormGroup,
  FloatInput,
}
