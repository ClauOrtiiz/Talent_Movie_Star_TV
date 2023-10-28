import TarjetaPersonaje from '../TarjetaPersonaje/tarjetaPersonaje'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { obtenerRepartoDePelicula } from '../../../services/servicesProvider'
import './Reparto.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const ActoresReparto = ({ idPelicula }) => {

    const [reparto, setReparto] = useState([])

    useEffect(() => {
        obtenerRepartoDePelicula(idPelicula)
            .then((respuesta) => {
                console.log(respuesta)
                setReparto(respuesta.cast)
            })
    }, [])


    return (

        <article className="contenedorGeneral-reparto">
            <div className="contenedor-reparto">
                <p className="titulo-reparto">Reparto</p>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation

                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}

                    className='modificaAlturaSwiper'
                    breakpoints={{
                        768: {
                            slidesPerView: 5,
                        },
                        800: {
                            slidesPerView: 8,
                        },
                        900: {
                            slidesPerView: 9,
                        },
                        1100: {
                            slidesPerView: 10,
                        },
                    }}
                >
                    <section className="seccionTarjetaPersonajes-reparto" >
                        {reparto ? reparto.map((personaje, index) =>
                            personaje.profile_path ? (
                                <SwiperSlide key={personaje.id} className='swiper-slide '>
                                    <div key={index} >
                                        <TarjetaPersonaje
                                            nombreActor={personaje.name}
                                            nombrePersonaje={personaje.character}
                                            imagenPersonaje={'https://image.tmdb.org/t/p/original' + personaje.profile_path}
                                        ></TarjetaPersonaje>
                                    </div>
                                </SwiperSlide>
                            ) : null
                        )

                            : ""}
                    </section>
                </Swiper >
            </div>
        </article>

    );
};

export default ActoresReparto;

