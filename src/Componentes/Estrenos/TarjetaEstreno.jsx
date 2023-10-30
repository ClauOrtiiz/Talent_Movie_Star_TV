import './TarjetaEstreno.css'

export const TarjetaEstreno = ({ imagen, title }) => {

    return (

        <section className='seccion-imgEstreno'>
            <img src={imagen} className='img de pelicula'></img>
            <h3>{title}</h3>
        </section>

    );
}
