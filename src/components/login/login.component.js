import React,{ useState } from "react";
import singleSpa from "single-spa"
import "./login.component.css"
export default function Login(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(true);
    const clickHandler=()=>{
      event.preventDefault();
      if(userName === 'Anjali' && password === 'Anjali')
      {
        props.flagHandler(true)
        props.loginHandler(false)
      }
      
    }
    
  return (
    <div>
           <h2>Login Form</h2> 
           <form >
           <div class="container">
               <label for="uname"><b>Username</b></label>
               <input
                 value={userName}
                 onChange={e => setUserName(e.target.value)}
                placeholder="User name"
                type="text"
                name="userName"
                required
                />

                <label for="psw"><b>Password</b></label>
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    type="password"
                    name="password"
                    required
                />
        
                <button type="submit" onClick={clickHandler}>Login</button>
           </div>
           </form>
        </div> 
    
    
  )
    
}