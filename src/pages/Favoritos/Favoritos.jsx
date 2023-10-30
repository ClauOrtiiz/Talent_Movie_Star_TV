import React, { useState, useEffect } from 'react';
import { HeaderMovil } from '../../Componentes/Header/HeaderMovil'
import { PerfilPelicula } from '../../Componentes/PerfilPelicula/PerfilPelicula';
import { NavegadorMovil } from '../../Componentes/Navegador/NavegadorMovil';
import './Favoritos.css'

export const Favoritos = () => {

  const [peliculasFavoritas, setPeliculasFavoritas] = useState(JSON.parse(localStorage.getItem('favoritos')) ?? []);

  const escucharCheckFavorito = () => {
    setTimeout(() => {
      setPeliculasFavoritas(JSON.parse(localStorage.getItem('favoritos')) ?? []);
    }, 1)

  }

  return (
    <div >
      <header className='header'>
        <HeaderMovil></HeaderMovil>
      </header>

      <article className='seccion-peliculas-favorito'>
        <h2 className='titulo-peliculasFavorito'>Mis favoritos</h2>
        <section className='seccion-peliculas-popular'>
          {peliculasFavoritas.map(pelicula => (
            <PerfilPelicula
              key={pelicula.idPelicula}
              idPelicula={pelicula.idPelicula}
              escucharCheckFavorito={escucharCheckFavorito}
              tituloPelicula={pelicula.tituloPelicula}
              posterPelicula={pelicula.urlImagen}
              fechaEstreno={pelicula.fechaEstreno} >

            </PerfilPelicula>
          ))}
        </section>
      </article>
      <footer className='footer-movil'>
        <NavegadorMovil></NavegadorMovil>
      </footer>

    </div>
  )
}
