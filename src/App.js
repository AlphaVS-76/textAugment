import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";

function App() {
  const [color, setColor] = useState("light");
  const [text, setText] = useState("Dark");
  const [colText, setColText] = useState("black");
  const [bg, setBg] = useState("light");

  const darkMode = () => {
    if (color === "light") {
      setColor("dark");
      setText("Light");
      setColText("white");
      setBg("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setColor("light");
      setText("Dark");
      setColText("black");
      setBg("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar mode={darkMode} t={text} color={color} setCol={colText} />
      <Textarea mode={darkMode} setCol={colText} bg={bg} />
    </>
  );
}

export default App;
