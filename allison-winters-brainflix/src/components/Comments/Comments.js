import React from "react";
import "../../styles/Main.scss";
import videoDetailsData from "../../data/video-details.json";
import { useState } from 'react';
import NewComment from "./NewComment.js";
import UserComments from "./UserComments.js";

const Comments = () => {
    return (
        <>
            <NewComment />
            <UserComments />
        </>
    )
}

export default Comments;