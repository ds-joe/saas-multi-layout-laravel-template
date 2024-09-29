// Dependencies
import { forwardRef } from "react";

// Components
import Typography from "../Typography";

// Hooks
import useTheme from "@/hooks/useTheme";

// tailwind utils
import { cn } from "@/utilities/tailwind/cn";

// Types
import type { LabelProps } from "@/types/Components/Global/Custom/Label";

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, _ref) => {
  const theme = useTheme().global.components.custom.label;

  return (
    <Typography
      as="label"
      {...props}
      className={cn(
        theme.base,
        props.className
      )}
    ></Typography>
  )
})


export default Label;
