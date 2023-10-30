import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './Reels.css';
import hearth1 from '../../assets/hearth-1.png'
import hearth2 from '../../assets/hearth-2.png'
import { obtenerEstrenoCartelera, obtenerPeliculasRecomendadas, obtenerPopulares, obtenerVideosPelicula } from "../../services/servicesProvider";
import { YouTubePlayer } from "./YouTubePlayer";
export const Reels = () => {
  const [videoData, setVideoData] = useState([]);
  const swiperRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const playerRef = useRef([]);
  const [peliculasCargadas,setPeliculasCargadas] =useState([])
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [meGusta, setmeGusta] = useState(false);
  const urlImagen = 'https://image.tmdb.org/t/p/w500';
  let videoPaused = false;

  const clickFavorito = (idPelicula) => {
    console.log(videoData)
    console.log(videoData.find((elemento)=>elemento.idPelicula===idPelicula))
    alternarFavoritos(idPelicula)

    setmeGusta(estado => !estado);
    console.log(buscarDatosPelicula(idPelicula))
    
    let favoritos = JSON.parse(localStorage.getItem('favoritos'));
    if (!favoritos) {
      favoritos = [];
    }


    const pelicula = favoritos?.find(x => x.idPelicula === idPelicula);
    console.log(buscarDatosPelicula(idPelicula))
    
    if (pelicula) {
      localStorage.setItem('favoritos', JSON.stringify(favoritos?.filter(x => x.idPelicula !== idPelicula)));
    } else {
      const {tituloPelicula,posterPelicula, fechaEstreno} =buscarDatosPelicula(idPelicula)
      favoritos.push({ idPelicula, tituloPelicula, urlImagen: `${urlImagen}${posterPelicula}`, fechaEstreno });
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }


  }

  function alternarFavoritos(idPelicula) {
    // Copia el arreglo de videoData actual
    const copiaVideoData = [...videoData];

    // Itera sobre la copia para alternar isFavorito
    copiaVideoData.forEach((objeto) => {
      if (objeto.idPelicula === idPelicula) {
        objeto.isFavorito = !objeto.isFavorito;
      }
    });

    // Actualiza el estado con la nueva copia
    setVideoData(copiaVideoData);
  }

  function buscarDatosPelicula(idPelicula) {
    console.log(peliculasCargadas)
    const pelicula= peliculasCargadas.find(pelicula => pelicula.id === idPelicula);
    console.log(pelicula)
    return {
      tituloPelicula:pelicula.title,
      posterPelicula:pelicula.poster_path,
      fechaEstreno:pelicula.release_date
    }
  }


  useEffect(() => {
    // Llamamos a la función para cargar los videos de las dos primeras películas.
   
    obtenerPopulares()
      .then((respuesta) => {
        console.log(respuesta)
        setPeliculasCargadas(respuesta.results)
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
        let favoritosDeStorage=JSON.parse(localStorage.getItem('favoritos'))        
        if (!favoritosDeStorage) {
          favoritosDeStorage = [];
        }       
        let allVideos = respuestas.flatMap(respuesta => {
          // Obtener el id de la película actual
          const idPelicula = respuesta.id        
          const isFavorito= favoritosDeStorage.some(pelicula => pelicula.idPelicula === idPelicula);
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
            video.isFavorito = isFavorito
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
          <SwiperSlide key={index} >
            <div className='boxVideo'>
              <section className='seccion-favorito favorito-reel'  onClick={()=>clickFavorito(elemento.idPelicula)}>
                {elemento.isFavorito ?
                  <img src={hearth2} className='icono-reel' alt="No me gusta"></img> :
                  <img src={hearth1} className='icono-reel' alt="Me gusta"></img>
                }
              </section>
              <div className="boxVideoOverlay" onClick={handleSwiperSlideClick}></div>
              <YouTubePlayer
                videoId={elemento.key}
                onReady={(player) => {                  
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
