import React, {useCallback, useEffect, useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./containers/Home/Home";
import {PostsList, PostType} from "./types";
import axiosApi from "./axiosApi";
import NewPost from "./containers/NewPost/NewPost";
import ShowPost from "./components/ShowPost/ShowPost";
import EditPost from "./components/EditPost/EditPost";
import Contacts from "./components/Contacts/Contacts";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  const location = useLocation();
  const [posts, setPosts] = useState<PostType[]>([]);

  const requestPosts = useCallback(async () => {
    try {
      const postsResponse = await axiosApi.get<PostsList>('/posts.json');
      const posts = Object.keys(postsResponse.data).map(key => {
        const post = postsResponse.data[key];
        post.id = key;
        return post;
      });

      setPosts(posts);
    } finally {
    }
  }, []);

  useEffect(() => {
    void requestPosts();
  }, [requestPosts, location]);

  return (
    <>
      <header> <Navbar/></header>

      <main className="container-fluid">
        <Routes>
          <Route path="/" element={(
            <Home posts={posts}/>
          )}/>

          <Route path="/add-post" element={<NewPost/>}/>

          <Route path="/show-post/:id" element={<ShowPost/>}/>

          <Route path="/edit-post/:id" element={<EditPost/>}/>

          <Route path="/contacts" element={<Contacts/>}/>

          <Route path="/about" element={<AboutUs/>}/>

          <Route path="*" element={(
            <div className="d-flex justify-content-center mt-5">
              <h2>Sorry :( Page, not found</h2>
            </div>)}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
