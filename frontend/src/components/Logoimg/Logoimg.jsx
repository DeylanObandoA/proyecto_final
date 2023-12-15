import React from 'react'
import logoimg from './logoimg.png';
import './Logoimg.css';

export default function Logoimg() {

return (
    <div>
        <img className="logoimg"  src={logoimg} alt="Logo" />
    </div>
    );
};

