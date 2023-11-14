import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Would you like to delete?");
    if (confirmDelete) {
      axios
        .delete(`http://localhost:3000/users/${id}`)
        .then(() => {
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="d-flex-coloumn justify-content-center align-items-center bg-light vh-100">
      <h1 className="mb-4 mt-2">List of Users</h1>
      <div className="flex w-100 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to="/Create" className="btn btn-success">
            + Add New User
          </Link>
        </div>
        <div className="flex pl-1 pr-1">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  <td>
                    <div className="btn-group gap-2" role="group">
                      <Link
                        to={`/read/${d.id}`}
                        className="btn btn-warning me-2 btn-sm"
                      >
                        View
                      </Link>
                      <Link
                        to={`/update/${d.id}`}
                        className="btn btn-primary me-2 btn-sm"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={(e) => handleDelete(d.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
