// Dependencies
import { forwardRef } from 'react';

// Hooks
import useTheme from '@/hooks/useTheme';

// Components
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@material-tailwind/react';
import Typography from '@/Components/Global/Custom/Typography';

// Utils
import { cn } from '@/utilities/tailwind/cn';

// Types
import type {
  MenuProps,
  MenuHandlerProps,
  MenuItemProps,
  MenuListProps,
  MenuLabelProps,
} from '@/types/Components/Global/Custom/Dropdown';

export const Dropdown: RC<MenuProps> = (props) => {
  return <Menu {...(props as any)} />;
};

export const DropdownHandler: RC<MenuHandlerProps> = (props) => {
  return <MenuHandler {...(props as any)} />;
};


export const DropdownItem = forwardRef<HTMLDivElement, MenuItemProps>(
  (props, ref) => {
    return (
      <MenuItem
        {...(props as any)}
        ref={ref}
        className={cn('', props.className)}
      />
    );
  },
);

export const DropdownList = forwardRef<HTMLDivElement, MenuListProps>(
  (props, ref) => {
    const theme = useTheme();
    const dropdownTheme = theme.global.components.custom.dropdown;

    return (
      <MenuList
        {...(props as any)}
        ref={ref}
        className={cn(dropdownTheme.list, props.className)}
      />
    );
  },
);

export const DropdownLabel = forwardRef<HTMLHeadingElement, MenuLabelProps>(
  (props, ref) => {
    const theme = useTheme();
    const dropdownTheme = theme.global.components.custom.dropdown;

    return (
      <Typography
        {...props}
        as="h4"
        variant="h4"
        ref={ref}
        className={cn(dropdownTheme.label, props.className)}
      />
    );
  },
);
