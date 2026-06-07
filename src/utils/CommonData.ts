import ramMandir from "../assets/images/ram mandir.png";
import aksharDhamMandir from "../assets/images/akshardham temple.png";
import lotusMandir from "../assets/images/lotus temple.png";

import work01 from "../assets/images/works/01.jpeg";
import work02 from "../assets/images/works/02.jpeg";
import work03 from "../assets/images/works/03.jpeg";
import work04 from "../assets/images/works/04.jpeg";
import work05 from "../assets/images/works/05.jpeg";
import work06 from "../assets/images/works/06.jpeg";
import work07 from "../assets/images/works/07.jpeg";
import work08 from "../assets/images/works/08.jpeg";

interface HeroSlide {
  title: string;
  subtitle: string;
  image: string;
}

export const NAVIGATION_DATA = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "OUR WORK", path: "/our-work" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
] as const;

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: "Specialists in Traditional Temples & Jain Derasars",
    subtitle: "Design & Build from Scratch",
    image: ramMandir,
  },
  {
    title: "Sacred Architecture for Generations",
    subtitle: "Preserving Heritage Through Craftsmanship",
    image: aksharDhamMandir,
  },
  {
    title: "Master Builders of Divine Spaces",
    subtitle: "Traditional Techniques, Timeless Beauty",
    image: lotusMandir,
  },
] as const;

export const WORK_LIST_DATA = [
  {
    title: "Surat",
    image: work01,
  },
  {
    title: "Ahmedabad",
    image: work02,
  },
  {
    title: "Vadodara",
    image: work03,
  },
  {
    title: "Surat",
    image: work04,
  },
  {
    title: "Ahmedabad",
    image: work05,
  },
  {
    title: "Vadodara",
    image: work06,
  },
  {
    title: "Surat",
    image: work07,
  },
  {
    title: "Surat",
    image: work08,
  },
] as const;

