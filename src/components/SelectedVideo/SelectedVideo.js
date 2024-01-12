import Hero from "../Hero/Hero.js";
import About from "../About/About.js";
import Comments from "../Comments/Comments.js";
import NextVideo from "../NextVideo/NextVideo.js";
import "../../styles/Main.scss";

const SelectedVideo = ({ videoData, filteredVideos }) => {
    return (
        <section>
        <Hero videoData = {videoData} />
        <section className="main-below">
          <article className="main__left-column">
            <About videoData = {videoData} />
            <Comments videoData = {videoData} />
          </article>
          <article className="main__sidebar">
            <NextVideo filteredVideos = {filteredVideos} />
          </article>
        </section>
      </section>
    )
}
export default SelectedVideo;