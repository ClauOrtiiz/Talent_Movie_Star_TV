import React from 'react'
import hearth from '../../assets/hearth.png'
export const DetallePelicula = (idPelicula) => {
    console.log('viendo', idPelicula)

    const urlImagen = 'https://image.tmdb.org/t/p/original'

    return (
        <>
            <section>
                <img 
                src={`${urlImagen}${item.poster_path}`}
                alt={item.title}/>
            </section>
            <h1>{item.title}</h1>
            <section>
                <div>
                    <img src={hearth}/>
                    <h3>Ver ahora</h3>
                </div>
                <img src={hearth} />
            </section>
            <section>{}</section>


        </>

    )
}
