import './FormularioIngreso.css';
import Input from '../Input/Input';

const FormularioIngreso = ({ setEmail, setPassword, errorMessage, clickIngreso, isActive, email, password }) => {

    return (
        <div className="formIngreso-contenedor">

            <form onSubmit={(e) => e.preventDefault()} className='formIngreso-form' >
                <Input
                    textLabel='Correo'
                    onChange={setEmail}
                    textoPlaceholder='Email'
                    typeInp='text'
                    value={email}
                    textId='email'
                     
                />
                <button className="btn-ingresar" onClick={clickIngreso} data-testid='button-login' > Ingresar</button>
            </form>
        </div>

    );
};

export default FormularioIngreso;