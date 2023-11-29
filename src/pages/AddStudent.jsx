import React, { useState } from 'react'
import {
  createStudent,
  getStudentById,
  getStudents,
  saveStudent,
  selectAllStudents,
} from "../store/reducers/StudentSlice";
import axios from "axios";
import { useDispatch } from 'react-redux';

const AddStudent = () => {

  const dispatch = useDispatch();

    /* save a student */
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [contact, setContact] = useState();
  
    const handleSubmit = (e) => {
      e.preventDefault();


      dispatch(saveStudent({name, address, contact}))

    };

  return (
    <div>
            {/* save student */}
            <div className="save-student">
        <h3>Save Form</h3>
        <form onSubmit={handleSubmit}>
          <span>
            <b>Name : </b>
          </span>
          <input className="input-field" type="text" placeholder="Kasun" onChange={(e) => setName(e.target.value)} />
          <br />
          <span>
            <b>Address : </b>
          </span>
          <input className="input-field" type="text" placeholder="Panadura" onChange={(e) => setAddress(e.target.value)} />
          <br />
          <span>
            <b>Contact : </b>
          </span>
          <input
            className="input-field"
            type="text"
            placeholder="077-1234546"
            onChange={(e) => setContact(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Save Student</button>
        </form>
      </div>
    </div>
  )
}

export default AddStudent