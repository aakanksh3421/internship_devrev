import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Update() {
  // const [data,setData] = useState([])
  const { id } = useParams();

  const [values, setvalues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => {
        setvalues(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/users/${id}`, values)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-100 flex border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h2 className="mb-4">Update User</h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-2 d-flex gap-2 align-items-center">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value={values.name}
              pattern="^[A-Za-z .]+$"
              onChange={(e) => setvalues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2 d-flex gap-3 align-items-center">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={values.email}
              onChange={(e) => setvalues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-3 d-flex gap-2 align-items-center">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              pattern="[0-9]*"
              name="phone"
              className="form-control"
              placeholder="Enter Phone"
              maxLength="10"
              value={values.phone}
              onChange={(e) => setvalues({ ...values, phone: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Update </button>

          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Update;
