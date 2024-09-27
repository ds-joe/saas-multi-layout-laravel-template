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
  const theme = useTheme();
  const collapseTheme = theme.dashboard.components.sidebar.collapse;
  const [collapseOpen, setCollapseOpen] = useState<boolean>(
    props.open ?? false,
  );

  return (
    <div className={collapseTheme.base}>
      <Typography
        as="label"
        variant="label"
        {...props}
        className={cn(collapseTheme.label, props.className)}
        onClick={() => setCollapseOpen(!collapseOpen)}
      >
        <span>{props.title}</span>
        <FiChevronDown
          className={cn(
            collapseTheme.icon.base,
            collapseOpen ? collapseTheme.icon.open : '',
          )}
        />
      </Typography>
      <MCollapse open={collapseOpen}>
        <div className={collapseTheme.content}>{props.children}</div>
      </MCollapse>
    </div>
  );
};

export default Collapse;
