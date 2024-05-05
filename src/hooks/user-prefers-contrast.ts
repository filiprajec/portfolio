import { useEffect, useState } from "react";

export function usePrefersContrast() {
  const [prefersContrast, setPrefersContrast] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-contrast: more)");
    const listener = () => setPrefersContrast(mediaQuery.matches);

    listener();
    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return prefersContrast;
}
