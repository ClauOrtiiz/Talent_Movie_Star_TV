import React, { useEffect, useState } from 'react';
import lupa from '../../../assets/lupa.png';
import micro from '../../../assets/micro.png';
import { buscarPeliculasPorNombre } from '../../../services/servicesProvider';
import { Link } from 'react-router-dom';
import './buscador.css'

export const Buscador = () => {
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]); // Usamos un estado para almacenar los resultados

  useEffect(() => {
    if (busqueda.trim() === '') {
      // Si la búsqueda está vacía, no mostramos resultados
      setResultados([]);
      return;
    }

    buscarPeliculasPorNombre(busqueda, 1)
      .then((respuesta) => {
        if (respuesta && respuesta.results) {
          // Guardar los resultados en el estado
          setResultados(respuesta.results);
        } else {
          setResultados([]); // Si no hay resultados, establecer el estado como un arreglo vacío
        }
      });
  }, [busqueda]);

  return (
    <>
      <div className='contenedor-buscador'>
        <img className='icono-lupa' src={lupa} alt="" />
        <input className='input-buscador'
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar películas"
        />
        <img className='icono-micro' src={micro} alt="" />
      </div>

      <div className='buscador-resultado'>
        {resultados.length > 0 ? (
          <ul className='lista-resultado'>
            {resultados.map((pelicula) => (
              <h2 className='lista-resultado-h2' key={pelicula.id}>
                <Link className='link' to={`/DetallePelicula/${pelicula.id}`}>{pelicula.title}</Link>
              </h2>
            ))}
          </ul>
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
    </>
  );
};
