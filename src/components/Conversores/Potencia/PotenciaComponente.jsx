import { InputComponente } from '../../Input/InputComponente';
import { SelectComponente } from '../../Selects/SelectComponente';
import { BotonCopiarComponente } from '../../BotonCopiar/BotonCopiarComponente';
import { useConversion } from '../../../Hooks/useConversion'

import { conversionesPotencia } from "./conversionesPotencia";
import { opcionesPotencia } from "./opcionesPotencia";

export const PotenciaComponente = () => {

  const {
    unidadDe,
    unidadA,
    cambioUnidadDe,
    cambioUnidadA,
    manejoCambioInput,
    valor,
    convertirValor
  } = useConversion(opcionesPotencia, conversionesPotencia);

  const resultadoConversion = convertirValor();

  return (
    <>
      <h2 className="titulo-conversor">Potencia 🚀</h2>

      <label className="label-conversor">Convertir</label>
      <InputComponente onValueChange={manejoCambioInput} />

      <SelectComponente 
        opciones={opcionesPotencia}
        seleccionOpcion={unidadDe}
        onChangeOption={cambioUnidadDe} 
      />

      <label className="label-conversor"> A </label>
      <SelectComponente
        opciones={opcionesPotencia}
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
