import React from 'react'
import './HeaderMovil.css'
import { NavegadorEncabezado } from '../Navegador/NavegadorEncabezado'
import { Buscador } from '../../pages/ComponenteTest/Buscador/Buscador'

export const HeaderMovil = ({ perfil }) => {
  return (
    <>

      <header className='header-movil'>
        <section className='seccion-elementos logo'>
          <img src="../public/Iconos/logo.png" alt="MovieStar" />
        </section>
        {/* <section>
          <Buscador></Buscador>
        </section> */}

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
