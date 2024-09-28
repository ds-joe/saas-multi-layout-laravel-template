// Hooks
import useTheme from '@/hooks/useTheme';

// Components
import { Link } from '@inertiajs/react';

// Utils
import { cn } from '@/utilities/tailwind/cn';

// Types
import { CollapsibleItemProps } from '@/types/Components/Dashboard/Layout/Sidebar';

const CollapseRoute: RC<CollapsibleItemProps> = (props) => {
  const Icon = props.icon;
  const theme = useTheme();
  const collapseRouteTheme = theme.dashboard.components.layout.sidebar.collapse_route;

  return (
    <Link
      {...({ ...props, icon: '' } as any)}
      as="button"
      href={props.href || ''}
      className={cn(
        collapseRouteTheme.base,
        props.icon ? collapseRouteTheme.with_icon : '',
        props.active ? collapseRouteTheme.active : '',
      )}
    >
      {Icon && (
        <>
          <Icon className={collapseRouteTheme.icon.base} />
        </>
      )}
      <span>{props.children}</span>
    </Link>
  );
};

export default CollapseRoute;
