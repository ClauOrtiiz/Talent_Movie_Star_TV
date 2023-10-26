import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {obtenerDetallePelicula} from '../../../services/servicesProvider'
import './Descripcion.css'
import { useParams } from 'react-router-dom';


export const Descripcion = ({idPeli}) => {
        
        // let {idPeli} = useParams()
        idPeli = idPeli || 299054;
        const [datos, setDatos] = useState(null)
        let idPelicula=299054
        useEffect(() => {
          obtenerDetallePelicula(idPeli )
            .then((respuesta) => {
              console.log(respuesta)
              setDatos(respuesta)
            })
        }, [])
      
        return (
      
          <div >
            {datos ?     
            <div class="contenedor-flex">   
                <div className='descripcion'>
                  <h2>titulo: {datos.title}</h2>
                  {/* <p>idPelicula: {datos.id}</p> */}
                  <p> {datos.overview}</p>
                  <p className='fecha'>Fecha: {datos.release_date}</p>
                  <p className='puntaje'>Puntaje: {datos.vote_average}</p>
                  {datos.genres.map((genero,index)=>(<li key={index} className='genero'> {genero.name}</li>))}
                  
      
                </div>      
                </div> 
              : ""}
          </div>
        )
      }