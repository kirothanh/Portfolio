"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import MoonIcon from "./Icons/MoonIcon";
import SunIcon from "./Icons/SunIcon";

export default function ButtonTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleSwitchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center gap-2 cursor-pointer">
      <div onClick={handleSwitchTheme}>
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </div>
    </div>
  );
}
