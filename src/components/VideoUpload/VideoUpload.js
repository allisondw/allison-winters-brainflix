import "../../styles/Main.scss";
import Publish from "../../assets/images/icons/publish.svg";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VideoUpload = () => {

    const [isUploadComplete, setIsUploadComplete] = useState(false);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if(redirect) {
            const timer = setTimeout(() => {
                window.location.href="/";
            }, 1500);
            return() => clearTimeout(timer);
        }
    },[redirect]);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const videoTitle = event.target.title.value;
        const videoDescription = event.target.description.value;
        try {
            await axios.post("http://localhost:8080/videos", {
                title: videoTitle,
                description: videoDescription
            });
            toast.success("Video successfully uploaded!", {
                position: 'top-center',
                autoClose: 1500,
                onClose: () => {
                    setRedirect(true)
                    setIsUploadComplete(true)
                }
            });
            
        } catch (error) {
            console.error("Error uploading video: ", error);
        }
    };

  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
        <div className="upload__section">
            <div className="upload__body">
                <div className="upload__body--top">
                        <h2 className="upload__body--header">Video Thumbnail</h2>
                        <img
                        src={`http://localhost:8080/upload-preview.jpg`}
                        alt="Video thumbnail"
                        className="upload__body--thumbnail-img"
                        />
                </div>
                <form className="upload__body--form" id="upload-form" onSubmit={handleFormSubmit}>
                    <label for="title" className="upload__body--label">
                    Title your videos
                    </label>
                    <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Add a title to your video"
                    className="upload__body--title"
                    required
                    />
                    <label for="description" className="upload__body--label description-label">
                    Add a video description
                    </label>
                    <textarea
                    name="description"
                    id="description"
                    placeholder="Add a description to your video"
                    className="upload__body--description"
                    required
                    />
                </form>
            </div>
            <div className="upload__button">
                <ToastContainer toastStyle={{ color: "#0095FF", fontFamily: "Avenir" }}/>
                
                <button type="submit" form="upload-form" className="upload__button--publish">
                    <img src={Publish} alt="upload" className="upload-btn-svg" />
                    publish
                </button>
                <button className="upload__button--cancel">cancel</button>
            </div>
        </div>
    </section>
  );
};
export default VideoUpload;
