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
        className={`nav-link ${location.pathname === '/MovieStar' || iconActivo === 'MovieStar' ? 'activo' : ''}`}
        onMouseDown={() => cambiarIconoActivo('MovieStar')}
      >
        <img
          src="../public/Iconos/home.png"
          alt="Icono MovieStar"
          className={`icono-nav ${iconActivo === 'MovieStar' ? 'activo' : ''}`}
        />
      </Link>
      <Link
        to="/Ingreso"
        className={`nav-link ${location.pathname === '/Ingreso' || iconActivo === 'Ingreso' ? 'activo' : ''}`}
        onMouseDown={() => cambiarIconoActivo('Ingreso')}
      >
        <img
         src="../public/Iconos/search.png"
          alt="Icono Ingreso"
          className={`icono-nav ${iconActivo === 'Ingreso' ? 'activo' : ''}`}
        />
      </Link>
      <Link
        to="/Reels"
        className={`nav-link ${location.pathname === '/Reels' || iconActivo === 'Reels' ? 'activo' : ''}`}
        onMouseDown={() => cambiarIconoActivo('Reels')}
      >
        <img
          src="../public/Iconos/playlist.png"
          alt="Icono Reels"
          className={`icono-nav ${iconActivo === 'Reels' ? 'activo' : ''}`}
        />
      </Link>
      <Link
        to="/Favoritos"
        className={`nav-link ${location.pathname === '/Favoritos' || iconActivo === 'Favoritos' ? 'activo' : ''}`}
        onMouseDown={() => cambiarIconoActivo('Favoritos')}
      >
        <img
          src="../public/Iconos/hearth.png"
          alt="Icono Favoritos"
          className={`icono-nav ${iconActivo === 'Favoritos' ? 'activo' : ''}`}
        />
      </Link>
    </section>
  );
};
