import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { obtenerVideosPelicula } from '../../../services/servicesProvider'

export const VideosPelicula = () => {

  const [datos, setDatos] = useState(null)
  let idPelicula = 298618
  useEffect(() => {
    obtenerVideosPelicula(idPelicula)
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
            <h2>Nombre: {elemento.name}</h2>
            <p>Tipo: {elemento.type}</p>
            <p>id video Youtube: {elemento.key}</p>
           
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${elemento.key}?si=aVicG-IXOHeD7NaU`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        )

        : ""}
    </div>
  )
}