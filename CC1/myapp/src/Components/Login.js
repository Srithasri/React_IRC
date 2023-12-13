function Login()
{
    return(
        <div>
        
        <form class = "container">
        <h2 className="hh">FooDle</h2>
        <input type="text" name="username" id="username" placeholder="Name" className="auth"/>
        <input type="password" name="" id="pwd" placeholder="password" className="auth"/>
        <input type="submit" value="Login" className="btn"/>
        
    </form>

        </div>
    )
}
export default Login