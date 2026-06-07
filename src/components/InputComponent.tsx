import React from "react";

export default function InputComponent({
  id,
  label,
  name,
  value = null,
  onChange = () => {},
  className = "",
  type = "text",
}: {
  id: string;
  label: string;
  name: string;
  value: string | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
}) {
  return (
    <React.Fragment>
      <div>
        {/* <label htmlFor={id}>{label}</label> */}
        <input
          type={type}
          id={id}
          name={name}
          value={value || ""}
          placeholder={label}
          onChange={onChange}
          className={`px-5 py-3.5 border-2 border-(--primary-gold-30) rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-gold) font-(family-name:--header-fonts) ${className}`}
        />
      </div>
    </React.Fragment>
  );
}
