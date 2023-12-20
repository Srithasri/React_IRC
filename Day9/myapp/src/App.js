import Users from './Pages/Users.js';
import AddUser from './Pages/AddUser.js';
import EditUser from './Pages/EditUser.js';
import './Asstes/core.css'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Users />} />
      <Route path='/add' element={<AddUser />} />
      <Route path='/edit/:id' element={<EditUser />} />
    </Routes>
  );
}

export default App;
