import type { SectionName } from "../lib/types";
import React from "react";
import { createStore, useStore } from "../lib/store";

// Shared across islands (Header lives in one hydration root, the scroll
// observers that update it live in another), so this is a module-level
// store rather than React Context — see src/lib/store.ts for why.
export const activeSectionStore = createStore<SectionName>("Home");
export const timeOfLastClickStore = createStore(0);

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

// Kept as a passthrough component so existing JSX (`<ActiveSectionContextProvider>`)
// doesn't need to change at call sites — the actual state now lives in the
// module-level store above, shared across every island that imports this file.
export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  return <>{children}</>;
}

export function useActiveSectionContext() {
  const activeSection = useStore(activeSectionStore);
  const timeOfLastClick = useStore(timeOfLastClickStore);

  return {
    activeSection,
    setActiveSection: activeSectionStore.set,
    timeOfLastClick,
    setTimeOfLastClick: timeOfLastClickStore.set,
  };
}
