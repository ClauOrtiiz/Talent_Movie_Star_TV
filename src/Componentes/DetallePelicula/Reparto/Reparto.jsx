import TarjetaPersonaje from '../TarjetaPersonaje/tarjetaPersonaje'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { obtenerRepartoDePelicula } from '../../../services/servicesProvider'
import { obtenerVideosPelicula } from '../../../services/servicesProvider'
import './Reparto.css'

export const ActoresReparto = ({idPelicula}) => {

    const [datos, setDatos] = useState(null)
    // const idPelicula = 503616

    useEffect(() => {
        obtenerRepartoDePelicula(idPelicula)
            .then((respuesta) => {
                console.log(respuesta)
                setDatos(respuesta.cast)
            })
    }, [])

    useEffect(() => {
        obtenerVideosPelicula(idPelicula)
            .then((respuesta) => {
                console.log( 'probando videos',respuesta)
                setDatos(respuesta.cast)
            })
    }, [])


    return (
        <div class="contenedor-flex"> 
        <section className="reparto" >
            <div>
            <p className="titulo">REPARTO</p>
            </div>
           
            <div className="tarjetaPersonajes" >
            {datos ?
                datos.map((personaje, index) =>
                    <div  key={index} >
                        <TarjetaPersonaje
                            nombreActor={personaje.name}
                            nombrePersonaje={personaje.character}
                            imagenPersonaje={'https://image.tmdb.org/t/p/original' + personaje.profile_path}
                        ></TarjetaPersonaje>
                    </div>
                    
                )

                : ""}
                </div>
                
        </section>
        </div>
    );
};

export default ActoresReparto;

