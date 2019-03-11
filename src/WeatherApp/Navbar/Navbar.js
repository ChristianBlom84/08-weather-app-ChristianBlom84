import React from 'react';

function Navbar(props) {
  console.log("Navbar props: ", props);
  return (
    <nav>
      <ul>
        <li><a href="#">Current Weather</a></li>
        <li><a href="#">Today's Weather</a></li>
        <li><a href="#">5 Day Prognosis</a></li>
      </ul>
      <div className="tempDiv">
        <button className="tempBut" onClick={() => props.changeUnits("?units=si")}>°C</button>
        <button className="tempBut" onClick={() => props.changeUnits("?units=us")}>°F</button>
      </div>
    </nav>
  )
}

export default Navbar;