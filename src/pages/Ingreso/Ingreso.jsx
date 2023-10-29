import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./Ingreso.css"
import Logo from '../../Componentes/Ingreso/logo/logo';
import FormularioIngreso from '../../Componentes/Ingreso/Formulario/FormularioIngreso';


export const Ingreso = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //navegar a Home
    const clickIngreso = () => {
        localStorage.setItem('email', email);
        console.log('paso');
        navigate('/MovieStar')

    }
    return (
        <article className='ingreso-contenedor'>
            <img className='ingreso-contenedor-imagen' src="../public/fondos/fondo2.jpg" alt="" />
            <section className='ingreso-contenedor-formulario'  >
                <Logo className='item-ingreso logo-ingreso' ></Logo>
                <FormularioIngreso
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    clickIngreso={clickIngreso}
                    className='item-ingreso formulario'

                ></FormularioIngreso>
            </section>


        </article>

    );
};

