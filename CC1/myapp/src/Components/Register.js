function Register()
{
    return(
        <div>
        
        <form className = "container1" >
        <h3 className="hh1">FooDle</h3>
        <input type="text" name="username" id="username" placeholder="Name" className="auth1"/>
        <input type="number" name="" id="" placeholder="phone no" className="auth1"/>
        <input type="email" name="" id="" placeholder="email" className="auth1"/>
        <input type="password" name="" id="pwd" placeholder="password" className="auth1"/>
        
        <input type="submit" value="Register" className="btn1" />
        
    </form>

        </div>
    )
}
export default Register