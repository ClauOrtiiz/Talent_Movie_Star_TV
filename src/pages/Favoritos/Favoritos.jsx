import React from 'react'
import { HeaderMovil } from '../../Componentes/Header/HeaderMovil'
import { DeslizadorHorizontal } from '../../Componentes/DeslizadorHorizontal/DeslizadorHorizontal'
import { obtenerEstrenoCartelera } from '../../services/servicesProvider'
import { obtenerPeliculasPorGenero } from '../../services/servicesProvider'



 export const Favoritos = () => {


 
  return (
 
    <>
      <div>Favoritosss</div>
      <DeslizadorHorizontal peticionApi={obtenerPeliculasPorGenero(80,1)} ></DeslizadorHorizontal>
  
    </>

  )
}
