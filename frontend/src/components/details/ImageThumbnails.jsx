import { useContext } from 'react';
import { Context } from '../../context/Context';

import { sneakersImagesArr } from '../../sneakersData';

export default function ImageThumbnails() {
  const { changeMainImage } = useContext(Context);
  const imgThumbnails = sneakersImagesArr.map((img, ind) => (
    <img
      key={ind}
      src={img}
      className="w-images h-images md:rounded-xl hover:opacity-70 hover:border-2 hover:border-orange-500 hover:cursor-pointer"
      onClick={e => changeMainImage(ind)}
    />
  ));
  return (
    <div className="hidden w-display md:flex md:justify-center md:flex-wrap md:mt-6 gap-4 lg:mt-0">
      {imgThumbnails}
    </div>
  );
}
