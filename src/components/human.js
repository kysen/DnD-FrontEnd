import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import humanCleric from "../../static/images/characterImages/Human/Human-Cleric.png";
import humanFighter from "../../static/images/characterImages/Human/Human-Fighter.jpg";
import humanPaladin from "../../static/images/characterImages/Human/Human-Paladin.jpg";
import humanRanger from "../../static/images/characterImages/Human/Human-Ranger.jpg";
import humanRouge from "../../static/images/characterImages/Human/Human-Rouge.jpg";

const Human = props => {
  return (
    <div>
      <h1>Role: {props.role}</h1>
      <div className="roles">
        <div className="role-wrapper">
          <h3>Cleric</h3>
          <img onClick={() => props.funcSetRole("Cleric")} src={humanCleric} />
        </div>
        <div className="role-wrapper">
          <h3>Fighter</h3>
          <img
            onClick={() => props.funcSetRole("Fighter")}
            src={humanFighter}
          />
        </div>
        <div className="role-wrapper">
          <h3>Paladin</h3>
          <img
            onClick={() => props.funcSetRole("Paladin")}
            src={humanPaladin}
          />
        </div>
        <div className="role-wrapper">
          <h3>Ranger</h3>
          <img onClick={() => props.funcSetRole("Ranger")} src={humanRanger} />
        </div>
        <div className="role-wrapper">
          <h3>Rouge</h3>
          <img onClick={() => props.funcSetRole("Rouge")} src={humanRouge} />
        </div>
      </div>
    </div>
  );
};
export default Human;
