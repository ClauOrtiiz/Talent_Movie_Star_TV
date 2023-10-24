import React from 'react'
import { useEffect } from 'react'
import { buscarPeliculasPorNombre, obtenerEstrenoCartelera, obtenerPopulares } from  '../../../services/servicesProvider'
import { obtenerPeliculasSimilares } from '../../../services/servicesProvider'
import { useState } from 'react'


export const Peliculas = () => {

  const [datos, setDatos] = useState(null)
  let pagina = 2
  let nombrePelicula = "casa"
  let idPelicula=8856
  useEffect(() => {
    obtenerPeliculasSimilares(idPelicula )
      .then((respuesta) => {
        console.log(respuesta)
        setDatos(respuesta.results)
      })
  }, [])

  return (

    <div >
      {datos ?
        datos.map((elemento, index) =>
          <div key={index}>
            <h2>titulo: {elemento.title}</h2>
            <p>idPelicula: {elemento.id}</p>
            <p>descripcion: {elemento.overview}</p>
            <p>fecha: {elemento.release_date}</p>
            <p>estrellitas: {elemento.vote_average}</p>
            <img src={'https://image.tmdb.org/t/p/original' + elemento.poster_path} alt="" width={'150px'} />
            <img src={'https://image.tmdb.org/t/p/original' + elemento.backdrop_path} alt="" width={'150px'} />
          </div>
        )

        : ""}
    </div>
  )
}