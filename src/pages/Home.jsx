import { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import Navbar from '../components/navbars/Navbar';
import ImageCarousel from '../components/details/ImageCarousel';
import Form from '../components/Form';

export default function Home() {
  const { closeModal } = useContext(Context);

  return (
    <div>
      <Navbar />
      <hr className="hidden lg:block mx-40" />
      <section
        onClick={closeModal}
        className="h-full flex flex-col lg:flex-row lg:gap-28 lg:px-52 lg:mt-12 lg:mb-8"
      >
        <ImageCarousel />

        <section className="h-full font-display flex flex-col px-6 pt-6 mb-10 lg:w-fit">
          <h3 className="font-brand text-lg pb-5 xl:pb-6">adidas</h3>
          <h2 className="text-dark text-3xl font-bold pb-4 xl:text-4xl xl:pb-8">
            OZWEEGO SHOES
          </h2>
          <p className="text-body text-base font-light pb-6">
            Push the boundaries of throwback style. These adidas OZWEEGO shoes
            mutate '90s DNA into something entirely new. Show off the
            high-volume, sculpted shape of this pair with shorts or cropped
            pants. Extra cushioning keeps you comfortable from dawn to dusk (or
            beyond).
          </p>

          <div className="font-display flex items-center pb-6 xl:pb-8">
            <span className="text-dark text-3xl font-bold pr-6">$135.00</span>
            <span className="bg-orange-100 text-orange-500 font-bold rounded px-2 mr-auto">
              25%
            </span>
            <span className="font-bold text-grey line-through">$180.00</span>
          </div>

          <Form />
        </section>
      </section>
    </div>
  );
}
