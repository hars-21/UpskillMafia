import "./App.css";
import { BrowserRouter as ReactRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/navbar";
import Login from "./components/Login";

function App() {
  return (
    <>
      <ReactRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </ReactRouter>
    </>
  );
}

export default App;
