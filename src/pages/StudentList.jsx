import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createStudent,
  getStudentById,
  getStudents,
  saveStudent,
  selectAllStudents,
} from "../store/reducers/StudentSlice";
import { Link } from "react-router-dom";

const StudentList = () => {
  const studentSelector = useSelector(selectAllStudents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudents());
  }, []);
  console.log(studentSelector);
  console.log(studentSelector.loading);

  /* get a student */
  const getAStudentHandler = () => {
    dispatch(getStudentById(12));
  };

  return (
    <div className="container">
      <h1>StudentList</h1>
      {/* get a student */}
      <button className="btn btn-info me-2" onClick={getAStudentHandler}>Get a data</button>
      <Link className="btn btn-success me-2" to={'/add-student'}>Add Student</Link>
      <Link className="btn btn-primary me-2" to={'/update-student/'}>Update Student</Link>
      <Link className="btn btn-danger me-2" to={'/delete-student/'}>Delete Student</Link>
      
    </div>
  );
};

export default StudentList;
