import React from 'react';
import {PostType} from "../../types";
import PostCard from "./PostCard";

interface Props {
  posts: PostType[];
}

const Posts: React.FC<Props> = ({posts}) => {
  return (
    <div className="d-flex row gap-3 justify-content-center mt-5">
      {posts.map((post) => (
        <PostCard key={post.id} post={post}/>
      ))}
    </div>
  );
};

export default Posts;