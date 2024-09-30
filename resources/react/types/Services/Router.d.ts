// Types
import type { Errors, VisitOptions } from "@inertiajs/core";


export type RouterInertiaClosureCallbackParameters<D extends {} = {}> = {
  data: D,
  options?: VisitOptions
}
export type RouterInertiaClosureCallback<D extends {} = {}> = (
  data: Pick<RouterInertiaClosureCallbackParameters<D>, 'data'>['data'],
  options?: Pick<RouterInertiaClosureCallbackParameters<D>, 'options'>['options']
) => this;
export type RouterRequestStatus = {
  errors: Errors,
  processing: boolean;
}
