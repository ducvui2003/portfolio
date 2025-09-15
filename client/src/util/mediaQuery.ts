function getBreakpoint(name: string): string | null {
  // Tailwind v4 sets breakpoints as CSS custom properties in :root
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(`--breakpoint-${name}`)
    .trim();

  return value || null;
}

function isCurrentBreakpoint(breakpointName: string): boolean {
  const bp = getBreakpoint(breakpointName);

  if (!bp) return false;

  // Tailwind breakpoints are min-width by default
  return window.matchMedia(`(min-width: ${bp})`).matches;
}

export { isCurrentBreakpoint };
