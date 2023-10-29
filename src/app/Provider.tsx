"use client";

import { ThemeProvider, defaultTheme } from "evergreen-ui";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider value={defaultTheme}> {children} </ThemeProvider>;
}
