import { useState } from 'react';
import './inputComponente.css'

export const InputComponente = ({ onValueChange }) => {

  const [inputValue, setInputValue] = useState('');

  const manejoCambio = (eve) => {
    const nuevoValor = eve.target.value;
    setInputValue(nuevoValor);
    if (onValueChange) {
      onValueChange(nuevoValor);
    }
    // console.log(nuevoValor);
  }

  return (
    <input className='customInput'
      type="number"
      value={inputValue}
      onChange={manejoCambio}
    />
  )
}
