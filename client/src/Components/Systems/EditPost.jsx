import React, { useState } from 'react';
/* import { Button } from 'react-bootstrap'; */

const EditPost = ({ post }) => {
  const [title, setTitle] = useState(entry.title);
  const [content, setContent] = useState(entry.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar la llamada a la API FETCH para actualizar la entrada en la base de datos
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      <Button type="submit">Guardar cambios</Button>
    </form>
  );
};

export default EditPost;
