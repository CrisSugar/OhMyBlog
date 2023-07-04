import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from '../../context';
import DeletePopup from '../Popup/DeletePopup';
import './DeleteButton.css';

const DeleteButton = ({ postId }) => {

  const { state, dispatch } = useContext(AppContext);
  const [showPopup, setShowPopup] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);
  const [showModal, setShowModal] = useState(false);


  const deleteHandler = async () => {
    try {
      const url = new URL(`http://localhost:9000/posts/${postId}`);

      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
      //
      const imageUrl = `http://localhost:9000/images/${data.filename}`;
      console.log(imageUrl)
      await fetch(imageUrl, {
        method: "DELETE",
      });//

      dispatch({ type: 'DELETE_POST', payload: postId });

      setShowModal(false);

      window.location.href = '/public';

      return data;
    } catch (error) {
      console.error('Error al borrar la publicación: ', error)
      throw error;
    }
  }
  const handleDeleteTrue = async () => {
    await deleteHandler(postIdToDelete);
    setShowPopup(false);
    setShowModal(true);
  }

  const handleDeleteFalse = () => {
    setShowPopup(false);
  }

  return (
    <>
      <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="icons/font/bootstrap-icons.css" />
      </head>

      {showPopup && (
        {/* <Popup
          handleDeleteTrue={handleDeleteTrue}
          handleDeleteFalse={handleDeleteFalse}
        /> */}
      )}
      <button onClick={() => setShowModal(true)} className='deleteBut' type='button' /* data-bs-toggle="modal" data-bs-target="#staticBackdrop" */><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill " viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
      </svg></button>

      {showModal && (
        <DeletePopup
          showModal={showModal}
          setShowModal={setShowModal}
          deleteHandler={deleteHandler}
        />
      )}


    </>
  );


};


export default DeleteButton;