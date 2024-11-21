import React from 'react'

import img1 from '../../../Images/downwinder1.webp'
import img2 from '../../../Images/downwinder2.webp'

// card data img 
import crdimg1 from '../../../Images/downwinder3.webp';
import crdimg2 from '../../../Images/downwinder4.webp';
import crdimg3 from '../../../Images/downwinder5.webp';



const imgData = [
    {
        id: 1,
        image: crdimg1,
    },
    {
        id: 2,
        image: crdimg2,
    },
    {
        id: 3,
        image: crdimg3,
    },
];


const Downwinders = () => {
    return (
        <div>

            <div className="container d-flex flex-column align-items-center justify-content-center surf_container mt-3 pt-3">
                <div className="row">
                    <div className="col">
                        <h1 className="surf_text">
                            <span className="text_span fs-1">Our downwinders in Brazil</span>
                        </h1>
                        <p className="surf_para fs-6 mt-3" >
                            Imagine: the warm Brazilian sun on your skin, an extensive coastline with endless beaches and azure blue water, and you, propelled by the wind, kitesurfing over the waves. That’s exactly what our downwinders in Brazil promise – an epic adventure that will challenge your kitesurfing skills, all while enjoying the beauty around you.

                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <img src={img1} alt="" className='w-100 rounded-4' />
                    </div>
                    <div className="col-lg-6">
                        <img src={img2} alt="" className='w-100 rounded-4' />
                    </div>
                </div>

                <div className='text-start'>
                    <p className="surf_para fs-6 mt-3" >
                        Our downwinders in Brazil offer a unique experience that goes beyond just kitesurfing. Here are some reasons why you definitely don’t want to miss this trip

                    </p>

                    <h1 className="surf_text">
                        <span className="text_span fs-1">Breathtaking route</span>
                    </h1>
                    <p className="surf_para fs-6 mt-3" >
                        Our downwinders have been carefully selected to take you kitesurfing along the most beautiful places on the Brazilian coast.

                    </p>

                    <h1 className="surf_text">
                        <span className="text_span fs-1"> Various challenges</span>
                    </h1>
                    <p className="surf_para fs-6 mt-3" >Whether you are a beginner or an experienced kite surfer, our downwinders offer something for everyone. The varied spots and changing wind conditions provide optimal challenge.

                    </p>
                    <h1 className="surf_text">
                        <span className="text_span fs-1"> Guidance by professionals</span>
                    </h1>
                    <p className="surf_para fs-6 mt-3" >Our experienced instructors ensure your safety and give you valuable tips to get the most out of your downwind experience. They are there to guide you and build your confidence.

                    </p>
                    <h1 className="surf_text">
                        <span className="text_span fs-1"> New friends and memories</span>
                    </h1>
                    <p className="surf_para fs-6 mt-3" >During our downwinders you get the chance to meet new people who share the same passion. Share stories, laugh together and create forever memories.

                    </p>


                    <h1 className="surf_text">
                        <span className="text_span fs-1">Here are some more practical matters</span>
                    </h1>
                    <p className="surf_para fs-6 mt-3" >
                 <p>
                 <strong> Dates and duration:</strong>
                        Our downwinders in Brazil take place on different dates. The duration of the trip varies, but we ensure that every trip is filled with adventure activities and kitesurfing fun.
                       <p>
                 </p>
                       <strong>Packages:</strong>
                       We offer various packages including accommodation, transportation, guidance and more. Choose the package that best suits your needs and preferences.
                       </p>

                        <p>
                        <strong>For whom?:</strong>
                        Our downwinders are suitable for advanced kite surfers. Do you have more than one year of kite experience? Haven’t done a downwinder yet but have already had sessions on the North Sea in 20 knots? Let us know and discuss your level with us!0
                        </p>

                    </p>


                    <div className="container">
                        <div className="row">
                            {imgData.map((item) => (
                                <div className="col-lg-4 mb-4" key={item.id}>
                                    <div className="card border-0 shadow h-100">
                                        <img
                                            src={item.image}
                                            alt={`Image ${item.id}`}
                                            className="card-img-top rounded-3"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>




                    <h1 className="surf_text">
                        <span className="text_span fs-1"> TOGETHER TOWARDS THE MOST BEAUTIFUL ADVENTURE</span>
                    </h1>
                    <p className="surf_para fs-6 mt-3" >So, are you ready to explore Brazil’s breathtaking coastline as you follow the wind and ride the waves? Join us for an unforgettable trip full of adventure and kitesurfing fun.
                        As you prepare for our exciting downwinders in Brazil, it’s crucial to be well prepared so you can enjoy this adventure to the fullest. Here’s a comprehensive list of what to bring:

                    </p>


                    <h1 className="surf_text">
                        <span className="text_span fs-1"> Kitesurfing Equipment</span>
                    </h1>
                    <p className="surf_para fs-6 mt-3" >
                        <strong>  Own kite gear:</strong>
                        Own kite gear: We recommend bringing your own kite gear, including kites in different sizes (e.g. 7, 9, 11 and/or 12 meters). This allows you to deliver the best performance, adapted to different wind conditions.
                        <p>

                            <strong>Twin tip and directional board:</strong>
                            Depending on your preference, you can choose between a twintip board and/or a directional board. Make sure the board is suitable for the conditions you will encounter during the downwinder.

                        </p>
                    </p>

                </div>







            </div>
        </div>

    )
}

export default Downwinders
