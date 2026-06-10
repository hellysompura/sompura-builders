import React from "react"
import { NAVIGATION_DATA } from "../utils/CommonData"

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="bg-(--primary-brown) text-(--primary-white) pt-16 pb-8">

                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                        <div>
                            <p className="font-['Montserrat'] text-[#F7C4A6] leading-relaxed" style={{ fontSize: '14px' }}>
                                Preserving the sacred art of temple architecture since 2008.
                                <br />
                                Bringing divine visions to life with traditional craftsmanship.
                            </p>
                        </div>

                        <div className="justify-self-center">
                            <h4 className="font-['Cormorant_Infant'] text-[#B68F55] mb-6" style={{ fontSize: '20px', fontWeight: 700 }}>
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                {NAVIGATION_DATA.map((item) => (
                                    <li key={item.sectionId}>
                                        <span className="font-['Montserrat'] cursor-pointer uppercase text-[#F7C4A6] hover:text-[#B68F55] transition-colors" style={{ fontSize: '14px' }}>
                                            {item.label}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="justify-self-end">
                            <h4 className="font-['Cormorant_Infant'] text-[#B68F55] mb-6" style={{ fontSize: '20px', fontWeight: 700 }}>
                                Contact
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex flex-col">
                                    <span className="font-['Montserrat'] text-[#F7C4A6]" style={{ fontSize: '14px' }}>
                                        +91 98982 01412
                                    </span>
                                    <span className="font-['Montserrat'] text-[#F7C4A6]" style={{ fontSize: '14px' }}>
                                        +91 98982 07069
                                    </span>
                                </li>
                                <li>
                                    <span className="font-['Montserrat'] text-[#F7C4A6]" style={{ fontSize: '14px' }}>
                                        info@sompurasonsgroup.com
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