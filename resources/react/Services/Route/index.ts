// Dependencies
import Filter from './Filter';

// Types
import { Route as RouteObj } from '@/types/Route';

class Route extends Filter {
  constructor(routes: Array<RouteObj>, permissions: Array<string>) {
    super(routes, permissions);
  }

  /**
   * Get routes
   *
   * @return { Array<RouteObj> }
   */
  public getRoutes(): Array<RouteObj> {
    return this.routes;
  }
}

export default Route;
