// Dependencies
import { forwardRef } from "react";

// Hooks
import useTheme from "@/hooks/useTheme";

// Components
import { Input as MInput } from "@material-tailwind/react";

// Utils
import { cn } from "@/utilities/tailwind/cn";

// Types
import type { InputProps } from "@/types/Components/Global/Custom/Input";

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const theme = useTheme().global.components.custom.input;

  return (
    <MInput
      containerProps={{ className: "min-w-[100px]" }}
      {...(props as any)}
      ref={ref}
      className={cn(
        theme.base,
        theme.focus,
        props.className
      )}
      labelProps={{
        className: "hidden",
      }}
    />
  )
})

export default Input;
