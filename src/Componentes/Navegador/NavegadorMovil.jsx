import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Buscador } from '../../pages/ComponenteTest/Buscador/Buscador';
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

  return (
    <section className="section-icono-nav">
      <Link
        to="/MovieStar"
        onClick={() => cambiarIconoActivo('MovieStar')}
      >
        <img
          src="../public/Iconos/home2.png"
          alt="Icono MovieStar"
          className='icon-nav icon-home'
        />
      </Link>
      <Link
        to="/pruebas/Peliculas"
        className='icon-nav'
        onClick={() => cambiarIconoActivo('Ingreso')}
      >
        <img
          src="../public/Iconos/search1.png"
          alt="Icono Ingreso"
          className='icon-nav'
          onClick={toggleBuscador}
        />

      </Link>
      <Link
        to="/Reels"
        className='icon-nav'
        onClick={() => cambiarIconoActivo('Reels')}
      >
        <img
          src="../public/Iconos/playlist1.png"
          alt="Icono Reels"
          className='icon-nav'
        />
      </Link>
      <Link
        to="/Favoritos"
        className={`nav-link ${location.pathname === '/Favoritos' || iconActivo === 'Favoritos' ? 'activo' : ''}`}
        onClick={() => cambiarIconoActivo('Favoritos')}
      >
        <img
          src="../public/Iconos/hearth1.png"
          alt="Icono Favoritos"
          className='icon-nav'
        />
      </Link>
    </section>
  );
};
