import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Navbar = () => {
    const countUser = useSelector((state) => state.app.data);

    return (
        <nav className="navbar navbar-expand-lg bg-dark p-3">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="/">Crud Redux</a>
                <button className="navbar-toggler  bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to={"/"}>Add Participant</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" to={"/read"}>View List</Link>
                        </li>

                        <li className="nav-item mx-md-2">
                            <button type="button" class="btn btn-primary position-relative">
                                Employees
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {countUser.length}
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </button>
                        </li>


                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

