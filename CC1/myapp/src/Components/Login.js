

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    const username = event.target.username.value;
    const password = event.target.password.value;

    // Replace this with your actual login logic
    // For demonstration purposes, let's assume a simple check
    const isLoginSuccessful = username === 'Sritha' && password === '12345';

    if (isLoginSuccessful) {
      alert('Login successful');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="body1">
      <form className="container" onSubmit={handleSubmit}>
        <h2 className="hh">FooDle</h2>
        <input type="text" name="username" id="username" placeholder="Name" className="auth" />
        <input type="password" name="password" id="pwd" placeholder="Password" className="auth" />
        <input type="submit" value="Login" className="btn" />
      </form>
    </div>
  );
}

export default Login;
