import React, { useEffect, useState } from 'react'
import { obtenerRankeadas } from '../../services/servicesProvider'
import { TarjetaRanking } from './TarjetaRanking';
import './Ranking.css'

export const Ranking = () => {
    //Funcion extraccion de Ranking
    const [dataRanking, setDataRanking] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        obtenerRankeadas()
            .then(respuesta => {
                setDataRanking(respuesta);
                console.log('Ranking', respuesta)
            })
            .catch(error => {
                setError(error);
            })
    }, [])

    return (


        <section className='seccion-tarjetaRanking'>
            
            {dataRanking.results && dataRanking.results.slice(0, 10).map((ranking, index) => (
                <div className='tarjetaRanking' key={index}>
                    <TarjetaRanking
                        numero={index + 1}
                        idPelicula={ranking.id}
                        tituloPelicula={ranking.original_title}
                        posterPelicula={ranking.backdrop_path}
                        nombre={ranking.original_title}
                    >
                    </TarjetaRanking>
                </div>
            ))}
        </section>


    );
}
