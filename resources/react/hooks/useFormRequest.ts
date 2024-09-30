// Dependencies
import { useState } from "react";

// Types
import type { RouterInertiaClosureCallback, RouterRequestStatus, RouterInertiaClosureCallbackParameters } from "@/types/Services/Router";

const useFormRequest = <D extends {} = {}>(request: RouterInertiaClosureCallback<D>, parameters: RouterInertiaClosureCallbackParameters<D>) => {
  const [status, setStatus] = useState<RouterRequestStatus>(routerService.getRequestStatus());
  const [data, setData] = useState<D>(parameters.data as D);

  /**
   * Set column
   *
   * @param { keyof D } column
   * @param { D[keyof D] } value
   * @return { void }
   */
  const setColumn = <K extends keyof typeof data>(column: K, value: typeof data[K]): void => {
    setData((prevData) => ({ ...prevData, [column]: value }));
  };

  /**
   * Call request
   *
   * @return { void }
   */
  const call = (): void => {
    request(data, {
      ...parameters.options,
      onFinish: (res) => {
        setStatus(routerService.getRequestStatus());
        parameters.options?.onFinish && parameters.options.onFinish(res);
      },
    });
  }

  return {
    call,
    data,
    setData,
    setColumn,
    ...status
  }
}

export default useFormRequest;
