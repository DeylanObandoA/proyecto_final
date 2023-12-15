import React from "react";
import Logout from "../Logout/Logout.jsx";
import "./Profile.css";

const Profile = ({ currUser, setCurrUser }) => {
  // Verifica si currUser está definido antes de intentar acceder a sus propiedades
  const userName = currUser?.name || 'Nombre no disponible';
  const userEmail = currUser?.email || 'Correo electrónico no disponible';

  return (
    <div>
      <div className="profile-container">
        <h2>Bienvenido a tu perfil</h2>
        <p>Nombre: {userName}</p>
        <p>Gmail: {userEmail}</p>
        <Logout setCurrUser={setCurrUser} />
      </div>
    </div>
  );
};

export default Profile;
