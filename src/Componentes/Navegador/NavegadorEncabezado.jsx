import React from 'react'
import { NavLink } from 'react-router-dom'
import './navegador.css'

export const NavegadorEncabezado = () => {
    return (
      <ul className='lista-nav'>
        <li>
          <NavLink className='lista-nav-header' to="/MovieStar" activeClassName="activo">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink className='lista-nav-header' to="/categoria" activeClassName="activo">
            Categorías
          </NavLink>
        </li>
        <li>
          <NavLink className='lista-nav-header' to="/Favoritos" activeClassName="activo">
            Favoritos
          </NavLink>
        </li>
      </ul>
    );
  };
  