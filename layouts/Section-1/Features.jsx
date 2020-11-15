import React from "react";
const Features = () => {
  return (
    <section className="text-gray-700 body-font bg-opacity-25">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded-md h-64 w-full shadow-2xl"
            alt="hero"
            src="/assets/jasmin.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font font-pacifaco sm:text-4xl text-3xl mb-4 font-medium text-gray-400 ">
            Bagikan Kenangan
          </h1>
          <p className="mb-8 leading-relaxed text-gray-200">
            selfiebox asli pertama yang diperkenalkan di Makassar. Setelah
            membuat banyak tamu, pasangan pernikahan, ulang tahun anak laki-laki
            dan perempuan, kantor, dan siswa sangat bahagia. Peeko Selfiebox
            membawa kesenangan dan kegembiraan pada pesta pernikahan dan acara
            anda.
          </p>
          <div className="flex justify-center">
            <button className="hidden md:inline-flex text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-bold">
              Contact Us
            </button>
            <button className="ml-4 hidden md:inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-bold">
              Find U Foto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
