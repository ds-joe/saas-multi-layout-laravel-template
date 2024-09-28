// Dependencies
import { forwardRef } from "react"

// Hooks
import useTheme from "@/hooks/useTheme"

// Components
import Typography from "@/Components/Global/Custom/Typography"

// Utils
import { cn } from "@/utilities/tailwind/cn"

// Types
import type { HeaderProps } from "@/types/Components/Dashboard/Layout/Header"

const Header = forwardRef<HTMLHeadingElement, HeaderProps>((props, ref) => {
  const theme = useTheme().dashboard.components.layout.header;

  return (
    <header className={cn(theme.header.base)}>
      <Typography
        variant="h3"
        ref={ref}
        {...props}
        className={cn(theme.typography.base, props.className)}
      >
        {props.title}
      </Typography>
      <div>
        {props.children}
      </div>
    </header>
  )
})


export default Header;
