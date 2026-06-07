import React from "react";
import PrimaryButton from "../../components/PrimaryButton";

import foundersImage from "../../assets/founders/founders.jpg";
import { useNavigate } from "react-router";

export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="px-6 py-8 flex flex-col gap-6 items-start justify-center">
          <h1 className="text-sm font-semibold text-(--primary-gold) tracking-widest font-(family-name:--header-fonts) uppercase">
            About Us
          </h1>

          <h1 className="text-3xl lg:text-7xl text-(--primary-brown) font-bold font-(family-name:--body-fonts)">
            A LEGACY OF <br /> FAITH & <br /> CRAFTSMANSHIP
          </h1>

          <p className="text-lg font-semibold font-(family-name:--body-fonts)">
            Specialists in Traditional Temples & Jain Derasars | Design & Build
            from Scratch
          </p>
          <p className="lg:text-base text-sm font-(family-name:--header-fonts)">
            Since 2008, the Sompura family has been preserving the ancient art
            of temple construction, combining traditional techniques passed down
            through generations with modern precision to create divine spaces
            that inspire devotion and stand the test of time.
          </p>

          <div>
            <PrimaryButton
              id="about-us"
              label="Meet our Founders"
              className="uppercase font-semibold tracking-wider font-(family-name:--header-fonts)"
              onClick={() => {
                navigate("/founders");
              }}
            />
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-(--primary-brown-20)">
            <img
              src={foundersImage}
              alt="Traditional artisan at work"
              className="w-full h-[400px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-(--primary-brown-50) to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-(--primary-gold) rounded-full opacity-30"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-(--primary-orange) rounded-full opacity-30"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
