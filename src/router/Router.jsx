import {Routes, Route} from 'react-router-dom'
import { DetallePelicula } from '../pages/DetallePelicula/DetallePelicula'
import { Favoritos } from '../pages/Favoritos/Favoritos'
import { Ingreso } from '../pages/Ingreso/Ingreso'
import { MovieStar } from '../pages/MovieStar/MovieStar'
import { Categoria } from '../pages/Categoria/Categoria'
import { Reels } from '../pages/Reels/Reels'
import { Registro } from '../pages/Registro/Registro'
import { Peliculas } from '../pages/ComponenteTest/Peliculas/Peliculas'
import { ActoresReparto } from '../pages/ComponenteTest/ActoresReparto/ActoresReparto'
import { VideosPelicula } from '../pages/ComponenteTest/VideosPelicula/VideosPelicula'
import { PruebaDetalle } from '../pages/ComponenteTest/PruebaDetalle/PruebaDetalle'
export const Router = ()=>{
  return (

    <Routes>
      <Route path='/DetallePelicula' element={<DetallePelicula/>}/>
      <Route path='/Favoritos' element={<Favoritos/>}/>
      <Route path='/' element={<Ingreso/>}/>
      <Route path='/MovieStar' element={<MovieStar/>}/>
      <Route path='/Categoria' element={<Categoria/>}/>
      <Route path='/Reels' element={<Reels/>}/>
      <Route path='/Registro' element={<Registro/>}/>
      <Route path='/pruebas/Peliculas' element={<Peliculas/>}/>
      <Route path='/pruebas/Reparto' element={<ActoresReparto/>}/>
      <Route path='/pruebas/videosPelicula' element={<VideosPelicula/>}/>
      <Route path='/pruebas/pruebaDetalle' element={<PruebaDetalle/>}/>

      <Route path='*' element={<MovieStar/>}/>
    </Routes>
  )

}