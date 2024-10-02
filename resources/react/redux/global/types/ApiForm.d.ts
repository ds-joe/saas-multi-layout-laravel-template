// Types
import type { RouterRequestStatus } from "@/types/Services/Router";

export type FormTypeState<D extends {} = any> = {
  data: Record<string, D>;
  status: RouterRequestStatus;
}

export type ApiFormState = Record<string, FormTypeState>;
