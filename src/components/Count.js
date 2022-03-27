import useToggle from "../hooks/useToggle";

import iconMinus from "../assets/images/icon-minus.svg";
import iconPlus from "../assets/images/icon-plus.svg";
import btnClose from "../assets/images/close-modal.svg";

import styles from '../styles/Count.module.scss';

function Count({ count, setCount }) {

  function less(e) {
    if (count > 0) {
      setCount(count - 1);
    }
    else if (count === 0) {
      document.body.style.overflow = 'hidden';
      toggle();
    }
  }

  const [isOpen, toggle] = useToggle();

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

      {/* Modal warning */}
      {isOpen &&
        <div aria-hidden="true" className={styles.l_modal}>
          <div className={styles.modal}>
            <div className={styles.modal_content}>
              <div className={styles.modal_header}>
                <h3>
                  Oops!
                </h3>
                <button type="button" onClick={(e) => toggle()}>
                  <img src={btnClose} alt="Fechar modal" />
                </button>
              </div>
              <div className={styles.modal_body}>
                <p>
                  Please, don't press the remove button without having something in the count.
                </p>
              </div>
              <div className={styles.modal_footer}>
                <button onClick={(e) => toggle()} type="button" className={styles.agree}>Ok</button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Count