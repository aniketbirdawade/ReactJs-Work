import React from "react";
import Navbar from "./assets/Navbar";
import "./App.css"

function App() {
  let name = "Aniket";

  return (
    <>
      <div>
        <h1>Welcome to my app {name}</h1>
      </div>

       <Navbar />
    </>
  );
}

export default App;
