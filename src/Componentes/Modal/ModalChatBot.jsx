import React from 'react'
import { useEffect, useRef } from 'react';
import Modal from 'react-modal'
import './modalChatBot.css'

Modal.setAppElement('#root');

Modal.defaultStyles.overlay.zIndex = 1000;
Modal.defaultStyles.content.zIndex = 1001;

export const ModalChatBot = ({ isOpen, closeModal }) => {


    return (

        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className='seccion-modal'
        >
            <section className='seccion-input'>

                <section className='seccion-enviar'>
                    <h2>Hola Cinéfilo, ingrese su consulta aqui </h2>
                    <button onClick={closeModal} className='close-modal'>X</button>
                </section>
                <textarea className='textarea-pregunta' placeholder='Ingrese su pregunta...' />
                <button className='button-enviar'>Enviar</button>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, consectetur delectus ob
                    caecati animi, incidunt atque excepturi deserunt consequuntur rerum quaerat debitis quod ducimus
                    . Sit doloribus hic perspiciatis quos quod ipsum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, consectetur delectus ob
                    caecati animi, incidunt atque excepturi deserunt consequuntur rerum quaerat debitis quod ducimus
                    . Sit doloribus hic perspic excepturi deserunt consequuntur rerum quaerat debitis quod ducimus
                    . Sit doloribus hic perspiciatis quos quod ipsum</p>
            </section>


        </Modal >


    )
}
