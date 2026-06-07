import { Link } from "react-router";
import { Award, Calendar, Users, Hammer } from "lucide-react";

import hiteshSompura from "../assets/images/founders/hitesh sompura.jpg";
import mehulSompura from "../assets/images/founders/mehul sompura.jpg";

export default function Founders() {
  const founders = [
    {
      name: "Hitesh J Sompura",
      title: "Master Architect & Founder",
      image: hiteshSompura,
      experience: "15+ Years",
      specialization: "Traditional Temple Design",
      bio: "With over four decades of experience in sacred architecture, Hitesh Sompura carries forward a family legacy spanning seven generations of temple builders. His deep understanding of Vastu Shastra and ancient architectural texts has shaped some of the most magnificent temples across India. A recipient of the National Craftsmanship Award, he has dedicated his life to preserving the authentic traditions of Sompura temple architecture.",
      achievements: [
        "Completed 40+ temple projects across India",
        "Expert in Jain and Hindu temple Vastu principles",
      ],
    },
    {
      name: "Mehul H Sompura",
      title: "Chief Engineer & Co-Founder",
      image: mehulSompura,
      experience: "5+ Years",
      specialization: "Stone Carving & Structural Engineering",
      bio: "Mehul Sompura represents the perfect blend of traditional craftsmanship and modern engineering. Having learned the art of stone carving from his father at age 12, he later pursued civil engineering to bring precision and structural integrity to temple construction. His innovative techniques in marble and sandstone work have set new standards in the industry while honoring age-old traditions.",
      achievements: [
        "Pioneered modern stone preservation techniques",
        "Led teams of 100+ artisans on major projects",
        "Expert in intricate deity and pillar carvings",
        "Developed eco-friendly temple construction methods",
      ],
    },
  ];

  const stats = [
    { icon: Calendar, value: "15+", label: "Years of Excellence" },
    { icon: Award, value: "40+", label: "Projects Completed" },
    { icon: Users, value: "100+", label: "Master Artisans" },
    // { icon: Hammer, value: "5", label: "Countries Served" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[500px] bg-gradient-to-br from-[#9C4D32] to-[#7A3A25] overflow-hidden">
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
            className="inline-flex items-center gap-2 text-[#F7C4A6] hover:text-white transition-colors mb-8 font-['Montserrat']"
            style={{ fontSize: "14px", fontWeight: 600 }}
          >
            ← BACK TO HOME
          </Link>
          <h1
            className="font-['Cormorant_Infant'] text-white mb-4"
            style={{ fontSize: "72px", fontWeight: 700, lineHeight: 1.1 }}
          >
            Meet Our Founders
          </h1>
          <p
            className="font-['Montserrat'] text-[#F7C4A6] max-w-2xl"
            style={{ fontSize: "20px" }}
          >
            The visionaries behind Sompura Artisans & Builders, carrying forward
            a sacred legacy of temple architecture
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 -mt-20 relative z-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-6 text-center border-t-4 border-[#B68F55]"
            >
              <stat.icon className="w-10 h-10 text-[#B68F55] mx-auto mb-3" />
              <div
                className="font-['Cormorant_Infant'] text-[#9C4D32] mb-1"
                style={{ fontSize: "40px", fontWeight: 700 }}
              >
                {stat.value}
              </div>
              <div
                className="font-['Montserrat'] text-gray-600"
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
          {founders.map((founder, index) => (
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
                      className="w-full h-[600px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#9C4D32]/90 to-transparent">
                      <div className="flex items-center gap-4 text-white mb-2">
                        <Calendar className="w-5 h-5 text-[#F7C4A6]" />
                        <span
                          className="font-['Montserrat']"
                          style={{ fontSize: "16px", fontWeight: 600 }}
                        >
                          {founder.experience}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-white">
                        <Hammer className="w-5 h-5 text-[#F7C4A6]" />
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
                    className={`absolute ${index % 2 === 0 ? "-right-6 -bottom-6" : "-left-6 -bottom-6"} w-32 h-32 border-4 border-[#B68F55] rounded-full opacity-30`}
                  ></div>
                  <div
                    className={`absolute ${index % 2 === 0 ? "-left-6 -top-6" : "-right-6 -top-6"} w-24 h-24 border-4 border-[#F7C4A6] rounded-full opacity-30`}
                  ></div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
               
                <h2
                  className="font-['Cormorant_Infant'] text-[#9C4D32] mb-4"
                  style={{ fontSize: "56px", fontWeight: 700, lineHeight: 1.1 }}
                >
                  {founder.name}
                </h2>
                <h3
                  className="font-['Montserrat'] text-[#B68F55] mb-6"
                  style={{ fontSize: "20px", fontWeight: 600 }}
                >
                  {founder.title}
                </h3>
                <p
                  className="font-['Montserrat'] text-gray-700 leading-relaxed mb-8"
                  style={{ fontSize: "16px" }}
                >
                  {founder.bio}
                </p>

                <div className="bg-[#F7C4A6] rounded-xl p-6">
                  <h4
                    className="font-['Cormorant_Infant'] text-[#9C4D32] mb-4"
                    style={{ fontSize: "24px", fontWeight: 700 }}
                  >
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {founder.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-[#B68F55] flex-shrink-0 mt-0.5" />
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

      <div className="bg-[#F7C4A6] py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="font-['Cormorant_Infant'] text-[#9C4D32] mb-6"
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
