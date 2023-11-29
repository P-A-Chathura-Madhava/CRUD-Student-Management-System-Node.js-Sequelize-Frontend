import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateAStudent } from '../store/reducers/StudentSlice';

const UpdateStudent = () => {
    const dispatch = useDispatch();

    /* update a student */
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [contact, setContact] = useState();
  
    const handleSubmit = (e) => {
      e.preventDefault();

      console.log(id, name, address, contact);


      dispatch(updateAStudent({id, name, address, contact}))

    };
  return (
    <div>
    {/* update student */}
    <div className="save-student">
<h3>Update Form</h3>
<form onSubmit={handleSubmit}>
<span>
    <b>ID : </b>
  </span>
  <input className="input-field" type="text" placeholder="Kasun" onChange={(e) => setId(e.target.value)} />
  <br />
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
  <button type="submit">Update Student</button>
</form>
</div>
</div>
  )
}

export default UpdateStudent