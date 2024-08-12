import { InputComponente } from '../../Input/InputComponente';
import { SelectComponente } from '../../Selects/SelectComponente';
import { BotonCopiarComponente } from '../../BotonCopiar/BotonCopiarComponente';
import { useConversion } from '../../../Hooks/useConversion'

import { conversionesFuerza } from "./conversionesFuerza";
import { opcionesFuerza } from "./opcionesFuerza";

export const FuerzaComponente = () => {

  const {
    unidadDe,
    unidadA,
    cambioUnidadDe,
    cambioUnidadA,
    manejoCambioInput,
    valor,
    convertirValor
  } = useConversion(opcionesFuerza, conversionesFuerza);

  const resultadoConversion = convertirValor();

  return (
    <>
      <h2 className="titulo-conversor">Fuerza 💪</h2>

      <label className="label-conversor">Convertir</label>
      <InputComponente onValueChange={manejoCambioInput} />

      <SelectComponente 
        opciones={opcionesFuerza}
        seleccionOpcion={unidadDe}
        onChangeOption={cambioUnidadDe} 
      />

      <label className="label-conversor"> A </label>
      <SelectComponente
        opciones={opcionesFuerza}
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
