import React, { useEffect, useState } from 'react'
import { NavegadorMovil } from '../../Componentes/Navegador/NavegadorMovil'
import { PerfilPelicula } from '../../Componentes/PerfilPelicula/PerfilPelicula'
import { HeaderMovil } from '../../Componentes/Header/HeaderMovil'
import { obtenerPeliculasPorGenero } from '../../services/servicesProvider'
import { Estrenos } from '../../Componentes/Estrenos/Estrenos'
import { Ranking } from '../../Componentes/Ranking/Ranking'
// import { DeslizadorHorizontal } from '../../Componentes/DeslizadorHorizontal/DeslizadorHorizontal'
import './Categoria.css'

export const Categoria = () => {

    const generos = [
        {
            "id": 16,
            "name": "Animación"
        },
        {
            "id": 28,
            "name": "Acción"
        },
        {
            "id": 14,
            "name": "Fantasía"
        },
        {
            "id": 80,
            "name": "Crimen"
        },
        {
            "id": 53,
            "name": "Suspense"
        },
        {
            "id": 27,
            "name": "Terror"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 99,
            "name": "Documental"
        },
        {
            "id": 12,
            "name": "Aventura"
        },
        {
            "id": 10751,
            "name": "Familia"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 35,
            "name": "Comedia"
        },
        {
            "id": 36,
            "name": "Historia"
        },
        {
            "id": 10752,
            "name": "Bélica"
        },
        {
            "id": 10402,
            "name": "Música"
        },
        {
            "id": 878,
            "name": "Ciencia ficción"
        },
        {
            "id": 9648,
            "name": "Misterio"
        },
        {
            "id": 10770,
            "name": "Película de TV"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]

    return (
        <>
            <header className='header'>
                <HeaderMovil></HeaderMovil>
            </header>

            <main className='main'>
                <Estrenos></Estrenos>

                <article >
                    <h2 className='title-estreno'>Ranking del mes</h2>
                    <section className='seccion-peliculas seccion-peliculas-cartelera'>
                        <Ranking></Ranking>
                    </section>
                </article>

                {generos && generos.map((genero, index) => (
                    <article key={index}>
                        <div className='texto-title'>
                            <h2 className='title-estreno'>{genero.name}</h2>
                            <p className='title-verMas' >Ver más</p>
                        </div>
                        <section className='seccion-peliculas'>
                            {/* <DeslizadorHorizontal
                                peticionApi={obtenerPeliculasPorGenero(genero.id, 1)} ></DeslizadorHorizontal> */}
                        </section>
                    </article>
                ))}
            </main>

            <footer className='footer-movil'>
                <NavegadorMovil></NavegadorMovil>
            </footer>

        </>
    )
}
