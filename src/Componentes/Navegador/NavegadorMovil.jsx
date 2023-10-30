import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Buscador } from '../../pages/ComponenteTest/Buscador/Buscador';
import home2 from '../../assets/home2.png'
import search1 from '../../assets/search1.png'
import playlist1 from '../../assets/playlist1.png'
// import hearth1 from '../../../public/Iconos/hearth1.png'
// import chatBot from '../../../public/Iconos/chatBot.png'
import { ModalChatBot } from '../Modal/ModalChatBot';
import { ModalChatBotIcon } from '../Modal/ModalChatBotIcon';
import './navegador.css';


export const NavegadorMovil = () => {
  const location = useLocation();

  const [iconActivo, setIconActivo] = useState(null);

  // Función para cambiar el icono activo
  const cambiarIconoActivo = (icono) => {
    if (iconActivo === icono) {
      setIconActivo(null);
    } else {
      setIconActivo(icono);
    }
  };

  //Función para el buscador

  const [mostrarBuscador, setMostrarBuscador] = useState(false);
  const toggleBuscador = () => {
    setMostrarBuscador(!mostrarBuscador);
  };


  // //Funcion para modal
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  // const abrirModal = () => {
  //   setModalIsOpen(true);
  // };

  // const cerrarModal = () => {
  //   setModalIsOpen(false);
  // };


  return (
    <section className="section-icono-nav">
      <Link
        to="/MovieStar"
        onClick={() => cambiarIconoActivo('MovieStar')}
      >
        <div className='container-icon' >

          <img
            src={home2}
            alt="Icono MovieStar"

          />


        </div>
      </Link>
      <Link
        to="/pruebas/Peliculas"
        onClick={() => cambiarIconoActivo('Ingreso')}
      >
        <div className='container-icon'>

          <img
            src={search1}
            alt="Icono Ingreso"
            onClick={toggleBuscador}
          />


        </div>
      </Link>
      <Link
        to="/Reels"
        onClick={() => cambiarIconoActivo('Reels')}
      >
        <div className='container-icon' >

          <img
            src={playlist1}
            alt="Icono Reels"
          />

        </div>
      </Link>
      {/* <Link
        to="/Favoritos"
        className={`nav-link ${location.pathname === '/Favoritos' || iconActivo === 'Favoritos' ? 'activo' : ''}`}
        onClick={() => cambiarIconoActivo('Favoritos')}
      >
        <img
          src={hearth1}
          alt="Icono Favoritos"
          className='icon-nav'
        />
      </Link> */}
      {/* <img
          src={chatBot}
          alt="Icono Favoritos"
          className='icon-nav'
          onClick={abrirModal}
        />
        <ModalChatBot isOpen={modalIsOpen} closeModal={cerrarModal}></ModalChatBot> */}
      <Link>
        <div className='container-icon'>
          <ModalChatBotIcon></ModalChatBotIcon>
        </div>
      </Link>



    </section>
  );
};
