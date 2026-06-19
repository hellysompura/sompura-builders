import React from "react";
import InputComponent from "../../components/InputComponent";
import PrimaryButton from "../../components/PrimaryButton";
import Icon from "../../components/Icon";

export default function ContactUs() {

  const handleCheckAddress = () => {
    window.open("https://maps.app.goo.gl/EnRT65x1gJzh9L6R7", "_blank");
  };

  return (
    <React.Fragment>
      <div>
        {" "}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="relative">
            <div className="border-4 border-(--primary-gold) rounded-3xl p-12 relative bg-white shadow-lg h-full">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-(--primary-white) px-4 lg:w-[400px]">
                <h3 className="font-(family-name:--body-fonts) text-(--primary-gold) font-bold text-center lg:text-4xl text-xl">
                  BEGIN YOUR SPIRITUAL JOURNEY
                </h3>
              </div>

              <form className="space-y-6 mt-6">
                <div>
                  <InputComponent
                    id="name"
                    label="Name"
                    name="name"
                    value={null}
                    onChange={() => { }}
                    className="w-full"
                  />
                </div>
                <div>
                  <InputComponent
                    id="email"
                    label="Email"
                    name="email"
                    value={null}
                    onChange={() => { }}
                    className="w-full"
                  />
                </div>
                <div>
                  <InputComponent
                    id="phone"
                    label="Phone"
                    name="phone"
                    value={null}
                    onChange={() => { }}
                    className="w-full"
                  />
                </div>
                <div>
                  <InputComponent
                    id="project-type"
                    label="Project Type"
                    name="project-type"
                    value={null}
                    onChange={() => { }}
                    className="w-full"
                  />
                </div>
                <div>
                  <InputComponent
                    id="message"
                    label="Message"
                    name="message"
                    value={null}
                    onChange={() => { }}
                    className="w-full"
                    type="textarea"
                  />
                </div>
                <PrimaryButton
                  id="contact-submit"
                  type="submit"
                  className="w-full px-8 py-4 font-semibold bg-(--primary-brown) text-(--primary-white) rounded-lg hover:bg-(--primary-brown-80) transition-colors font-(family-name:--body-fonts)"
                  label="CONTACT"
                />
              </form>
            </div>
          </div>

          <div className="relative bg-(--primary-brown) rounded-3xl lg:p-12 p-6 text-(--primary-white)">
            <div className="absolute inset-0 opacity-10 rounded-3xl overflow-hidden">
              <svg viewBox="0 0 400 600" className="w-full h-full">
                <path
                  d="M200 100 L190 140 L180 160 L190 180 L200 280 L210 180 L220 160 L210 140 Z"
                  fill="white"
                  stroke="#B68F55"
                  strokeWidth="2"
                />
                <path
                  d="M170 160 L230 160 L230 350 L170 350 Z"
                  fill="white"
                  stroke="#B68F55"
                  strokeWidth="2"
                />
                <rect x="180" y="200" width="20" height="35" fill="#B68F55" />
                <rect x="220" y="200" width="20" height="35" fill="#B68F55" />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="font-(family-name:--body-fonts) text-(--primary-orange) mb-10 text-2xl lg:text-3xl font-bold">
                Get In Touch
              </h3>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-(--primary-gold) flex items-center justify-center shrink-0">
                    <Icon name="Phone" className="w-6 h-6 text-white" />
                    {/* <Phone className="w-6 h-6 text-white" /> */}
                  </div>
                  <div>
                    <p className="font-(family-name:--header-fonts) text-(--primary-orange) mb-1 text-sm lg:text-lg">
                      PHONE
                    </p>
                    <p className="font-(family-name:--header-fonts) text-(--primary-white) text-sm lg:text-lg">
                      <a
                        href="tel:+919898207069"
                        className="block hover:underline"
                      >
                        +91 98982 07069
                      </a>
                    </p>
                    <p className="font-(family-name:--header-fonts) text-(--primary-white) text-sm lg:text-lg">
                      <a
                        href="tel:+919898201412"
                        className="block hover:underline"
                      >
                        +91 98982 01412
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-(--primary-gold) flex items-center justify-center shrink-0">
                    <Icon name="Mail" className="w-6 h-6 text-(--primary-white)" />
                  </div>
                  <div>
                    <p className="font-(family-name:--header-fonts) text-(--primary-orange) mb-1">
                      EMAIL
                    </p>
                    <p className="font-(family-name:--header-fonts) text-(--primary-white) text-sm lg:text-lg">
                       <a
                        href="mailto:mehulsompura90@gmail.com"
                        onClick={() =>
                          window.open(
                            "https://mail.google.com/mail/?view=cm&to=mehulsompura90@gmail.com",
                            "_blank",
                          )
                        }
                        className="hover:underline"
                      >
                        mehulsompura90@gmail.com
                      </a>
                    </p>
                    <p className="font-(family-name:--header-fonts) text-(--primary-white) text-sm lg:text-lg">
                      <a
                        href="mailto:info.sompuraandson@gmail.com"
                        onClick={() =>
                          window.open(
                            "https://mail.google.com/mail/?view=cm&to=info.sompuraandson@gmail.com",
                            "_blank",
                          )
                        }
                        className="hover:underline"
                      >
                        info.sompuraandson@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 cursor-pointer" onClick={handleCheckAddress}>
                  <div className="w-12 h-12 rounded-full bg-(--primary-gold) flex items-center justify-center shrink-0">
                    <Icon name="MapPin" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-(family-name:--header-fonts) text-(--primary-orange) mb-1">
                      ADDRESS
                    </p>
                    <p className="font-(family-name:--header-fonts) text-(--primary-white) text-sm lg:text-lg leading-relaxed">
                      ROW HOUSE NO. 14, Samarth Homes, Opp. Sai Night Factory
                      <br />
                      Surat, Gujarat 394540
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* <div>
                <p className="font-(family-name:--header-fonts) text-(--primary-orange) mb-4" style={{ fontSize: '14px', fontWeight: 600 }}>
                  FOLLOW US
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-(--primary-gold) hover:bg-[#9C7A45] flex items-center justify-center transition-colors">
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-(--primary-gold) hover:bg-[#9C7A45] flex items-center justify-center transition-colors">
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-(--primary-gold) hover:bg-[#9C7A45] flex items-center justify-center transition-colors">
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
