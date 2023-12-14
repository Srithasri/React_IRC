import Nav from './Components/Nav'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <>
      <Nav/>
      <Routes>

      <Route path='/Home' element={<Home/>}/>
     <Route path='/About' element={<About/>}/>
     <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
