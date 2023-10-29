import React from 'react'
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './Reels.css';
import { obtenerVideosPelicula } from "../../services/servicesProvider";
import { YouTubePlayer } from "./YouTubePlayer";
export const Reelsv3 = () => {
  const [videoData, setVideoData] = useState([]);
  const swiperRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const playerRef = useRef([]);

  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [loadingMoreVideos, setLoadingMoreVideos] = useState(false);
  const misPeliculas = [315162, 667538, 507089,901362];
  const [currentMovieIndex, setCurrentMovieIndex] = useState(-1);
  let videoPaused = false;
  useEffect(() => {
    // Llamamos a la función para cargar los videos de las dos primeras películas.

    cargarVideosPorId(misPeliculas[0], misPeliculas[1]);
  }, []);

  const cargarVideosPorId = (movieId1, movieId2) => {
    // Usamos Promise.all para realizar dos peticiones simultáneamente.
    Promise.all([obtenerVideosPelicula(movieId1), obtenerVideosPelicula(movieId2)])
      .then((respuestas) => {
        const videos1 = respuestas[0].results;
        const videos2 = respuestas[1].results;
        
        // Combinamos los resultados de ambas peticiones en un nuevo arreglo.
        const newVideoData = [...videoData, ...videos1, ...videos2];
        
        // Actualizamos videoData una vez que ambas peticiones han terminado.
        setVideoData(newVideoData);
        setLoadingMoreVideos(false);
        console.log("Cargando NUEVOS VIDEOS");
        console.log("Videos cargados de película 1:", videos1);
        console.log("Videos cargados de película 2:", videos2);
        console.log("----Fin de carga----");
        setCurrentMovieIndex(prev => prev + 2);  // Incrementamos en 2 porque hemos cargado 2 películas.
      })
      .catch((error) => {
        // Manejar errores aquí si es necesario.
      });
  };


  /*   useEffect(() => {
      if (swiperReady && playerRef.current[activeVideoIndex]) {
        // Reproducir el primer video automáticamente cuando esté listo
        playerRef.current[activeVideoIndex].playVideo();
      }
    }, [swiperReady, activeVideoIndex]); */

  const handleSlideChange = () => {
    videoPaused = false;

    if (swiperReady && playerRef.current && videoData) {
      const activeIndex = swiperRef.current.activeIndex;
      // Pausar el video anterior (si existe)
      if (playerRef.current[activeVideoIndex]) {
        playerRef.current[activeVideoIndex].pauseVideo();
      }

      // Reproducir el video actual
      // playerRef.current[activeIndex].loadVideoById(videoData[activeIndex].key);

      if (playerRef.current[activeIndex]) {
        playerRef.current[activeIndex].playVideo();
      }



      setActiveVideoIndex(activeIndex);
      if (activeIndex === videoData.length - 1 && !loadingMoreVideos) {

        const nextMovieIdIndex = currentMovieIndex + 1;
        console.log("yestest1",nextMovieIdIndex)
        if (nextMovieIdIndex < misPeliculas.length) {
          console.log("yestest2",nextMovieIdIndex)
          const nextMovieId = misPeliculas[nextMovieIdIndex];
          setLoadingMoreVideos(true);
          console.log("yestest3",nextMovieId)
          cargarVideosPorId(nextMovieId);
        }
      }
    }
  };


  const handleSwiperSlideClick = () => {
    if (!videoPaused) {
      playerRef.current[activeVideoIndex].pauseVideo();
      videoPaused = true;
    } else {
      playerRef.current[activeVideoIndex].playVideo();
      videoPaused = false;
    }
  }

  return (
    <>
      {!videoData ? '' : <Swiper
        allowTouchMove={true}
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setSwiperReady(true);
        }}
        onSlideChange={handleSlideChange}
      >
        {videoData.map((elemento, index) => (
          <SwiperSlide key={index} onClick={handleSwiperSlideClick}>
            <div className='boxVideo'>
              <div className="boxVideoOverlay" ></div>
              <YouTubePlayer
                videoId={elemento.key}
                onReady={(player) => {
                  console.log("prueba", player)
                  playerRef.current[index] = player;
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>}
    </>
  );
};
