import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Create() {
  const [User, setUser] = useState({
    name: "",
    email: "",
    role: "",
  });

  const navigate = useNavigate();

  const AddUser = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/users", User)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add a User </h1>
        <form onSubmit={AddUser}>
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              //here we create copie de user avec ses proprietés initial
              //user initial ( name: '' , email : ' ', role: ' ')
              onChange={(e) => setUser({ ...User, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              // here the last user object copied is ( name: 'yousr', email: ' ', role: ' ')
              //we insert the email's value and it became ( name: yousra, email: 'h@gma ', role: ' ')
              onChange={(e) => setUser({ ...User, email: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="role">Role:</label>
            <input
              type="text"
              name="role"
              className="form-control"
              placeholder="Enter Role"
              onChange={(e) => setUser({ ...User, role: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Create</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}
