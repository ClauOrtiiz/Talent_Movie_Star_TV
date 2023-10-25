import axios from "axios";

const api_key='eb2da5ddb145d6c6e950345fe3d8354c'

const dominio = 'https://api.themoviedb.org'

// Ejemplo
// https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2023-10-01&primary_release_date.lte=2023-10-31&api_key=eb2da5ddb145d6c6e950345fe3d8354c&language=es&include_image_language=es&page=1
export const obtenerEstrenoCartelera = async (pagina=1) => {
  const respuesta = await axios.get(`${dominio}/3/discover/movie?primary_release_date.gte=2023-10-01&primary_release_date.lte=2023-10-31&api_key=${api_key}&language=es&include_image_language=es&page=${pagina}`)
  return respuesta.data
}

// Ejemplo
// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&api_key=eb2da5ddb145d6c6e950345fe3d8354c&language=es&include_image_language=es&page=1
export const obtenerPopulares = async (pagina=1) => {
  const respuesta = await axios.get(`${dominio}/3/discover/movie?sort_by=popularity.desc&page=1&api_key=${api_key}&language=es&include_image_language=es&page=${pagina}`)
  return respuesta.data
}


// Ejemplo
// https://api.themoviedb.org/3/movie/top_rated?&api_key=eb2da5ddb145d6c6e950345fe3d8354c&language=es&page=1
export const obtenerRankeadas = async (pagina=1) => {
  const respuesta = await axios.get(`${dominio}/3/movie/top_rated?&api_key=${api_key}&language=es&page=${pagina}`)
  return respuesta.data
}

// Ejemplo
// https://api.themoviedb.org/3/search/movie?query=flash&api_key=eb2da5ddb145d6c6e950345fe3d8354c&language=es&include_image_language=es&page=1
export const buscarPeliculasPorNombre = async (nombrePelicula,pagina=1) => {
  const respuesta = await axios.get(`${dominio}/3/search/movie?query=${nombrePelicula}&api_key=${api_key}&language=es&include_image_language=es&page=${pagina}`)
  return respuesta.data
}

//Ejemplo
// https://api.themoviedb.org/3/movie/315162/credits?a=1&api_key=eb2da5ddb145d6c6e950345fe3d8354c&language=es&include_image_language=es
export const obtenerRepartoDePelicula = async (idPelicula) => {
  const respuesta = await axios.get(`${dominio}/3/movie/${idPelicula}/credits?a=1&api_key=${api_key}&language=es&include_image_language=es`)
  return respuesta.data
  //overview: descripcion
  //title: titulo español
  //
}

// Ejemplo
// https://api.themoviedb.org/3/movie/315162?a=1&api_key=eb2da5ddb145d6c6e950345fe3d8354c&language=es&include_image_language=es
export const obtenerDetallePelicula = async (idPelicula) => {
  const respuesta = await axios.get(`${dominio}/3/movie/${idPelicula}?a=1&api_key=${api_key}&language=es&include_image_language=es`)
  return respuesta.data
}

//Ejemplo
// https://api.themoviedb.org/3/movie/315162/videos?a=1&api_key=eb2da5ddb145d6c6e950345fe3d8354c&language=es&include_image_language=es
export const obtenerVideosPelicula = async (idPelicula) => {
  const respuesta = await axios.get(`${dominio}/3/movie/${idPelicula}/videos?a=1&api_key=${api_key}&language=es&include_image_language=es`)
  return respuesta.data
}

//Ejemplo
// https://api.themoviedb.org/3/movie/315162/similar?a=1&api_key=eb2da5ddb145d6c6e950345fe3d8354c&language=es&include_image_language=es
export const obtenerPeliculasSimilares = async (idPelicula) => {
  const respuesta = await axios.get(`${dominio}/3/movie/${idPelicula}/similar?api_key=${api_key}&language=es`)
  return respuesta.data
}

//Ejemplo
// https://api.themoviedb.org/3/movie/315162/recommendations?a=1&api_key=eb2da5ddb145d6c6e950345fe3d8354c&language=es&include_image_language=es
export const obtenerPeliculasRecomendadas = async (idPelicula) => {
  const respuesta = await axios.get(`${dominio}/3/movie/${idPelicula}/recommendations?api_key=${api_key}&language=es`)
  return respuesta.data
}

//Ejemplo
// https://api.themoviedb.org/3/discover/movie?language=es&with_genres=16&api_key=eb2da5ddb145d6c6e950345fe3d8354c&page=2
export const obtenerPeliculasPorGenero = async (idGenero,page) => {
  const respuesta = await axios.get(`${dominio}/3/discover/movie?language=es&with_genres=${idGenero}&api_key=${api_key}&page=${page}`)
  return respuesta.data
}