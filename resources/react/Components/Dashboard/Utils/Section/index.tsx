// Dependencies
import { forwardRef } from "react";

// Hooks
import useTheme from "@/hooks/useTheme";

// Utils
import { cn } from "@/utilities/tailwind/cn";

// Types
import type { SectionProps } from "@/types/Components/Dashboard/Utils/Section";

const Section = forwardRef<HTMLDivElement, SectionProps>((props, ref) => {
  const theme = useTheme().dashboard.components.utils.section;

  return (
    <section
      {...props}
      ref={ref}
      className={cn(
        props.className,
        theme.base,
      )}
    ></section>
  )
})

export default Section;
