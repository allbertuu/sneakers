import { useState } from "react";

import iconMinus from "../assets/images/icon-minus.svg";
import iconPlus from "../assets/images/icon-plus.svg";
import btnClose from "../assets/images/btn-close.svg";

import '../styles/Count.scss';

const Count = () => {

  const [count, setCount] = useState(0);

  const less = (e) => {
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
    }
  }

  function closeModal(id) {
    let modal = document.getElementById(id);
    if (typeof modal == undefined || modal === null) {
      return;
    } 
    else {
      modal.style.display = 'none';
    }
  }

  return (
    <>
      <div className="count">
        <button className="btn-count" onClick={less}>
          <img src={iconMinus} alt='menos 1' />
        </button>
        <div className="display">{count}</div>
        <button className="btn-count" onClick={(e) => setCount(count + 1)}>
          <img src={iconPlus} alt='mais 1' />
        </button>
      </div>

      {/* Modal */}
      <div id="avisoModal" aria-hidden="true" className="l-modal">
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>
                Preste atenção
              </h3>
              <button type="button" onClick={(e) => closeModal('avisoModal')}>
                <img src={btnClose} alt="Fechar modal" />
              </button>
            </div>
            <div className="modal-body">
              <p>
                Não aperte para remover sem ter nada na contagem. Obrigado.
              </p>
            </div>
            <div className="modal-footer">
              <button onClick={(e) => closeModal('avisoModal')} type="button" className="btn agree">I accept</button>
              <button onClick={(e) => closeModal('avisoModal')} type="button" className="btn disagree">Decline</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Count