import type { IconType } from 'react-icons';

/**
 * @description This interface, using to control incoming routes from backend.
 *
 * @field translated_word
 *    - The translated key from backend.
 *
 * @field Icon
 *    - The Icon from react-icons library.
 *
 * @field route
 *    - The route name, JUST ROUTE NAME.
 *
 * @field is_collapsible
 *    - To avoid using route just make it as collapsible
 *
 * @field child_routes
 *    - if you wanna create collapsible of routes.
 *
 * @field allowed_user_types
 *    - the users type allowed to use this route.
 *    - Keep it empty if allowed for all users.
 *
 * @field disallowed_user_types
 *    - the users type disallowed to use this route.
 *    - Keep it empty if allowed for all users.
 *
 * @field allowed_permissions
 *    - If user contain on of those permissions can enter route.
 *    - Keep it empty if allowed for all users.
 *
 * @field disallowed_permissions
 *    - If user contain on of those permissions can not enter route.
 *    - Keep it empty if allowed for all users.
 */

export interface Route {
  translated_word?: string;
  Icon?: IconType;
  route?: string;
  is_collapsible?: boolean;
  child_routes: Array<Route>;
  allowed_user_types: Array<string>;
  disallowed_user_types: Array<string>;
  allowed_permissions: Array<string>;
  disallowed_permissions: Array<string>;
}
