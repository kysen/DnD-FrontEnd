import React from "react";

import dwarfCleric from "../../static/images/characterImages/Dwarf/Dwarf-Cleric.jpg";
import dwarfFighter from "../../static/images/characterImages/Dwarf/Dwarf-Fighter.jpg";
import dwarfPaladin from "../../static/images/characterImages/Dwarf/Dwarf-Paladin.jpg";
import dwarfRanger from "../../static/images/characterImages/Dwarf/Dwarf-Ranger.jpg";
import dwarfBarbarian from "../../static/images/characterImages/Dwarf/Dwarf-Barbarian.png";
import dwarfMonk from "../../static/images/characterImages/Dwarf/Dwarf-Monk.jpg";

const Dwarf = props => {
  return (
    <div>
      <h1>Role: {props.role}</h1>
      <div className="roles">
        <div className="role-wrapper">
          <h3>Cleric</h3>
          <img onClick={() => props.funcSetRole("Cleric")} src={dwarfCleric} />
        </div>
        <div className="role-wrapper">
          <h3>Fighter</h3>
          <img
            onClick={() => props.funcSetRole("Fighter")}
            src={dwarfFighter}
          />
        </div>
        <div className="role-wrapper">
          <h3>Paladin</h3>
          <img
            onClick={() => props.funcSetRole("Paladin")}
            src={dwarfPaladin}
          />
        </div>
        <div className="role-wrapper">
          <h3>Ranger</h3>
          <img onClick={() => props.funcSetRole("Ranger")} src={dwarfRanger} />
        </div>
        <div className="role-wrapper">
          <h3>Rouge</h3>
          <img
            onClick={() => props.funcSetRole("Barbarian")}
            src={dwarfBarbarian}
          />
        </div>
        <div className="role-wrapper">
          <h3>Rouge</h3>
          <img onClick={() => props.funcSetRole("Monk")} src={dwarfMonk} />
        </div>
      </div>
    </div>
  );
};
export default Dwarf;
