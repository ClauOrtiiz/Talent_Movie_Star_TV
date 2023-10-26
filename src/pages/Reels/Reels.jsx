import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './Reels.css';
import { obtenerVideosPelicula } from "../../services/servicesProvider";
import { YouTubePlayer } from "./YouTubePlayer";

export const Reels = () => {
  const [videoData, setVideoData] = useState(null);
  const swiperRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const playerRef = useRef([]);

  const [activeVideoIndex, setActiveVideoIndex] = useState(0);


  useEffect(() => {
    obtenerVideosPelicula(315162)
      .then((respuesta) => {
        console.log(respuesta);
        setVideoData(respuesta.results);
      });
  }, [])

    // // Función para pausar el video actual
    // const pauseVideo = (player) => {
    //   player.pauseVideo();
    // };
  
    // // Función para reproducir el video actual
    // const playVideo = (player) => {
    //   player.playVideo();
    // };

  const handleSlideChange = () => {

    console.log(playerRef)
    console.log("---0---")
    console.log(playerRef)
    console.log("---0---")
    console.log(swiperReady)
    console.log("-----1---i")
    console.log(playerRef.current)
    console.log("---2---")
    console.log(videoData)
    console.log("---3---")
    if (swiperReady && playerRef.current && videoData) {
      const activeIndex = swiperRef.current.activeIndex;
      console.log(playerRef)
      console.log("---------")
      console.log(playerRef.current[activeVideoIndex])
      console.log("---------")
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
          <SwiperSlide key={index}>
            <div className='boxVideo'>
            <div className="boxVideoOverlay" ></div>
              <YouTubePlayer
                videoId={elemento.key}
                onReady={(player) => {
                  console.log("check", player)
                  playerRef.current[index] = player;

                  console.log("valorActual",playerRef)
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>}
    </>
  );
};
