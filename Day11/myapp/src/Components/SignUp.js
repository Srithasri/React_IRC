
import {useRef,useState} from 'react'
function SignUp()
{
    const username = useRef(null);
    const password = useRef(null);
    const email= useRef(null);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phone= useRef(null);
    const age= useRef(null);
    const currentpassword= useRef(null);
    const [errors,setErrors] =useState({
        username:'',
        email:'',
        phone:'',
        age:'',
        password:'',
        currentpassword:''
    })
    const show =(e)=>
    {
        e.preventDefault();
        const data = {
            username:username.current.value,
            email:email.current.value,
            phone:phone.current.value,
            age:age.current.value,
            password:password.current.value,
            currentpassword:currentpassword.current.value
        }
        if(data.username.length === 0)
        {
            setErrors({...errors,username: 'username is empty'});
        }
        else if(data.username.length <6)
        {
            setErrors({...errors,username: 'min 6 chars'});
        }
    //    else
    //     {
    //         setErrors({...errors,username: ''});
    //     }
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
            setErrors({...errors,username: ''});
            setErrors({...errors,email: ''});
        }
        if (data.age < 10 || data.age > 60) {
            setErrors((prevErrors) => ({ ...prevErrors, age: 'Age is not valid' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, age: '' }));
        }

        if (data.pnumber.length !== 10) {
            setErrors((prevErrors) => ({ ...prevErrors, pnumber: 'Phone number is not valid' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, pnumber: '' }));
        }
        username.current.value=''
        email.current.value=''
        phone.current.value=''
        age.current.value=''
        password.current.value=''
        currentpassword.current.value=''

    }
    return(
        <>
        <div class="body2">
        
        <form className = "container1" onSubmit={show}>
        <h3 className="hh1">Sign Up</h3>

        {/* username */}
        <input type="text" name="username" id="username" placeholder="Name" className="auth1" ref={username}/>
      
        {
            errors.username===''?'':
            <span className='span-ee'>{errors.username}</span>
        }
       
       {/* email */}
        <input type="email" name="" id="" placeholder="email" className="auth1" ref={email} />
        {
            errors.email===''?'':
            <span className='span-ee'>{errors.email}</span>
        }
        <input type='number' name="" id="" placeholder="Phone No" className="auth1" ref={phone} />
        {
            errors.phone===''?'':
            <span className='span-ee'>{errors.phone}</span>
        }
        <input type='number' name="" id="" placeholder="Age" className="auth1" ref={age} />
        {
            errors.age===''?'':
            <span className='span-ee'>{errors.age}</span>
        }

        {/* password */}
        <input type="password" name="" id="pwd" placeholder="password" className="auth1" ref={password}/>
        {
            errors.password===''?'':
            <span className='span-ee'>{errors.password}</span>
        }

        {/* Current Password */}
        <input type="password" name="" id="pwd" placeholder="Current password" className="auth1" ref={currentpassword}/>
        {
            errors.currentpassword===''?'':
            <span className='span-ee'>{errors.currentpassword}</span>
        }
        <input type="submit" value="Submit" className="btn1" />
        
    </form>

        </div>
        </>
    )
}
export default SignUp