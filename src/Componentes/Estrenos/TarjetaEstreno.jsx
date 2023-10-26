import './TarjetaEstreno.css'

export const TarjetaEstreno = ({ imagen }) => {

    return (

        <section className='seccion-imgEstreno'>
            <img src={imagen} className='img de pelicula'></img>
        </section>

    );
}
