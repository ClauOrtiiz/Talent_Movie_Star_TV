import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles


import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

 import './deslizadorHorizontal.css'

import { useState, useEffect } from 'react';
import { PerfilPelicula } from '../PerfilPelicula/PerfilPelicula';
import { obtenerEstrenoCartelera } from '../../services/servicesProvider';


export const DeslizadorHorizontal = ({ peticionApi }) => {


    // return(
    //     <div>holas</div>
    // )

    const [data, setData] = useState([]);

    useEffect(() => {
        peticionApi
            .then((data) => {
                setData(data);
                console.log('populares', data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <section className='contenedor-swiper'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={2}
                navigation

                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='caro'
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    800: {
                        slidesPerView: 4,
                    },
                    900: {
                        slidesPerView: 6,
                    },
                    1024: {
                        slidesPerView: 8,
                    },
                }}
            >

                {data.results &&
                    data.results.map((item) => (
                        <SwiperSlide key={item.id} className='swiper-slide '>

                            <PerfilPelicula
                                idPelicula={item.id}
                                tituloPelicula={item.original_title}
                                posterPelicula={item.poster_path}
                                fechaEstreno={item.release_date}
                            ></PerfilPelicula>


                        </SwiperSlide>

                    ))}

        </Swiper>

        </section >
    
    )

}