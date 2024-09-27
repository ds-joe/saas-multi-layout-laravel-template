import type { ReactNode, InputHTMLAttributes } from 'react';
import type { IconType } from 'react-icons';

interface CollapsibleProps extends InputHTMLAttributes<HTMLDivElement> {
  title: string;
  children?: ReactNode;
  open?: boolean;
}

interface CollapsibleItemProps extends InputHTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  active?: boolean | string;
  icon?: IconType;
  href?: string;
}
