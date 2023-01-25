import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/Context';
import Navbar from '../navbars/Navbar';

import { sneakersImagesArr } from './sneakersImagesData';

export default function Home() {
  const { closeModal } = useContext(Context);

  const [activeIndex, setActiveIndex] = useState(0);
  const [sneakersImage, setSneakersImage] = useState(
    sneakersImagesArr[activeIndex]
  );

  return (
    <div>
      <Navbar />
      <section onClick={closeModal}>
        <div>
          <button className="prev">prev</button>
          <img src={sneakersImage} />
          <button className="next">next</button>
        </div>

        <section className="product-info">
          <h3>adidas</h3>
          <h2>OZWEEGO SHOES</h2>
          <p>
            Push the boundaries of throwback style. These adidas OZWEEGO shoes
            mutate '90s DNA into something entirely new. Show off the
            high-volume, sculpted shape of this pair with shorts or cropped
            pants. Extra cushioning keeps you comfortable from dawn to dusk (or
            beyond).
          </p>

          <div className="price">
            <span className="discounted-price">$135</span>
            <span className="discount">25%</span>
            <span className="original-price">$180</span>
          </div>

          <form className="quantity">
            <button className="minus">-</button>
            <input type="number" />
            <button className="plus">+</button>
          </form>

          <button type="submit">Add to cart</button>
        </section>
      </section>
    </div>
  );
}
