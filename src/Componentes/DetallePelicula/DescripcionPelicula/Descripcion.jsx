import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { obtenerDetallePelicula } from '../../../services/servicesProvider'
import './Descripcion.css'



export const Descripcion = ({ idPeli }) => {

  // let {idPeli} = useParams()
  idPeli = idPeli || 299054;
  const [datos, setDatos] = useState(null)
  let idPelicula = 299054
  useEffect(() => {
    obtenerDetallePelicula(idPeli)
      .then((respuesta) => {
        console.log(respuesta)
        setDatos(respuesta)
      })
  }, [])

  return (

    <div className='contenedorGeneralD' >
      {datos ?
        <article className="contenedor-descripcion">
          <h2 className='titulo-descripcion'>{datos.title}</h2>
          <section >
            <div className='generos-descripcion'>
              {datos.genres.map((genero, index) => (<li key={index} className='genero'> {genero.name}</li>))}
            </div>
            <p className='texto-descripcion' > {datos.overview}</p>
          </section>

        </article>
        : ""}
    </div>
  )
}