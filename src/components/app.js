import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopBar from "./topBar";
import Human from "./human";
import Dwarf from "./dwarf";

// name
// race
// role
// health
// damage

const CharacterCreation = () => {
  return (
    <div className="character-creation-container">
      <div className="topBar">
        <TopBar />
      </div>

      <div className="character-role">
        <Router>
          <Switch>
            <Route exact path="/" component={Human} />
            <Route path="/human" component={Human} />
            <Route path="/dwarf" component={Dwarf} />
          </Switch>
        </Router>

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
      </div>
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
