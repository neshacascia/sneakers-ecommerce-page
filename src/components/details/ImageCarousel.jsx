import { useContext } from 'react';
import { Context } from '../../context/Context';

import { sneakersImagesArr } from '../../pages/sneakersImagesData';

export default function Images() {
  const { sneakersImage, prevImage, nextImage } = useContext(Context);

  return (
    <div>
      <button className="prev" onClick={prevImage}>
        prev
      </button>
      <img src={sneakersImage} />
      <button className="next" onClick={nextImage}>
        next
      </button>
    </div>
  );
}
