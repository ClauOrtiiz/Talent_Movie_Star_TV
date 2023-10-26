import React, { useEffect, useRef } from 'react';

export const YouTubePlayer = ({videoId, onReady}) => {

  const playerRef = useRef(null);

  useEffect(() => {
    playerRef.current = null;
    const player = new YT.Player('player-'+videoId, {
      videoId, 
      events: {
        onReady: () => {
          onReady(player);
        }  
      }
    });

    playerRef.current = player;

  }, [videoId]);

  // ...otras funciones de control

  function pauseVideo() {
    playerRef.current.pauseVideo(); 
  }
  
  function playVideo() {
    playerRef.current.playVideo();
  }
  
  return (
    <>
      <div id={`player-${videoId}`} />
      
    </>
  )

}