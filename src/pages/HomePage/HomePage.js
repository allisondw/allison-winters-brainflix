import "../../styles/Main.scss";
import Header from "../../components/Header/Header.js";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo.js";

const HomePage = () => {
  return (
    <section>
      <Header />
      <SelectedVideo />
    </section>
  );
};
export default HomePage;