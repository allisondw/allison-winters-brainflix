import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";

const App = () => {
  return (
    <body>
        <Header />
      <main>
        <section className="main__left-column">
          <Hero />
          {/* <Comments /> */}
        </section>
        <section className="main__sidebar">
          {/* <NextVideo /> */}
        </section>


      </main>
    </body>
  )
}


export default App;