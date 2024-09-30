// Types
import type { Errors } from "@inertiajs/core";
import type { RouterRequestStatus } from "@/types/Services/Router";

class Validation {
  /**
   * Request errors.
   *
   * @var { Errors }
   */
  protected errors: Errors = {};

  /**
   * Request status
   *
   * @var { boolean }
   */
  protected processing: boolean = false;

  /**
   * Get errors.
   *
   * @return { Errors }
   */
  public getErrors(): Errors {
    return this.errors;
  }

  /**
   * Get Processing
   *
   * @return { boolean }
   */
  public getProcessing(): boolean {
    return this.processing;
  }

  /**
   * Get all status of request
   *
   * @return { RouterRequestStatus }
   */
  public getRequestStatus(): RouterRequestStatus {
    return {
      errors: this.errors,
      processing: this.processing
    };
  }

}

export default Validation;
