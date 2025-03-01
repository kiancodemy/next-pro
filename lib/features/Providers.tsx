"use client";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Wait until the component is mounted to apply the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render nothing (or a loading spinner) until the component is mounted
    return <>{children}</>;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
