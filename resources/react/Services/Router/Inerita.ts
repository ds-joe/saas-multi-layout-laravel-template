// Dependencies
import { router } from "@inertiajs/core";

// Classes
import Axios from "./Axios";

// Types
import type { Router as RouterType, VisitOptions, Method, Errors } from "@inertiajs/core";
import type { RouterInertiaClosureCallback } from "@/types/Services/Router";

class Inertia extends Axios {

  /**
   * Inertia router
   *
   * @var { RouterType }
   */
  protected router: RouterType;

  constructor() {
    super();
    this.router = router;
  }

  /**
   * This method using to create inertia request
   *
   * @param { Method } method
   * @param { string } uri
   * @return { RouterInertiaClosureCallback<D> }
   */
  public createInertiaRequest<D extends {} = {}>(method: Method, uri: string): RouterInertiaClosureCallback<D> {

    return (data: D = {} as D, options: VisitOptions = {}) => {
      router[method](uri, data, {
        ...options,
        onError: (errors: Errors) => {
          this.errors = errors;
          options.onError && options.onError(errors);
        },
        onStart: (start) => {
          this.processing = true;
          this.errors = {};
          options.onStart && options.onStart(start);
        },
        onFinish: (end) => {
          this.processing = false;
          options.onFinish && options.onFinish(end);
        },
      });
      return this;
    }
  }

}

export default Inertia;
