import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentList from './pages/StudentList';
import AddStudent from './pages/AddStudent';
import UpdateStudent from './pages/UpdateStudent';
import DeleteStudent from './pages/DeleteStudent';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<StudentList />}/>
      <Route path='/add-student' element={<AddStudent />}/>
      <Route path='/update-student' element={<UpdateStudent />}/>
      <Route path='/delete-student' element={<DeleteStudent />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
