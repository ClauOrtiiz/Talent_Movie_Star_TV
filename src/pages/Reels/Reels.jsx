import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './Reels.css';
import { obtenerEstrenoCartelera, obtenerPeliculasRecomendadas, obtenerPopulares, obtenerVideosPelicula } from "../../services/servicesProvider";
import { YouTubePlayer } from "./YouTubePlayer";
export const Reels = () => {
  const [videoData, setVideoData] = useState([]);
  const swiperRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const playerRef = useRef([]);

  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [meGusta, setmeGusta] = useState(false);
  let videoPaused = false;

  useEffect(() => {
    // Llamamos a la función para cargar los videos de las dos primeras películas.
    console.log("test")
    const misPeliculas = [315162, 667538, 507089, 901362];
    obtenerPopulares()
      .then((respuesta) => {
        console.log(respuesta)
        const idPeliculas = obtenerIdsDesdeObjeto(respuesta)
        cargarVideos(idPeliculas);
      })

  }, []);

  function obtenerIdsDesdeObjeto(objeto) {
    if (objeto && Array.isArray(objeto.results)) {
      return objeto.results.map(item => item.id);
    } else {
      return [];
    }
  }

  const cargarVideos = (peliculasId) => {
    const promises = peliculasId.map(movieId => obtenerVideosPelicula(movieId));

    // Usamos Promise.all para realizar dos peticiones simultáneamente.
    Promise.all(promises)
      .then((respuestas) => {

        let allVideos = respuestas.flatMap(respuesta => {
          // Obtener el id de la película actual
          const idPelicula = respuesta.id
          // Filtrar los videos por tipo
          const trailers = respuesta.results.filter(video => video.type === 'Trailer');
          const teasers = respuesta.results.filter(video => video.type === 'Teaser');
          const clips = respuesta.results.filter(video => video.type === 'Clip');

          // Obtener un máximo de 1 video de cada tipo
          const selectedVideos = [
            trailers.slice(0, 1),
            teasers.slice(0, 1),
            clips.slice(0, 1)
          ].flat();
          selectedVideos.forEach(video => {
            video.idPelicula = idPelicula;
          });
          return selectedVideos;
        });
        allVideos.sort(() => Math.random() - 0.5);
        if (allVideos.length > 15) {
          allVideos = allVideos.slice(0, 15);
        }
        console.log(allVideos)
        setVideoData(allVideos);
      })
      .catch((error) => {
        // Manejar errores aquí si es necesario.
      });
  };


  useEffect(() => {
    if (swiperReady && playerRef.current[activeVideoIndex]) {
      // Reproducir el primer video automáticamente cuando esté listo
      playerRef.current[activeVideoIndex].playVideo();
    }
  }, [swiperReady, activeVideoIndex]);
  // // Función para pausar el video actual
  // const pauseVideo = (player) => {
  //   player.pauseVideo();
  // };

  // // Función para reproducir el video actual
  // const playVideo = (player) => {
  //   player.playVideo();
  // };

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
      playerRef.current[activeIndex].playVideo();

      setActiveVideoIndex(activeIndex);
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
              <section className='seccion-favorito' >
                {meGusta ?
                  <img src='../public/Iconos/hearth-2.png' className='icon' alt="No me gusta"></img> :
                  <img src='../public/Iconos/hearth-1.png' className='icon' alt="Me gusta"></img>
                }
              </section>
              <div className="boxVideoOverlay" ></div>
              <YouTubePlayer
                videoId={elemento.key}
                onReady={(player) => {
                  console.log("check", player)
                  playerRef.current[index] = player;

                  console.log("valorActual", playerRef)
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>}
    </>
  );
};
