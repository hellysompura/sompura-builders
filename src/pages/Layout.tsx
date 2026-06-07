import React from "react";
import Header from "./home/Header";
import HeroCarousel from "./home/HeroCarousel";
import AboutUs from "./home/AboutUs";
import WorkList from "./home/WorkList";
import ContactUs from "./home/ContactUs";

export default function Layout() {
  return (
    <React.Fragment>
      <Header />

      <div className="h-[550px]">
        <HeroCarousel />
      </div>

      <div className="max-w-[1800px] px-6 py-8 mx-auto">
        <AboutUs />
      </div>

      <div className="bg-(--primary-orange)">
        <div className="max-w-[1800px] px-6 py-8 mx-auto">
          <WorkList />
        </div>
      </div>

      <div className="max-w-[1800px] px-6 py-8 mx-auto">
        <ContactUs />
      </div>
    </React.Fragment>
  );
}
