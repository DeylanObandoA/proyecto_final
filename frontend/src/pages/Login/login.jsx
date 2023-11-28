import React, { useRef, useState } from "react";
import './Login.css'


const Login = ({ setCurrUser, setShow }) => {

  const formRef = useRef();
  const [error, setError] = useState(null);

  const login = async (userInfo) => {
    const url = "http://localhost:3001/login";

    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Error desconocido en el servidor");
      localStorage.setItem("token", response.headers.get("Authorization"));
      setCurrUser(data);
      setError(null);
    } catch (error) {
      setError(error.message || "Error desconocido");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: {
        email: data.email,
        password: data.password,
        name: data.name, 
        age: data.age,   
      },
    };
    login(userInfo);
    e.target.reset();
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShow(false);
  };

  return (
    <body className="body2">
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="email">
        Email: <input className="input" type="email"  name="email" placeholder="email" />
        <br />
        </div>

        <div className="password">
        Password: <input className="input" type="password" name="password" placeholder="password" />
        <br />
        </div>

        <input className="submit" type="submit" value="Login" />
      </form>
      <br />
      {error && <div className="msjerror" style={{ color: "red" }}>Error: {error}</div>}
      <div className="gotologin">
        Not registered yet? 
        <br />
        <a className="link" href="#signup" onClick={handleClick}>Signup</a>
        <br />
        here.
      </div>
    </div>
    </body>
  );
};

export default Login;
