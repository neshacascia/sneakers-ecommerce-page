import { useContext } from 'react';
import { Context } from '../../context/Context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import closeBtn from '/assets/icon-close.svg';
import prevIcon from '/assets/icon-previous.svg';
import nextIcon from '/assets/icon-next.svg';
import ImageThumbnails from '../details/ImageThumbnails';

export default function ImageModal() {
  const { sneakersImage, closeImageModal, prevImage, nextImage } =
    useContext(Context);

  return (
    <div className="hidden bg-overlay h-screen w-screen fixed z-10 lg:flex flex-col justify-center items-center">
      <button className="mb-6 ml-96" onClick={closeImageModal}>
        <FontAwesomeIcon
          icon={faXmark}
          className="text-white text-xl hover:text-orange-500"
        ></FontAwesomeIcon>
      </button>

      <div className="relative mb-4 w-display">
        <button
          onClick={prevImage}
          className="bg-white w-10 h-10 border-2 border-orange-300 rounded-full absolute top-1/2 -translate-y-1/2 flex items-center justify-center"
        >
          <img src={prevIcon} />
        </button>
        <img src={sneakersImage} className="h-imageModal rounded-2xl" />

        <button
          onClick={nextImage}
          className="bg-white w-10 h-10 border-2 border-orange-300 rounded-full absolute top-1/2 right-0 -translate-y-1/2 flex items-center justify-center z-20"
        >
          <img src={nextIcon} />
        </button>
      </div>

      <ImageThumbnails />
    </div>
  );
}
