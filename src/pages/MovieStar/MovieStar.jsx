import React, { useEffect, useState } from 'react'
import { NavegadorMovil } from '../../Componentes/Navegador/NavegadorMovil'
import { PerfilPelicula } from '../../Componentes/PerfilPelicula/PerfilPelicula'
import { NavegadorEncabezado } from '../../Componentes/Navegador/NavegadorEncabezado'
import { HeaderMovil } from '../../Componentes/Header/HeaderMovil'
import { HeaderEscritorio } from '../../Componentes/Header/HeaderEscritorio'
import { obtenerEstrenoCartelera } from '../../services/servicesProvider'
import { obtenerPopulares } from '../../services/servicesProvider'
import { DeslizadorHorizontal } from '../../Componentes/DeslizadorHorizontal/Deslizadorhorizontal'
import { Estrenos } from '../../Componentes/Estrenos/Estrenos'

import '../pages.css'

export const MovieStar = () => {

  //Funcion para extraccion de cartelera

  const argumentosPopulares = [1, 2, 3, 4, 5, 6, 7, 8];
  const [dataPopulares, setDataPopulares] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const requests = argumentosPopulares.map((arg) => obtenerPopulares(arg));

  //   Promise.all(requests)
  //     .then((results) => {
  //       setDataPopulares(results);
  //       console.log('Resultados de obtenerPopulares:', results);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     });
  // }, [argumentosPopulares]);

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


  // Funcion extraccion de populares
  const [dataPopular, setDataPopular] = useState([]);
  // const [error, setError] = useState(null);

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
        <article className='seccion-peliculas  '>
          <section className='seccion-peliculas-estreno'>
            <Estrenos></Estrenos>
            <h3 className='seccion-peliculas-h2'>
              Estreno
            </h3>
          </section>
        </article>

        <article className='seccion-peliculas'>
          <h3 className='seccion-peliculas-h2'>
            Seguir viendo
          </h3>
          <section className='seccion-deslizador'>
            <DeslizadorHorizontal peticionApi={obtenerEstrenoCartelera(2)} ></DeslizadorHorizontal>

          </section>
        </article>

        <article className='seccion-peliculas '> {/*container*/}
          <h2 className='seccion-peliculas-h2'>Cartelera</h2>
          <section className='seccion-deslizador'> {/*swipercontainer*/}
            <DeslizadorHorizontal peticionApi={obtenerEstrenoCartelera(3)} ></DeslizadorHorizontal>
          </section>

        </article>

        <article className='seccion-peliculas'>
          <h2 className='seccion-peliculas-h2'>Popular</h2>
          <section className='seccion-peliculas-popular'>
            {/* {dataPopulares.flatMap((data) => {
            return data.results.map((pelicula) => (
              <PerfilPelicula
                key={pelicula.id}
                idPelicula={pelicula.id}
                tituloPelicula={pelicula.original_title}
                posterPelicula={pelicula.poster_path}
                fechaEstreno={pelicula.release_date}
              ></PerfilPelicula>
            ));
          })} */}

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
