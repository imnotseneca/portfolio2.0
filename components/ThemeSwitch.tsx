"use client";

import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center active:scale-105 transition duration-500 ease-out dark:bg-gray-950"
      onClick={toggleTheme} aria-label="Theme Switch"
    >
      {" "}
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
