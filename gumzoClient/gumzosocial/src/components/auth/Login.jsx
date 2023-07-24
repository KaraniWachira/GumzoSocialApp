import React, { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
        UserName,
        Password
    };
    console.log(loginData)

    try {
        const response = await axios.post(
            "http://localhost:5190/users/login",
            loginData,
            {
                withCredentials: true,
            }
        );
        navigate('/home');
        
    } catch (error) {
        if (error.response) {
            console.log("server error:", error.response.data);
        } else if (error.request) {
            console.log("server not responding:", error.request);
        } else {
            console.log("error:", error.message);
        }   
    }
  };

  return (
    <div className="login template d-flex justify-content-right align-items-center vh-100 background-image: url(background-image: url(https://unsplash.com/photos/V5vqWC9gyEU)" >
      <div className="form-container p-5 rounded bg-white">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Sign in to Gumzo</h3>
          <div className="mb-2">
            <label htmlFor="username"></label>
            <input
              type="username"
              placeholder="Enter your username"
              className="form-control"
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password"></label>
            <input
              type="password"
              placeholder="Enter your password"
              className="form-control"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <div className="mb-2">
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember me
            </label>
          </div> */}
          <div className="d-grid">
            {/* <p className='text-center mt-2'> Login</p> */}
            <Link to= '/home' className="ms-2"> <button className=" btn btn-primary">login</button></Link>
          </div>
        </form>
        <p className="text-end mt-2">
            Forgot <a href="">Password?</a>
            <Link to="/signup" className="ms-2">
              Sign up{" "}
            </Link>
          </p>

      </div>
    </div>
  );
};

export default Login;
