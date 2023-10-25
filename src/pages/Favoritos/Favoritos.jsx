import React from 'react'
import { HeaderMovil } from '../../Componentes/Header/HeaderMovil'
import { DeslizadorHorizontal } from '../../Componentes/DeslizadorHorizontal/DeslizadorHorizontal'

export const Favoritos = () => {

  const prueba = [
    { id: 1234, name: 'holas', poster_path:'/t/p/w600_and_h900_bestv2/83sGKvCv2T2CulYbd40Aeduc7n2.jpg' },
    { id: 54545, name: 'holas', poster_path:'/t/p/w600_and_h900_bestv2/83sGKvCv2T2CulYbd40Aeduc7n2.jpg' },
    { id: 6767, name: 'holas', poster_path:'/t/p/w600_and_h900_bestv2/83sGKvCv2T2CulYbd40Aeduc7n2.jpg' },
    { id: 678, name: 'holas', poster_path:'/t/p/w600_and_h900_bestv2/83sGKvCv2T2CulYbd40Aeduc7n2.jpg' },
    { id: 4545, name: 'holas', poster_path:'/t/p/w600_and_h900_bestv2/83sGKvCv2T2CulYbd40Aeduc7n2.jpg' },
    { id: 76, name: 'holas', poster_path:'/t/p/w600_and_h900_bestv2/83sGKvCv2T2CulYbd40Aeduc7n2.jpg' },
    { id: 989, name: 'holas', poster_path:'/t/p/w600_and_h900_bestv2/83sGKvCv2T2CulYbd40Aeduc7n2.jpg' },
    { id: 9090, name: 'holas', poster_path:'/t/p/w600_and_h900_bestv2/83sGKvCv2T2CulYbd40Aeduc7n2.jpg' },
    { id: 435, name: 'holas', poster_path:'/t/p/w600_and_h900_bestv2/83sGKvCv2T2CulYbd40Aeduc7n2.jpg' },
  
  
  
  ]

   
  return (
 
    <>
      <div>Favoritosss</div>
      <DeslizadorHorizontal arrayImagenes={prueba} ></DeslizadorHorizontal>
 
    </>

  )
}
