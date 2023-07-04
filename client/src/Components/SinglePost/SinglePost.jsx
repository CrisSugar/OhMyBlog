import React, { useContext, useState, useEffect } from 'react';
import moment from 'moment/moment';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context';
import NavBar from '../NavBar/NavBar';
import DeleteButton from '../DeleteButton/DeleteButton';
import './SinglePost.css';


const SinglePost = (props) => {
  const { state } = useContext(AppContext);
  const { posts } = state;
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [imageUrl, setImageUrl] = useState('');


useEffect(() => {
  const fetchPost = async () => {
    try {
      const url = new URL(`http://localhost:9000/posts/${postId}`);
      const response = await fetch(url);
      const data = await response.json();
      setPost(data); 
      
    } catch (error) {
      console.error('Error al obtener la publicación: ', error);
    }
  };

  fetchPost();
}, [postId]);

  const [editedData, setEditedData] = useState({
    title: post.title,
    content: post.content
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = async () => {
    try {
      const url = new URL(`http://localhost:9000/posts/${post.id}`);
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedData),
      });
      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error('Error al editar la publicación: ', error);
      throw error;
    }
  };

  return (
    <>
      <NavBar />
      {post && ( 
      <div className='row postCard'>
        <div className='col-2'></div>
        <div className='col-8 centrumCard row '>
          <div className='mainCard col-7'>
            <h1>{isEditMode ? <input className='col-12' value={editedData.title} onChange={e => setEditedData({ ...editedData, title: e.target.value })} /> : post.title}</h1>
            <p className='postDateCreat'><small>publicado el: {moment(post.createdAt).format('DD-MM-YYYY [a las] HH:mm:ss')} </small></p>
            <p className='contentCard'>{isEditMode ? <textarea className='col-12' value={editedData.content} onChange={e => setEditedData({ ...editedData, content: e.target.value })} /> : post.content}</p>
            {isEditMode ? (
              <button onClick={handleSave} className=' butEdition'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save2 " viewBox="0 0 16 16">
              <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5h2a.5.5 0 0 1 .354.854l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5A.5.5 0 0 1 5.5 6.5h2V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
            </svg></button>
            ) : (
              <button onClick={handleEdit} className='butEdition'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil " viewBox="0 0 16 16">
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg></button>
            )}
            <DeleteButton id='butDeleted' postId={post.id} posts={posts} />
          </div>

          <div className='cardImage col-5'>
            <img src={`http://localhost:9000/public/${post.image}`} alt={post.title} className='col-12' />
          </div>
        </div>

        <div className='col-2'></div>
      </div>
      )}
    </>
  );
};

export default SinglePost;


