import React from "react";
import "../../styles/Main.scss";
import userPic from "../../assets/images/Mohan-muruge.jpg";

const NewComment = () => {
    return (

        <section class="submit-section">
            <article class="submit-section__new-comment">
                <h2 class="submit-section__title">Join the Conversation</h2>
                <div class="submit-section__form-div">
                    <img src="{userPic}" alt="user" class="submit-section__user-pic" />
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
    )
}

export default NewComment;

