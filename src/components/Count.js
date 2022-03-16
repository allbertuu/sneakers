import { useState } from "react";

import iconMinus from "../assets/images/icon-minus.svg";
import iconPlus from "../assets/images/icon-plus.svg";
import btnClose from "../assets/images/close-modal.svg";

import styles from '../styles/Count.module.scss';

function Count() {

  const [count, setCount] = useState(0);

  function less(e) {
    if (count > 0) {
      setCount(count - 1);
    }
    else if (count === 0) {
      openModal('avisoModal');
    }
  }

  function openModal(id) {
    let modal = document.getElementById(id);
    if (typeof modal == undefined || modal === null) {
      return;
    } else {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal(id) {
    let modal = document.getElementById(id);
    if (typeof modal == undefined || modal === null) {
      return;
    }
    else {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }

  return (
    <>
      <div className={styles.count}>
        <button onClick={less}>
          <img src={iconMinus} alt='menos 1' />
        </button>
        <div className={styles.display}>{count}</div>
        <button onClick={(e) => setCount(count + 1)}>
          <img src={iconPlus} alt='mais 1' />
        </button>
      </div>

      {/* Modal */}
      <div id="avisoModal" aria-hidden="true" className={styles.l_modal}>
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <div className={styles.modal_header}>
              <h3>
                Oops!
              </h3>
              <button type="button" onClick={(e) => closeModal('avisoModal')}>
                <img src={btnClose} alt="Fechar modal" />
              </button>
            </div>
            <div className={styles.modal_body}>
              <p>
                Please, don't press the remove button without having something in the count.
              </p>
            </div>
            <div className={styles.modal_footer}>
              <button onClick={(e) => closeModal('avisoModal')} type="button" className={styles.agree}>Ok</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Count