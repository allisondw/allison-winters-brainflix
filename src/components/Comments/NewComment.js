import React from "react";
import "../../styles/Main.scss";
import userPic from "../../assets/images/Mohan-muruge.jpg";
import commentSVG from "../../assets/images/icons/add_comment.svg";

const NewComment = () => {
    return (

        <section class="submit-section">
            <div class="submit-section__div">
                <img src={userPic} alt="user" class="submit-section__user-pic" />
                <form id="submit-section__form" class="submit-section__form">
                    <div className="submit-section__form-group">
                        <label for="comment-field" class="form__label">Join the Conversation</label>                        
                        <textarea 
                            id="comment-field" 
                            name="comment-field" 
                            placeholder=" Add a new comment"
                            class="comment-field"
                            required>
                        </textarea>                            
                    </div>
                    <button type="submit" value="COMMENT" class="comment-button"><img src={commentSVG} alt="" className="comment-button-svg"/>COMMENT</button>
                </form>
            </div>                     
        </section>
    )
}

export default NewComment;

