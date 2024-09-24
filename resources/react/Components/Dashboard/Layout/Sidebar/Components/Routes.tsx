// Dependencies
import { usePage } from '@inertiajs/react';

// Services
import RouteService from '@/Services/Route';

// UI Routes
import uiRoutes from '@/routes';

// Components
import Collapsible, { CollapsibleItem } from './Collapsible';

// Types
import type { Route as RouteType } from '@/types/Route';

// Initialize Route Service
const routeService = new RouteService(uiRoutes, []);

// Route Component
const Route: RC<RouteType> = (routeProps) => {
  const { page_words } = usePage().props as ServerPageProps;

  const { Icon, translated_word, child_routes, route: routeName, isChild } = routeProps;
  const routeLabel = page_words[translated_word ?? ""] ?? "";

  // Permission checks
  if (!routeService.hasAllowedPermission(routeProps) || routeService.hasDisallowedPermission(routeProps)) {
    return null;
  }

  // Render collapsible route if applicable
  if (routeService.isCollapsibleRoute(routeProps)) {
    return (
      <li>
        <Collapsible title={routeLabel} Icon={Icon}>
          {child_routes?.map((childRoute) => (
            <Route {...childRoute} key={childRoute.id} isChild />
          ))}
        </Collapsible>
      </li>
    );
  }

  return (
    <CollapsibleItem
      childItem={isChild}
      Icon={Icon}
      href={routeName ? route(routeName) : undefined}
      active={routeService.isActiveLink(routeName ? route(routeName) : "")}
    >
      {routeLabel}
    </CollapsibleItem>
  );
};

// SidebarRoutes Component
const SidebarRoutes: RC = () => {
  const routes = routeService.getRoutes();

  return (
    <ul className="flex flex-col overflow-y-auto gap-1">
      {routes.map((route) => (
        <Route {...route} key={route.id} />
      ))}
    </ul>
  );
};

export default SidebarRoutes;
