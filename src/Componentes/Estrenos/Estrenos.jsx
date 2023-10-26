import React, { useEffect, useState } from 'react'
import { TarjetaEstreno } from './TarjetaEstreno'
import { obtenerEstrenoCartelera } from '../../services/servicesProvider'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Estrenos.css'

export const Estrenos = () => {

    //Funcion extraccion de estrenos
    const [dataEstrenos, setDataEstrenos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        obtenerEstrenoCartelera()
            .then(respuesta => {
                setDataEstrenos(respuesta);
                console.log('estreno', respuesta)
            })
            .catch(error => {
                setError(error);
            })
    }, [])

    return (
        <section>
            <h2 className='title-estreno'> Estrenos</h2>
            <Carousel>
                {dataEstrenos.results && dataEstrenos.results.slice(0, 4).map((estrenos, index) => (
                    <div className='item' key={index}>
                        <TarjetaEstreno
                            imagen={'https://image.tmdb.org/t/p/original' + estrenos.poster_path}
                        >
                        </TarjetaEstreno>
                    </div>
                ))}
            </Carousel>
        </section>
    );
}
