import React from 'react';
import {PostSend} from "../../types";
import axiosApi from "../../axiosApi";
import AddForm from "../../components/AddForm";
import {useNavigate} from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();
  const createPost = async (post: PostSend) => {
    try {
      await axiosApi.post('/posts.json', post);
      navigate('/');
    } finally {

    }
  };
  return (
    <div>
      <AddForm onSubmit={createPost}/>
    </div>
  );
};

export default NewPost;