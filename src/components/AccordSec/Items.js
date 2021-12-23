import React, { useState } from 'react';
import Cor from './Cor';
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from "react-icons/md"

const Item = ({ title }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ?
         <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</div>
      </div>
      {isActive && <div className="accordion-content">
        <Cor />
        </div>}
    </div>
  );
};

export default Item;