import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row footer_headcontainer'>
                    <div className='col-md-7 footer_headcontainer_text p-4'>
                        <p>Join our Membership Community and get 30€ off on your next surf trip!</p>
                    </div>
                    <div className='col-md-5'>
                        <div class="row">
                            <div class="col-sm-6">
                                <input type='email' className='email_input' placeholder='Enter your e-mail'></input>
                            </div>
                            <div class="col-sm-6">
                                <button className='email_button'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <p>Courses</p>
                        
                    </div>
                    <div class="col-md-4"></div>
                    <div class="col-md-4"></div>
                    <div class="col-md-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Footer