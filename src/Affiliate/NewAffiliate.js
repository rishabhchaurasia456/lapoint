import React from 'react'

const NewAffiliate = () => {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6 mt-4">
                        <h1 class="text-center"><b>New Affiliate Information</b></h1>
                        <div class="card">
                            <div class="card-body">
                                <form onsubmit="return Validation()" id="myForm">
                                    <div class="mb-3">
                                        <label class="form-label">First Name</label>
                                        <input type="text" class="form-control" placeholder="First Name" id="first_name" aria-label="name" required/>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Last Name</label>
                                        <input type="text" class="form-control" placeholder="Last Name" id="last_name" aria-label="name" required/>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Phone Number</label>
                                        <input type="text" class="form-control" placeholder="Phone Number" id="phone" aria-label="name" required/>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">E-Mail Address</label>
                                        <input type="text" class="form-control" placeholder="E-Mail Address" id="email" aria-label="email" required/>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Address Line</label>
                                        <input type="text" class="form-control" placeholder="Address line" id="address" aria-label="address" required/>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">City</label>
                                        <input type="text" class="form-control" placeholder="City" id="city" aria-label="city" required/>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Zip Code</label>
                                        <input type="text" class="form-control" placeholder="Zip Code" id="zip" aria-label="zip" required/>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Country</label>
                                        <select class="form-control">
                                            <option>India</option>
                                            <option>USA</option>
                                            <option>China</option>
                                            <option>UK</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Company Name</label>
                                        <input type="text" class="form-control" placeholder="Company Name" id="Company" aria-label="company" required/>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Website URL</label>
                                        <input type="text" class="form-control" placeholder="Website URL" id="Website" aria-label="website" required/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>

        </div>
    )
}

export default NewAffiliate