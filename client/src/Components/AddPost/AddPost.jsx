import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import './AddPost.css';

const AddPost = () => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null)

  const selectedHandler = e => {
    setFile(e.target.files[0]);
    setImage(e.target.files[0].name); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert('Debes adjuntar un archivo')
      return;
    }

    const formData = new FormData();
    formData.append('image', file);


    fetch('http://localhost:9000/images/post', {
      method: 'POST',
      body: formData
    })
      .then(res => res.text())
      .then(res => {
        console.log(res);
      
        const postData = {
          image: res, 
          title: title,
          content: content
        };
        fetch('http://localhost:9000/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postData)
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setFile(null);
            setImage('');
            setTitle('');
            setContent('');
            document.getElementById('fileInput').value = null
          })
          .catch(error => {
            console.error(error);
          });
      })

      .catch(err => {
        console.error(err)
      })

  }


  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <div className='container mt-5'>
          <div className='card p-3'>
            <div className='row'>
              <div className='col-10'>
                <input id='fileInput' onChange={selectedHandler} className='form-control' type='file'></input>
              </div>
              <div className='col-2'>
              </div>
              {image && <img src={URL.createObjectURL(file)}  alt="Preview" className='col-2' />}<p><small>Imagen Previa</small></p>

            </div>

            <input type="text" value={title} placeholder='Escribe el título' onChange={(e) => setTitle(e.target.value)} />
            <textarea value={content} placeholder='Escribe el contenido' onChange={(e) => setContent(e.target.value)}></textarea>
          </div>
          <button type="submit">Guardar</button>
        </div>

      </form>
    </>
  );
};

export default AddPost;
