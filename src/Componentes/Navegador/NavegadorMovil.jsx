import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

  return (
    <section className="section-icono-nav">
      <Link
        to="/MovieStar"
        onClick={() => cambiarIconoActivo('MovieStar')}
      >
        <img
          src="../public/Iconos/home.png"
          alt="Icono MovieStar"
        />
      </Link>
      <Link


        to="/pruebas/Peliculas"
        className='icon-nav'
        onClick={() => cambiarIconoActivo('Ingreso')}
      >
        <img
          src="../public/Iconos/search.png"
          alt="Icono Ingreso"
          className='icon-nav'
        />
      </Link>
      <Link
        to="/Reels"
        className='icon-nav'
        onClick={() => cambiarIconoActivo('Reels')}
      >
        <img
          src="../public/Iconos/playlist.png"
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
          src="../public/Iconos/hearth.png"
          alt="Icono Favoritos"
          className='icon-nav'
        />
      </Link>
    </section>
  );
};
