// import ImagenPrueba from '../../../assets/imagenPrueba.jpg'
import './tarjetaPersonaje.css'

const TarjetaPersonaje = ({ nombreActor, nombrePersonaje, imagenPersonaje }) => {
    return (
        <div className="contenedor-tarjetaPersonaje" >
            <figure className="imgPersonaje">
                <img src={imagenPersonaje}  width='150px' height='150px' alt="ImagenPersonaje" />
            </figure>
            <p
                className="nombreActor"
            >{nombreActor}</p>
            <p
                className="nombrePersonaje"
            >{nombrePersonaje}</p>
        </div>
    );
};

export default TarjetaPersonaje;