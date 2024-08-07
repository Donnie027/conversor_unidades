import './compFooter.css'

export const CompFooter = () => {

  const fecha = new Date().getFullYear();
  
  return (
    <>
    
    <footer>
        <h3>Proyecto desarrollado por Donatien O.</h3>
        <h4>Vigencia {fecha}</h4>
    </footer>

    </>
  )
}
