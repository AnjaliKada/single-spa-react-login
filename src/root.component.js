
  import React,{useState} from "react";
  import { BrowserRouter, Link } from "react-router-dom";
  import "./root.component.css";
  import singleSpa from "single-spa"
 
import Login from "./components/login/login.component";

  export default function Root() {
    const [flag, setFlag] = useState(false)
    const [loginFlag, setLoginFlag] = useState(true)

  const flagHandler = (flag) => {
    setFlag(flag);
  }

  const loginHandler = (boolValue) => {
    setLoginFlag(boolValue)
    singleSpa.navigateToUrl("/home");
  }
  
    return (
      <BrowserRouter>
      <nav className="nav">
        <Link to="/home" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
      </nav>
      
      {loginFlag && <Login flagHandler={flagHandler} loginHandler={loginHandler}/> }
    </BrowserRouter>
  
      );
  }

