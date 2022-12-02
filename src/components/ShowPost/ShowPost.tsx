import React, {useCallback, useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {PostSend} from "../../types";

const ShowPost = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState<PostSend | null>(null);

  const getOnePost = useCallback(async () => {
    try {
      const postResponse = await axiosApi.get<PostSend>('/posts/' + id + '.json');
      setPost(postResponse.data)
    } finally {

    }
  }, [id]);

  useEffect(() => {
      if (id) {
        getOnePost().catch(console.error);
      }
    }, [id, getOnePost]);

  const deletePost = async () => {
    await axiosApi.delete('/posts/' + id + '.json');
    navigate('/');
  };
  return (
      <div className="card bg-light mt-5 p-3">
        <div className="card-body">
          <h5 className="card-title">Title: {post && post.header}</h5>
          <p className="card-text">Created on:  {post && post.created_at}</p>
          <p className="card-text">Message: {post && post.body}</p>
          <button className="btn btn-danger me-3" onClick={deletePost}>Delete</button>
          <Link to={"/edit-post/" + id} className="btn btn-primary">Edit</Link>
        </div>
      </div>
  );
};

export default ShowPost;