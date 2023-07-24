import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios";
import "./styles.css";

const Signup = () => {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [userage, setUserAge] = useState(0);
  const [useremail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false); // Define the success state variable
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPassword((prevPassword) => !prevPassword);
  };

  useEffect(() => {
    let interval;
    if (success) {
      interval = setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      firstname,
      lastname,
      username,
      userage,
      useremail,
      password,
    };
    await axios
      .post("http://localhost:5190/users/signup", user)
      .then((res) => {
        console.log(res.data);
        setSuccess(true);
        alert("registration successfull!")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signup template d-flex justify-content-right align-items-center vh-25 bg-primary">
      <div className="form-container p-5 mh-25 rounded bg-white">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Sign up to Gumzo</h3>

          <div className="mb-2">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="form-control"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="form-control"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="userage">Age</label>
            <input
              type="number"
              placeholder="Age"
              className="form-control"
              value={userage}
              onChange={(e) => setUserAge(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={useremail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type={password ? "password" : "text"}
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />
            <label htmlFor="check" className="custom-input-label ms-2">
              Accept terms & conditions
            </label>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <p className="text-end mt-2">
            Already have an account
            <Link to="/" className="ms-2">
              Login{" "}
            </Link>
          </p>
        </form>
       
      </div>
    </div>
  );
};

export default Signup;
