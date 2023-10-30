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
    const [ultimaPregunta, setUltimaPregunta] = useState('Hola Cinéfilo, ingrese su consulta aqui');
    async function llamarAchatGpt(mensage) {
        setBloquearEnvio(true); // Bloquea el envío
        setRespuestaChatBot("Un momento porfavor ....")
        setUltimaPregunta(`Tu pregunta: ${mensage}`)
        const misdatos = { pregunta: mensage }
        const respuesta = await fetch('https://yesica-chui-chalco.xyz/app3/api/miOpenAI', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(misdatos)
        })
        const datos = await respuesta.json()

        setRespuestaChatBot(datos.data)
        setBloquearEnvio(false);

        // setTimeout(() => {
        //     console.log("respuesta chatbot")
        //     setRespuestaChatBot("Respondiendo desde el chatbot")
        //     setBloquearEnvio(false);
        // }, 9000)

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
            if (message.trim() === "") {
                setRespuestaChatBot("Por favor, ingrese una pregunta.")
                return
            }
            console.log('Texto en el textarea:', message);
            textareaRef.current.value = ""
            llamarAchatGpt(message);
        }
    };

    const reiniciarUltimaPregunta = () => {
        setUltimaPregunta('Hola Cinéfilo, ingrese su consulta aquí');
        setRespuestaChatBot('')
    };

    return (

        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className='seccion-modal'
        >
            <section className='seccion-input'>
                <button onClick={() => {
                    closeModal();
                    reiniciarUltimaPregunta(); // Reiniciar ultimaPregunta
                }} className='close-modal'>X</button>
                <section className='seccion-title'>
                    <h3>{ultimaPregunta}</h3>
                </section>

                <textarea  maxlength="200" disabled={bloquearEnvio} ref={textareaRef} className='textarea-pregunta' placeholder='Ingrese su pregunta...' onKeyUp={handleKeyPress} />
                <section >
                    <button  
                        style={!bloquearEnvio ? {} : {
                            backgroundColor: ' rgba(235, 201, 89, 0.76)',
                            color: '#fff',
                            cursor: 'not-allowed',
                            
                            /* Otros estilos normales aquí */
                        }}
                        onClick={handleEnviarClick} disabled={bloquearEnvio} className='button-enviar'>Enviar</button>
                </section>

                <p>{respuestaChatBot}</p>
            </section>


        </Modal >


    )
}
