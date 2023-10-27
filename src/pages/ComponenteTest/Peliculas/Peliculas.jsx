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
import { NavegadorMovil } from '../../../Componentes/Navegador/NavegadorMovil'
import  './pelicula.css'

export const Peliculas = () => {

  // const [datos, setDatos] = useState(null)
  // let pagina = 1
  // let nombrePelicula = "casa"
  // let idPelicula=8856
  // let idGenero=12
  // useEffect(() => {
  //   buscarPeliculasPorNombre(nombrePelicula)
  //     .then((respuesta) => {
  //       console.log(respuesta)
  //       setDatos(respuesta.results)
  //     })
  // }, [])

  return (

    <body className='body'>
      <header className='header'>
        {/* <Link to={"/Reels"} className="block px-4 py-2 hover:bg-gray-100 ">Reel </Link> */}
      <Buscador/>
      </header>
      <footer className='footer-movil'>
        <NavegadorMovil></NavegadorMovil>
      </footer>

      

    </body>
  )
}