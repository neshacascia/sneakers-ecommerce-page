import { useContext } from 'react';
import { Context } from '../../context/Context';

import { sneakersImagesArr } from '../../pages/sneakersImagesData';

export default function Images() {
  const { sneakersImage, prevImage, nextImage, activeIndex } =
    useContext(Context);

  const disablePrevBtn = activeIndex === 0;
  const disableNextBtn = activeIndex >= 5;

  return (
    <div>
      <button className="prev" onClick={prevImage} disabled={disablePrevBtn}>
        prev
      </button>
      <img src={sneakersImage} />
      <button className="next" onClick={nextImage} disabled={disableNextBtn}>
        next
      </button>
    </div>
  );
}
