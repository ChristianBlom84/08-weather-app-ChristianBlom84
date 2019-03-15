import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  console.log("Navbar props: ", props);
  return (
    <nav>
      <ul>
        <li><Link to="/">Current Weather</Link></li>
        <li><Link to="/daily">Today's Weather</Link></li>
        <li><Link to="/fiveday">5 Day Prognosis</Link></li>
      </ul>
      <div className="tempDiv">
        <button className="tempBut" onClick={() => props.changeUnits("?units=si")}>°C</button>
        <button className="tempBut" onClick={() => props.changeUnits("?units=us")}>°F</button>
      </div>
    </nav>
  )
}

export default Navbar;