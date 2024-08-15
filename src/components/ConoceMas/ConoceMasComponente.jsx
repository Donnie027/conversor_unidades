
import '../ConoceMas/conoceMasComponente.css';
import { ModalVentana } from '../ModalVentana/ModalVentana';
import { TecnologiasComponente } from './TecnologiasComponente';
import { VisitaRepositorioComponente } from './VisitaRepositorioComponente';

export const ConoceMasComponente = () => {

  return (
    <>
      <div className="cajaContenedorLetrero">
        <div className="letreroConoceMas">
          <div className="imgParaLetrero"></div>
          <div className="imgLetreroResponsivo"></div>

          <ModalVentana
            trigger={
              <div className="cajaConoceMas">
                <span>
                  Tecnologías Usadas <i className="bi bi-hammer iconoConoceMas"></i>
                </span>
              </div>
            }
          >
            {<TecnologiasComponente/>}
          </ModalVentana>

          <ModalVentana
            trigger={
              <div className="cajaConoceMas">
                <span>
                  Visitar el Repositorio <i className="bi bi-github iconoConoceMas"></i>
                </span>
              </div>
            }
          >
            {<VisitaRepositorioComponente/>}
          </ModalVentana>

        </div>
      </div>
    </>
  );
};
