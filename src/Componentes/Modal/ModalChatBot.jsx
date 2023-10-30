import React, { useState } from 'react'
import { useEffect, useRef } from 'react';
import Modal from 'react-modal'
import './modalChatBot.css'

Modal.setAppElement('#root');

Modal.defaultStyles.overlay.zIndex = 1000;
Modal.defaultStyles.content.zIndex = 1001;

export const ModalChatBot = ({ isOpen, closeModal }) => {
    const textareaRef = useRef(null);
    const [respuestaChatBot, setRespuestaChatBot] = useState("")
    const [bloquearEnvio, setBloquearEnvio] = useState(false);
    // const [inputText, setInputText] = useState('');
    async function llamarAchatGpt(mensage) {
        setBloquearEnvio(true); // Bloquea el envío
        /*
        const misdatos = { pregunta: mensage }
        const respuesta = await fetch('http://localhost:3100/api/miOpenAI', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(misdatos)
        })
        const datos = await respuesta.json()
        return datos.data
        */
        setTimeout(() => {
            console.log("respuesta chatbot")
            setRespuestaChatBot("Respondiendo desde el chatbot")
            setBloquearEnvio(false);
        }, 9000)
        setRespuestaChatBot("Un momento porfavor ....")
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !bloquearEnvio) {
            e.preventDefault(); // Evita que se realice un salto de línea
            const message = textareaRef.current.value;
            console.log('Texto en el textarea:', message);
            textareaRef.current.value = ""
            llamarAchatGpt(message);
        }
    };

    const handleEnviarClick = () => {
        if (!bloquearEnvio) {
            const message = textareaRef.current.value;
            console.log('Texto en el textarea:', message);
            textareaRef.current.value = ""
            llamarAchatGpt(message);
        }
    };

    return (

        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className='seccion-modal'
        >
            <section className='seccion-input'>
                <section className='seccion-enviar'>
                    <h2>Hola Cinéfilo, ingrese su consulta aqui </h2>
                    <button
                        style={!bloquearEnvio ? {} : {
                            backgroundColor: 'gray',
                            color: '#999',
                            cursor: 'not-allowed',
                            /* Otros estilos normales aquí */
                        }}
                        onClick={handleEnviarClick} disabled={bloquearEnvio}>Enviar</button>
                </section>
                <textarea disabled={bloquearEnvio} ref={textareaRef} className='textarea-pregunta' placeholder='Ingrese su pregunta...' onKeyUp={handleKeyPress} />

                <p>{respuestaChatBot}</p>
            </section>

            <button onClick={closeModal} className='close-modal'>X</button>
        </Modal >


    )
}
