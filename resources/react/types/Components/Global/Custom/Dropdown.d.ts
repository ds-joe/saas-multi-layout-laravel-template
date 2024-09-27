import type {
  ComponentPropsWithRef,
  ReactNode,
  ComponentPropsWithoutRef,
} from 'react';
import type { MenuProps as MMenuProps } from '@material-tailwind/react';

export type MenuProps = MMenuProps;

export type MenuHandlerProps = ComponentPropsWithoutRef<'button'>;
export type MenuItemProps = ComponentPropsWithRef<'button'>;
export type MenuListProps = ComponentPropsWithRef<'ul'> & {
  dismissible?: boolean;
};

export type MenuLabelProps = ComponentPropsWithRef<'h4'>;
