/**
 * Client-side engine/device detection.
 *
 * The `.webkit-engine` / `.ios` classes are added by the inline script in
 * Layout.astro *before first paint*, so these helpers are accurate from the
 * moment any React code runs. During SSR they return `false`, which keeps
 * the server-rendered HTML identical for every browser — no hydration
 * mismatches, no flash of hidden content.
 *
 * Note: on iOS every browser uses WebKit, so `isWebKitEngine()` is true for
 * iOS Chrome/Firefox/Edge too — that is intentional, since the performance
 * costs we route around are engine-level, not app-level.
 */

export function isWebKitEngine(): boolean {
  return (
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("webkit-engine")
  );
}

export function isIOS(): boolean {
  return (
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("ios")
  );
}