
export const TecnologiasComponente = () => {
  return (
    <>
    
        <div className="contenedorTecnologias">
            <div className="cajaTecWeb">
                <h3>Tecnologías Web</h3>
                <ul className="tecWeb">
                    <li>
                        <div className="iconoTec TecWebHTML"></div>
                        <label>HTML</label>
                    </li>
                    <li>
                        <div className="iconoTec TecWebCSS"></div>
                        <label>CSS</label>
                    </li>
                    <li>
                        <div className="iconoTec TecWebJS"></div>
                        <label>JavaScritp</label>
                    </li>
                </ul>
            </div>

            <div className="cajaTecDesarrollo">
                <h3>Tecnologías de Desarrollo</h3>
                <ul className="tecDesarrollo">
                    <li>
                        <div className="iconoTec TecDesREACT"></div>
                        <label>React</label>
                    </li>
                    <li>
                        <div className="iconoTec TecDesYARN"></div>
                        <label>Yarn</label>
                    </li>
                    <li>
                        <div className="iconoTec TecDesVITE"></div>
                        <label>Vite</label>
                    </li>
                </ul>
            </div>
        </div>
    
    </>
  )
}
