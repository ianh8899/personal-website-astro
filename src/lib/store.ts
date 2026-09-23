import { useSyncExternalStore } from "react";

export function createStore<T>(initialState: T) {
    let state = initialState;
    const listeners = new Set<() => void>();

    return {
        get: () => state,
        set: (value: T | ((prev: T) => T)) => {
            state =
                typeof value === "function"
                    ? (value as (prev: T) => T)(state)
                    : value;
            listeners.forEach((listener) => listener());
        },
        subscribe: (listener: () => void) => {
            listeners.add(listener);
            return () => listeners.delete(listener);
        },
    };
}

export function useStore<T>(store: ReturnType<typeof createStore<T>>): T {
    return useSyncExternalStore(store.subscribe, store.get, store.get);
}
