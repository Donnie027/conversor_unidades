import { useState } from "react";

export const useConversion = (opciones, conversiones) => {
  const [unidadDe, setUnidadDe] = useState(opciones[0].value);
  const [unidadA, setUnidadA] = useState(opciones[1].value);
  const [valor, setValor] = useState('');

  const cambioUnidadDe = (selectedOption) => {
    const nuevoValor = selectedOption ? selectedOption.value : null;
    if (nuevoValor && nuevoValor === unidadA) {
      const nuevaUnidad = opciones.find(opcion => opcion.value !== nuevoValor);
      setUnidadDe(nuevoValor);
      setUnidadA(nuevaUnidad.value);
    } else {
      setUnidadDe(nuevoValor);
    }
  };

  const cambioUnidadA = (selectedOption) => {
    const nuevoValor = selectedOption ? selectedOption.value : null;
    if (nuevoValor && nuevoValor === unidadDe) {
      const nuevaUnidad = opciones.find(opcion => opcion.value !== nuevoValor);
      setUnidadA(nuevoValor);
      setUnidadDe(nuevaUnidad.value);
    } else {
      setUnidadA(nuevoValor);
    }
  };

  const manejoCambioInput = (nuevoValor) => {
    setValor(nuevoValor);
  };

  const convertirValor = () => {
    if (!valor || !unidadDe || !unidadA) return '';   
    const factor = conversiones[unidadDe][unidadA];
    const resultado = (parseFloat(valor) * factor).toFixed(2);
    return resultado;
  };

  return {
    unidadDe,
    unidadA,
    valor,
    cambioUnidadDe,
    cambioUnidadA,
    manejoCambioInput,
    convertirValor
  };
};