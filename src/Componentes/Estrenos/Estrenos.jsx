import React, { useEffect, useState } from 'react'
import { TarjetaEstreno } from './TarjetaEstreno'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { obtenerEstrenoCartelera } from '../../services/servicesProvider'

import './Estrenos.css'

export const Estrenos = () => {

    //Funcion extraccion de estrenos
    const [dataEstrenos, setDataEstrenos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        obtenerEstrenoCartelera()
            .then(respuesta => {
                setDataEstrenos(respuesta);
                console.log('****estreno', respuesta)
            })
            .catch(error => {
                setError(error);
            })
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Número de elementos visibles en el carrusel
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            
        ]
    };

    return (
        <section className='contenedor-estreno'>
      
            <Slider {...settings}>
                {dataEstrenos.results && dataEstrenos.results.slice(0, 4).map((estrenos, index) => (
                    <div className='item' key={index}>
                        <TarjetaEstreno
                            imagen={'https://image.tmdb.org/t/p/original' + estrenos.backdrop_path}
                        >
                        </TarjetaEstreno>
                    </div>
                ))}
            </Slider>
        </section>
    );
}
