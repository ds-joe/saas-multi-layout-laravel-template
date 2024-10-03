// Dependencies

// Types
import type { Modules } from "@/types/Services/Module";

class Permission {
  protected modules: Modules;

  constructor(modules: Modules) {
    this.modules = modules;
  }

  /**
   * Check if contain any active of those modules.
   *
   * @param { Array<string> } modules
   * @return { boolean }
   */
  public hasAnyActiveModules(modules: Array<string>): boolean {
    return modules.some((module) => this.modules[module].status);
  }

  /**
   * Check if all active
   *
   * @param { Array<string> } modules
   * @return { boolean }
   */
  public hasAllActiveModules(modules: Array<string>): boolean {
    return modules.every((module) => this.modules[module].status);
  }

  /**
   * Any modules exists
   *
   * @param { Array<string> } modules
   * @return { boolean }
   */
  public hasAnyModule(modules: Array<string>): boolean {
    return Object.keys(this.modules).some((module) => modules.includes(module));
  }

  /**
   * All modules exists
   *
   * @param { Array<string> } modules
   * @return { boolean }
   */
  public hasAllModule(modules: Array<string>): boolean {
    return Object.keys(this.modules).every((module) => modules.includes(module));
  }

}

export default Permission;
