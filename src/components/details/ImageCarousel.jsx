import { useContext } from 'react';
import { Context } from '../../context/Context';

import prevIcon from '/assets/icon-previous.svg';
import nextIcon from '/assets/icon-next.svg';
import ImageThumbnails from './ImageThumbnails';

export default function ImageCarousel() {
  const { sneakersImage, prevImage, nextImage, openImageModal } =
    useContext(Context);

  return (
    <div className="flex w-full relative md:justify-center md:flex-col lg:gap-8 lg:w-display lg:h-fit">
      <button
        onClick={prevImage}
        className="bg-white w-10 h-10 border-2 border-orange-300 rounded-full absolute top-1/2 -translate-y-1/2 flex items-center justify-center ml-4 lg:hidden"
      >
        <img src={prevIcon} />
      </button>
      <img
        src={sneakersImage}
        className="lg:rounded-2xl hover:cursor-pointer"
        onClick={openImageModal}
      />
      <button
        onClick={nextImage}
        className="bg-white w-10 h-10 border-2 border-orange-300 rounded-full absolute top-1/2 right-0 -translate-y-1/2 flex items-center justify-center mr-4 lg:hidden"
      >
        <img src={nextIcon} />
      </button>

      <ImageThumbnails />
    </div>
  );
}
