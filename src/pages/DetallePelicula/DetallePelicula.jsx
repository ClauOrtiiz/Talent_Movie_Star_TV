import Reparto from "../../Componentes/DetallePelicula/Reparto/Reparto"
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { obtenerVideosPelicula } from '../../services/servicesProvider'



 
export const DetallePelicula = () => {
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
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${elemento.key}?si=aVicG-IXOHeD7NaU`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          
        )

        : ""}
          <Reparto></Reparto>
    </div>
  )
 
}




















  // Clave de API de TMDb
  // const apiKey = 'https://api.themoviedb.org/3/movie/12345?api_key= 37944a78515eb243bff8628bb388d390.'; // Reemplaza con tu clave de API válida

  // // ID de la película que deseas obtener (reemplázalo con un ID real)
  // const movieId = '912916'; // Reemplaza '12345' con el ID de la película que deseas obtener

  // // URL base de la API de TMDb
  // const apiUrl = 'https://api.themoviedb.org/3/';

  // // Estado para almacenar la información de la película
  // const [pelicula, setPelicula] = useState(null);
  // const [favorito, setFavorito] = useState(false);

  // // Función para agregar/quitar la película de favoritos
  // const handleAgregarFavorito = () => {
  //   setFavorito(!favorito);
  // };

  // Realizar la solicitud a la API cuando el componente se monte
  // useEffect(() => {
  //   // Construye la URL completa para obtener detalles de la película
  //   const movieUrl = `${apiUrl}movie/${movieId}?api_key=${apiKey}`;

    // Realiza la solicitud a la API
  //   fetch(movieUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPelicula(data); // Asignar los datos de la película a la variable de estado
  //     })
  //     .catch((error) => {
  //       console.error('Error al obtener los datos de la película', error);
  //     });
  // }, [apiKey, apiUrl, movieId]);