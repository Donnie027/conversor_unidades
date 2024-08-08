import { InputComponente } from '../../Input/InputComponente';
import { SelectComponente } from '../../Selects/SelectComponente';
import { BotonCopiarComponente } from '../../BotonCopiar/BotonCopiarComponente';
import { useConversion } from '../../../Hooks/useConversion';

import { conversionesTimepo } from '../Tiempo/conversionesTiempo'
import { opcionesTiempo } from '../Tiempo/opcionesTiempo'


export const TiempoComponente = () => {
    const {
        unidadDe,
        unidadA,
        cambioUnidadDe,
        cambioUnidadA,
        manejoCambioInput,
        valor,
        convertirValor
      } = useConversion(opcionesTiempo, conversionesTimepo);
    
      const resultadoConversion = convertirValor();
    
      return (
        <>
            <h2 className="titulo-conversor">Tiempo ⌛</h2>

            <label className="label-conversor">Convertir</label>
            <InputComponente onValueChange={manejoCambioInput} />

            <SelectComponente 
            opciones={opcionesTiempo}
            seleccionOpcion={unidadDe}
            onChangeOption={cambioUnidadDe} 
            />

            <label className="label-conversor"> A </label>
            <SelectComponente
            opciones={opcionesTiempo}
            seleccionOpcion={unidadA}
            onChangeOption={cambioUnidadA}
            />

            <div className="caja-resultado">
            <span className="resultadoText">{resultadoConversion}</span> <span className="simboloUnidad">{unidadA}</span>
            <BotonCopiarComponente valor={`${resultadoConversion}${unidadA}`} />
            </div>
        </>
    );
}
