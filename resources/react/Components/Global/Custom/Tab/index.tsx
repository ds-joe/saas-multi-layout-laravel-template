// Hooks
import useTheme from "@/hooks/useTheme";

// Components
import { Tabs as MTabs, Tab as MTab, TabsBody as MTabsBody, TabsHeader as MTabsHeader, TabPanel as MTabPanel } from "@material-tailwind/react";

// Utils
import { cn } from "@/utilities/tailwind/cn";

// Types
import type { TabsProps, TabProps, TabsBodyProps, TabsHeaderProps, TabPanelProps } from "@/types/Components/Global/Custom/Tab";


export const Tabs: RC<TabsProps> = (props) => {
  return (
    <MTabs {...props} />
  );
}

export const Tab: RC<TabProps> = (props) => {
  const theme = useTheme().global.components.custom.tabs;

  return (
    <MTab
      {...(props as any)}
      className={cn(theme.tab.base, props.className)}
      activeClassName={cn(theme.tab.active, props.activeClassName)}
    />
  );
}

export const TabsBody: RC<TabsBodyProps> = (props) => {
  return (
    <MTabsBody
      {...(props as any)}
    />
  );
}

export const TabsHeader: RC<TabsHeaderProps> = (props) => {
  const theme = useTheme().global.components.custom.tabs;
  return (
    <MTabsHeader
      {...(props as any)}
      indicatorProps={{
        className: cn(theme.tabsHeader.indicator, props.indicatorProps?.className)
      }}
      className={cn(theme.tabsHeader.base, props.className)}
    />
  );
}


export const TabPanel: RC<TabPanelProps> = (props) => {
  return (
    <MTabPanel
      {...(props as any)}
    />
  );
}

