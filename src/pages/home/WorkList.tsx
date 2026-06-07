import React from "react";
import { WORK_LIST_DATA } from "../../utils/CommonData";

export default function WorkList() {
  return (
    <React.Fragment>
      <div className="text-center mb-16">
        <p
          className="font-(family-name:--header-fonts) text-(--primary-gold) tracking-widest mb-2 font-bold"
          style={{ fontSize: "14px" }}
        >
          OUR WORK
        </p>
        <h2 className="text-3xl lg:text-7xl text-(--primary-brown) font-bold font-(family-name:--body-fonts)">
          OUR MASTERPIECES
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {WORK_LIST_DATA.map((work, index) => (
          <div key={index} className="rounded-xl overflow-hidden">
            <div className="relative group shadow-lg h-[400px] object-cover">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover"
              />
              <h3 className="absolute bottom-0 left-0 right-0 text-center text-(--primary-gold) bg-(--primary-white) font-semibold font-(family-name:--header-fonts) bg-opacity-50 px-2 py-4">
                {work.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
