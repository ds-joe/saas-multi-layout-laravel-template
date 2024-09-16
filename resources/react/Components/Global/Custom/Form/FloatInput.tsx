// Dependencies
import { forwardRef } from "react";
import { cn } from "@/utilities/tailwind/cn";

// Types
import type { FloatInputProps } from "@/types/Components/Global/Custom/Form";
import { Input } from "../../Shadcn/ui/input";

const FloatInput = forwardRef<HTMLInputElement, FloatInputProps>((props) => {
  return (
    <div className={cn(`float-input`, props.divClassName)}>
      <Input
        className={cn(`${props.error && 'error'}`,
          props.className
        )}
        ref={props.ref}
        placeholder=" "
        {...props}
      />

      <label className={cn(props.labelClassName)}>
        {props.label}
      </label>
    </div>
  )
})

export default FloatInput;