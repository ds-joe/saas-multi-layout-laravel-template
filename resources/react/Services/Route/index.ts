// Dependencies
import Filter from './Filter';

// Types
import { Route as RouteObj } from '@/types/Route';

class Route extends Filter {
  constructor(routes: Array<RouteObj>) {
    super(routes);
  }
}

export default Route;
