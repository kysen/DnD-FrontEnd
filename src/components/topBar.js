import React, { useState } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

// import humanCleric from "../../static/images/characterImages/Human/Human-Cleric.png";
// import humanFighter from "../../static/images/characterImages/Human/Human-Fighter.jpg";
// import humanPaladin from "../../static/images/characterImages/Human/Human-Paladin.jpg";
// import humanRanger from "../../static/images/characterImages/Human/Human-Ranger.jpg";
// import humanRouge from "../../static/images/characterImages/Human/Human-Rouge.jpg";

const TopBar = () => {
  const [characterName, setCharacterName] = useState("");
  const [race, setRace] = useState("");
  // const [role, setRole] = useState("");

  return (
    <div>
      <div className="topBar">
        <div className="character-name">
          <form>
            <input
              name="characterName"
              value={characterName}
              placeholder="enter name here"
              onChange={e => setCharacterName(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
          {characterName}
          {/* {permanentName} */}
          <h3>Character Name</h3>
        </div>
        <div className="top-bar-right">
          <div className="character-race">
            <h2>Race: {race}</h2>
            <div className="race-buttons">
              <NavLink
                className="nav-link"
                to="/human"
                onClick={() => setRace("Human")}
              >
                Human
              </NavLink>
              <NavLink
                className="nav-link"
                to="/dwarf"
                onClick={() => setRace("Dwarf")}
              >
                Dwarf
              </NavLink>

              <NavLink className="nav-link" onClick={() => setRace("Elf")}>
                Elf
              </NavLink>
              <NavLink className="nav-link" onClick={() => setRace("Halfling")}>
                Halfling
              </NavLink>
              <NavLink className="nav-link" onClick={() => setRace("Orc")}>
                Orc
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <h1>Role: {role}</h1>
        <div className="roles">
          <div className="role-wrapper">
            <h3>Cleric</h3>
            <img onClick={() => setRole("Cleric")} src={humanCleric} />
          </div>
          <div className="role-wrapper">
            <h3>Fighter</h3>
            <img onClick={() => setRole("Fighter")} src={humanFighter} />
          </div>
          <div className="role-wrapper">
            <h3>Paladin</h3>
            <img onClick={() => setRole("Paladin")} src={humanPaladin} />
          </div>
          <div className="role-wrapper">
            <h3>Ranger</h3>
            <img onClick={() => setRole("Ranger")} src={humanRanger} />
          </div>
          <div className="role-wrapper">
            <h3>Rouge</h3>
            <img onClick={() => setRole("Rouge")} src={humanRouge} />
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default withRouter(TopBar);
