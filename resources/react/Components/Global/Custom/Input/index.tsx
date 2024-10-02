// Dependencies
import { forwardRef } from "react";

// Hooks
import useTheme from "@/hooks/useTheme";

// Components
import { Input as MInput } from "@material-tailwind/react";
import { Tooltip } from '@material-tailwind/react';

// Utils
import { cn } from "@/utilities/tailwind/cn";

// Icons
import { IoMdInformationCircleOutline } from "react-icons/io";

// Types
import type { InputProps } from "@/types/Components/Global/Custom/Input";

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const theme = useTheme().global.components.custom.input;

  return (
    <div className="relative flex items-center gap-2">
      <MInput
        containerProps={{ className: "min-w-[100px]" }}
        {...(props as any)}
        ref={ref}
        className={cn(
          theme.base,
          theme.focus,
          props.error ? theme.error : "",
          props.className
        )}
        labelProps={{
          className: "hidden",
        }}
      />
      {
        props.error && (
          <span className={theme.tooltip.base}>
            <Tooltip className={theme.tooltip.content} content={props.error}>
              <button className={theme.tooltip.button} type="button">
                <IoMdInformationCircleOutline />
              </button>
            </Tooltip>
          </span>
        )
      }
    </div>
  )
})

export default Input;
