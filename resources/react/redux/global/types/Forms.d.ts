// Types
import type { StateFormData, StateFormErrors, StateFormObject } from "@/types/Hooks/StateForm";
export type FormTypeState<D extends {} = Record<string, any>> = {
  data: StateFormData<D>;
  errors: StateFormErrors<D>;
  processing: boolean;
}

export type FormsTypeState = Record<string, FormTypeState>;
