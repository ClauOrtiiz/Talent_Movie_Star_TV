import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import "./Ingreso.css"
import Logo from '../../Componentes/Ingreso/logo/logo';


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
        navigate('/MovieStar')
    }
    return (
        <section className='ingreso-contenedor'>
            
            <Logo></Logo>
            
            <footer className='footer-btn' >
                <p className='footer-texto'>¿Ya tienes una cuenta?</p>
                <button className="footerBtn-registro" onClick={clickIngreso} > Iniciar Sesión </button>
            </footer>
        </section>
    );
};

