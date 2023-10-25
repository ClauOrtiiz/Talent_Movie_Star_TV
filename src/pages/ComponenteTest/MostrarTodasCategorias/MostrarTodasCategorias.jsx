import React, { useEffect, useState } from 'react'
import { obtenerPeliculasPorGenero } from '../../../services/servicesProvider'
const generos = [
  {
    "id": 16,
    "name": "Animación"
  },
  {
    "id": 28,
    "name": "Acción"
  },
  {
    "id": 14,
    "name": "Fantasía"
  },
  {
    "id": 80,
    "name": "Crimen"
  },
  {
    "id": 53,
    "name": "Suspense"
  },
  {
    "id": 27,
    "name": "Terror"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 99,
    "name": "Documental"
  },
  {
    "id": 12,
    "name": "Aventura"
  },
  {
    "id": 10751,
    "name": "Familia"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 35,
    "name": "Comedia"
  },
  {
    "id": 36,
    "name": "Historia"
  },
  {
    "id": 10752,
    "name": "Bélica"
  },
  {
    "id": 10402,
    "name": "Música"
  },
  {
    "id": 878,
    "name": "Ciencia ficción"
  },
  {
    "id": 9648,
    "name": "Misterio"
  },
  {
    "id": 10770,
    "name": "Película de TV"
  },
  {
    "id": 37,
    "name": "Western"
  }
]
export const MostrarTodasCategorias = () => {

  const [todasPeliculas, setTodasPeliculas] = useState(null);

  useEffect(() => {
    const fetchPeliculasPorGenero = async () => {
      // Creamos un arreglo para almacenar los resultados
      const peliculasPorGenero = [];

      for (const genero of generos) {
        try {
          // Hacemos la petición para obtener películas por género
          const respuesta = await obtenerPeliculasPorGenero(genero.id);
          const peliculas = respuesta.results;

          // Guardamos el resultado en el atributo 'data' del objeto de género
          genero.data = peliculas;
          peliculasPorGenero.push(genero);
        } catch (error) {
          console.error(`Error al obtener películas para el género ${genero.name}: ${error}`);
        }
      }

      // Seteamos el estado con el arreglo de géneros actualizado
      setTodasPeliculas(peliculasPorGenero);
    };

    fetchPeliculasPorGenero();
  }, []);

  // Muestra el resultado en la consola cuando termine de cargar
  useEffect(() => {
    console.log(todasPeliculas);
  }, [todasPeliculas]);

  return (
    <>

      {!todasPeliculas
        ? ""
        : todasPeliculas.map((elemento, index) => (
          <div key={index} >
            <h2>{elemento.name}</h2>
            <div style={{ display: 'flex' }}>

              {elemento.data.map((subElemento, index2) => (
                <div key={index2} >
                  <h4>{subElemento.title}</h4>
                  <img src={'https://image.tmdb.org/t/p/original' + subElemento.backdrop_path} alt="" width={'150px'} key={subElemento.id} />
                </div>
              ))}
            </div>
          </div>

        ))}
    </>
  )
}
