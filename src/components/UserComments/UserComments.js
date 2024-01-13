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
      <section className="comments-posted">
        <article className="comments-posted__card">
          <div className="comments-posted__left">
            <div className="comments-posted__user-img">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="user profile"></img>
            </div>
          </div>
          <div className="comments-posted__right">
            <div className="comments-posted__top">
              <div className="comments-posted__name">{name}</div>
              <div className="comments-posted__date">{date}</div>
            </div>
            <div className="comments-posted__body">{body}</div>
          </div>
        </article>
      </section>
    );
  });
  return <section className="comments">{PostedComment}</section>;
};
export default UserComments;
