import axios from "axios";

// api_key=eb2da5ddb145d6c6e950345fe3d8354c

/* https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2023-10-
01&primary_release_date.lte=2023-10-31&api_key=${apiKey}&language=es&inclu
de_image_language=es */

const dominio = 'https://api.themoviedb.org'
// https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2023-10-01&primary_release_date.lte=2023-10-31&api_key=eb2da5ddb145d6c6e950345fe3d8354c&language=es&include_image_language=es

export const obtenerEstrenoCartelera = async (pagina=1) => {
  const respuesta = await axios.get(`${dominio}/3/discover/movie?primary_release_date.gte=2023-10-01&primary_release_date.lte=2023-10-31&api_key=eb2da5ddb145d6c6e950345fe3d8354c&language=es&include_image_language=es&page=${pagina}`)
  return respuesta.data
}

export const obtenerPopulares = async (pagina=1) => {
  const respuesta = await axios.get(`${dominio}/3/discover/movie?sort_by=popularity.desc&page=1&api_key=eb2da5ddb145d6c6e950345fe3d8354c&language=es&include_image_language=es&page=${pagina}`)
  return respuesta.data
}

export const buscarPeliculasPorNombre = async (nombrePelicula,pagina=1) => {
  const respuesta = await axios.get(`${dominio}/3/search/movie?query=${nombrePelicula}&api_key=eb2da5ddb145d6c6e950345fe3d8354c&language=es&include_image_language=es&page=${pagina}`)
  return respuesta.data
}

//Actores?
export const obtenerRepartoDePelicula = async (idPelicula) => {
  const respuesta = await axios.get(`${dominio}/3/movie/${idPelicula}/credits?a=1&api_key=eb2da5ddb145d6c6e950345fe3d8354c&language=es&include_image_language=es`)
  return respuesta.data
  //overview: descripcion
  //title: titulo español
  //
}

export const obtenerDetallePelicula = async (idPelicula) => {
  const respuesta = await axios.get(`${dominio}/3/movie/${idPelicula}?a=1&api_key=eb2da5ddb145d6c6e950345fe3d8354c&language=es&include_image_language=es`)
  return respuesta.data
}