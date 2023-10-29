import React, { useEffect, useState } from 'react'
import { obtenerRankeadas } from '../../services/servicesProvider'
import { TarjetaRanking } from './TarjetaRanking';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Ranking.css'

export const Ranking = () => {
    //Funcion extraccion de Ranking
    const [dataRanking, setDataRanking] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        obtenerRankeadas()
            .then(respuesta => {
                setDataRanking(respuesta);
                console.log('Ranking', respuesta)
            })
            .catch(error => {
                setError(error);
            })
    }, [])

    return (


        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={2}
            navigation

            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='modificaAlturaSwiper'
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
                1100: {
                    slidesPerView: 4,
                },
            }}
        >

            {dataRanking.results && dataRanking.results.slice(0, 10).map((ranking, index) => (
                <SwiperSlide key={ranking.id} className='swiper-slide '>


                    <div className='tarjetaRanking' key={index}>
                        <TarjetaRanking
                            numero={index + 1}
                            idPelicula={ranking.id}
                            tituloPelicula={ranking.original_title}
                            posterPelicula={ranking.backdrop_path}
                            nombre={ranking.original_title}
                        >
                        </TarjetaRanking>
                    </div>

                </SwiperSlide>

            ))}

        </Swiper>

    );
}
