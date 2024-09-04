import tailwindConfig from "../../tailwind.config";

// Extract the breakpoints from the configuration
const breakpoints = tailwindConfig.theme?.extend?.screens as Record<
  string,
  { max?: string; min?: string }
>;
function isCurrentBreakpoint(
  breakpointName: keyof typeof breakpoints,
): boolean {
  const breakpoint = breakpoints[breakpointName];

  if (!breakpoint) {
    return false;
  }

  // Handle min-width and max-width media queries
  const minMatch = breakpoint.min
    ? window.matchMedia(`(min-width: ${breakpoint.min})`).matches
    : true;
  const maxMatch = breakpoint.max
    ? window.matchMedia(`(max-width: ${breakpoint.max})`).matches
    : true;

  return minMatch && maxMatch;
}
export { isCurrentBreakpoint };
