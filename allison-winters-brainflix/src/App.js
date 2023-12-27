import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import Comments from "./components/Comments/Comments.js";
import "../src/styles/Main.scss";

const App = () => {
  return (
    <body>
        <Header />
      <main>
        <section className="main__left-column">
          <Hero />
          <Comments />
        </section>
        <section className="main__sidebar">
          {/* <NextVideo /> */}
        </section>


      </main>
    </body>
  )
}


export default App;