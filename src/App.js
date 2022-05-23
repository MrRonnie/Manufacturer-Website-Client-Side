import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
