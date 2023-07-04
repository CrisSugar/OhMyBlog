import React, { Fragment, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AppProvider } from './context';
import Home from './Components/Home/Home';
import SinglePost from './Components/SinglePost/SinglePost';
import AddPost from './Components/AddPost/AddPost';
import Error404 from './Components/Error404/Error404';



function App() {

  return (
    <AppProvider>

        <Routes>

          <Route path="/" element={<Navigate to="/public" />} />
          <Route path="/public" element={<Home />} />
          <Route path="/singlePost/:postId" element={<SinglePost />} />
          <Route path="/addPost" element={<AddPost />} />
          <Route path="*" element={<Error404 />} />

        </Routes>

    </AppProvider>
  );
}

export default App;
