import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import "./Ingreso.css"
import Logo from '../../Componentes/Ingreso/logo/logo';
import FormularioRegistro from '../../Componentes/Ingreso/Formulario/FormularioRegistro';


export const Registro = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');
    // const [isActive, setIsActive] = useState(false);

    //navegar a Registro
    const clickIngreso = () => {
        navigate('/Ingreso')
    }

    const clickRegistro = () => {
        //Aqui debe ir la funcion de Crear cuenta
        navigate('/MovieStar')
    }
    return (
        <section className='ingreso-contenedor'>
            
            <Logo></Logo>
            <FormularioRegistro
                // isActive={isActive}
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                // errorMessage={errorMessage}
                clickLogin={clickRegistro} ></FormularioRegistro>

            <footer className='footer-btn' >
                <p className='footer-texto'>¿Ya tienes una cuenta?</p>
                <button className="footerBtn-registro" onClick={clickIngreso} > Iniciar Sesión </button>
            </footer>
        </section>
    );
};

