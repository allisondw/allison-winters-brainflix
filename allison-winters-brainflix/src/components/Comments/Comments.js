import React from "react";
import "../../styles/Main.scss";
import videoDetailsData from "../../data/video-details.json";
import { useState } from 'react';

const Comments = () => {

    const [commentsData, setCommentsData] = useState(videoDetailsData[0]);

    const { comments } = commentsData;

    const PostedComment = comments.map((comment) => {
        const name = comment.name;
        const body = comment.comment;
        const date = comment.timestamp;
        return (
            <>
                <section class="submit-section">
                    <article class="submit-section__new-comment">
                        <h2 class="submit-section__title">Join the Conversation</h2>
                        <div class="submit-section__form-div">
                            <img src="/" alt="user" class="submit-section__user-pic" />
                            <form id="submit-section__form" class="submit-section__form">

                                <label for="name-field" class="form__label">NAME</label>

                                <input 
                                type="text" 
                                id="name-field" 
                                name="name-field" 
                                placeholder=" Enter your name"
                                class="name-field"
                                required
                                />

                                <label for="comment-field" class="form__label">COMMENT</label>

                                <textarea 
                                id="comment-field" 
                                name="comment-field" 
                                placeholder=" Add a new comment"
                                class="comment-field"
                                required>
                                </textarea>
                                
                                <button type="submit" value="COMMENT" class="button">comment</button>
                            </form>
                        </div>
                    </article>
                </section>
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
            </>
        )
    });
    

    return (
        <section className="comments">
            {/* <NewComment /> */}
            <div className="comments__posted">
                {PostedComment}
            </div>
        </section>
    )
}

export default Comments;