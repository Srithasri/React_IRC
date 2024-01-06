import { Link ,useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import {useRef,useState} from 'react'

function Login() {
  const password = useRef(null);
    const email= useRef(null);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const [errors,setErrors] =useState({
      email:'',
      password:''
    })
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email:email.current.value,
      password:password.current.value
    }
    if(data.email.length==0)
    {
       setErrors({...errors,email:'email is empty !'});
    }
    else if(!emailRegex.test(data.email))
    {
        setErrors({...errors,email:'invalid email format!'});
    }
    else
    {
        setErrors({...errors,email: ''});  
    if(data.email === '727822tucs235@skct.edu.in' && data.password === '12345')
    {
      
      
      toast.success('Logged in', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      
    }else {
      toast.error('Login Failed.Try Again!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    }
    email.current.value=''
    password.current.value=''
  };

  return (
    <>
    <div className="body1">
      <form className="container" onSubmit={handleSubmit}>
        <h2 className="hh">Login</h2>
        <input type="email" name="email" id="username" placeholder="email" className="auth" ref={email}/>
        {
            errors.email===''?'':
            <span className='span-ee'>{errors.email}</span>
        }
        <input type="password" name="password" id="pwd" placeholder="Password" className="auth" ref={password}/>
        {
            errors.password===''?'':
            <span className='span-ee'>{errors.password}</span>
        }
        <input type="submit" value="Login" className="btn" />
       
      </form>
    </div>
    <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>
  );
}

export default Login;
