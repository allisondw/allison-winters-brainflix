import React from "react";
import "../../styles/Main.scss";
import videoDetailsData from "../../data/video-details.json";
import { useState } from 'react';

const UserComments = () => {

    const [commentsData, setCommentsData] = useState(videoDetailsData[0]);

    const { comments } = commentsData;

    const PostedComment = comments.map((comment) => {
        const name = comment.name;
        const body = comment.comment;
        const date = comment.timestamp;
        return (
            <section className="comments__posted">
                <article className="comments__posted--card">
                    <div className="comments__posted--left">
                        <div className="comments__posted--user-img">
                            <img src="/" alt=""></img>
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
        )
    });
    
    return (
        <section className="comments">
            {PostedComment}
        </section>
    )
};

export default UserComments;