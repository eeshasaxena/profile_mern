import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="contact-form">
      <div className='container'>
        <div className='row'>
          <div clasName="col-lg-10 offset-lg-1">
            <div className='contact_form_container py-5'>
              <div className='contact_form_title'>
                GET IN TOUCH                
              </div>
              <form id="contact-form">
                <div className='contact-form-name d-flex justify-content-between'>
                  <input type="text" id="contact-form-name" placeholder="name"></input>
                  <input type="email " id="contact-form-email" placeholder="email"></input>
                  <input type="number" id="contact-form-number" placeholder="number"></input>
                </div>

                <div>
                  <textarea className='contact-form-message' id="contact-form-message" placeholder='message'></textarea>
                </div>

                <div className='contact-form-button'>
                  <button type='submit' className='contact-submit-button'>send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact