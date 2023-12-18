import React from 'react';
import { useState } from 'react';
import Logoimg from '../Navbar/logotext.png';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
  const [searchCourse, setSearchCourse] = useState('');

  const normalizedText = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const handleSearchChange = (e) => {
    const textUser = e.target.value;
    setSearchCourse(normalizedText(textUser)); // Normalizar el texto antes de establecer el estado
  };

  const searchclick = () => {
    onSearch(searchCourse);
  };

  const detectenter = (e) => {
    e.key === 'Enter' && onSearch(searchCourse)
  };

  return (
    <>
      <div className="navbar">
        <img className='logoside' src={Logoimg} alt="logo" />
        <div className="search">
          <input
            onChange={handleSearchChange}
            className='textseeker'
            type="text"
            placeholder="categoria del curso, o nombre"
            onKeyDown={detectenter}
          />
          <button
            onClick={searchclick}
            className='seeker'
          >Buscar</button>
        </div>
        <div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
