import { InputComponente } from '../../Input/InputComponente';
import { SelectComponente } from '../../Selects/SelectComponente';
import { BotonCopiarComponente } from '../../BotonCopiar/BotonCopiarComponente';
import { useConversion } from '../../../Hooks/useConversion'

import { conversionesPresion } from "./conversionesPresion";
import { opcionesPresion } from "./opcionesPresion";

export const PresionComponente = () => {

  const {
    unidadDe,
    unidadA,
    cambioUnidadDe,
    cambioUnidadA,
    manejoCambioInput,
    valor,
    convertirValor
  } = useConversion(opcionesPresion, conversionesPresion);

  const resultadoConversion = convertirValor();

  return (
    <>
      <h2 className="titulo-conversor">Presión 💨</h2>

      <label className="label-conversor">Convertir</label>
      <InputComponente onValueChange={manejoCambioInput} />

      <SelectComponente 
        opciones={opcionesPresion}
        seleccionOpcion={unidadDe}
        onChangeOption={cambioUnidadDe} 
      />

      <label className="label-conversor"> A </label>
      <SelectComponente
        opciones={opcionesPresion}
        seleccionOpcion={unidadA}
        onChangeOption={cambioUnidadA}
      />

      <div className="caja-resultado">
        <span className="resultadoText">{resultadoConversion}</span> <span className="simboloUnidad">{unidadA}</span>
        <BotonCopiarComponente valor={`${resultadoConversion}${unidadA}`} />
      </div>
    </>
  );
};
