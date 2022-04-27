import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Homescreen from "./screens/Homescreen";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Homescreen/>
    </div>
  );
}

export default App;