import "./App.css";
import Navbar from "./components/Navbar.js";
import Textarea from "./components/Textarea.js";
import Alert from "./components/Alert.js";
import React, { useState } from "react";
// import Aboutus from "./components/Aboutus.js";
// import Footer from "./components/Footer";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

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
      {/* <Router> */}
        <Navbar tittle="TextPuzzle" mode={mode} toggleMode={toggleMode} />
        
        <Alert alert={alert} />
        {/* <Routes> */}
        {/* <Aboutus/> */}
        <Textarea mode={mode} showalert={showalert}/>
          {/* <Route exact path="/about" element={} />
          <Route exact path="/" element = {}/> */}
        {/* </Routes> */}
        {/* <Footer  mode={mode} /> */}
      {/* </Router> */}
    </>
  )
}

export default App;
