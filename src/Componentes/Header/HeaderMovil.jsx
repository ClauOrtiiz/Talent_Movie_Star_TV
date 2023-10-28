import React from 'react'
import './HeaderMovil.css'
import { NavegadorEncabezado } from '../Navegador/NavegadorEncabezado'
import Logo from '../../../public/Iconos/logo.png'
import { Buscador } from '../../pages/ComponenteTest/Buscador/Buscador'

export const HeaderMovil = ({ perfil }) => {
  return (
    <>

      <header className='header-movil'>
        <section className='seccion-elementos logo'>
          <img src={Logo}alt="MovieStar" />
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
