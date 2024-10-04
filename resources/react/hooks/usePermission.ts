// Dependencies / Services
import { usePage } from "@inertiajs/react";

// Types
import type { ReactNode } from "react";
import type { PermissionModel } from "@/types/Models/Permission";

const usePermission = () => {
  const { auth } = usePage().props as ServerPageProps;
  const { permissions } = auth;

  /**
   * Check if user can do something.
   *
   * @param { string } permission
   * @return { boolean }
   */
  const can = (permission: string): boolean => {
    return permissions.findIndex((p) => p === permission) !== -1;
  };

  /**
   * Check if has any permission of those permissions.
   *
   * @param { Array<string> } p
   * @return { boolean }
   */
  const hasAny = (p: Array<string>): boolean => {
    return permissions.filter((permission) => p.includes(permission)).length > 0
  };

  /**
   * return your `element`, `function` when user has permission and return `{ReactNode | false}`.
   *
   * @param { string } permission
   * @param { ReactNode } item
   * @return { ReactNode }
   */
  const gate = (permission: string, item: ReactNode): ReactNode => {
    if (can(permission)) return item;
    return false;
  };

  /**
   * Spilt and sort permission into object of arrays
   *
   * @param { Permission[] } permissions
   * @return { Record<string, string[]> }
   */
  const splitAndSortPermissions = (permissions: PermissionModel[]): Record<string, string[]> => {
    let result: Record<string, string[]> = {};
    const sortedPermissions = permissions.map((permission) => permission.name).sort();
    sortedPermissions.forEach((permission: string) => {
      const splitted: Array<string> = permission.split(" ");
      if (result[splitted[1]]) {
        result[splitted[1]].push(permission);
      } else {
        result[splitted[1]] = [permission]
      }
    });
    return result;
  }

  return {
    can,
    gate,
    hasAny,
    splitAndSortPermissions
  };

}

export default usePermission;
