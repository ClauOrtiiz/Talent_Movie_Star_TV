import React, { useEffect, useState } from 'react'
import { NavegadorMovil } from '../../Componentes/Navegador/NavegadorMovil'
import { PerfilPelicula } from '../../Componentes/PerfilPelicula/PerfilPelicula'
import { HeaderMovil } from '../../Componentes/Header/HeaderMovil'
import { obtenerPeliculasPorGenero } from '../../services/servicesProvider'
import { Estrenos } from '../../Componentes/Estrenos/Estrenos'
import { Ranking } from '../../Componentes/Ranking/Ranking'
import { DeslizadorHorizontal } from '../../Componentes/DeslizadorHorizontal/DeslizadorHorizontal'
import '../../pages/pages.css'

export const Categoria = () => {

    //Funcion para extraccion de cartelera
    const [dataGeneros, setDataGeneros] = useState([])

    useEffect(() => {
        obtenerPeliculasPorGenero()
            .then(genero => {
                setDataGeneros(genero);
                console.log('generos', genero)
            })
            .catch(error => {
                setError(error);
            })
    }, [])

    return (
        <>
            <header className='header'>
                <HeaderMovil></HeaderMovil>
            </header>

            <main className='main'>
                <Estrenos></Estrenos>

                <h2 className='title-estreno'> Ranking del mes</h2>
                <article className='seccion-peliculas seccion-peliculas-cartelera'>
                    <Ranking></Ranking>
                </article>


                <article className='seccion-peliculas '>
                    <h2>ACCION</h2>
                    <DeslizadorHorizontal></DeslizadorHorizontal>
                    {/* <section className='seccion-peliculas-cartelera'>
                        {dataGeneros.results && dataGeneros.results.map((genero,index) => (
                            <div className='item'  index={index}>
                                <PerfilPelicula
                                    key={genero.id}
                                    cartelera={genero.id}
                                    tituloPelicula={genero.original_title}
                                    posterPelicula={genero.poster_path}
                                    fechaEstreno={genero.release_date}
                                ></PerfilPelicula>
                            </div>
                        ))}
                    </section> */}

                </article>

            </main>
            <footer className='footer-movil'>
                <NavegadorMovil></NavegadorMovil>
            </footer>

        </>
    )
}
