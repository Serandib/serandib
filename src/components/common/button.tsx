"use client";

import React from "react";
import clsx from "clsx";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className,
}) => {
  const baseStyles =
    "rounded-full font-medium transition-all duration-300 ease-in-out focus:outline-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-secondary",
    secondary: "bg-primary2 text-white hover:bg-primary",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}
    >
      {label}
    </button>
  );
};

export default Button;
