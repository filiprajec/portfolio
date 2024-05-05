"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useReducedMotion } from "@mantine/hooks";

interface PreferencesContextProps {
  children: React.ReactNode;
}

interface PreferencesContextType {
  reducedMotion: boolean;
  setReducedMotion: (value: boolean) => void;
}

export const PreferencesContext = createContext<PreferencesContextType>({
  reducedMotion: false,
  setReducedMotion: () => {},
});

export const PreferencesProvider = ({ children }: PreferencesContextProps) => {
  const [reducedMotionOverride, setReducedMotionOverride] = useState<
    boolean | undefined
  >(undefined);
  const reducedMotion = useReducedMotion(false) ?? false;

  const setReducedMotion = useCallback((value: boolean) => {
    setReducedMotionOverride(value);
  }, []);

  const value = useMemo(
    () => ({
      reducedMotion: reducedMotionOverride ?? reducedMotion,
      setReducedMotion,
    }),
    [reducedMotion, reducedMotionOverride, setReducedMotion]
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = () => {
  const context = useContext(PreferencesContext);
  if (context === undefined) {
    throw new Error("usePreferences must be used within a PreferencesProvider");
  }
  return context;
};
