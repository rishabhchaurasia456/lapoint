import React, { useState } from 'react'

const MyCreative = () => {
    const[ outputbox, setOutputbox ] = useState("")

    var selectBox = document.getElementById("selectOption");
    const changebox = () => {
        // if (value == "image"){
        //     document.getElementById("image_container").style.display=block;
        // }else if{

        // }
    }
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <div class="row mt-5">
                            <div class="col-4">Name</div>
                            <div class="col-8">
                                <input className='form-control' ></input>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-4">Landing Page</div>
                            <div class="col-8">
                                <input className='form-control' ></input>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-4">Type</div>
                            <div class="col-8">
                                <select className='form-control' onChange={changebox}>
                                    <option value="image">Image</option>
                                    <option value="text_link">Text Link</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mt-5" id="image_container">
                            <div class="row mt-5">
                                <div class="col-4">Link</div>
                                <div class="col-8">
                                    <input className='form-control' ></input>
                                </div>
                            </div>
                            <div class="row mt-5">    
                                <div class="col-4">Alt text</div>
                                <div class="col-8">
                                    <input className='form-control' ></input>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-5" id="link_container">
                        <div class="row mt-5">
                                <div class="col-4">Image</div>
                                <div class="col-8">
                                    <input className='form-control' ></input>
                                </div>
                            </div>
                            <div class="row mt-5">    
                                <div class="col-4">Alt text</div>
                                <div class="col-8">
                                    <input className='form-control' ></input>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>
        </div>
    )
}

export default MyCreative