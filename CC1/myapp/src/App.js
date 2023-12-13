
import Home from "./Components/Home";
import './Assets/Css/Home.css'
import Register from "./Components/Register";
import './Assets/Css/Register.css'
import Login from './Components/Login'
import './Assets/Css/Login.css'
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     
      {/* <Home/>  */}
     {/* <Register/>
     <Login/>  */}
      <Routes>
     <Route path='/Home' element={<Home/>}/>
     <Route path='/Login' element={<Login/>}/>
     <Route path='/Register' element={<Register/>}/>
     </Routes> 
    </div>
  );
}

export default App;
