import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  // backend integration
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const loginUser = async (e) => {
  e.preventDefault();

  const res = await fetch('/login', {
    method : "POST",
    header : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({        
     email, password
    })
  });

  const data = await res.json();
  // console.log(data)

  if(data.status === 400 || !data){
    window.alert("Invalid Credentials")
  }else {
    window.alert("Succesfully logged in")

    navigate("/")
  }

}

  return (
    <section className="login">
      <div className ="container mt-5">
        <div className = "login-content">
          <div className="form-title">
            <h2>Login</h2>

            <form method ="POST" className="login-form">
              <div className='form-group'>
                <label htmlFor="email"></label>
                <input type="email" name="email" id="email" autoComplete="off"
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
                placeholder="your email"></input>                
              </div>
            </form>            

            <form className="login-form">
              <div className='form-group'>
                <label htmlFor="password"></label>
                <input type="password" name="password" id="password" autoComplete="off"
                value={password}
                onChange = {(e) => setPassword(e.target.value)}
                
                placeholder="your password"></input>                
              </div>
            </form>

            

            <div className = "form-group form-button">
              <input type="submit" name="login" id="login" className="form-submit" 
              value="login"
              onClick={loginUser}
              ></input>
            </div>

          <NavLink to="/signup" >create account</NavLink>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Login