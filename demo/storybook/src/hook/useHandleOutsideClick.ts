import { MutableRefObject, useEffect } from "react";

/**
 * Hook that callback clicks outside of the passed ref
 */
export const useHandleOutsideClick = (
  ref: MutableRefObject<HTMLElement | null>,
  callback: (() => void)
) => {
  /**
   * Callback if clicked on outside of element
   */

  const handleClickOutside: EventListenerOrEventListenerObject = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback()
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};
