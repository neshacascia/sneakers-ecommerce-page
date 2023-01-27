import { useContext } from 'react';
import { Context } from '../../context/Context';

import prevIcon from '/assets/icon-previous.svg';
import nextIcon from '/assets/icon-next.svg';

export default function ImageCarousel() {
  const { sneakersImage, prevImage, nextImage } = useContext(Context);

  return (
    <div className="flex w-full relative">
      <button
        onClick={prevImage}
        className="bg-white w-10 h-10 border-2 border-orange-300 rounded-full absolute top-1/2 -translate-y-1/2 flex items-center justify-center ml-4"
      >
        <img src={prevIcon} />
      </button>
      <img src={sneakersImage} className="" />
      <button
        onClick={nextImage}
        className="bg-white w-10 h-10 border-2 border-orange-300 rounded-full absolute top-1/2 right-0 -translate-y-1/2 flex items-center justify-center mr-4"
      >
        <img src={nextIcon} />
      </button>
    </div>
  );
}
