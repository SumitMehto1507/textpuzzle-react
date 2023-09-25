import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert";
import React, { useState } from "react";
import Aboutus from "./components/Aboutus";
// import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  const [alert, setalert] = useState("null")

  const showalert = (type, message) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 800);
  }

  const [mode, setmode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "gray";
      showalert("Succses", "Darkmode Enable");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Succses", "Lightmode Enable");
    }
  };

  return (
    <>
      <Router>
        <Navbar tittle="TextPuzzle" mode={mode} toggleMode={toggleMode} />
        
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<Aboutus/>} />
          <Route exact path="/" element = {<Textarea mode={mode} showalert={showalert}/>}/>
        </Routes>
        {/* <Footer  mode={mode} /> */}
      </Router>
    </>
  )
}

export default App;
