

export const VisitaRepositorioComponente = () => {
  return (
    <>
    
        <div className="contenedorVistaRepo">
            <ul className="cajaVisitRepo">
                <h2>Link del Repositorio <i class="bi bi-link-45deg"></i></h2>
                <li className="direcRepo">
                    <a href="https://github.com/Donnie027/conversor_unidades">
                        <label>https://github.com/Donnie027/conversor_unidades</label>
                    </a>
                </li>

                <h2>QR del Repositorio <i class="bi bi-qr-code-scan"></i></h2>
                <li className="direcRepo">
                    <div className="imgQR"></div>
                </li>
            </ul>
        </div>
    
    </>
  )
}
