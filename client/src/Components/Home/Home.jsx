import React, { useContext } from 'react';
import moment from 'moment/moment';
import { AppContext } from '../../context';
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import DeleteButton from '../DeleteButton/DeleteButton';
import Footer from '../Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {

  const { state, dispatch } = useContext(AppContext);
  const { posts, selectedPostId } = state;
  console.log(posts);

  const handlePostClick = (postId) => {
    dispatch({ type: 'SET_SELECTED_POST_ID', payload: postId });
    localStorage.setItem('selectedPostId', postId);
  };


  return (
    <>
      <head>
        <title>OhmyCity</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
      </head>
      <body>
        <header className='postsHeader'>
          <h1 id='ohmycity'>OhmyCity!</h1>
        </header>
        <div style={{ position: 'sticky', top: '5px', zIndex: '10000' }}>
          <NavBar />
        </div>

        <main className='row mainPosts'>
          <div className='col-3'></div>
          <section className='postsSection col-6'>
            {posts.map((post) => (
              <article key={post.id} id='postArticle' >
                <Link to={`/singlePost/${post.id}`} onClick={() => handlePostClick(post.id)}>
                  <div>{/* <img src={post.image} alt={post.title} className='postImage col-11' /> */}
                  </div>
                  {/* <img src= {imageUrl} alt='prueba' /> */     <img src={`http://localhost:9000/public/${post.image}`} alt={post.title} className='postImage col-11' />
                  }
                  <h2 className='postTitle'>{post.title}</h2>
                </Link>
                <p className='postDateCreat'><small>publicado el: {moment(post.createdAt).format('DD-MM-YYYY [a las] HH:mm:ss')} </small></p>
                <p>{post.content.substring(0, 50)}...</p>
                <DeleteButton postId={post.id} posts={posts} />
              </article>
            ))}
          </section>
          <div className='col-3'></div>
        </main>
        <Footer />
      </body>

    </>
  );
};

export default Home;
