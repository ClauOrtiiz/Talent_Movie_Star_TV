import './perfilPelicula.css'


export const PerfilPelicula = ({ idPelicula, tituloPelicula, posterPelicula, fechaEstreno }) => {

  const urlImagen = 'https://image.tmdb.org/t/p/w500';
  const mostrarPelicula = () => console.log(`obteniendo el ${idPelicula}`);
  const añadirFavoritos = () => console.log(`añadiendo a favoritos... ${idPelicula}`)

  return (
    <article className='article-pelicula' key={idPelicula}>
      <section className='seccion-favorito'>
        <img onClick={() => añadirFavoritos(idPelicula)} src='../public/Iconos/hearth-1.png' className='icon'></img>
      </section>
      <img onClick={() => mostrarPelicula(idPelicula)} className="img-pelicula"
        src={`${urlImagen}${posterPelicula}`}
        alt={tituloPelicula}
      />
      <section className='section-pelicula'>
        <h2 className="titulo-pelicula">{tituloPelicula}</h2>
        <h3 className="estreno-pelicula">{fechaEstreno}</h3>
      </section>
    </article>
  )
}
