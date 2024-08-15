import React, { useState } from 'react';
import '../ModalVentana/modalVentana.css';

export const ModalVentana = ({ children, trigger }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
  
    return (
      <>
        <div onClick={openModal} style={{ cursor: 'pointer' }}>
          {trigger}
        </div>
        {isOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={eve => eve.stopPropagation()}>
                <div className="cajaBtnCerrar">
                    <button className="modal-close" onClick={closeModal}><i class="bi bi-x-lg"></i></button>
                </div>
                <div className="cuerpoContenido">
                    {children}
                </div>
            </div>
          </div>
        )}
      </>
    );
};
