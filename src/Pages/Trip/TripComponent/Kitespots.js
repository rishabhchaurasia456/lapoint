import React from 'react'
import kitespotimg1 from "../../../Images/zanzibar-lagoon-paje-kitesurf-1536x863-1.webp"
import kitespotimg2 from "../../../Images/zanzibar-paje-2048x1365-1-1536x1024-1.webp"
import kitespotimg3 from "../../../Images/web.webp"

// const data = [
//     {
//         imgSrc: kitespotimg1,
//         text: {
//             en: 'location / kite spot',
//             du: '',
//             gr: ''
//         },
//         heading: {
//             en: 'feel the warm wind and kite in your board shorts',
//             du: '',
//             gr: ''

//         },

//         para: {
//             en: 'The gigantic lagoon on our doorstep is a world-class kite spot. Downwinders along the reef, where we race with the dolphins. Wavekiting on the best waves in Zanzibar. Trick clinics in the most beautiful lagoons. Kilometers of long, snow-white palm beaches. Discover the surprises of the tropical kitesurfing island of Zanzibar.',
//             du: '',
//             gr: ''

//         },

//         imgPosition: 'right',
//     },

//     {
//         imgSrc: kitespotimg2,
//         text: {
//             en: 'The WIND',
//             du: '',
//             gr: ''
//         },

//         heading: {
//             en: 'feel the warm wind and kite in your board shorts',
//             du: '',
//             gr: ''
//         },
//         para: {
//             en: "The gigantic lagoon on our doorstep is a world-class kite spot. Downwinders along the reef, where we race with the dolphins. Wavekiting on the best waves in Zanzibar. Trick clinics in the most beautiful lagoons. Kilometers of long, snow-white palm beaches. Discover the surprises of the tropical kitesurfing island of Zanzibar",
//             du: '',
//             gr: ''

//         },
//         imgPosition: 'left',
//     },
//     {
//         imgSrc: kitespotimg3,
//         text: {
//             en: 'weather & wind',
//             du: '',
//             gr: ''
//         },
//         heading: {
//             en: 'feel the warm wind and kite in your board shorts',
//             du: '',
//             gr: ''
//         },
//         para: {
//             en: "The gigantic lagoon on our doorstep is a world-class kite spot. Downwinders along the reef, where we race with the dolphins. Wavekiting on the best waves in Zanzibar. Trick clinics in the most beautiful lagoons. Kilometers of long, snow-white palm beaches. Discover the surprises of the tropical kitesurfing island of Zanzibar",
//             du: '',
//             gr: ''
//         },
//         imgPosition: 'right',
//     }
// ];


const Kitespots = ({ kitespotData, selectedLanguage }) => {
    return (
        <div>
            <div className='container mt-5 pt-5'>
                {kitespotData.map((item, index) => (
                    <div className='row mt-5' key={index}>
                        {item.imgPosition === 'left' && (
                            <div className='col-md-6'>
                                <div className='lifestyle_div'>
                                    <img src={item.imgSrc} className='lifestyle w-75' alt="lifestyle" />
                                </div>
                            </div>
                        )}
                        <div className='col-md-6'>
                            <div className="life_style_div">
                                <div className="">
                                    <p className='lifestyle_text'>
                                        {item.text[selectedLanguage]}
                                    </p>
                                </div>
                                <div className="">
                                    <h1 className="lifestyle_heading">
                                        {item.heading[selectedLanguage]}
                                    </h1>
                                </div>
                                <div className="">
                                    <h1 className="lifestyle_para">
                                        <p>{item.para[selectedLanguage]}</p>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        {item.imgPosition === 'right' && (
                            <div className='col-md-6'>
                                <div className='lifestyle_div'>
                                    <img src={item.imgSrc} className='lifestyle w-75' alt="lifestyle" />
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