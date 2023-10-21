import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { postData } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';
import "../components/css/form.css"

const Form = () => {
    const [user, setUser] = useState({});

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleData = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {

        if (!user.name || !user.email || !user.age) {
        alert("Please enter the data")

            return;
        }
        e.preventDefault()
        dispatch(postData(user))
        navigate("/read")

    }



    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-10 ">
                    <form className='w-50 mx-auto mt-5 border p-5  shadow-lg rounded' onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label text-white">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name='name'
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={handleData}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label text-white">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name='email'
                                id="exampleInputPassword1"
                                onChange={handleData}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label text-white">Age</label>
                            <input
                                type="number"
                                name='age'
                                className="form-control"
                                onChange={handleData}
                            />
                        </div>

                        <div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={user.gender === 'Male'}
                                    onChange={handleData}
                                />
                                <label className="form-check-label text-white" htmlFor="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={user.gender === 'Female'}
                                    onChange={handleData}
                                />
                                <label className="form-check-label text-white" htmlFor="flexRadioDefault2">
                                    Female
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary my-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;


