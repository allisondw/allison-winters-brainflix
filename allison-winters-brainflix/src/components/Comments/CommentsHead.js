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


// numOfComments = object.comments.length 
// (happens after comment has been submitted for the count to be updated)
// needs to be able to reference video held in state, object id