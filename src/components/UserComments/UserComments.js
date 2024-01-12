import React from "react";
import "../../styles/Main.scss";

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

const UserComments = ({ comments }) => {
  const PostedComment = comments.map((comment) => {
    const name = comment.name;
    const body = comment.comment;
    const date = formatDate(comment.timestamp);
    return (
      <section className="comments__posted">
        <article className="comments__posted--card">
          <div className="comments__posted--left">
            <div className="comments__posted--user-img">
              <img src="/" alt="user profile image"></img>
            </div>
          </div>
          <div className="comments__posted--right">
            <div className="comments__posted--top">
              <div className="comments__posted--name">{name}</div>
              <div className="comments__posted--date">{date}</div>
            </div>
            <div className="comments__posted--body">{body}</div>
          </div>
        </article>
      </section>
    );
  });
  return <section className="comments">{PostedComment}</section>;
};
export default UserComments;
