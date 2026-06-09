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

import hiteshSompura from "../assets/images/founders/hitesh sompura.jpg";
import mehulSompura from "../assets/images/founders/mehul sompura.jpg";

import { Award, Calendar, Users } from "lucide-react";

interface HeroSlide {
  title: string;
  subtitle: string;
  image: string;
}

export const NAVIGATION_DATA = [
  { label: "Home", sectionId: "home" },
  { label: "About Us", sectionId: "founders" },
  { label: "OUR WORK", sectionId: "ourWork" },
  // { label: "Services", sectionId: "services" },
  { label: "Gallery", sectionId: "gallery" },
  { label: "Contact", sectionId: "contact" },
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

export const FOUNDERS_DATA = [
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

export const STATS_DATA = [
  { icon: Calendar, value: "15+", label: "Years of Excellence" },
  { icon: Award, value: "40+", label: "Projects Completed" },
  { icon: Users, value: "100+", label: "Master Artisans" },
  // { icon: Hammer, value: "5", label: "Countries Served" },
];
