import { Search } from "lucide-react";
import React from "react";

export default function SearchInput({
  id = "search",
  label = "Search",
  name = "search",
  value = null,
  onChange = () => {},
  className = "",
}: {
  id: string;
  label: string;
  name: string;
  value: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}) {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center gap-2">
        {/* <label htmlFor={id}>{label}</label> */}
        <div className={`relative ${className}`}>
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-(--primary-brown-70)"
          />

          <input
            type="text"
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={label}
            className={`rounded-md border border-(--primary-orange-70) py-2 pl-10 pr-3 w-full outline-0 focus-visible:outline-(--primary-orange-70) text-base font-medium font-(family-name:--header-fonts)`}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
