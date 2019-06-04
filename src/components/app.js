import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import TopBar from "./topBar";
import Home from "./characterHome";
import Human from "./human";
import Dwarf from "./dwarf";

// name
// race
// role
// health
// damage

const CharacterCreation = () => {
  const [characterName, setCharacterName] = useState("");
  const [race, setRace] = useState("");
  const [role, setRole] = useState("");

  const funcSetCharacterName = e => {
    setCharacterName(e);
  };
  const funcSetRace = e => {
    setRace(e);
  };
  const funcSetRole = e => {
    setRole(e);
  };

  const myRouter = race => {
    if (race === "Human") {
      return <Human funcSetRole={funcSetRole} role={role} />;
    }
  };

  const characterSubmit = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://bottega-dd-api.herokuapp.com/Admin/create-character",
      headers: { "content-type": "application/json" },
      data: {
        charName: characterName,
        race: race,
        class: role,
        hp: 20,
        dmg: 4
      }
    })
      .then(() => {
        setCharacterName("");
        setRace("");
        setRole("");
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="character-creation-container">
      <form onSubmit={e => characterSubmit(e)}>
        <button type="submit">im a button</button>
        <div className="topBar">
          <TopBar
            funcSetCharacterName={funcSetCharacterName}
            characterName={characterName}
            funcSetRace={funcSetRace}
            race={race}
          />
        </div>

        <div className="character-role">
          {myRouter(race)}
          {/* <Router funcSetRole={funcSetRole} role={role}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/human" component={Human} />
              <Route path="/dwarf" component={Dwarf} />
            </Switch>
          </Router> */}
        </div>
      </form>

      {/* <div className="role-buttons">
          <button onClick={() => setRole("Barbarian")}>Barbarian</button>
          <button onClick={() => setRole("Bard")}>Bard</button>
          <button onClick={() => setRole("Cleric")}>Cleric</button>
          <button onClick={() => setRole("Druid")}>Druid</button>
          <button onClick={() => setRole("Fighter")}>Fighter</button>
          <button onClick={() => setRole("Monk")}>Monk</button>
          <button onClick={() => setRole("Paladin")}>Paladin</button>
          <button onClick={() => setRole("Ranger")}>Ranger</button>
          <button onClick={() => setRole("Rogue")}>Rogue</button>
          <button onClick={() => setRole("Sorcerer")}>Sorcerer</button>
          <button onClick={() => setRole("Warlock")}>Warlock</button>
          <button onClick={() => setRole("Wizard")}>Wizard</button>
        </div> */}
      <div>
        {/* <h1>{characterName}</h1> */}
        {/* <h1>{race}</h1> */}
        {/* <h1>{role}</h1> */}
        {/* <h1>{health}</h1> */}
        {/* <h1>{damage}</h1> */}
      </div>
    </div>
  );
};

export default CharacterCreation;
