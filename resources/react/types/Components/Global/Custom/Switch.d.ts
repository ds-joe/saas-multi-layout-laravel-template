// Types
import type { ComponentPropsWithoutRef } from "react"
import type {
  color,
  label,
  ripple,
  className,
  disabled,
  objectType
} from '@material-tailwind/react/types/components/checkbox';

export type SwitchProps = ComponentPropsWithoutRef<'input'> & {
  color?: color;
  label?: label;
  ripple?: ripple;
  className?: className;
  disabled?: disabled;
  containerProps?: objectType;
  labelProps?: objectType;
  circleProps?: objectType;
  inputRef?: React.Ref<HTMLInputElement>;
}
