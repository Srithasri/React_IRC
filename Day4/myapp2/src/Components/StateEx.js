import {useState} from 'react';
const StateEx=()=>{
    const [visible,setVisible]=useState(false);
    const toggle=()=>{
        setVisible(!visible)
    }

    return(
        <>
        {visible?(
        <div><p >Welcome</p>
        <button className="ab">OK</button>
        <button className="db">Cancel</button>
        </div>):
        
        (<button onClick={toggle} >Click</button>)
        }
        </>
    )
}
export default StateEx;