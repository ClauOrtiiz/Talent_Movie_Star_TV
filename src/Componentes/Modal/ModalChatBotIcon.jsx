import React from 'react'
import chatBot from '../../../public/Iconos/chatBot.png'
import { ModalChatBot } from './ModalChatBot'
import { useState } from 'react'
import '../Navegador/navegador.css'
import './modalChatBot.css'

export const ModalChatBotIcon = () => {

    //Funcion para modal
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const abrirModal = () => {
        setModalIsOpen(true);
    };

    const cerrarModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <img
                src={chatBot}
                alt="Icono chatBot"
                className='icon-nav'
                onClick={abrirModal}
            />
            <ModalChatBot isOpen={modalIsOpen} closeModal={cerrarModal} className='contenedor-modal'></ModalChatBot>
        </>
    )
}
