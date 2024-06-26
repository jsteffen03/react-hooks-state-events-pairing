import React, { useState } from "react";
import video from "../data/video.js";
import About from "./About.js"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <About video={video}/>
    </div>
  );
}

export default App;
