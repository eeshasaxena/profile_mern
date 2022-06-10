import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Signup = () => {

  const navigate = useNavigate();

  // get user data and store it 
  const [user, setUser] = useState({
    name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  })

  let name, value
  const handleInputs = (e) => {
    console.log(e)
    name = e.target.name
    value = e.target.value

    setUser({ ...user, [name]: value });
  }

  // post data to backend 

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({        
        name, email, phone, work, password, cpassword
      })
    });

    const data = await res.json();

    if(data.status === 422 || !data){
      window.alert("Invalid Registration")
      console.log("invalid reg")
    }else{
      window.alert("Succesful registration")

      navigate("/login")
    }
  }

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="form-title">
              <h2>Signup</h2>

              <form className="register-form">
                <div className='form-group'>
                  <label htmlFor="name"></label>
                  <input type="text" name="name" id="name" autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="your name"></input>
                </div>
              </form>

              <form className="register-form">
                <div className='form-group'>
                  <label htmlFor="email"></label>
                  <input type="email" name="email" id="email" autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="your email"></input>
                </div>
              </form>

              <form className="register-form">
                <div className='form-group'>
                  <label htmlFor="phone"></label>
                  <input type="number" name="phone" id="phone" autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder="your number"></input>
                </div>
              </form>

              <form className="register-form">
                <div className='form-group'>
                  <label htmlFor="work"></label>
                  <input type="text" name="work" id="work" autoComplete="off"
                    value={user.work}
                    onChange={handleInputs}
                    placeholder="your work"></input>
                </div>
              </form>

              <form className="register-form">
                <div className='form-group'>
                  <label htmlFor="password"></label>
                  <input type="password" name="password" id="password" autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="your password"></input>
                </div>
              </form>

              <form className="register-form">
                <div className='form-group'>
                  <label htmlFor="cpassword"></label>
                  <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder="your cpassword"></input>
                </div>
              </form>

              <div className="form-group form-button">
                <input type="submit" name="signup" id="signup" 
                className="form-submit" value="register" 
                onClick={postData}></input>
              </div>

              <NavLink to="/login" >already registered?</NavLink>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup