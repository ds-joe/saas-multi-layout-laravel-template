// Dependencies
import { useState } from 'react';

// Hooks
import useTheme from '@/hooks/useTheme';

// Components
import Typography from '@/Components/Global/Custom/Typography';
import { Collapse as MCollapse } from '@material-tailwind/react';

// utils
import { cn } from '@/utilities/tailwind/cn';

// Icons
import { FiChevronDown } from 'react-icons/fi';

// Types
import type { CollapsibleProps } from '@/types/Components/Dashboard/Layout/Sidebar';

const Collapse: RC<CollapsibleProps> = (props) => {
  const theme = useTheme().dashboard.components.layout.sidebar.collapse;
  const [collapseOpen, setCollapseOpen] = useState<boolean>(
    props.open ?? false,
  );

  return (
    <div className={theme.base}>
      <Typography
        as="label"
        {...(props as any)}
        className={cn(theme.label, props.className)}
        onClick={() => setCollapseOpen(!collapseOpen)}
      >
        <span>{props.title}</span>
        <FiChevronDown
          className={cn(
            theme.icon.base,
            collapseOpen ? theme.icon.open : '',
          )}
        />
      </Typography>
      <MCollapse open={collapseOpen}>
        <div className={theme.content}>{props.children}</div>
      </MCollapse>
    </div>
  );
};

export const CollapseLabel: RC<{ title?: string }> = ({ title }) => {
  const theme = useTheme().dashboard.components.layout.sidebar.collapse;

  return (
    <Typography
      as="label"
      className={cn(theme.label, theme.base)}
    >{title}</Typography>
  )
}

export default Collapse;
