import React from 'react';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#">Current Weather</a></li>
        <li><a href="#">Today's Weather</a></li>
        <li><a href="#">5 Day Prognosis</a></li>
      </ul>
      <input type="dropdown"></input>
    </nav>
  )
}

export default Navbar;