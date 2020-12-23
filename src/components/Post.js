import React from 'react';
import {FaRegCheckCircle} from "react-icons/fa";

export default function Post({ content }) {
  return (
    <>
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
            {content}
          </div>
        </div>
      </div>
    </>
  );
}
