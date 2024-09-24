// Dependencies
import Validation from './Validation';

// Types
import { Route as RouteObj } from '@/types/Route';

class Filter extends Validation {
  /**
   * Application routes ( front-end ).
   *
   * @var { Array<RouteObject> }
   */
  protected routes: Array<RouteObj> = [];

  constructor(routes: Array<RouteObj>, permissions: Array<string>) {
    super(permissions);
    this.routes = routes;
  }

  /**
   * Get Routes depending on user type.
   *
   * @param { Array<string> } types
   * @return { Array<RouteObj> }
   */
  public getRoutesByUserTypes(types: Array<string>): Array<RouteObj> {
    return this.routes.filter(
      (route) =>
        this.hasAllowedType(route, types) &&
        !this.hasDisallowedType(route, types),
    );
  }

  /**
   * Get routes depending on user permissions.
   *
   * @return { Array<RouteObj> }
   */
  public getRoutesByPermissions(): Array<RouteObj> {
    return this.routes.filter(
      (route) =>
        this.hasAllowedPermission(route) &&
        !this.hasDisallowedPermission(route),
    );
  }

  /**
   * Get collapsible routes.
   *
   * @return { Array<RouteObj> }
   */
  public getCollapsibleRoutes(): Array<RouteObj> {
    return this.routes.filter((route) => this.isCollapsibleRoute(route));
  }
}

export default Filter;
