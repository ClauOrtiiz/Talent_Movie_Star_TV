import React from 'react'
import { NavegadorEncabezado } from '../Navegador/NavegadorEncabezado'
import { Buscador } from '../../pages/ComponenteTest/Buscador/Buscador'
import logo from '../../assets/logo.png'
export const HeaderEscritorio = (perfil) => {


    return (
        <>

            <header className='header-movil'>
                <section className='seccion-elementos logo'>
                    <img src={logo} alt="MovieStar" />
                </section>
                <section className='seccion-buscador-escritorio'>
                    <Buscador></Buscador>
                </section>
               
                <section className='seccion-elementos perfil'>
                    <spam>{perfil}</spam>
                </section>

            </header>
            
            <nav className='seccion-elementos'>
                <NavegadorEncabezado></NavegadorEncabezado>
            </nav>
        </>

    )
}
