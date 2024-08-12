import { InputComponente } from '../../Input/InputComponente';
import { SelectComponente } from '../../Selects/SelectComponente';
import { BotonCopiarComponente } from '../../BotonCopiar/BotonCopiarComponente';
import { useConversion } from '../../../Hooks/useConversion'

import { conversionesEqTemperatura } from "./conversionesEqTemperatura";
import { opcionesEqTemperatura } from "./opcionesEqTemperatura";

export const EqTemperaturaComponente = () => {

  const {
    unidadDe,
    unidadA,
    cambioUnidadDe,
    cambioUnidadA,
    manejoCambioInput,
    valor,
    convertirValor
  } = useConversion(opcionesEqTemperatura, conversionesEqTemperatura);

  const resultadoConversion = convertirValor();

  return (
    <>
      <h2 className="titulo-conversor">Equivalencias de Temperatura 🔥</h2>

      <label className="label-conversor">Convertir</label>
      <InputComponente onValueChange={manejoCambioInput} />

      <SelectComponente 
        opciones={opcionesEqTemperatura}
        seleccionOpcion={unidadDe}
        onChangeOption={cambioUnidadDe} 
      />

      <label className="label-conversor"> A </label>
      <SelectComponente
        opciones={opcionesEqTemperatura}
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
