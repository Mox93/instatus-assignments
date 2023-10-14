"use client";

import { useEffect, useState } from "react";

import DarkIcon from "@/assets/icons/dark-theme.svg";
import LightIcon from "@/assets/icons/light-theme.svg";

export default function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof localStorage !== "undefined") {
      const _theme = localStorage.getItem("theme");

      if (_theme) return _theme === "dark";
    }

    if (typeof window !== "undefined") {
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    document.body.classList.toggle("light", !darkMode);
  }, [darkMode]);

  return (
    <label className="ThemeSwitch">
      <input
        hidden
        type="checkbox"
        checked={darkMode}
        onChange={(e) => {
          const checked = e.target.checked;
          setDarkMode(checked);
          localStorage.setItem("theme", checked ? "dark" : "light");
        }}
      />
      <div className="wrapper">
        <div className="toggle">{darkMode ? <DarkIcon /> : <LightIcon />}</div>
      </div>
    </label>
  );
}
