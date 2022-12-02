import React from 'react';
import {PostType} from "../../types";
import {Link} from "react-router-dom";

interface Props {
  post: PostType;
}

const PostCard: React.FC<Props> = ({post}) => {
  return (
      <div className="card bg-secondary" style={{width: "60rem"}}>
        <div className="card-body">
          <h5 className="card-title">Created on: {post.created_at}</h5>
          <p className="card-text text-white">{post.header}</p>
          <Link to={"/show-post/" + post.id} className="btn btn-primary">Read more</Link>
        </div>
      </div>
  );
};

export default PostCard;