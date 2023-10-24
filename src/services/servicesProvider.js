import * as ServicesTMDB from './apiTheMovieDB/services.js'

export const obtenerEstrenoCartelera =(pagina)=> ServicesTMDB.obtenerEstrenoCartelera(pagina)
export const obtenerPopulares = (pagina) =>ServicesTMDB.obtenerPopulares(pagina)
export const buscarPeliculasPorNombre = (nombrePelicula,pagina)=>ServicesTMDB.buscarPeliculasPorNombre(nombrePelicula,pagina)

export const obtenerRepartoDePelicula = (idPelicula) =>ServicesTMDB.obtenerRepartoDePelicula(idPelicula)

export const obtenerDetallePelicula = (idPelicula) =>ServicesTMDB.obtenerDetallePelicula(idPelicula)
export const obtenerVideosPelicula =(idPelicula) => ServicesTMDB.obtenerVideosPelicula(idPelicula)