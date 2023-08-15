import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full z-50 lg:flex px-5 md:px-12 lg:px-0 bg-[#0E3B43] lg:py-0 py-16">
      <div className="basis-1/2 flex justify-center items-center flex-col mt-20 lg:mt-0  lg:px-28 ">
        <h1 className=" lg:text-5xl text-slate-100 lg:tracking-wide lg:leading-tight text-3xl  md:text-[2.8rem] md:leading-snug">
          Menyediakan ruang rapat sesuai yang tim anda butuhkan
        </h1>
        <p className="  mt-5 lg:leading-relaxed lg:tracking-wide text-base lg:text-lg lg:pr-12 text-slate-200 md:text-lg">
          Menyediakan kantor, baik berupa Virtual Office ataupun Private Office
          dengan Lokasi Strategis di berbagai kota di Indonesia dengan Harga
          Termurah.
        </p>
        <div className="w-full mt-8 hidden lg:block shadow-lg rounded-md overflow-hidden">
          <a
            href="#whatsapp"
            className="flex py-3 md:py-5 px-3 lg:py-4 md:px-7 bg-secondary items-center justify-between"
          >
            <div>
              <h1 className=" text-xl tracking-normal font-semibold  text-primary  font-semi mb-1">
                Hubungi kami
              </h1>
              <p className="text-base text-primary">
                Untuk mendapat informasi menarik lainnya
              </p>
            </div>
            <svg
              className="md:w-6 md:h-6 w-4 h-4 ml-2 text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="basis-1/2">
        {" "}
        <Image
          className="object-cover object-center shadow-lg w-full lg:mt-0 mt-8 h-56 lg:h-auto lg:rounded-none rounded-xl md:h-[28rem] "
          src={"/imagesmsw/banner4.png"}
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
      </div>
      <div className="w-full mt-8 lg:hidden shadow-lg rounded-md overflow-hidden">
        <a
          href="#whatsapp"
          className="flex py-4 md:py-5 px-4 md:px-7 bg-secondary items-center justify-between"
        >
          <div>
            <h1 className="md:text-2xl text-sm font-semibold text-primary  font-semi mb-1">
              Hubungi Kami
            </h1>
            <p className="md:text-lg text-xs text-primary">
              Untuk mendapat informasi menarik lainnya
            </p>
          </div>
          <svg
            className="md:w-6 md:h-6 w-4 h-4 ml-2 text-primary"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
