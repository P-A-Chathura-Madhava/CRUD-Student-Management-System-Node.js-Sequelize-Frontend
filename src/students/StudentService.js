import axios from "axios";

const getAllStudents = async () => {
  const response = await axios.get(
    "http://localhost:8080/api/v1/student/getAllStudents"
  );

  return response.data;
};

const getStudentById = async (id) => {
  const response = await axios.get(
    `http://localhost:8080/api/v1/student/searchStudent/${id}`
  );
  return response.data;
};

const createStudent = async (student) => {
  console.log(student.name, student.address, student.contact);

       const response = await axios
        .post("http://localhost:8080/api/v1/student/saveStudent", {
          name: student.name,
          address: student.address,
          contact: student.contact,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
};

const updateStudent = async (student) => {
      const response = await axios
        .put(`http://localhost:8080/api/v1/student/updateStudent/${student.id}`, {
          id: student.id,
          name: student.name,
          address: student.address,
          contact: student.contact,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
};

const deleteStudent = async (id) => {

  const response = await axios
  .delete(`http://localhost:8080/api/v1/student/deleteStudent/${id}`)
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
};

const studentService = { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent };

export default studentService;
