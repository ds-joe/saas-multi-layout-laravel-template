// Classes
import Permission from "./Permission";

// Types
import type { Modules } from "@/types/Services/Module";

class Module extends Permission {

  constructor(modules: Modules) {
    super(modules);
  }

  /**
   * Get modules.
   *
   * @return { Modules }
   */
  public getModules(): Modules {
    return this.modules;
  }
}

export default Module;
