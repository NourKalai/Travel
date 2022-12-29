import React , {useState} from 'react';
import "./LoginFormStyles.css";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function LoginForm({Login,error}){

    const [details,setDetails]= useState({email:"",password:""});
    const submitHandler =e =>{
     e.preventDefault();
     Login(details);
     
    }
    const navigate = useNavigate();

    return(
<form onSubmit={submitHandler}>
    <div className="form-container">
        <h2>Sign In</h2>
        {(error !== "")? (<div className='error'>{error}</div>):""}
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" onChange={e=> setDetails({...details,email:e.target.value })} value={details.email}></input>   </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" id="password" onChange={e=> setDetails({...details,password:e.target.value })} value={details.password}></input>
        </div>
        <Button
   onClick={() => navigate("/home")}>
click me
</Button>

        {/* <input type="submit" value="LOGIN"></input> */}
    </div>
 </form>
    );
}
export default LoginForm;