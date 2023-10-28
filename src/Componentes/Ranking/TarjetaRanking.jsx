import { Link } from 'react-router-dom';
import './TarjetaRanking.css'

export const TarjetaRanking = ({ nombre, numero, idPelicula, tituloPelicula, posterPelicula }) => {

    const urlImagen = 'https://image.tmdb.org/t/p/w500';
    const mostrarPelicula = () => console.log(`obteniendo el ${idPelicula}`);
    const añadirFavoritos = () => console.log(`añadiendo a favoritos... ${idPelicula}`)

    return (
        <section className='contenedor-tarjetaRanking'>
            <div>
                <p className='numero-tarjeta'>{numero}</p>
            </div>
            
                <Link className='article-tarjetaPelicula' to={`/pruebas/pruebaDetalle/${idPelicula}`} >
                    <img onClick={() => mostrarPelicula(idPelicula)} className="imgPelicula"
                        src={`${urlImagen}${posterPelicula}`}
                        alt={tituloPelicula}
                    />
                    <p className='nombre-pelicula-ranking'>{nombre}</p>
                </Link>
      
        </section>

    )
}
