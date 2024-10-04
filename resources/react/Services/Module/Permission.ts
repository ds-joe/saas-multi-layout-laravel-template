// Dependencies

// Types
import type { Modules } from "@/types/Services/Module";

class Permission {
  protected modules: Modules;

  constructor(modules: Modules) {
    this.modules = modules;
  }

  /**
   * Check if any of the given modules are active.
   *
   * @param { Array<string> } modules - An array of module names or aliases.
   * @return { boolean }
   */
  public hasAnyActiveModules(modules: Array<string>): boolean {
    return modules.some((module) => {
      const foundModule = this.modules.find((m) => m.name === module);
      return foundModule && !!foundModule.status;
    });
  }

  /**
   * Check if all of the given modules are active.
   *
   * @param { Array<string> } modules - An array of module names or aliases.
   * @return { boolean }
   */
  public hasAllActiveModules(modules: Array<string>): boolean {
    return modules.every((module) => {
      const foundModule = this.modules.find((m) => m.name === module);
      return foundModule && !!foundModule.status;
    });
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
