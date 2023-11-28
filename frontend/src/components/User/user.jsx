import React from 'react';
import Logout from '../../pages/Logout/Logout.jsx';
import { useState } from "react";
import Login from '../../pages/Login/Login.jsx';
import Signup from '../../pages/Signup/Signup.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import "./User.css";

const User = ({ currUser, setCurrUser }) => {
  const [show, setShow] = useState(true);

  return (
    <header>
      <body className='body3'>
        <Navbar></Navbar> 
        <br />
        <div>
          {currUser ? (
            <div>
              <p> Bienvenido a tu perfil {currUser.name}</p>
              <Logout setCurrUser={setCurrUser} />
            </div>
          ) : (
            show ? (
              <Login setCurrUser={setCurrUser} setShow={setShow} />
            ) : (
              <Signup setCurrUser={setCurrUser} setShow={setShow} />
            )
          )}
        </div>
      </body>
    </header>
  );
};

export default User;
