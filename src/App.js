import React, { useState } from 'react';
import './App.css';
import ChoiceCard from './components/ChoiceCard.js'



export const getRoundOutcome = (user, computer) => {

  let result;
  console.log("hehe", user, computer)

  if (user === "rock") {
    result = computer === "scissors" ? "Victory!" : "Defeat!";
  }
  if (user === "paper") {
    result = computer === "rock" ? "Victory!" : "Defeat!";
  }
  if (user === "scissors") {
    result = computer === "paper" ? "Victory!" : "Defeat!";
  }

  if (user === computer) result = "Tie game!";
  return result;
};

export const getRandomChoice = () => {
  let choiceNames = Object.keys(CHOICES);
  console.log("ccc", choiceNames)// returns an array of the keys, so: ['scissors', 'paper', 'rock']
  let randomIndex = Math.floor(Math.random() * 3); // either 0, 1, or 2
  let choiceName = choiceNames[randomIndex];
  return CHOICES[choiceName];
};



export const CHOICES = {
  scissors: {
    name: "scissors",
    url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
  },
  paper: {
    name: "paper",
    url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"
  },
  rock: {
    name: "rock",
    url:
      "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
  }
};


function App() {
  // const DEFAULT_IMG =
  //   "http://www.thewateringhole.co.uk/wp-content/uploads/2012/12/play.png";

  const [gameHistory, setGameHistory] = useState([]);
  const [prompt, setGamePrompt] = useState("Fight!")
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null)

  const onPlayerChoose = playerChoice => {

    const newUserChoice = CHOICES[playerChoice];
    const newComputerChoice = getRandomChoice()
    const result = getRoundOutcome(newUserChoice.name, newComputerChoice.name)

    setPlayerChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
    gameHistory.push(result);

    setResult(result);
    setGameHistory(gameHistory);
    setGamePrompt(result);


  };

  
  return (
    <div className="App">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col">
            <ChoiceCard title="Computer" result={result} imgURL={computerChoice && computerChoice.url} />
            <div className="container">
              <button
                className="btn btn-success btn-lg"
                onClick={() => onPlayerChoose("rock")}>
                Rock
              </button>
              <button
                className="btn btn-success btn-lg"
                onClick={() => onPlayerChoose("paper")}>
                Paper
              </button>
              <button
                className="btn btn-success btn-lg"
                onClick={() => onPlayerChoose("scissors")}>
                Scissors
              </button>
            </div>
            <h1>{prompt}</h1>
            
            <ChoiceCard title="You" result={result} imgURL={playerChoice && playerChoice.url} />
          </div>
          <div className="col-md-4 themed-grid-col">
            <h3>History</h3>
            <ul>
              {gameHistory.map(result => { return <li>{result}</li>; })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// winner={true} imgURL={choices.paper}
// winner={false} imgURL={choices.rock} 

// if using rcc (class component)   always use this.state.thevalue
// import React, { component } from 'react';

// export default class App extends Component{
//   Constructor(){
//     super()
//     this.state = {
//       winner:true
//     }
//   }
// 
// basic example of function eventlistener for a button click
// 
// callHey = () =>{
//   console.log("button fire")
//   this.setState(winnerPerson:!this.StaticRange.winnerPerson)
// }

//   render(){

//   }
// }