import React from 'react'
import { useState, useEffect } from 'react'
import { HeaderMovil } from '../../Componentes/Header/HeaderMovil'
// import { DeslizadorHorizontal } from '../../Componentes/DeslizadorHorizontal/DeslizadorHorizontal'
import { obtenerEstrenoCartelera } from '../../services/servicesProvider'
import { obtenerPeliculasPorGenero } from '../../services/servicesProvider'
import { obtenerDetallePelicula, obtenerRepartoDePelicula } from '../../services/servicesProvider'
 import { obtenerVideosPelicula } from '../../services/servicesProvider'
import { Descripcion } from '../../Componentes/DetallePelicula/DescripcionPelicula/Descripcion'
import { DetallePelicula } from '../DetallePelicula/DetallePelicula'
import { Buscador } from '../ComponenteTest/Buscador/Buscador'
// import { NuevaPrueba } from '../../Componentes/NuevaPrueba/Deslizadorhorizontal'

export const Favoritos = () => {

  const [datos, setDatos] = useState(null)

  const idPelicula = 503616


  useEffect(() => {
    obtenerDetallePelicula(idPelicula)
      .then((data) => {
        setDatos(data);
        console.log('detalle de pelicula', data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    obtenerVideosPelicula(idPelicula)
      .then((data) => {
        setDatos(data);
        console.log('video', data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (

    <>
      <div>Favoritosss</div>
      <Buscador></Buscador>
     

    </>

  )
}
