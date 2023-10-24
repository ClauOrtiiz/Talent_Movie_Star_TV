import {Routes, Route} from 'react-router-dom'
import { DetallePelicula } from '../pages/DetallePelicula/DetallePelicula'
import { Favoritos } from '../pages/Favoritos/Favoritos'
import { Ingreso } from '../pages/Ingreso/Ingreso'
import { MovieStar } from '../pages/MovieStar/MovieStar'
import { Reels } from '../pages/Reels/Reels'
import { Registro } from '../pages/Registro/Registro'
import { Peliculas } from '../pages/ComponenteTest/Peliculas/Peliculas'
export const Router = ()=>{
  return (

    <Routes>
      <Route path='/DetallePelicula' element={<DetallePelicula/>}/>
      <Route path='/Favoritos' element={<Favoritos/>}/>
      <Route path='/Ingreso' element={<Ingreso/>}/>
      <Route path='/MovieStar' element={<MovieStar/>}/>
      <Route path='/Reels' element={<Reels/>}/>
      <Route path='/Registro' element={<Registro/>}/>
      <Route path='/pruebas/Peliculas' element={<Peliculas/>}/>
      <Route path='*' element={<MovieStar/>}/>
    </Routes>
  )

}