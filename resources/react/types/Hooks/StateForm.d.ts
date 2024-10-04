export type StateFormData<D extends {} = {}> = D;
export type StateFormErrors<E extends {} = {}> = Record<keyof E, string>;

export type StateFormObject<D extends {} = {}> = {
  data: StateFormData<D>;
  errors: StateFormErrors<keyof D>;
  processing: boolean;
  formId: string;
}
