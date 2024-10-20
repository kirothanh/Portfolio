"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Header from "@/components/Header";

export default function ClientLayout({ children }) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={true}
      >
        <div>
          <Header />
          <div>{children}</div>
        </div>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
