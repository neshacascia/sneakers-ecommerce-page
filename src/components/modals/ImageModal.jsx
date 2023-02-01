import { useContext } from 'react';
import { Context } from '../../context/Context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

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

      <div className="relative mb-4 w-screen flex justify-center">
        <img src={sneakersImage} className="h-imageModal rounded-2xl" />
        <div className="absolute top-1/2 -translate-y-1/2 h-imageModal flex items-center justify-between gap-modal">
          <button
            onClick={prevImage}
            className="bg-white w-10 h-10 border-2 border-orange-300 rounded-md flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
          </button>

          <button
            onClick={nextImage}
            className="bg-white w-10 h-10 border-2 border-orange-300 rounded-md flex items-center justify-center z-20"
          >
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          </button>
        </div>
      </div>

      <ImageThumbnails />
    </div>
  );
}
