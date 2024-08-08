import { useState } from 'react';
import './inputComponente.css'

export const InputComponente = ({ onValueChange }) => {

  const [inputValue, setInputValue] = useState('');

  const manejoCambio = ({ target }) => {
    const nuevoValor = target.value;
    setInputValue(nuevoValor);
    if (onValueChange) {
      onValueChange(nuevoValor);
    }
  }

  return (
    <input className='customInput'
      type="number"
      value={inputValue}
      onChange={manejoCambio}
    />
  )
}
