import React from 'react'
import './HeaderMovil.css'
import { NavegadorEncabezado } from '../Navegador/NavegadorEncabezado'
import { useState, useEffect, useRef } from 'react'
import { Buscador } from '../../pages/ComponenteTest/Buscador/Buscador'
import { Link } from 'react-router-dom'

export const HeaderMovil = () => {

  // Extraccion de nombre de usuario
  const [dataFromLocalStorage, setDataFromLocalStorage] = useState('');
  useEffect(() => {
    const localStorageData = localStorage.getItem('email');
    if (localStorageData) {
      setDataFromLocalStorage(localStorageData);
    }
  }, []);

  // Evento click para mostrar buscador

  // const [mostrarBuscador, setMostrarBuscador] = useState(false);

  // const toggleBuscador = () => {
  //   setMostrarBuscador(!mostrarBuscador);
  // };

  const [mostrarBuscador, setMostrarBuscador] = useState(false);
  const buscadorRef = useRef(null);

  const toggleBuscador = () => {
    setMostrarBuscador(!mostrarBuscador);
  };

  const handleClickOutside = (event) => {
    if (buscadorRef.current && !buscadorRef.current.contains(event.target)) {
      setMostrarBuscador(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <>

      <header className='header-movil'>
        <section className='seccion-elementos logo'>
          <img src="../public/Iconos/logo.png" alt="MovieStar" />
        </section>

        <section className='seccion-icono-perfil'>
          <article className='article-buscador-perfil'>
            <section className='icono-search seccion-icono-escritorio'>
              {/* <img
            src='../public/Iconos/search.png'
            className='icono-search'
            onClick={toggleBuscador}>
          </img>

          {mostrarBuscador && <Buscador />} */}

              {!mostrarBuscador && (
                <img
                  src='../public/Iconos/search.png'
                  className='icono-playlist-escritorio'
                  onClick={toggleBuscador}
                />
              )}
              {mostrarBuscador && (
                <div ref={buscadorRef} className='buscador-escritorio'>
                  <Buscador />
                </div>
              )}
            </section>

            <section >
              <Link to='/Reels' >
                <img src="../public/Iconos/playlist.png" alt="" className='icono-playlist-escritorio' />
              </Link>

            </section>

          </article>
          <section className='seccion-elementos perfil'>
            <h3>{dataFromLocalStorage}</h3>
          </section>

        </section>

      </header>
      <nav className='seccion-elementos'>
        <NavegadorEncabezado></NavegadorEncabezado>
      </nav>
    </>

  )
}
