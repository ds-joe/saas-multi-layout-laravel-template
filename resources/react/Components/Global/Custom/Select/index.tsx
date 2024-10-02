// Dependencies

// Component
import { Select as MSelect, Option as MOption } from "@material-tailwind/react";

// Types
import type { SelectProps, SelectOptionProps } from "@/types/Components/Global/Custom/Select";

export const Select: RC<SelectProps> = (props) => {
  return (
    <MSelect
      {...(props as any)}
    >
    </MSelect>
  )
}

export const Option: RC<SelectOptionProps> = (props) => {
  return (
    <MOption
      {...(props as any)}
    ></MOption>
  );
}
