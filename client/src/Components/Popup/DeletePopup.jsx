import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './DeletePopup.css'

const DeletePopup = ({ showModal, setShowModal, deleteHandler}) => {
    return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmación de Borrado</Modal.Title>
          </Modal.Header>
          <Modal.Body>¿Estás segur@ de que quieres eliminar la publicación?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
            <Button variant="primary" onClick={deleteHandler}>Borrar</Button>
          </Modal.Footer>
        </Modal>
      );

}

export default DeletePopup;
