import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Create() {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-100 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h2 className="mb-4">Add a User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2 d-flex gap-3 align-items-center">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              pattern="^[A-Za-z .]+$"
              onChange={(e) => setvalues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2 d-flex gap-4 align-items-center">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setvalues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-3 d-flex gap-3 align-items-center">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              pattern="[0-9]*"
              name="phone"
              className="form-control"
              maxLength="10"
              placeholder="Enter Phone"
              onChange={(e) => setvalues({ ...values, phone: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Create;
