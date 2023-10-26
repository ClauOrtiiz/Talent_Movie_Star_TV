import TarjetaPersonaje from '../TarjetaPersonaje/tarjetaPersonaje'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { obtenerRepartoDePelicula } from '../../../services/servicesProvider'
import { obtenerVideosPelicula } from '../../../services/servicesProvider'
import './Reparto.css'


export const ActoresReparto = () => {

    const [datos, setDatos] = useState(null)
    const idPelicula = 503616

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
        <section className="contenedorGeneral" >
            <div>
            <p className="titleReparto">Reparto</p>
            </div>
            
            <div className="contenedor-tarjetaPersonajes" >
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
    );
};

export default ActoresReparto;