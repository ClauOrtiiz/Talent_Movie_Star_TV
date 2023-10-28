import Megusta from '../../../assets/meGusta.png';
import Descargar from '../../../assets/descargar.png';
import Compartir from '../../../assets/compartir.png';
import IconPlay from '../../../assets/iconPay.png';
import './VerAhora.css';

export const VerAhora = () => {
    return (
        <article className="contenedorGeneral-btns" >
            <div className='contenedor-btns'>
                <button className='btn-play'> <img src={IconPlay} width='20px' height='20px' alt="icon play" /> Ver ahora</button>

                <div className='contenedor-descargar'>
                    <section className='seccion-descargar'>
                        <img src={Descargar} width='30px' height='30px' alt="descargar" />
                    </section>

                    <section className='seccion-compartir'>
                        <img src={Compartir} width='30px' height='30px' alt="compartir" />
                    </section>

                    <section className='seccion-megustas'>
                        <img src={Megusta} width='30px' height='30px' alt="MeGusta" />

                    </section>
                </div>
            </div>


        </article >
    );
};
