import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
const DefaultPost = () => {
  return (
    <div className="postss">
      <div className="postss__first">
        <div className="posts__first__img">
          <img src="/images/profile.png" alt="profile img" />
        </div>
        <div className="posts__first__name">
          <strong>Ankit Saxena</strong> <FaRegCheckCircle className="verify" />
        </div>
        <div className="posts__first__username">
          @ankit12 <span>6m</span>
        </div>
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima id
          iure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere
          aliquid dolores placeat vitae accusamus excepturi officiis magnam
          pariatur?
        </div>
        <div className="postss__details__img">
          <img src="/images/post.jpg" alt="post" />
        </div>
      </div>
    </div>
  );
};

export default DefaultPost;
