import { useRef } from "react";
import "./Signup.css";
import Logotext from "../Logotext/Logotext.jsx";
import Footer from "../Footer/Footer";

const Signup = ({ setCurrUser, setShow }) => {
  // Ref to the form element
  const formRef = useRef();

  // Function to handle the signup process
  const signup = async (userInfo, setCurrUser) => {
    const url = "http://localhost:3001/signup";
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "content-type": "application/json",
          "accept": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      const data = await response.json();

      // Check if the response is not okay, throw an error
      if (!response.ok) throw data.error;

      // Store the token in local storage and set the current user
      localStorage.setItem("token", response.headers.get("Authorization"));
      setCurrUser(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Extract form data using FormData
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    // Prepare user information object
    const userInfo = {
      user: {
        name: data.name,
        email: data.email,
        birthdate: data.birthdate,
        password: data.password,
      },
    };

    // Call the signup function
    signup(userInfo, setCurrUser);

    // Reset the form
    e.target.reset();
  };

  // Function to handle click event
  const handleClick = (e) => {
    e.preventDefault();

    // Show the login form
    setShow(true);
  };

  return (
    <>
      {/* Signup form container */}
      <div className="background1">
        <div className="form-container">
          {/* Signup form */}
          <form className="signup" ref={formRef} onSubmit={handleSubmit}>
            <Logotext />

            {/* Input for name */}
            <div className="input-group">
              <label className="instructions">Name:</label>
              <div className="flex">
                <input className="input" type="text" name="name" placeholder="Name" required />
              </div>
            </div>

            {/* Input for birthdate */}
            <div className="input-group">
              <label className="instructions">Birthdate:</label>
              <div className="flex">
                <input className="input" id="birthdate" type="date" name="birthdate" required />
              </div>
            </div>

            {/* Input for email */}
            <div className="input-group">
              <label className="instructions">Email:</label>
              <div className="flex">
                <input className="input" type="email" name="email" placeholder="Email" required />
              </div>
            </div>

            {/* Input for password */}
            <div className="input-group">
              <label className="instructions">Password:</label>
              <div className="flex">
                <input className="input" type="password" name="password" placeholder="Password" required />
              </div>
            </div>

            {/* Submit button */}
            <input className="submit" type="submit" value="Sign Up" />
          </form>

          {/* Link to login */}
          <div className="gotologin">
            Already have an account? <br />
            <a className="link" href="#login" onClick={handleClick}>
              Log in
            </a>
            <br />
          </div>
        </div>
      </div>

      {/* Footer component */}
      <Footer />
    </>
  );
};

export default Signup;
