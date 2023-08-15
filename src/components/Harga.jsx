import React from "react";
import Title from "./Title";
import Image from "next/image";

const Harga = () => {
  const yes = (
    <svg
      class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  );
  const no = (
    <svg
      class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  );
  return (
    <div className="w-full bg-secondary">
      <div className="w-full ">
        <Title
          img="/MSW/content.svg"
          title="Paket Harga dan Benefit Mitra Solusi Wicaksana"
        />
        <div className="mt-5 pb-28  relative z-30 md:container grid mx-auto gap-5 grid-flow-col-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 place-content-center ">
          <div class="w-full max-w-sm p-4  border bg-primary rounded-lg shadow sm:p-8 md:max-w-sm lg:max-w-xs  ">
            <h5 class="mb-4 text-xl font-medium  text-blue-500 ">
              Paket Silver
            </h5>
            <div class="flex justify-center items-baseline text-gray-900 dark:text-white">
              <span class="text-3xl xl:text-2xl font-semibold">Rp</span>
              <span class="text-5xl ml-2 font-extrabold tracking-wide">
                1,2 Juta
              </span>
            </div>
            <span class="ml-1 flex justify-center mt-2 text-2xl font-normal text-gray-500 dark:text-gray-400">
              <h1>/ Tahun</h1>
            </span>
            <ul role="list" class="space-y-5 my-7">
              <li class="flex space-x-3 items-center">
                {yes}
                <span class="text-base font-normal leading-tight  text-gray-400">
                  Alamat Virtual Office
                </span>
              </li>
              <li class="flex space-x-3">
                {no}
                <span class="text-base font-normal line-through leading-tight text-gray-500 ">
                  Nomer Telepon Virtual
                </span>
              </li>
              <li class="flex space-x-3">
                {no}
                <span class="text-base font-normal line-through leading-tight text-gray-500 ">
                  Meeting Room 1 jam / bulan
                </span>
              </li>
              <li class="flex space-x-3 line-through decoration-gray-500">
                {no}
                <span class="text-base font-normal leading-tight text-gray-500">
                  Meeting Room 4 jam / bulan
                </span>
              </li>
              <li class="flex space-x-3 line-through decoration-gray-500">
                {no}
                <span class="text-base font-normal leading-tight text-gray-500">
                  Papan Nama Usaha
                </span>
              </li>
            </ul>
            <button
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
          </div>
          <div class="w-full max-w-xs p-4  border bg-primary rounded-lg shadow sm:p-8 md:max-w-sm lg:max-w-xs   ">
            <h5 class="mb-4 text-xl font-medium  text-blue-500 ">Paket Gold</h5>
            <div class="flex justify-center items-baseline text-gray-900 dark:text-white">
              <span class="text-3xl xl:text-2xl font-semibold">Rp</span>
              <span class="text-5xl tracking-wide ml-2 font-extrabold ">
                1,5 Juta
              </span>
            </div>
            <span class="ml-1 flex justify-center mt-2 text-2xl font-normal text-gray-500 dark:text-gray-400">
              <h1>/ Tahun</h1>
            </span>
            <ul role="list" class="space-y-5 my-7">
              <li class="flex space-x-3 items-center">
                {yes}
                <span class="text-base font-normal leading-tight  text-gray-400">
                  Alamat Virtual Office
                </span>
              </li>
              <li class="flex space-x-3">
                {yes}
                <span class="text-base font-normal  leading-tight text-gray-400 ">
                  Nomer Telepon Virtual
                </span>
              </li>
              <li class="flex space-x-3">
                {yes}
                <span class="text-base font-normal  leading-tight text-gray-400 ">
                  Meeting Room 1 jam / bulan
                </span>
              </li>
              <li class="flex space-x-3 line-through decoration-gray-500">
                {no}
                <span class="text-base font-normal leading-tight text-gray-500">
                  Meeting Room 4 jam / bulan
                </span>
              </li>
              <li class="flex space-x-3 line-through decoration-gray-500">
                {no}
                <span class="text-base font-normal leading-tight text-gray-500">
                  Papan Nama Usaha
                </span>
              </li>
            </ul>
            <button
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
          </div>
          <div class="w-full max-w-xs p-4  border bg-primary rounded-lg shadow sm:p-8 md:max-w-sm lg:max-w-xs   ">
            <h5 class="mb-4 text-xl font-medium  text-blue-500 ">
              Paket Platinum
            </h5>
            <div class="flex justify-center items-baseline text-gray-900 dark:text-white">
              <span class="text-3xl xl:text-2xl font-semibold">Rp</span>
              <span class="text-5xl ml-2 font-extrabold tracking-wide">
                1,8 Juta
              </span>
            </div>
            <span class="ml-1 flex justify-center mt-2 text-2xl font-normal text-gray-500 dark:text-gray-400">
              <h1>/ Tahun</h1>
            </span>
            <ul role="list" class="space-y-5 my-7">
              <li class="flex space-x-3 items-center">
                {yes}
                <span class="text-base font-normal leading-tight  text-gray-400">
                  Alamat Virtual Office
                </span>
              </li>
              <li class="flex space-x-3">
                {yes}
                <span class="text-base font-normal  leading-tight text-gray-400 ">
                  Nomer Telepon Virtual
                </span>
              </li>
              <li class="flex space-x-3">
                {yes}
                <span class="text-base font-normal  leading-tight text-gray-400 ">
                  Meeting Room 1 jam / bulan
                </span>
              </li>
              <li class="flex space-x-3  decoration-gray-500">
                {yes}
                <span class="text-base font-normal leading-tight text-gray-400">
                  Meeting Room 4 jam / bulan
                </span>
              </li>
              <li class="flex space-x-3 line-through decoration-gray-500">
                {no}
                <span class="text-base font-normal leading-tight text-gray-500">
                  Papan Nama Usaha
                </span>
              </li>
            </ul>
            <button
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
          </div>
          <div class="w-full max-w-xs p-4  border bg-primary rounded-lg shadow sm:p-8 md:max-w-sm lg:max-w-xs   ">
            <h5 class="mb-4 text-xl font-medium  text-blue-500 ">
              Paket Platinum VIP
            </h5>
            <div class="flex justify-center items-baseline text-gray-900 dark:text-white">
              <span class="text-3xl xl:text-2xl font-semibold">Rp</span>
              <span class="text-5xl ml-2 font-extrabold tracking-wide">
                2 Juta
              </span>
            </div>
            <span class="ml-1 flex justify-center mt-2 text-2xl font-normal text-gray-500 dark:text-gray-400">
              <h1>/ Tahun</h1>
            </span>
            <ul role="list" class="space-y-5 my-7">
              <li class="flex space-x-3 items-center">
                {yes}
                <span class="text-base font-normal leading-tight  text-gray-400">
                  Alamat Virtual Office
                </span>
              </li>
              <li class="flex space-x-3">
                {yes}
                <span class="text-base font-normal  leading-tight text-gray-400 ">
                  Nomer Telepon Virtual
                </span>
              </li>
              <li class="flex space-x-3">
                {yes}
                <span class="text-base font-normal  leading-tight text-gray-400 ">
                  Meeting Room 1 jam / bulan
                </span>
              </li>
              <li class="flex space-x-3  decoration-gray-500">
                {yes}
                <span class="text-base font-normal leading-tight text-gray-400">
                  Meeting Room 4 jam / bulan
                </span>
              </li>
              <li class="flex space-x-3  decoration-gray-500">
                {yes}
                <span class="text-base font-normal leading-tight text-gray-400">
                  Papan Nama Usaha
                </span>
              </li>
            </ul>
            <button
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Harga;
