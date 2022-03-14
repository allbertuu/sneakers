import { useState } from "react";
// import 'flowbite';

import iconMinus from "../assets/images/icon-minus.svg";
import iconPlus from "../assets/images/icon-plus.svg";

import '../styles/Count.scss';

const Count = () => {

  const [count, setCount] = useState(0);

  const less = (e) => {
    if (count > 0) {
      setCount(count - 1);
    }
    else if (count === 0) {
      // toggleModal('avisoModal');
    }
  }

  return (
    <div className="count">
      <button className="btn-count" onClick={less}>
        <img src={iconMinus} alt='menos 1' />
      </button>
      <div className="display">{count}</div>
      <button className="btn-count" onClick={(e) => setCount(count + 1)}>
        <img src={iconPlus} alt='mais 1' />
      </button>
    </div>
  );
}

export default Count