import './FormularioIngreso.css';
import Input from '../Input/Input';

const FormularioIngreso = ({ setEmail, setPassword, errorMessage, clickIngreso, isActive, email, password }) => {

    return (
        <div className="formIngreso-contenedor">

            <form className='formIngreso-form' >
                <p className='ingreso-titulo'> Iniciar sesión</p>
                <Input
                    textLabel='Correo'
                    onChange={setEmail}
                    textoPlaceholder='ejemplo@ejemplo.com'
                    typeInp='text'
                    value={email}
                    textId='email'
                />

                <Input
                    textLabel='Contraseña'
                    onChange={setPassword}
                    textoPlaceholder='**********'
                    typeInp='password'
                    value={password}
                    textId='password'
                />

                <p id="messageError" data-testid="message-Error" className={`messageError ${isActive && 'activate'}`} >{errorMessage}</p>
                <button className="btn-ingresar" onClick={clickIngreso} data-testid='button-login' > Ingresar</button>
            </form>
        </div>

    );
};

export default FormularioIngreso;