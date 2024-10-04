
// Components
import { Switch as MSwitch } from "@material-tailwind/react";

// Types
import type { SwitchProps } from "@/types/Components/Global/Custom/Switch";

const Switch: RC<SwitchProps> = (props) => {
  return (
    <MSwitch
      color="blue"
      {...(props as any)}
    />
  )
}

export default Switch;
