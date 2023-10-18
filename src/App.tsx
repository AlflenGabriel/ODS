import { FC } from 'react';
import ONUcards from './ONUcards.js';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div className="gallery">
      <img src={ONUcards.SDG01} alt="" />
      <img src={ONUcards.SDG02} alt="" />
      <img src={ONUcards.SDG03} alt="" />
      <img src={ONUcards.SDG04} alt="" />
      <img src={ONUcards.SDG05} alt="" />
      <img src={ONUcards.SDG06} alt="" />
      <img src={ONUcards.SDG07} alt="" />
      <img src={ONUcards.SDG08} alt="" />
      <img src={ONUcards.SDG09} alt="" />
      <img src={ONUcards.SDG10} alt="" />
      <img src={ONUcards.SDG11} alt="" />
      <img src={ONUcards.SDG12} alt="" />
      <img src={ONUcards.SDG13} alt="" />
      <img src={ONUcards.SDG14} alt="" />
      <img src={ONUcards.SDG15} alt="" />
      <img src={ONUcards.SDG16} alt="" />
      <img src={ONUcards.SDG17} alt="" />
    </div>
  );
};
