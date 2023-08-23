import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
import About from "./component/About";
import Service from "./component/Service";
import Skill from "./component/Skill";
import Blogs from "./component/Blogs";
import Bloggs from "./component/Blogss";
import Blog from "./component/Blog";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="#about" element={<About />} exact></Route>
          <Route path="#services" element={<Service />} exact></Route>
          <Route path="#skills" element={<Skill />} exact></Route>
          <Route path="#blogs" element={<Blogs />} exact></Route>
          <Route path="#contact" element={<Contact />} exact></Route>
          <Route path="/blogs" element={<Bloggs />} exact></Route>
          <Route path="/blog/:id" element={<Blog />} exact></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
