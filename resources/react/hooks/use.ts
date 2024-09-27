// Dependencies
import { useEffect, useState } from 'react';

/**
 * Custom hook to manage and return a derived value, supporting both sync and async callbacks.
 *
 * @template D - The type of the data to be returned by the callback.
 * @param {() => D | Promise<D>} callback - A function that returns the data or result, either synchronously or asynchronously.
 * @param { any } fillback - When function return undefined or null returns this fillback data.
 * @returns {D | undefined} The current value of the data or undefined if the callback is async and the data is still being fetched.
 */
const use = <D>(
  callback: () => D | Promise<D>,
  fillback: any = null,
): D | undefined => {
  // State to store the result of the callback. Initialized to undefined since the result might be async.
  const [data, setData] = useState<D | undefined>(undefined);

  useEffect(() => {
    // Effect hook that runs when the component mounts or when `callback` changes.

    let isMounted = true; // To prevent updating the state if the component unmounts

    const handleCallback = async () => {
      const result = await callback(); // Await the result if the callback is async

      if (isMounted) {
        setData(result); // Update the state only if the component is still mounted
      }
    };

    handleCallback(); // Execute the callback (it can be async or sync)

    return () => {
      isMounted = false; // Cleanup to prevent state updates on unmounted components
    };
  }, []);

  // Return the current state value (either the resolved data or undefined if still loading).
  return data ?? fillback;
};

export default use;
