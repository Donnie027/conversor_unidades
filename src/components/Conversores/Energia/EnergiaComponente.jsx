import { InputComponente } from '../../Input/InputComponente';
import { SelectComponente } from '../../Selects/SelectComponente';
import { BotonCopiarComponente } from '../../BotonCopiar/BotonCopiarComponente';
import { useConversion } from '../../../Hooks/useConversion'

import { conversionesEnergia } from "./conversionesEnergia";
import { opcionesEnergia } from "./opcionesEnergia";

export const EnergiaComponente = () => {

  const {
    unidadDe,
    unidadA,
    cambioUnidadDe,
    cambioUnidadA,
    manejoCambioInput,
    valor,
    convertirValor
  } = useConversion(opcionesEnergia, conversionesEnergia);

  const resultadoConversion = convertirValor();

  return (
    <>
      <h2 className="titulo-conversor">Energía ⚡</h2>

      <label className="label-conversor">Convertir</label>
      <InputComponente onValueChange={manejoCambioInput} />

      <SelectComponente 
        opciones={opcionesEnergia}
        seleccionOpcion={unidadDe}
        onChangeOption={cambioUnidadDe} 
      />

      <label className="label-conversor"> A </label>
      <SelectComponente
        opciones={opcionesEnergia}
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
