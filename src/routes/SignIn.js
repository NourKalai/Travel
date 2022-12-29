
import LoginForm from "../components/LoginForm";
import React , {useState} from 'react';

function SignIn (){
    const adminUser = {
        email:"admin@admin.com",
        password:"admin123"
    }
    const[user,setUser]=useState({email:"",password:""});
    const [error,setError]=useState("");
    const Login=details =>{
        console.log(details);
        if (details.email == adminUser.email && details.password == adminUser.password)
   {console.log("successfull login");
   alert("login successfully");
setUser({
    email:details.email,
    password:details.password
});

} else {console.log('dont match');
setError({error:"Data do not match"})} }
    const Logout=()=>{
        console.log('logout');
        alert("unseccussfull login ");

        setUser({
            name:'',email:''
        })
    }
  
   
   return(<>
              {/* <Navbar/> */}
              <LoginForm Login={Login} error={error}></LoginForm>
 
    </>);
}
export default SignIn;