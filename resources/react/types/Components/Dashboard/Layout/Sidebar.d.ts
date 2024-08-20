import type { ReactNode, InputHTMLAttributes } from "react";
import type { IconType } from "react-icons";

interface CollapsibleProps extends InputHTMLAttributes<HTMLDivElement> {
  title: string;
  children?: ReactNode;
  isOpenInitially?: boolean;
  Icon?: IconType;
  fold?: boolean;
}

interface CollapsibleItemProps extends InputHTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  active?: boolean;
  Icon?: IconType,
  href?: string;
  childItem?: boolean;
  fold?: boolean;
}