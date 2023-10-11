import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Image } from "./pages/Image";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image/:id" element={<Image />} />
      </Routes>
    </div>
  );
}

export default App;
