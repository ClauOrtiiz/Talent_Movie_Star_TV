import React from 'react'
import Modal from 'react-modal'
import './modalChatBot.css'
 
Modal.setAppElement('#root');

Modal.defaultStyles.overlay.zIndex = 1000; 
Modal.defaultStyles.content.zIndex = 1001;

export const ModalChatBot = ({isOpen, closeModal }) => {
    return (

        <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
      
        className='seccion-modal'
      >
        <button onClick={closeModal} className='close-modal'>X</button>
      </Modal>


    )
}
