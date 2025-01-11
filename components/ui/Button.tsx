"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'title' | 'children'> {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  title?: ReactNode;
  icon?: ReactNode;
  children?: ReactNode;
}

export function Button({ 
  title,
  children,
  variant = "primary", 
  fullWidth = false,
  icon,
  className = "",
  ...props 
}: ButtonProps) {
  const baseStyles = "font-semibold rounded-lg transition-all duration-300 transform hover:scale-105";
  const variantStyles = {
    primary: "bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3",
    secondary: "border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3"
  };
  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        {icon && icon}
        {title || children}
      </div>
    </motion.button>
  );
} 