import React, { useEffect, useState } from 'react';
import lupa from '../../../assets/lupa.png';
import micro from '../../../assets/micro.png';
import { buscarPeliculasPorNombre } from '../../../services/servicesProvider';
import { Link } from 'react-router-dom';

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
      <div>
        <img src={lupa} alt="" />
        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar películas"
        />
        <img src={micro} alt="" />
      </div>

      <div>
        {resultados.length > 0 ? (
          <ul>
            {resultados.map((pelicula) => (
              <h2 key={pelicula.id}>
                <Link to={`/DetallePelicula/${pelicula.id}`}>{pelicula.title}</Link>
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
