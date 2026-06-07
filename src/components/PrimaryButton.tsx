import React from "react";

export default function PrimaryButton({
  id,
  label,
  className = "",
  type = "button",
  onClick,
}: {
  id: string;
  label: string;
  className?: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}) {
  return (
    <React.Fragment>
      <button
        id={id}
        type={type}
        className={`bg-(--primary-brown) hover:bg-(--primary-brown-80) cursor-pointer text-(--primary-white) px-4 py-2 rounded-md ${className}`}
        onClick={onClick}
      >
        {label}
      </button>
    </React.Fragment>
  );
}
