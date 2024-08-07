import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css'
import './tarjeta.css';
import { CompFooter, LongitudComponente } from './components';


function App() {

  return (
    <>
      <h1>Conversor de Unidades</h1>
      <h3>Proyecto de <span>Física</span></h3>

      <div className="tarjeta">

        <div className="tarjeta__caja-conversiones">
          <LongitudComponente/>
        </div>

        <div className="tarjeta__caja-conversiones">
          <LongitudComponente/>
        </div>


      </div>

      <CompFooter />

    </>
  )
}

export default App
