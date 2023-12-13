import './Assests/Css/style.css'
import Nav from './Component/Nav'
// import Login from "./Component/Login"
function App()
{
    return(
        <div>
        <Nav/>
        {/* <Login/> */}
        <form className = "container" >
        <h3>Registration Form</h3>
        <input type="text" name="username" id="username" placeholder="Name" className="auth"/>
        <input type="email" name="" id="" placeholder="email" className="auth"/>
        <input type="password" name="" id="pwd1" placeholder="password" className="auth"/>
        <input type="password" name="" id="pwd2" placeholder="confirm password" className="auth"/>
        <input type="datetime-local" name="" id="" className="auth"/>
        <input type="number" name="" id="" placeholder="phone no" className="auth"/>
        <input type="submit" value="Register" className="btn" />
        <button  className="i">showuser</button>
        
    </form>

        </div>
    )
}
export default App