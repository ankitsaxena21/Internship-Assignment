import React from "react";
import {
  FaRegImage,
  FaRegListAlt,
  FaRegSmile,
  FaCalendarCheck,
} from "react-icons/fa";

const CreateTweet = ({ content, setContent, posts, setPosts }) => {

  const submitPost = (e) => {
    e.preventDefault();
    const newPosts = [content, ...posts];
    setPosts(newPosts);
  }

  return (
    <div className="create">
      <div className="create__first">
        <div className="create__img">
          <img src="/images/profile.png" alt="profile img" />
        </div>
        <div className="create__input">
          <input
            type="text"
            className="create__control"
            placeholder="Share something with your class..."
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
      </div>
      <div className="create__second">
        <div className="create__icons">
          <FaRegImage className="ic" />
          <FaRegListAlt className="ic" />
          <FaRegSmile className="ic" />
          <FaCalendarCheck className="ic" />
        </div>
        <div className="create__btn">
          <button type="submit" onClick={submitPost}>Share</button>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
