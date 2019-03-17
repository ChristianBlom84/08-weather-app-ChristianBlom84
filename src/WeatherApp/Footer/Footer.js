import React from 'react';
import darkSky from './poweredby-oneline-darkbackground.png';

const Footer = () => {
  return (
    <footer>
      <a href="https://darksky.net/poweredby/"><img src={darkSky} alt="Powered by Dark Sky" /></a>
    </footer>
  );
}
 
export default Footer;