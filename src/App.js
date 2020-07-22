import React, { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import "bootstrap/dist/css/bootstrap.min.css";

const pictures = {
  rock:"https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png",
};

function App() {
  let [winnerPerson, setWinnerPerson] = useState(false);

  const callHey = () => {
    console.log("heyeyeye");
    setWinnerPerson(!winnerPerson);
  };
  
  return (
    <><div className="App">
    <div className="container">
      <div className="row mb-3">
        <div className="col-md-8 themed-grid-col">
        <Box imgUrl={pictures.rock} title={"computer"} winner={winnerPerson} alt={"rock"} />
      <button onClick={() => callHey()}>hey!</button>
      <Box imgUrl={pictures.paper} title={"you"} winner={true} alt={"paper"} />

        </div>
      </div>
    </div>
  </div>
      
    </>
  );
}

export default App;
