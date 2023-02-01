import { useContext } from 'react';
import { Context } from '../../context/Context';

import { sneakersImagesArr } from '../../pages/sneakersData';

export default function ImageThumbnails() {
  const { changeMainImage } = useContext(Context);
  return (
    <div className="hidden w-display md:flex md:justify-center md:flex-wrap md:mt-6 gap-4 lg:mt-0">
      <img
        src={sneakersImagesArr[0]}
        className="w-images h-images md:rounded-xl hover:opacity-70 hover:border-2 hover:border-orange-500 hover:cursor-pointer"
        onClick={e => changeMainImage(0)}
      />
      <img
        src={sneakersImagesArr[1]}
        className="w-images h-images md:rounded-xl hover:opacity-70 hover:border-2 hover:border-orange-500 hover:cursor-pointer"
        onClick={e => changeMainImage(1)}
      />
      <img
        src={sneakersImagesArr[2]}
        className="w-images h-images md:rounded-xl hover:opacity-70 hover:border-2 hover:border-orange-500 hover:cursor-pointer"
        onClick={e => changeMainImage(2)}
      />
      <img
        src={sneakersImagesArr[3]}
        className="w-images h-images md:rounded-xl hover:opacity-70 hover:border-2 hover:border-orange-500 hover:cursor-pointer"
        onClick={e => changeMainImage(3)}
      />
      <img
        src={sneakersImagesArr[4]}
        className="w-images h-images md:rounded-xl hover:opacity-70 hover:border-2 hover:border-orange-500 hover:cursor-pointer"
        onClick={e => changeMainImage(4)}
      />
      <img
        src={sneakersImagesArr[5]}
        className="w-images h-images md:rounded-xl hover:opacity-70 hover:border-2 hover:border-orange-500 hover:cursor-pointer"
        onClick={e => changeMainImage(5)}
      />
      <img
        src={sneakersImagesArr[6]}
        className="w-images h-images md:rounded-xl hover:opacity-70 hover:border-2 hover:border-orange-500 hover:cursor-pointer"
        onClick={e => changeMainImage(6)}
      />
      <img
        src={sneakersImagesArr[7]}
        className="w-images h-images md:rounded-xl hover:opacity-70 hover:border-2 hover:border-orange-500 hover:cursor-pointer"
        onClick={e => changeMainImage(7)}
      />
    </div>
  );
}
