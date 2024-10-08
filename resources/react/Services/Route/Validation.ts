// Types
import { Route as RouteObj } from '@/types/Route';

class Validation {
  protected permissions: Array<string> = [];

  constructor(permissions: Array<string>) {
    this.permissions = permissions;
  }

  /**
   * Check if Is disallowed type
   *
   * @param { RouteObj } route
   * @param { Array<string> } types
   * @return { boolean }
   */
  public hasDisallowedType(route: RouteObj, types: Array<string>): boolean {
    return route.disallowed_user_types.some((uType) => types.includes(uType));
  }

  /**
   * Check if is allowed type
   *
   * @param { RouteObj } route
   * @param {  Array<string> } types
   * @return { boolean }
   */
  public hasAllowedType(route: RouteObj, types: Array<string>): boolean {
    return (
      route.allowed_user_types.length == 0 ||
      route.allowed_user_types.some((type) => types.includes(type))
    );
  }
  /**
   * Check if is disallowed permission
   *
   * @param { RouteObj } route
   * @return { boolean }
   */
  public hasDisallowedPermission(route: RouteObj): boolean {
    return route.disallowed_permissions.some((permission) =>
      this.permissions.includes(permission),
    );
  }

  /**
   * Check if is allowed permission
   *
   * @param { RouteObj } route
   * @param { Array<string> } permissions
   * @return { boolean }
   */
  public hasAllowedPermission(route: RouteObj): boolean {
    return (
      route.allowed_permissions.length == 0 ||
      route.allowed_permissions.some((permission) =>
        this.permissions.includes(permission),
      )
    );
  }

  /**
   * Check if collapsible route.
   *
   * @param { RouteObj } route
   * @return { boolean }
   */
  public isCollapsibleRoute(route: RouteObj): boolean {
    return route?.is_collapsible ?? false;
  }

  /**
   * Check if active link.
   *
   * @param { string } uri
   * @return { boolean }
   */
  public isActiveLink(uri: string): boolean {
    return this.resolveUri(location.href) == this.resolveUri(uri);
  }

  /**
   * Resolve uri.
   *
   * @param { string } uri
   * @return { string }
   */
  private resolveUri(uri: string): string {
    let link = uri.replace(/^\/+/, '');
    link = link.replace(/\/+$/, '');
    return link;
  }
}

export default Validation;
