import './compFooter.css'

export const CompFooter = () => {

  const fecha = new Date().getFullYear();
  
  return (
    <>
    
    <footer>

      <div className="cajaFooterPrincipal">
        <div className="CajaLogoDos">
          <div className="imagenPhampi"></div>
            <span className='projectElephant'>Projects Elephant</span>
        </div>
        <div className="cajaLogo">
          <span className="TextoLogo">Donnie</span>
          <div className="imagenLogo"></div>
        </div>
        <div className="imagenRelleno"></div>
      </div>

      <div className="cajaFooterSecundaria">
        <span className='TextoUno'>Proyecto desarrollado por 
          <span className='colorResaltadoFooter'> Donatien O. Flores </span>
        </span>
        <span className='TextoFecha'>{fecha}</span>
      </div>

    </footer>

    </>
  )
}
