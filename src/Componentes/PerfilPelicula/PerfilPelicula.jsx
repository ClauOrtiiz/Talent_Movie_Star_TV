import './perfilPelicula.css'


export const PerfilPelicula = ({ idPelicula, tituloPelicula, posterPelicula, fechaEstreno }) => {

  const urlImagen = 'https://picsum.photos/200/300?';
  const mostrarPelicula = ()=> console.log(`obteniendo el ${idPelicula}`);
  const añadirFavoritos = ()=> console.log(`añadiendo a favoritos... ${idPelicula}`)

  return (
      <article className='article-pelicula' key={idPelicula}>
          <i onClick={()=>añadirFavoritos(idPelicula)} className="fa-regular fa-heart icon"></i>
          <img onClick={()=>mostrarPelicula(idPelicula)} className="img-pelicula"
              src={`${urlImagen}${posterPelicula}`}
              alt={tituloPelicula}
          />
          <section className='section-pelicula'>
              <h2 className="titulo-pelicula">{tituloPelicula}</h2>
              <span className="estreno-pelicula">{fechaEstreno}</span>
          </section>
      </article>
  )
}
