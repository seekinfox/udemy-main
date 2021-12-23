import React, { useState, useEffect } from "react";
import AccordSec from "./components/AccordSec/AccordSec";
import CallAction from "./components/CallActions/CallActions";
import CoursesStats from "./components/CoursesStats/CoursesStats";
import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/navbar/Navbar";
import "./stylesheets/main.scss";

function App() {
  const[width, setWindowWidth] = useState(0); 
  useEffect(() => {
    updateDim();
    window.addEventListener("resize", updateDim);
    return () => {
      window.removeEventListener("resize", updateDim);
    }
  }, [])

  const updateDim = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }
  const responsive = {
    showTopNavMenu: width > 1023
  }

  return (
    <div className="App">
      <Navbar />
      <Header />
      <AccordSec />
      <CoursesStats /> 
      <Featured />
      <CallAction />
      <Footer />
    </div>
  );
}

export default App;
