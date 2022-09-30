import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function Login({handleClose}) {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const {loginUser}=useContext(AppContext)
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
     const payload={
      email,
      password
    }
    handleClose()
    alert("Sucessfuly Login ")

    fetch('https://reqres.in/api/login',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(payload)
    }).then((res)=>{ return res.json()
    }).then((res)=>{
      loginUser(res.token)
      navigate("/")
    })
  }

 
  
  return (
    <center>
      <div className="login-page" >
      <form className="form" data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            <input style={{width:"130%"}} data-testid="email-input" type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </label>
        </div>
        <br />
        <div>
          <label>
            <input style={{width:"130%"}}
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={password} onChange={(e)=>setPassword(e.target.value)}
            />
          </label>
        </div>
        <br />
        <div>
          <button style={{width:"40%",backgroundColor: "#E51075"}} data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
    </center>
  );
}
export default Login;

