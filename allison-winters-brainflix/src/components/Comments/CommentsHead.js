import React from "react";
import "../../styles/Main.scss";

const CommentsHead = ({commentsCount}) => {
    return (
        <div>
            <h2 className="comments-heading">{commentsCount} Comments</h2>
        </div>
    )
}

export default CommentsHead;
