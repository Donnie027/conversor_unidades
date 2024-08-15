
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import './tarjeta.css';
import {
   AreaComponente, 
   CompFooter, 
   ConoceMasComponente, 
   EnergiaComponente, 
   EqTemperaturaComponente, 
   FuerzaComponente, 
   HeaderComponente, 
   LongitudComponente, 
   MasaComponente, 
   PotenciaComponente, 
   PresionComponente, 
   TiempoComponente, 
   ViscocidadComponente, 
   VolumenComponente 
  } from './components';


function App() {

  return (
    <>

    <HeaderComponente/>

      <div className="tarjeta">

        <div className="tarjeta__caja-conversiones">
          <LongitudComponente/>
        </div>

        <div className="tarjeta__caja-conversiones">
          <AreaComponente />
        </div>

        <div className="tarjeta__caja-conversiones">
          <TiempoComponente/>
        </div>

        <div className="tarjeta__caja-conversiones">
          <VolumenComponente/>
        </div>

        <div className="tarjeta__caja-conversiones">
          <MasaComponente/>
        </div>

        <div className="tarjeta__caja-conversiones">
          <FuerzaComponente/>
        </div>

        <div className="tarjeta__caja-conversiones">
          <EnergiaComponente/>
        </div>

        <div className="tarjeta__caja-conversiones">
          <PresionComponente/>
        </div>

        <div className="tarjeta__caja-conversiones">
          <PotenciaComponente/>
        </div>

        <div className="tarjeta__caja-conversiones">
          <ViscocidadComponente/>
        </div>

        <div className="tarjeta__caja-conversiones">
          <EqTemperaturaComponente/>
        </div>

      <ConoceMasComponente/>

      </div>


      <CompFooter />

    </>
  )
}

export default App
