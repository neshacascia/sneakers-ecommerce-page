import { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import Navbar from '../components/navbars/Navbar';
import Images from '../components/details/ImageCarousel';
import Form from '../components/Form';

export default function Home() {
  const { closeModal } = useContext(Context);

  return (
    <div>
      <Navbar />
      <section onClick={closeModal} className="flex flex-col">
        <Images />

        <section className="flex flex-col px-6 pt-6">
          <h3 className="pb-5">adidas</h3>
          <h2 className="pb-4">OZWEEGO SHOES</h2>
          <p className="pb-6">
            Push the boundaries of throwback style. These adidas OZWEEGO shoes
            mutate '90s DNA into something entirely new. Show off the
            high-volume, sculpted shape of this pair with shorts or cropped
            pants. Extra cushioning keeps you comfortable from dawn to dusk (or
            beyond).
          </p>

          <div className="pb-6">
            <span>$135</span>
            <span>25%</span>
            <span>$180</span>
          </div>

          <Form />
        </section>
      </section>
    </div>
  );
}
