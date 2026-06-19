import { Link } from "react-router";
import { Award, Calendar, Hammer } from "lucide-react";
import { FOUNDERS_DATA, STATS_DATA } from "../utils/CommonData";

export default function Founders() {
  

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[500px] bg-linear-to-br from-[#9C4D32] to-[#7A3A25] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 800 500" className="w-full h-full">
            <path
              d="M400 100 L380 180 L360 220 L380 260 L400 400 L420 260 L440 220 L420 180 Z"
              fill="white"
              stroke="#B68F55"
              strokeWidth="2"
            />
            <path
              d="M340 220 L460 220 L460 450 L340 450 Z"
              fill="white"
              stroke="#B68F55"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="absolute inset-0 max-w-[1440px] mx-auto px-6 flex flex-col justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-(--primary-orange) hover:text-white transition-colors mb-8 font-['Montserrat']"
            style={{ fontSize: "14px", fontWeight: 600 }}
          >
            ← BACK TO HOME
          </Link>
          <h1
            className="font-(family-name:--body-fonts) text-white mb-4"
            style={{ fontSize: "72px", fontWeight: 700, lineHeight: 1.1 }}
          >
            Meet Our Founders
          </h1>
          <p
            className="font-['Montserrat'] text-(--primary-orange) max-w-2xl"
            style={{ fontSize: "20px" }}
          >
            The visionaries behind Sompura Artisans & Builders, carrying forward
            a sacred legacy of temple architecture
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 -mt-20 relative z-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS_DATA.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-6 text-center border-t-4 border-(--primary-gold)"
            >
              <stat.icon className="w-10 h-10 text-(--primary-gold) mx-auto mb-3" />
              <div
                className="font-(family-name:--body-fonts) text-[#9C4D32] mb-1"
                style={{ fontSize: "40px", fontWeight: 700 }}
              >
                {stat.value}
              </div>
              <div
                className="font-(family-name:--header-fonts) text-gray-600"
                style={{ fontSize: "14px", fontWeight: 500 }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 pb-20">
        <div className="space-y-20">
          {FOUNDERS_DATA.map((founder, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full lg:h-[600px] h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-[#9C4D32]/90 to-transparent">
                      <div className="flex items-center gap-4 text-white mb-2">
                        <Calendar className="w-5 h-5 text-(--primary-orange)" />
                        <span
                          className="font-['Montserrat']"
                          style={{ fontSize: "16px", fontWeight: 600 }}
                        >
                          {founder.experience}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-white">
                        <Hammer className="w-5 h-5 text-(--primary-orange)" />
                        <span
                          className="font-['Montserrat']"
                          style={{ fontSize: "16px", fontWeight: 600 }}
                        >
                          {founder.specialization}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`absolute ${index % 2 === 0 ? "-right-6 -bottom-6" : "-left-6 -bottom-6"} w-32 h-32 border-4 border-(--primary-gold) rounded-full opacity-30`}
                  ></div>
                  <div
                    className={`absolute ${index % 2 === 0 ? "-left-6 -top-6" : "-right-6 -top-6"} w-24 h-24 border-4 border-(--primary-orange) rounded-full opacity-30`}
                  ></div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>

                <h2
                  className="font-(family-name:--body-fonts) text-[#9C4D32] mb-4 text-center lg:text-left"
                  style={{ fontSize: "56px", fontWeight: 700, lineHeight: 1.1 }}
                >
                  {founder.name}
                </h2>
                <h3
                  className="font-['Montserrat'] text-(--primary-gold) mb-6 text-center lg:text-left"
                  style={{ fontSize: "20px", fontWeight: 600 }}
                >
                  {founder.title}
                </h3>
                <p
                  className="font-['Montserrat'] text-gray-700 leading-relaxed mb-8 text-center lg:text-left"
                  style={{ fontSize: "16px" }}
                >
                  {founder.bio}
                </p>

                <div className="bg-(--primary-orange) rounded-xl p-6">
                  <h4
                    className="font-(family-name:--body-fonts) text-[#9C4D32] mb-4"
                    style={{ fontSize: "24px", fontWeight: 700 }}
                  >
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {founder.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-(--primary-gold) flex-shrink-0 mt-0.5" />
                        <span
                          className="font-['Montserrat'] text-gray-700"
                          style={{ fontSize: "15px" }}
                        >
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-(--primary-orange) py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="font-(family-name:--body-fonts) text-[#9C4D32] mb-6"
              style={{ fontSize: "48px", fontWeight: 700 }}
            >
              A Legacy Built on Faith & Craftsmanship
            </h2>
            <p
              className="font-['Montserrat'] text-gray-700 leading-relaxed mb-8"
              style={{ fontSize: "18px" }}
            >
              The Sompura family tradition of temple building dates back over
              500 years, with skills and knowledge passed down through
              generations. Today, Hitesh Sompura and Mehul Sompura continue this
              sacred heritage, combining ancestral wisdom with modern innovation
              to create temples that will stand for centuries to come.
            </p>
            <Link
              to="/#contact-us"
              className="inline-block px-10 py-4 bg-[#9C4D32] text-white rounded-full hover:bg-[#7A3A25] transition-colors font-['Montserrat']"
              style={{ fontSize: "16px", fontWeight: 600 }}
            >
              START YOUR PROJECT WITH US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
