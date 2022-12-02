import React, {useState} from 'react';
import {NewPostType, PostSend} from "../types";

interface Props {
  onSubmit: (post: PostSend) => void;
  existingPost?: PostSend;
}

const AddForm: React.FC<Props> = ({onSubmit, existingPost}) => {
  let currentTime: string = new Date().toJSON().slice(0, 16);
  const initialState =existingPost ? {
    ...existingPost,
  } : {
    header: '',
    created_at: currentTime,
    body: '',
  };

  const [post, setPost] = useState<NewPostType>(initialState);

  const onPostChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setPost(prev => ({...prev, [name]: value, created_at: currentTime}));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...post
    })
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4 className="mt-4">{existingPost ? 'Edit post' : 'Add post'}</h4>
      <div className="form-group mt-3">
        <p><span>{existingPost ? 'Created time: ' : 'Current time: '}</span>{post.created_at}</p>
        <label htmlFor="name">Title</label>
        <input
          id="header" name="header" type="text"
          className="form-control"
          value={post.header}
          onChange={onPostChange}
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="description">Description</label>
        <textarea
          id="body" name="body"
          className="form-control"
          value={post.body}
          onChange={onPostChange}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">{existingPost ? 'Edit' : 'Add'}</button>
    </form>
  );
};

export default AddForm;