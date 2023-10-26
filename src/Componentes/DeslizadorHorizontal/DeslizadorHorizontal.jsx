import React from 'react'
import { useState, useEffect } from 'react';
import { PerfilPelicula } from '../PerfilPelicula/PerfilPelicula';
import './DeslizadorHorizontal.css'

export const DeslizadorHorizontal = ({ peticionApi }) => {

//  Funcion de peticiones a api
    const [data, setData] = useState([]);
    const [posicion, setPosicion] = useState(0);

    useEffect(() => {
        peticionApi
            .then((data) => {
                setData(data);
                console.log('populares', data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

// Funciones para deslizador
    const cantidadTotalElementos = data.results ? data.results.length : 0;
    const avanzarCarrusel = () => {
        if (posicion < cantidadTotalElementos - 1) {
            setPosicion(posicion + 1);
        }
    };
    const retrocederCarrusel = () => {
        if (posicion > 0) {
            setPosicion(posicion - 1);
        }
    };
    const estiloContenedorItems = {
        transform: `translateX(-${posicion * 0}px)`,
    };
 

    return (
        <article className="contenedor">
            <div className="control control-avanzar" onClick={avanzarCarrusel} disabled={posicion >= cantidadTotalElementos - 1}>
                <img src="../public/Iconos/next.png" alt="" />
            </div>
            <section className="contenedor-items" >
                {data.results &&
                    data.results.slice(posicion).map((item) => (
                        <div className="item" key={item.id} style={estiloContenedorItems}>
                            <PerfilPelicula
                                key={item.id}
                                idPelicula={item.id}
                                tituloPelicula={item.original_title}
                                posterPelicula={item.poster_path}
                                fechaEstreno={item.release_date}
                            ></PerfilPelicula>
                        </div>
                    ))}
            </section>
            <div className="control control-retroceder" onClick={retrocederCarrusel} disabled={posicion <= 0}>
                <img src="../public/Iconos/next.png" alt="" />
            </div>
        </article>
    );
};