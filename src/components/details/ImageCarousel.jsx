import { useContext } from 'react';
import { Context } from '../../context/Context';
import { sneakersImagesArr } from '../../pages/sneakersImagesData';

import prevIcon from '/assets/icon-previous.svg';
import nextIcon from '/assets/icon-next.svg';

export default function ImageCarousel() {
  const { sneakersImage, prevImage, nextImage, changeMainImage } =
    useContext(Context);

  return (
    <div className="flex w-full relative md:justify-center md:flex-col lg:gap-8 lg:w-display lg:h-fit">
      <button
        onClick={prevImage}
        className="bg-white w-10 h-10 border-2 border-orange-300 rounded-full absolute top-1/2 -translate-y-1/2 flex items-center justify-center ml-4 lg:hidden"
      >
        <img src={prevIcon} />
      </button>
      <img src={sneakersImage} className="lg:rounded-2xl" />
      <button
        onClick={nextImage}
        className="bg-white w-10 h-10 border-2 border-orange-300 rounded-full absolute top-1/2 right-0 -translate-y-1/2 flex items-center justify-center mr-4 lg:hidden"
      >
        <img src={nextIcon} />
      </button>

      <div className="hidden w-display md:flex md:justify-center md:flex-wrap gap-4 mt-4">
        <img
          src={sneakersImagesArr[0]}
          className="w-images h-images md:rounded-xl hover:opacity-70 hover:border-2 hover:border-orange-300 hover:cursor-pointer"
          onClick={e => changeMainImage(0)}
        />
        <img
          src={sneakersImagesArr[1]}
          className="w-images h-images md:rounded-xl hover:opacity-70 hover:border-2 hover:border-orange-300 hover:cursor-pointer"
          onClick={e => changeMainImage(1)}
        />
        <img
          src={sneakersImagesArr[2]}
          className="w-images h-images md:rounded-xl hover:opacity-70 hover:border-2 hover:border-orange-300 hover:cursor-pointer"
          onClick={e => changeMainImage(2)}
        />
        <img
          src={sneakersImagesArr[3]}
          className="w-images h-images md:rounded-xl hover:opacity-70 hover:border-2 hover:border-orange-300 hover:cursor-pointer"
          onClick={e => changeMainImage(3)}
        />
      </div>
    </div>
  );
}
