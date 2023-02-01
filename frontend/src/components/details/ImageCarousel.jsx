import { useContext } from 'react';
import { Context } from '../../context/Context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import ImageThumbnails from './ImageThumbnails';

export default function ImageCarousel() {
  const { sneakersImage, prevImage, nextImage, openImageModal } =
    useContext(Context);

  return (
    <div className="flex w-full relative md:justify-center md:flex-col lg:gap-8 lg:w-display lg:h-fit">
      <button
        onClick={prevImage}
        className="bg-white w-10 h-10 border-2 border-orange-300 rounded-md absolute top-1/2 -translate-y-1/2 flex items-center justify-center ml-4 lg:hidden"
      >
        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
      </button>
      <img
        src={sneakersImage}
        className="lg:rounded-2xl hover:cursor-pointer"
        onClick={openImageModal}
      />
      <button
        onClick={nextImage}
        className="bg-white w-10 h-10 border-2 border-orange-300 rounded-md absolute top-1/2 right-0 -translate-y-1/2 flex items-center justify-center mr-4 lg:hidden"
      >
        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
      </button>

      <ImageThumbnails />
    </div>
  );
}
