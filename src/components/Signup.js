import React, { useState} from 'react'
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const host = "http://localhost:5000";
    const [credentials, setCredentials] = useState({
      name: "",
      email: "",
      password: "",
      cpassword: "",
    });
    let navigate = useNavigate();
    // Check if user is already logged in
    if (localStorage.getItem("token")) {
      navigate("/");
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      const { name, email, password } = credentials;
      const response = await fetch(`${host}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        //Save the Auth Token and Redirect
        localStorage.setItem("token", json.authtoken);
        navigate("/");
        alert("Account created successfully");
      } else {
        alert("Invalid Credentials");
      }
    };
  
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  
  return (
    <>
    <div className="signupClass">

      <h1 style={{marginBottom:"3rem"}}><center>Stay Fit Stay Healthy - Sign Up now</center></h1>
    <div className="signupContainer">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            required
            minLength={5}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            onChange={onChange}
            required
            minLength={5}
          />
        </div>

        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
    </div>
    </>
  )
}

export default Signup
