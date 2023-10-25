import React, { useState, useEffect } from 'react';
import { obtenerVideosPelicula } from '../../services/servicesProvider';

export const Reels = () => {
  const [indiceVideoActual, setindiceVideoActual] = useState(0);
  const [videoData, setVideoData] = useState(null)
  const [youtubeUrl, setYoutubeUrl] = useState('https://www.youtube.com/embed/hAwC1ioOycU?autoplay=1');
  const loadVideo = () => {
    if (videoData) {

      const currentVideo = videoData[indiceVideoActual];
      const videoId = currentVideo.key;
      const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

      // Actualiza el src del iframe utilizando el estado
      setYoutubeUrl(youtubeUrl);
    }
  };

  const handlePrevClick = () => {
    if (indiceVideoActual > 0) {
      setindiceVideoActual(indiceVideoActual - 1);
    }
  };

  const handleNextClick = () => {
    if (indiceVideoActual < videoData.length - 1) {
      setindiceVideoActual(indiceVideoActual + 1);
    }
  };



  // Cargar el primer video al iniciar
  useEffect(() => {
    obtenerVideosPelicula(315162)
      .then((respuesta) => {
        console.log(respuesta)
        setVideoData(respuesta.results)
      })
  }, []);

  useEffect(() => {
    if (videoData) {
      loadVideo();
    }
  }, [indiceVideoActual,videoData]);

  return (
    <>
      {!videoData
        ? <h2>Cargando</h2>
        : <div>
          <iframe
            allow="autoplay"
            width="560"
            height="315"
            src={youtubeUrl}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div>
            <button onClick={handlePrevClick}>Anterior</button>
            <button id='nextButton' onClick={handleNextClick}>Siguiente</button>
            <button id="invisibleButton" style={{ display: 'none' }}></button>

          </div>
        </div>}
    </>

  );
}