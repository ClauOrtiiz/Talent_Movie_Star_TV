import React, { useState, useEffect } from 'react';
import './perfilPelicula.css'
import { Link } from 'react-router-dom';


export const PerfilPelicula = ({ idPelicula, tituloPelicula, posterPelicula, fechaEstreno, escucharCheckFavorito }) => {

  const urlImagen = 'https://image.tmdb.org/t/p/w500';
  const mostrarPelicula = () => console.log(`obteniendo el ${idPelicula}`);
  const añadirFavoritos = () => console.log(`añadiendo a favoritos... ${idPelicula}`)


  const [meGusta, setmeGusta] = useState(false);

  const clickFavorito = () => {

    if (escucharCheckFavorito) {
      escucharCheckFavorito();
    }
    setmeGusta(estado => !estado);
    let favoritos = JSON.parse(localStorage.getItem('favoritos'));
    if (!favoritos) {
      favoritos = [];
    }


    const pelicula = favoritos?.find(x => x.idPelicula === idPelicula);

    if (pelicula) {
      localStorage.setItem('favoritos', JSON.stringify(favoritos?.filter(x => x.idPelicula !== idPelicula)));
    } else {
      favoritos.push({ idPelicula, tituloPelicula, urlImagen: `${urlImagen}${posterPelicula}`, fechaEstreno });
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }

  }

  useEffect(() => {
    let favoritos = JSON.parse(localStorage.getItem('favoritos'));
    const pelicula = favoritos?.find(x => x.idPelicula === idPelicula);

    if (pelicula) {
      setmeGusta(!!pelicula);
    }
  }, [])


  return (


    <article className='article-pelicula' key={idPelicula}>

      <section className='seccion-favorito' onClick={clickFavorito} >
        {meGusta ?
          <img src='../public/Iconos/hearth-2.png' className='icon' alt="No me gusta"></img> :
          <img src='../public/Iconos/hearth-1.png' className='icon' alt="Me gusta"></img>
        }
      </section>

      <section className='seccion-portada-pelicula'>
        <Link className='linkRouter' to={`/pruebas/pruebaDetalle/${idPelicula}`} >
          <img onClick={() => mostrarPelicula(idPelicula)} className="img-pelicula"
            src={`${urlImagen}${posterPelicula}`}
            alt={tituloPelicula}
          />
          <section className='section-pelicula'>
            <h2 className="titulo-pelicula">{tituloPelicula}</h2>
            <h3 className="estreno-pelicula">{fechaEstreno}</h3>
          </section>
        </Link >

      </section>


    </article>



  )
}
