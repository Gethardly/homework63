import React, {useCallback, useEffect, useState} from 'react';
import AddForm from "../AddForm";
import {PostSend} from "../../types";
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";

const EditPost = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<PostSend | null>(null);

  const getOnePost = useCallback(async () => {
    const postResponse = await axiosApi.get<PostSend | null>('/posts/' + id + '.json');
    const pst = postResponse.data;
    setPost(pst);
  },[id]);

  useEffect(() => {
    if(id) {
      getOnePost().catch(console.error);
    }
  },[id, getOnePost]);

  const updatePost = async (post: PostSend) => {
    try {
      await axiosApi.put('/posts/' + id + '.json', post);
      navigate('/');
    } finally {

    }
  };

  return (
    <div>
      {post && <AddForm onSubmit={updatePost} existingPost={post}/>}
    </div>
  );
};

export default EditPost;