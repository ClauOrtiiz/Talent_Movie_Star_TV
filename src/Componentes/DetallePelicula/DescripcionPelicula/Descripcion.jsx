import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {buscarPeliculasPorNombre} from '../../../services/servicesProvider'
export const Descripcion = () => {


    const [datos, setDatos] = useState(null)
    let pagina = 2
    let nombrePelicula = "casa"
    useEffect(() => {
      buscarPeliculasPorNombre(nombrePelicula,pagina)
        .then((respuesta) => {
          console.log(respuesta)
          setDatos(respuesta.results)
        })
    }, [])
   
    return (
        <section className="contenedorGeneral-descripcion" >

            <div className="contenedor-tarjetaPersonajes" >
                {datos ?
                    datos.map((elemento, index) =>
                        <div key={index} >
                            <div>
                                <p className="tituloPelicula">{elemento.title}</p>
                            </div>
                            <p className='categoria'>Accion</p>
                           
                           <p className='descripcion'>{elemento.overview}</p>
                        </div>
                    )

                    : ""}
            </div>
        </section>
    );
};

