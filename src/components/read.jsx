import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteData } from "../features/userSlice";

const Read = () => {
  const data = useSelector((state) => state.app.data);
  const loading = useSelector((state) => state.app.loading);
  const dispatch = useDispatch();

  if (loading) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row d-flex">
        {data.map((item) => (
          <div className="col-md-12 mt-4 d-flex justify-content-center" key={item.id}>
            <div className="card text-center mb-3 border-0 shadow-lg" style={{ width: "50rem" }}>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.email}</p>
                <p className="card-text">{item.age}</p>
                <a href="/" className="btn btn-primary w-75">
                  Edit Profile
                </a>
                <button
                  className="btn btn-danger w-75 mt-2"
                  onClick={() => dispatch(deleteData(item.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;
