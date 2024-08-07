import { useState } from 'react';
import { InputComponente } from '../../Input/InputComponente';
import { SelectComponente } from '../../Selects/SelectComponente';
import { BotonCopiarComponente } from '../../BotonCopiar/BotonCopiarComponente';
import { opcionesLongitud } from "./opcionesLongitud";
import { conversiones } from "./conversiones";

export const LongitudComponente = () => {

  const [unidadDe, setUnidadDe] = useState(opcionesLongitud[0].value);
  const [unidadA, setUnidadA] = useState(opcionesLongitud[1].value);
  const [valor, setValor] = useState('');

  const cambioUnidadDe = (selectedOption) => {
    const nuevoValor = selectedOption ? selectedOption.value : null;
    if (nuevoValor && nuevoValor === unidadA) {
      const nuevaUnidad = opcionesLongitud.find(opcion => opcion.value !== nuevoValor);
      setUnidadDe(nuevoValor);
      setUnidadA(nuevaUnidad.value);
    } else {
      setUnidadDe(nuevoValor);
    }
  };

  const cambioUnidadA = (selectedOption) => {
    const nuevoValor = selectedOption ? selectedOption.value : null;
    if (nuevoValor && nuevoValor === unidadDe) {
      const nuevaUnidad = opcionesLongitud.find(opcion => opcion.value !== nuevoValor);
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

  const resultadoConversion = convertirValor();

  return (
    <>
      <h2 className="titulo-conversor">Longitud 📏</h2>
      <label className="label-conversor">Convertir</label>
      <InputComponente onValueChange={manejoCambioInput} />
      <SelectComponente 
        opciones={opcionesLongitud}
        seleccionOpcion={unidadDe}
        onChangeOption={cambioUnidadDe} 
      />
      <label className="label-conversor"> A </label>
      <SelectComponente
        opciones={opcionesLongitud}
        seleccionOpcion={unidadA}
        onChangeOption={cambioUnidadA}
      />
      <div className="caja-resultado">
        <span className="resultadoText">{resultadoConversion}</span> <span className="simboloUnidad">{unidadA}</span>
        <BotonCopiarComponente valor={`${resultadoConversion}${unidadA}`}/>
      </div>
    </>
  );
};
