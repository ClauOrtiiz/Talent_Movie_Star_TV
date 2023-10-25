
import React, { useEffect, useRef } from 'react';

const YouTubePlayer = ({videoId}) => {

  const playerRef = useRef(null);

  useEffect(() => {

    // Inicializar API de YouTube
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";

    // Callback cuando se carga la API  
    window.onYouTubeIframeAPIReady = () => {
      
      // Crear nuevo reproductor 
      playerRef.current = new YT.Player('player', {
        videoId,
        events: {
          'onReady': onPlayerReady
        }
      });

    }

    // Insertar script en el DOM
    document.body.appendChild(tag);

  }, [videoId]);

  // Reproducir video cuando el reproductor esté listo
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  return (
    <div id="player"/>
  );
}

export default YouTubePlayer;