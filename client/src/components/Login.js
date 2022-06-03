import React from 'react'
import { NavLink } from 'react-router-dom'


const Login = () => {
  return (
    <section className="login">
      <div className ="container mt-5">
        <div className = "login-content">
          <div className="form-title">
            <h2>Login</h2>

            <form className="login-form">
              <div className='form-group'>
                <label htmlFor="email"></label>
                <input type="email" name="email" id="email" autoComplete="off" placeholder="your email"></input>                
              </div>
            </form>            

            <form className="login-form">
              <div className='form-group'>
                <label htmlFor="password"></label>
                <input type="password" name="password" id="password" autoComplete="off" placeholder="your password"></input>                
              </div>
            </form>

            

            <div className = "form-group form-button">
              <input type="submit" name="login" id="login" className="form-submit" value="login"></input>
            </div>

          <NavLink to="/signup" >create account</NavLink>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Login