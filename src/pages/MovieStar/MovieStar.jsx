import React, { useEffect, useState } from 'react'
import { NavegadorMovil } from '../../Componentes/Navegador/NavegadorMovil'
import { PerfilPelicula } from '../../Componentes/PerfilPelicula/PerfilPelicula'
import { NavegadorEncabezado } from '../../Componentes/Navegador/NavegadorEncabezado'
import { HeaderMovil } from '../../Componentes/Header/HeaderMovil'
import { HeaderEscritorio } from '../../Componentes/Header/HeaderEscritorio'
import { obtenerEstrenoCartelera } from '../../services/servicesProvider'
import { obtenerPopulares } from '../../services/servicesProvider'
import '../pages.css'

export const MovieStar = () => {

  //Funcion para extraccion de cartelera
  const [dataCartelera, setDataCartelera] = useState([]);


  useEffect(() => {
    obtenerEstrenoCartelera()
      .then(cartelera => {
        setDataCartelera(cartelera);
        console.log('populares', cartelera)
      })
      .catch(error => {
        setError(error);
      })
  }, [])


  //Funcion extraccion de populares
  const [dataPopular, setDataPopular] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerPopulares()
      .then(popular => {
        setDataPopular(popular);
        console.log('viendoo', popular)
      })
      .catch(error => {
        setError(error);
      })
  }, [])



  return (
    <>
      <header className='header'>
        <HeaderMovil></HeaderMovil>
      </header>

      <main className='main'>
        <article className='seccion-peliculas seccion-peliculas-estreno'>
          <h2>ESTRENOS</h2>
          <section className='seccion-peliculas-estreno'>

          </section>
        </article>

        <article className='seccion-peliculas'>
          <h3>
            Seguir viendo
          </h3>
          <section className='seccion-peliculas-seguir-viendo'>

          </section>
        </article>

        <article className='seccion-peliculas '>
          <h2>Cartelera</h2>

          <section className='seccion-peliculas-cartelera'>
            {dataCartelera.results && dataCartelera.results.map((cartelera) => (
              <div className='item' >
                <PerfilPelicula
                  key={cartelera.id}
                  cartelera={cartelera.id}
                  tituloPelicula={cartelera.original_title}
                  posterPelicula={cartelera.poster_path}
                  fechaEstreno={cartelera.release_date}
           
                ></PerfilPelicula>
              </div>

            ))}

          </section>

        </article>
        <article className='seccion-peliculas '>
          <h2>Popular</h2>
          <section className='seccion-peliculas-popular'>
            {dataPopular.results && dataPopular.results.map((pelicula) => (

              <PerfilPelicula key={pelicula.id} idPelicula={pelicula.id} tituloPelicula={pelicula.original_title} posterPelicula={pelicula.poster_path} fechaEstreno={pelicula.release_date} ></PerfilPelicula>

            ))}
          </section>
        </article>

      </main>
      <footer className='footer-movil'>
        <NavegadorMovil></NavegadorMovil>
      </footer>





    </>
  )
}
