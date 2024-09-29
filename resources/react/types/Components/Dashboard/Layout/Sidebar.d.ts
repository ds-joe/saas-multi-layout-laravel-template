import type { ReactNode, ComponentPropsWithRef } from 'react';
import type { IconType } from 'react-icons';

interface CollapsibleProps extends ComponentPropsWithRef<'div'> {
  title: string;
  children?: ReactNode;
  open?: boolean;
}

interface CollapsibleItemProps extends ComponentPropsWithRef<'li'> {
  children?: ReactNode;
  active?: boolean | string;
  icon?: IconType;
  href?: string;
}
