import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-100 flex border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h2 className="mb-4">User Details</h2>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{data.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{data.phone}</td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <Link to={`/update/${id}`} className="btn btn-success me-3">
            Edit
          </Link>
          <Link to="/" className="btn btn-primary">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Read;
