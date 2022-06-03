import React from 'react'

const Signup = () => {
  return (
    <section className="signup">
      <div className ="container mt-5">
        <div clasName = "signup-content">
          <div className="form-title">
            <h2>Signup</h2>

            <form className="register-form">
              <div className='form-group'>
                <label htmlFor="name"></label>
                <input type="text" name="name" id="name" autoComplete="off" placeholder="your name"></input>                
              </div>
            </form>

            <form className="register-form">
              <div className='form-group'>
                <label htmlFor="email"></label>
                <input type="email" name="email" id="email" autoComplete="off" placeholder="your email"></input>                
              </div>
            </form>

            <form className="register-form">
              <div className='form-group'>
                <label htmlFor="phone"></label>
                <input type="number" name="phone" id="phone" autoComplete="off" placeholder="your number"></input>                
              </div>
            </form>

            <form className="register-form">
              <div className='form-group'>
                <label htmlFor="work"></label>
                <input type="text" name="work" id="work" autoComplete="off" placeholder="your work"></input>                
              </div>
            </form>

            <form className="register-form">
              <div className='form-group'>
                <label htmlFor="password"></label>
                <input type="password" name="password" id="password" autoComplete="off" placeholder="your password"></input>                
              </div>
            </form>

            <form className="register-form">
              <div className='form-group'>
                <label htmlFor="cpassword"></label>
                <input type="password" name="cpassword" id="cpassword" autoComplete="off" placeholder="your cpassword"></input>                
              </div>
            </form>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup