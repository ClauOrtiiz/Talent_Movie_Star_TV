import Reparto from "../../Componentes/DetallePelicula/Reparto/Reparto";
import React, { useEffect, useState } from "react";
import { obtenerVideosPelicula } from "../../services/servicesProvider";
import { Descripcion } from "../../Componentes/DetallePelicula/DescripcionPelicula/Descripcion";
import { HeaderMovil } from "../../Componentes/Header/HeaderMovil";
import { Comentario } from "../../Componentes/DetallePelicula/Comentarios/Comentario";
import { VerAhora } from "../../Componentes/DetallePelicula/VerAhora/VerAhora";
import { useParams } from 'react-router-dom';
import { NavegadorMovil } from "../../Componentes/Navegador/NavegadorMovil";
import "./Detalles.css";
import '../pages.css'

export const DetallePelicula = () => {
  let { idPelicula } = useParams()
  idPelicula = idPelicula || 299054;

  const [video, setVideo] = useState(null);
  // let idPelicula = 298618;
  useEffect(() => {
    obtenerVideosPelicula(idPelicula)
      .then((respuesta) => {
        console.log(respuesta);
        if (respuesta.results.length > 0) {
          setVideo(respuesta.results[0]);
        }
      });
  }, []);



  return (

    <article className="video-container">
      <header className='header'>
      <HeaderMovil></HeaderMovil>
      </header>

      <section className="contenedorGeneral-detallePelicula">
        {video && (
          <iframe
            width="100%"
            height="600"
            src={`https://www.youtube.com/embed/${video.key}?si=aVicG-IXOHeD7NaU`}
            title="YouTube video player"
            frameborder="0px"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // allowfullscreen
          ></iframe>
        )}
        <VerAhora></VerAhora>
        <Descripcion idPeli={idPelicula}></Descripcion>
        <Reparto idPelicula={idPelicula}></Reparto>
        <Comentario></Comentario>
      </section>
      <footer className="footer-movil">
        <NavegadorMovil></NavegadorMovil>
      </footer>
    </article>

  );
};
