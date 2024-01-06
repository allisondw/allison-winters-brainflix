import "../src/styles/Main.scss";
import HomePage from "./pages/HomePage.js";
import VideoUploadPage from "./pages/VideoUploadPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/videos/:videoId' element={<HomePage />} />
          <Route path='upload' element={<VideoUploadPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;