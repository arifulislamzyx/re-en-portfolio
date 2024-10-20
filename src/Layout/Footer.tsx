import React from "react";
import { ImageProps, images } from "../data/SocialImages";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-slate-700 ">
      <div className="container py-10 space-y-10">
        <div className="text-center">
          <Link
            href={"/contact"}
            className="border-2 p-2 rounded text-center items-center"
          >
            Get in Touch
          </Link>
        </div>
        <div className=" grid grid-cols-5 px-8 text-center md:flex justify-center items-center gap-6">
          {images.map((image: ImageProps) => (
            <Link href={image.link} key={image.id}>
              <Image
                src={image.name}
                width={50}
                height={50}
                alt="sicalImage"
              ></Image>
            </Link>
          ))}
        </div>

        <div>
          <p className="text-center px-10 md:px-0">
            ©2019-2024 Md. Nasim Afroj Taj. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
