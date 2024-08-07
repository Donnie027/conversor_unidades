import Select from 'react-select'
import './selectComponente.css'


export const SelectComponente = ({ opciones, seleccionOpcion, onChangeOption }) => {

  const manejarCambio = (seleccionado) => {
    onChangeOption(seleccionado ? seleccionado : null);
  }  

  return (
    
    <>
        <div className="cajaSelectPrincipal">
            <Select
              options={opciones}
              value={opciones.find(opcion => opcion.value === seleccionOpcion)}
              onChange={manejarCambio}
              styles={customStyles}
            />
        </div>
    </>

  )

}


const customStyles = {
  control: (provided, state) => ({
    ...provided,
    fontFamily: 'Roboto, sans-serif',
    background: '#2b2a33',
    border: '1px solid #3B3D42',
    borderRadius: '4px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#555' : '#333',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '19px',
    '&:hover': {
      backgroundColor: '#444'
    }
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: '#aaa',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '19px',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#fff',
    fontFamily: 'Roboto, sans-serif', 
    fontWeight: '700',
    fontSize: '21px',
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: '#333',
    border: '1px solid #444',
  }),
  input: (provided, state) => ({
    ...provided,
    color: '#fff',
  }),
  inputContainer: (provided, state) => ({
    ...provided,
    color: '#fff',
  }),
};
