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
        <section className='ingreso-contenedor'>
            <Logo></Logo>
            <FormularioIngreso
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                clickIngreso={clickIngreso} ></FormularioIngreso>
        </section>

    );
};

