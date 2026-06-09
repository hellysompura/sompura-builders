import React from "react";
import SearchInput from "../components/SearchInput";
import PrimaryButton from "../components/PrimaryButton";
import { NAVIGATION_DATA } from "../utils/CommonData";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <React.Fragment>
      <header className="w-full flex gap-4 items-center justify-between py-3 px-4">
        <div className="">
          <h1 className="font-medium text-xl font-(family-name:--header-fonts)">
            Hitesh J. Sompura & Son
          </h1>
        </div>

        <div className="flex-1">
          <SearchInput
            id="search"
            label="Search"
            name="search"
            value=""
            className="w-[50%]"
            onChange={() => { }}
          />
        </div>

        <div className="justify-self-end">
          <PrimaryButton
            id="get-a-quote"
            label="Get a Quote"
            className="font-medium font-(family-name:--header-fonts)"
          />
        </div>
      </header>

      <div className="border-b-[0.3px] justify-self-center border-(--primary-brown-20) pb-2 px-4 w-[95%]"></div>

      <nav className="hidden lg:flex items-center justify-center gap-8 my-2 py-2">
        {NAVIGATION_DATA.map((item) => (
          <button
            key={item.label}
            onClick={() => scrollToSection(item.sectionId)}
            className="text-(--primary-brown-70) hover:text-(--primary-brown-90) font-(family-name:--header-fonts) transition-colors duration-200 uppercase font-semibold cursor-pointer bg-transparent border-none"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </React.Fragment>
  );
};

export default Header;
