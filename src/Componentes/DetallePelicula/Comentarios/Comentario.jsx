import ImgComentario from '../../../assets/imgComentario.jpg'
import NoMeGusta from '../../../assets/noMeGusta.png'
import Megusta from '../../../assets/meGusta.png'
import './Comentario.css'

export const Comentario = () => {
    return (
        <article className="contenedorGeneral" >
            <div className='contenedor-comentario'>
            <p className='titulo-comentario'>Comentario</p> 
            <section className='seccion-imgComentrio'>
                <figure className="imgComentario">
                    <img src={ImgComentario} width='50px' height='50px' alt="Comentario1" />
                </figure>
                <p className="user-comentario">Maricarmen</p>
            </section>

            <p className="texto-comentario">
                La película tiene un elenco de lujo, magnífica escenografía y una fotografía genial. Jason Momoa se luce como villano y antagonista pseudo gay y psicótico, cuyo personaje es muy bien interpretado, la nota más alta de la película es su actuación, me encanta. Para mi es película para ver 1 sola vez y ya.
            </p>
            <div className='contenedor-meGusta'>
                <section className='seccion-nomegustas'>
                    <img src={NoMeGusta} width='30px' height='30px' alt="NoMeGusta" />
                    <p className="texto-nomegustas">5k</p>
                </section>

                <section className='seccion-megustas'>
                    <img src={Megusta} width='30px' height='30px' alt="MeGusta" />
                    <p className="texto-megustas">5k</p>
                </section>
            </div>
            
            </div>
        </article>
    );
};
