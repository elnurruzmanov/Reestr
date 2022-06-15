import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Home/Header";
import Register from "./components/Register/Register";
import News from "./components/News/News";
import Documents from "./components/Documents/Documents";
import Answers from "./components/Answers/Answers";
import Footer from "./components/Footer/Footer";
import Authorization from "./components/Authorization/Authorization";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Register />
      <News />
      <Documents />
      <Answers />
      <Footer />
      <Authorization />
    </>
  );
}

export default App;
