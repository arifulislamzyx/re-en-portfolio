import { StaticImageData } from "next/image";
import sm1 from "../../Public/si1.png";
import sm2 from "../../Public/si2.png";
import sm3 from "../../Public/si3.png";
import sm4 from "../../Public/si4.png";
import sm5 from "../../Public/si5.png";
import sm6 from "../../Public/si6.png";
import sm7 from "../../Public/si7.png";
import sm8 from "../../Public/si9.png";

export interface ImageProps {
  name: StaticImageData;
  id: number;
  link: string;
}

export const images: ImageProps[] = [
  {
    id: 1,
    name: sm1,
    link: "https://gmail.com",
  },

  {
    id: 2,
    name: sm2,
    link: "https://linkedin.com",
  },

  {
    id: 3,
    name: sm3,
    link: "https://www.researchgate.net/",
  },

  {
    id: 4,
    name: sm4,
    link: "https://scholar.google.com/",
  },

  {
    id: 5,
    name: sm5,
    link: "https://facebook.com",
  },

  {
    id: 6,
    name: sm6,
    link: "https://twitter.com",
  },

  {
    id: 7,
    name: sm7,
    link: "https://instagram.com",
  },

  {
    id: 8,
    name: sm8,
    link: "https://youtube.com",
  },
];
