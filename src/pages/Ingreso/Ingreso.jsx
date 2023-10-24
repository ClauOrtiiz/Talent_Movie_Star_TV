import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./Ingreso.css"
import Logo from '../../Componentes/Ingreso/logo/logo';
import FormularioIngreso from '../../Componentes/Ingreso/Formulario/FormularioIngreso';


export const Ingreso = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');
    // const [isActive, setIsActive] = useState(false);

    //navegar a Registro
    const clickRegistrarse = () => {
        navigate('/Registro')
    }

    const clickIngreso = () => {
        //Aqui debe ir la funcion de Identificación
        navigate('/MovieStar')
    }
    return (

        <section className='ingreso-contenedor'>

            <Logo></Logo>
            <FormularioIngreso
                // isActive={isActive}
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                // errorMessage={errorMessage}
                clickLogin={clickIngreso} ></FormularioIngreso>

            <footer className='footer-btn' >
                <p className='footer-texto'>¿No tienes una cuenta?</p>
                <button className="footerBtn-registro" onClick={clickRegistrarse} > Registrate </button>
            </footer>
        </section>

    );
};

