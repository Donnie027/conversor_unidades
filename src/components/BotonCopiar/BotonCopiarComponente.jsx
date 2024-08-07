import React, { useState } from 'react';

export const BotonCopiarComponente = ({ valor }) => {
  const [isCopying, setIsCopying] = useState(false);
  const [icon, setIcon] = useState('bi bi-copy');

  const manejoCopiar = async () => {
    setIsCopying(true);
    setIcon('bi bi-check2');

    try {
      await navigator.clipboard.writeText(valor);
    } catch (error) {
      console.error('Error al copiar:', error);
    } finally {
      setTimeout(() => {
        setIcon('bi bi-copy');
        setIsCopying(false);
      }, 1500);
    }
  };

  return (
    <button 
      title="Copiar Resultado" 
      className="btn-copy" 
      onClick={manejoCopiar}
      disabled={isCopying}
    >
      <i className={icon}></i>
    </button>
  );
};
