import { useState, useEffect } from "react";

const PrivateText = ({ currUser }) => {
  const [message, setMessage] = useState(null);

  const getText = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No se encontró el token en el almacenamiento local.");
        return;
      }

      const tokenSegments = token.split('.');

      if (tokenSegments.length !== 3) {
        return;
      }

      const payload = JSON.parse(atob(tokenSegments[1]));

      const response = await fetch("http://localhost:3001/private/test", {
        method: "get",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });

      if (!response.ok) {
        console.log("Error en la respuesta:", response.status);
        throw new Error("Error en la solicitud");
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.log("Error en la solicitud:", error);
      setMessage(null);
    }
  };

  useEffect(() => {
    if (currUser) {
      getText();
    }
  }, [currUser]);

  return <div>{message}</div>;
};

export default PrivateText;
