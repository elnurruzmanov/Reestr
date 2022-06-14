import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Home/Header';
import Register from './components/Register/Register';
import News from './components/News/News';
import Documents from './components/Documents/Documents';
import Answers from "./components/Answers/Answers"
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Header />
    <Register />
    <News />
    <Documents />
    <Answers />
    </div>
  );
}

export default App;
