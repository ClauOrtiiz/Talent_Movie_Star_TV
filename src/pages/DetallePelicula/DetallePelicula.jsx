<<<<<<< HEAD
// import React from 'react';
import './Detalles.css';
import React, { useState, useEffect } from 'react';
=======
import Reparto from "../../Componentes/DetallePelicula/Reparto/Reparto"
>>>>>>> 74e1bc8eacdda3b2e2dbeecbaed1c55350d85d6a

export const DetallePelicula = () => {
  // Clave de API de TMDb
  const apiKey = 'https://api.themoviedb.org/3/movie/12345?api_key= 37944a78515eb243bff8628bb388d390.'; // Reemplaza con tu clave de API válida

  // ID de la película que deseas obtener (reemplázalo con un ID real)
  const movieId = '912916'; // Reemplaza '12345' con el ID de la película que deseas obtener

  // URL base de la API de TMDb
  const apiUrl = 'https://api.themoviedb.org/3/';

  // Estado para almacenar la información de la película
  const [pelicula, setPelicula] = useState(null);
  const [favorito, setFavorito] = useState(false);

  // Función para agregar/quitar la película de favoritos
  const handleAgregarFavorito = () => {
    setFavorito(!favorito);
  };

  // Realizar la solicitud a la API cuando el componente se monte
  useEffect(() => {
    // Construye la URL completa para obtener detalles de la película
    const movieUrl = `${apiUrl}movie/${movieId}?api_key=${apiKey}`;

    // Realiza la solicitud a la API
    fetch(movieUrl)
      .then((response) => response.json())
      .then((data) => {
        setPelicula(data); // Asignar los datos de la película a la variable de estado
      })
      .catch((error) => {
        console.error('Error al obtener los datos de la película', error);
      });
  }, [apiKey, apiUrl, movieId]);

  return (
<<<<<<< HEAD
    <div className="detalle-pelicula">
      {pelicula ? ( // Verificar si se han cargado los datos de la película
        <>
          <h1 className="titulo">{pelicula.title}</h1>
          <h2>Fecha de Estreno: {pelicula.release_date}</h2>
          <button onClick={handleAgregarFavorito}>
            {favorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          </button>
        </>
      ) : (
        <p>Cargando la información de la película...</p>
      )}

      {/* Creación de elementos de ejemplo */}
      <button>Inicio</button>
      <button>Categorías</button>
    
    </div>
  );
};
=======
    <div>
      
      <Reparto></Reparto>

    </div>
  )
}
>>>>>>> 74e1bc8eacdda3b2e2dbeecbaed1c55350d85d6a
