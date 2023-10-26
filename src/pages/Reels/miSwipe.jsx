import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
export const miSwipe = () => {
  const [videoData, setVideoData] = useState(null)

  useEffect(() => {
    obtenerVideosPelicula(315162)
      .then((respuesta) => {
        console.log(respuesta)
        setVideoData(respuesta.results)
      })
  }, []);

  return (
    <>
      <Swiper
        loop={true}
        direction="vertical" // Habilitar el desplazamiento vertical
        slidesPerView={1}
        spaceBetween={30}
        navigation // Mostrar navegación
        pagination={{ clickable: true }} // Habilitar paginación clickeable
      >
        {videoData.map((elemento, index) => (
          <SwiperSlide key={index}>
            <div className='boxVideo'>
              <iframe 
              className="miVideoReel" 
              src={`https://www.youtube.com/embed/${elemento.key}?si=MjRBwnTjJ4joUAjp`} 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </>

  );
};