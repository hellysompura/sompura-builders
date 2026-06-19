import React from "react"
import { NAVIGATION_DATA } from "../utils/CommonData"

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="bg-(--primary-brown) text-(--primary-white) pt-16 pb-8">

                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                        <div>
                            <p className="font-['Montserrat'] text-(--primary-orange) leading-relaxed" style={{ fontSize: '14px' }}>
                                Preserving the sacred art of temple architecture since 2008.
                                <br />
                                Bringing divine visions to life with traditional craftsmanship.
                            </p>
                        </div>

                        <div className="justify-self-center">
                            <h4 className="font-(family-name:--body-fonts) text-(--primary-gold) mb-6" style={{ fontSize: '20px', fontWeight: 700 }}>
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                {NAVIGATION_DATA.map((item) => (
                                    <li key={item.sectionId}>
                                        <span className="font-['Montserrat'] cursor-pointer uppercase text-(--primary-orange) hover:text-(--primary-gold) transition-colors" style={{ fontSize: '14px' }}>
                                            {item.label}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="justify-self-end">
                            <h4 className="font-(family-name:--body-fonts) text-(--primary-gold) mb-6" style={{ fontSize: '20px', fontWeight: 700 }}>
                                Contact
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex flex-col">
                                    <span className="font-['Montserrat'] text-(--primary-orange)" style={{ fontSize: '14px' }}>
                                        <a
                                            href="tel:+919898201412"
                                            className="block hover:underline"
                                        >
                                            +91 98982 01412
                                        </a>
                                    </span>
                                    <span className="font-['Montserrat'] text-(--primary-orange)" style={{ fontSize: '14px' }}>
                                        <a
                                            href="tel:+919898207069"
                                            className="block hover:underline"
                                        >
                                            +91 98982 07069
                                        </a>
                                    </span>
                                </li>
                                <li>
                                    <span className="font-['Montserrat'] text-(--primary-orange)" style={{ fontSize: '14px' }}>
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
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer