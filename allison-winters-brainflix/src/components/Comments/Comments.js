import React from "react";
import "../../styles/Main.scss";
import NewComment from "./NewComment.js";
import UserComments from "./UserComments.js";
import CommentsHead from "./CommentsHead.js";

const Comments = ( {videoData }) => {
    const numVidComments = videoData.comments.length;
    return (
        <>
            <CommentsHead 
            commentsCount = {numVidComments}
            />
            <NewComment />
            <UserComments comments = {videoData.comments}/>
        </>
    )
}

export default Comments;