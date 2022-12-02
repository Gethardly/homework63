import React from 'react';
import {Link} from "react-router-dom";
import {PostType} from "../../types";
import Posts from "../../components/Posts/Posts";

interface Props {
  posts: PostType[];
}

const Home: React.FC<Props> = ({posts}) => {
  return (
    <>
      <Posts posts={posts}/>
    </>
  );
};

export default Home;