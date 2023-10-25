import React from 'react'
import './HeaderMovil.css'
import { NavegadorEncabezado } from '../Navegador/NavegadorEncabezado'

export const HeaderMovil = ({ perfil }) => {
  return (
    <>

      <header className='header-movil'>
        <section className='seccion-elementos logo'>
          <img src="../public/Iconos/logo.png" alt="MovieStar" />
        </section>

        <section className='seccion-elementos perfil'>
          <h3>{perfil}</h3>
        </section>

      </header>
      <nav className='seccion-elementos'>
        <NavegadorEncabezado></NavegadorEncabezado>
      </nav>
    </>

  )
}
