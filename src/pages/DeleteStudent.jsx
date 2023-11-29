import React, { useState } from 'react'
import { deleteAStudent } from '../store/reducers/StudentSlice';
import { useDispatch } from 'react-redux';

const DeleteStudent = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState('');

    const handleDelete = (id) => {        
            dispatch(deleteAStudent(id))
      };

  return (
    <div>
        <input type="text" placeholder='Enter Id number here' onChange={(e)=>setId(e.target.value)} />
        <button type="button" className="btn btn-danger" onClick={() => handleDelete(id)}>Delete Student</button>
    </div>
  )
}

export default DeleteStudent