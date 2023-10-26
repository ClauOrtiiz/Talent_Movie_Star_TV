import React from 'react'
import { useEffect } from 'react'
//(pagina)
import {  obtenerEstrenoCartelera, obtenerPopulares, obtenerRankeadas } from  '../../../services/servicesProvider'
//(nombrePelicula,pagina)
import { buscarPeliculasPorNombre } from '../../../services/servicesProvider'
//(idPelicula)
import { obtenerPeliculasSimilares,obtenerPeliculasRecomendadas } from '../../../services/servicesProvider'
//(idGenero,pagina)
import { obtenerPeliculasPorGenero } from '../../../services/servicesProvider'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Buscador } from '../Buscador/Buscador'


export const Peliculas = () => {

  const [datos, setDatos] = useState(null)
  let pagina = 1
  let nombrePelicula = "casa"
  let idPelicula=8856
  let idGenero=12
  useEffect(() => {
    buscarPeliculasPorNombre(nombrePelicula)
      .then((respuesta) => {
        console.log(respuesta)
        setDatos(respuesta.results)
      })
  }, [])

  return (

    <div >
      <Link to={"/Reels"} className="block px-4 py-2 hover:bg-gray-100 ">Reel </Link>
      <Buscador/>
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