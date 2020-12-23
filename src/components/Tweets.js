import React, { useState } from "react";
import CreateTweet from "./CreateTweet";
import DefaultPost from "./DefaultPost";
import Post from './Post';
import { Link } from 'react-router-dom';

const Tweets = () => {
  const [posts, setPosts] = useState(['sample post']);
  const [content, setContent] = useState('');

  return (
    <div className="posts">
      <div className="header">
        <Link to="/" style={{ textDecoration: 'none' }}>      
        <div className="posts__home">Post App</div>
        </Link>
        <Link to="/note" style={{ textDecoration: 'none' }}>
          <div className="posts__home">Notepad App</div>
        </Link>
      </div>
      <CreateTweet content={content} setContent={setContent} posts={posts} setPosts={setPosts} />
      {posts.map(post => { // use map
        return (
          <Post content={post} />
        )
      })
      }
      <DefaultPost />
      <DefaultPost />
    </div>
  );
};

export default Tweets;