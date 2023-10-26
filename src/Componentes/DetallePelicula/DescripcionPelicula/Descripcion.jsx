import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {obtenerDetallePelicula} from '../../../services/servicesProvider'
import './Descripcion.css'
import { useParams } from 'react-router-dom';

export const Descripcion = () => {

    let {idPeli} = useParams()
    idPeli = idPeli || 299054;
    const [idPelicula, setDescripcion] = useState(null)
    let pagina = 2
    let nombrePelicula = "casa"
    
    useEffect(() => {
        obtenerDetallePelicula(idPeli)
        .then((respuesta) => {
          console.log(respuesta)
          setDescripcion(respuesta.results)
        })
    }, [])
   
    return (
        <section className="contenedorGeneral-descripcion" >

            <div className="contenedor-tarjetaPersonajes" >
                {idPelicula?
                idPelicula.map((elemento, index) =>
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



// ------------



// ------------------------------------------------------------------------------

// import React, { useEffect, useState } from 'react';
// import { obtenerDetallePelicula } from '../../../services/servicesProvider';
// import './Descripcion.css';

// export const Descripcion = () => {
//     const [descripcion, setDescripcion] = useState(''); // Inicializa la descripción como una cadena vacía
//     const idPelicula = {DetallePelicula}; // Reemplaza con el ID de la película que desees
    
//     console.log(idPelicula);

//     useEffect(() => {
//         obtenerDetallePelicula(278)
//             .then((respuesta) => {
//                 console.log(respuesta);
//                 setDescripcion(respuesta.overview); // Asigna la descripción desde la respuesta
//             });
//     }, [DetallePelicula]); // Asegúrate de incluir idPelicula en la dependencia para que se actualice cuando cambie

//     return (
//         <section className="contenedorGeneral-descripcion">
//             <div className="contenedor-tarjetaPersonajes">
//                 <div>
//                     <p className="tituloPelicula">Título de la película</p>
//                 </div>
//                 <p className='categoria'>Acción</p>
//                 <p className='descripcion'>{descripcion}</p>
//             </div>
//         </section>
//     );
// };
