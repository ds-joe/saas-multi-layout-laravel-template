// Dependencies
import { usePage } from '@inertiajs/react';

// Components
import CollapseRoute from './Route';
import Collapse, { CollapseLabel } from './Collapse';

// Services
import RouteService from '@/Services/Route';

// Routes
import routes from '@/routes';

// Types
import type { Route as RouteType } from '@/types/Route';

const Route: RC<RouteType> = (routeProps) => {
  const { page_words } = usePage().props as ServerPageProps;
  const routeService = new RouteService(routes, []);
  const { icon, translated_word, child_routes, route: routeName } = routeProps;
  const routeLabel = page_words[translated_word ?? ''] ?? '';

  // Permission checks
  if (
    !routeService.hasAllowedPermission(routeProps) ||
    routeService.hasDisallowedPermission(routeProps)
  ) {
    return null;
  }

  // Render label if applicable
  if (routeProps.is_label) {
    return (
      <CollapseLabel title={routeLabel} />
    )
  }


  // Render collapsible route if applicable
  if (routeService.isCollapsibleRoute(routeProps)) {
    return (
      <li>
        <Collapse title={routeLabel}>
          {child_routes?.map((childRoute) => (
            <Route
              {...childRoute}
              key={childRoute.id}
            />
          ))}
        </Collapse>
      </li>
    );
  }

  return (
    <CollapseRoute
      icon={icon}
      href={routeName ? route(routeName) : undefined}
      {...(routeService.isActiveLink(routeName ? route(routeName) : '')
        ? { active: 'true' }
        : {})}
    >
      {routeLabel}
    </CollapseRoute>
  );
};

const SidebarRoutes: RC = () => {
  return (
    <>
      {routes.map((route) => (
        <Route
          {...route}
          key={route.id}
        />
      ))}
    </>
  );
};

export default SidebarRoutes;
