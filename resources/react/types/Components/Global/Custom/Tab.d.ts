import type { ComponentPropsWithoutRef } from "react";
import type { TabsProps as MTabsProps, TabProps as MTabProps, TabsBodyProps as MTabsBodyProps, TabPanelProps as MTabPanelProps, TabsHeaderProps as MTabsHeaderProps } from "@material-tailwind/react";

export type TabsProps = ComponentPropsWithoutRef<'div'> & {
  value: string | number;
  orientation?: "horizontal" | "vertical";
}

export type TabProps = ComponentPropsWithoutRef<'div'> & {
  value: string | number
  activeClassName?: string;
  disabled?: boolean;
}

export type TabsBodyProps = ComponentPropsWithoutRef<'div'> & {
  animate?: Pick<MTabsBodyProps, 'animate'>;
}

export type TabPanelProps = ComponentPropsWithoutRef<'div'> & {
  value: string | number
}

export type TabsHeaderProps = ComponentPropsWithoutRef<'ul'> & {
  indicatorProps?: {
    [key: string]: any
  };
}
