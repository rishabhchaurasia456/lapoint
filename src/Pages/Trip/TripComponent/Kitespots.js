import React from 'react'
import config from '../../../config/config'
// import kitespotimg1 from "../../../Images/zanzibar-lagoon-paje-kitesurf-1536x863-1.webp"
// import kitespotimg2 from "../../../Images/zanzibar-paje-2048x1365-1-1536x1024-1.webp"
// import kitespotimg3 from "../../../Images/web.webp"



const Kitespots = ({ kitespotData, selectedLanguage }) => {
    console.log("kitespotDataaaaaaaaaaaaaaaaaaa", kitespotData)
    return (
        <div>
            <div className='container pb-5'>
                {kitespotData.data.map((item, index) => (
                    <div className='row mt-5' key={index}>
                        {item.img_position === 'left' && (
                            <div className='col-md-6'>
                                <div className='lifestyle_div'>
                                    <img src={`${config.API_BASE_URL}/${item.img}`} className='lifestyle w-75' alt="lifestyle" />
                                </div>
                            </div>
                        )}
                        <div className='col-md-6'>
                            <div className="life_style_div">
                                <div className="">
                                    <p className='lifestyle_text'>
                                        {item.text}
                                    </p>
                                </div>
                                <div className="">
                                    <h1 className="lifestyle_heading">
                                        {item.heading}
                                    </h1>
                                </div>
                                <div className="">
                                    <h1 className="lifestyle_para">
                                        <p>{item.para}</p>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        {item.img_position === 'right' && (
                            <div className='col-md-6'>
                                <div className='lifestyle_div'>
                                    <img src={`${config.API_BASE_URL}/${item.img}`} className='lifestyle w-75' alt="lifestyle" />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Kitespots