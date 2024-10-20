import React from "react";
import img1 from "../../../Public/img1.png";
import img2 from "../../../Public/img2.png";
import img3 from "../../../Public/img3.png";
import img4 from "../../../Public/img4.png";
import img5 from "../../../Public/img5.png";
import img6 from "../../../Public/img6.png";
import Image from "next/image";

const Publications = () => {
  return (
    <div className="bg-slate-700 py-10">
      <div className="container px-2 md:px-0">
        <h3 className="text-center text-4xl md:text-5xl font-bold mb-5">
          Notable Publications
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <ul className="list-disc pl-5 space-y-5 w-full md:w-5/6">
            <li className="">
              <p className="text-lg font-bold ">
                Md Sabbir Akhanda, Katherine A. Schlaak, Eleanor F. Scott, Md
                Nasim Afroj Taj, Sarah J. Watzman, Mona Zebarjadi;
                Thermomagnetic responses of semimetals. J. Appl. Phys. 28 June
                2024; 135 (24): 240901.{" "}
                <a
                  target="_blank"
                  href="https://doi.org/10.1063/5.0192824 "
                  className="underline"
                >
                  https://doi.org/10.1063/5.0192824
                </a>
              </p>
            </li>

            <li className="">
              <p className="text-lg font-bold">
                Mahin Ahamed, Md. Nasim Afroj, Shadman Shahid, and Muhammad
                Anisuzzaman Talukder, &apos;Wavelength selective beam-steering
                in a dual-mode multi-layer plasmonic laser,&apos; Opt. Express
                32, 19895-19909 (2024).{" "}
                <a
                  target="_blank"
                  href="https://doi.org/10.1364/OE.518705 "
                  className="underline"
                >
                  https://doi.org/10.1364/OE.518705
                </a>
              </p>
            </li>

            <li className="">
              <p className="text-lg font-bold ">
                M. S. Mahmud, M. M. R. Nayan, S. Hasan and M. N. A. Taj, &apos;A
                Deep Ensemble Model with an Efficient Feature for Multi-class
                Arrhythmia Classification Utilizing 12-Lead ECG Signal,&apos;
                2022 12th International Conference on Electrical and Computer
                Engineering (ICECE), Dhaka, Bangladesh, 2022, pp. 48-51, doi:{" "}
                <a
                  href="https://ieeexplore.ieee.org/document/10088465"
                  className="underline"
                >
                  10.1109/ICECE57408.2022.10088465
                </a>
              </p>
            </li>
          </ul>

          <div className="space-y-2 mt-4 md:mt-4 ">
            <Image src={img1} width={170} height={30} alt="img1"></Image>
            <Image src={img2} width={170} height={30} alt="img2"></Image>
            <Image src={img3} width={170} height={30} alt="img3"></Image>
            <Image src={img4} width={170} height={30} alt="img4"></Image>
            <Image src={img5} width={170} height={30} alt="img5"></Image>
            <Image src={img6} width={170} height={30} alt="img6"></Image>
          </div>
        </div>

        <p className="text-center text-xl md:text-2xl  mt-5">
          More Details:{" "}
          <a href="/research/publication" className="underline">
            Publication
          </a>
        </p>
      </div>
    </div>
  );
};

export default Publications;
