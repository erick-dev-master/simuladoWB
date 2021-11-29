import { useState } from "react";
import InputParty from "./components/InputParty";
import PartyList from "./components/PartyList";
import "./App.css";

function App() {
  const [people, setPeople] = useState([
    {
      name: "Joao",
      age: 18,
    },
    {
      name: "maria",
      age: 8,
    },
    {
      name: "pedro",
      age: 48,
    },
    {
      name: "fernando",
      age: 15,
    },
    {
      name: "gui",
      age: 35,
    },
    {
      name: "julia",
      age: 41,
    },
    {
      name: "arthur",
      age: 35,
    },
    {
      name: "erick",
      age: 18,
    }
  ]);

  return <div className="App">
    <InputParty people={people} setPeople={setPeople}/>
    <PartyList people={people} setPeople={setPeople}/>
  </div>;
}

export default App;
