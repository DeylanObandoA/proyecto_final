import React from "react"
import logotext from './logotext.png';
import './Logotext.css';

export default function Logotext() {
  return (
    <div>
      <img className="logotext" src={logotext} alt="logo" />
    </div>
  )
}
