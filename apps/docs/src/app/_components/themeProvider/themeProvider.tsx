'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

const NextThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};

export default NextThemeProvider;
