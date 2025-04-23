// components/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const dark = saved === "dark";
    setIsDark(dark);
    if (dark) document.documentElement.classList.add("dark");
  }, []);

  const handleToggle = (checked: boolean) => {
    setIsDark(checked);
    const theme = checked ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", checked);
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch id="theme" checked={isDark} onCheckedChange={handleToggle} />
      <label htmlFor="theme" className="text-sm">
        {isDark ? "🌙" : "☀️"}
      </label>
    </div>
  );
}
