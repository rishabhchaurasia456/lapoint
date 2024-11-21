import React from 'react'


// card data img 
import crdimg1 from '../../../Images/img3.webp';
import crdimg2 from '../../../Images/downwinder4.webp';
import crdimg3 from '../../../Images/img1.webp';

import crdimg4 from '../../../Images/endless1.webp';
import crdimg5 from '../../../Images/zan_van_img3.webp';
import crdimg6 from '../../../Images/endless3.webp';



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

const imgData2 = [
    {
        id: 1,
        image: crdimg4,
    },
    {
        id: 2,
        image: crdimg5,
    },
    {
        id: 3,
        image: crdimg6,
    },


];

const Whyzanzibar = () => {
    return (
        <div>


            <div>

                <div className="container d-flex flex-column align-items-center justify-content-center surf_container mt-3 pt-3">
                    <div className="row">
                        <div className="col">
                            <h1 className="surf_text">
                                <span className="text_span fs-1">Why should you go to Zanzibar?🏄‍♂️✨</span>
                            </h1>
                            <p className="surf_para fs-6 mt-3" >
                                This winter we would like to take you to an exotic location that makes the heart of every kite surfer beat faster: Zanzibar! This enchanting island in the Indian Ocean is not only a paradise for sun worshipers, but also a kitesurfing heaven on earth. Let’s kite together in the sun and dance under the African starry sky!
                                Zanzibar is known for its pearly white sandy beaches, crystal clear lagoons and perfect wind conditions – the ideal environment for kitesurfers of all levels. From beginner-friendly lagoons to challenging waves for experts, this island offers a range of spots to improve your skills and learn new tricks. In addition, it is a unique holiday destination with a great atmosphere! Want to work on new tricks with other kiters or have a beer on the roof terrace in the evening with a spectacular sunset? Or swinging among the Rastafarians in the local reggea bar after being on the water all day? We could go on and on coming up with reasons why you should come with us 🙂


                            </p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row mt-3">
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


                    <div className='text-start'>

                        <h1 className="surf_text">
                            <span className="text_span fs-1">Cheap Flights to Zanzibar</span>
                        </h1>
                        <p className="surf_para fs-6 mt-3" >
                            We do our best to make your trip as affordable as possible! There are numerous airlines that offer good flight options to this paradise island. KLM flies direct back and forth from Amsterdam on Thursdays and Sundays. Do you want to save money? Then try looking for flights with momondo.nl to Dar es Salaam. This sometimes saves more than 100 euros. From Dar es Salaam you can choose to take the ferry to the island if you like adventure for 35$. Or you can take a local flight for 70$. Furthermore, it is especially good to keep an eye on ticket comparison websites for the very best deals. We are flexible in terms of dates and you can always contact us. Need help finding your perfect flight? Let let us know and we will arrange it!
                        </p>

                        <h1 className="surf_text">
                            <span className="text_span fs-1"> Kitesurfing for beginners and advanced</span>
                        </h1>
                        <p className="surf_para fs-6 mt-3" >We also call Zanzibar the kitesurf breeding pond. This is because the conditions cannot actually be better for learning it. Lovely warm, blue water, standing range, not too choppy, and no strong gusty winds. But also for the advanced kiter you can make great downwinders along the reef with clean waves. You can practice new tricks in the flat water lagoon and thanks to our team we ensure that you learn as much as possible on the water!

                        </p>
                        <h1 className="surf_text">
                            <span className="text_span fs-1"> One-time Offer for you!!</span>
                        </h1>
                        <p className="surf_para fs-6 mt-3" >To make this kitesurfing experience even more special, we offer a one-off discount of 15% on all our packages in Zanzibar! Book before November 1, 2023 and take advantage of this exclusive offer. When booking, use the discount code: FRIENDS 23

                        </p>
                        <h1 className="surf_text">
                            <span className="text_span fs-1"> What else is there to do?</span>
                        </h1>
                        <p className="surf_para fs-6 mt-3" >Zanzibar offers more than just kitesurfing. The island has a rich history and culture, with influences from Africa, Arabia and Europe. After a day on the water, sample the local cuisine, wander through narrow alleys in Stone Town, or join a spice tour to discover the secrets of Zanzibar’s exotic spices.
                            We hope this newsletter has inspired you to take the plunge and brave the waves of Zanzibar. Whether you are a beginner or a seasoned kite surfer, this tropical island has everything you need for an unforgettable experience.
                        </p>


                        <h1 className="surf_text">
                            <span className="text_span fs-1">What are you waiting for? View the trip and book your trip!</span>
                        </h1>
                        <p className="surf_para fs-6 mt-3" >
                            <p>
                                <strong> See you on the waves of Zanzibar!</strong>
                                <p> With sunny regards,</p>
                                <p>Felix Maks</p>
                            </p>
                        </p>



                        <h1 className="surf_text">
                            <span className="text_span fs-1"> TOGETHER TOWARDS THE MOST BEAUTIFUL ADVENTURE</span>
                        </h1>
                        <p className="surf_para fs-6 mt-3" >So, are you ready to explore Brazil’s breathtaking coastline as you follow the wind and ride the waves? Join us for an unforgettable trip full of adventure and kitesurfing fun.
                            As you prepare for our exciting downwinders in Brazil, it’s crucial to be well prepared so you can enjoy this adventure to the fullest. Here’s a comprehensive list of what to bring:

                        </p>


                        <div className="container">
                        <div className="row mt-3">
                            {imgData2.map((item) => (
                                <div className="col-lg-4 mb-4" key={item.id}>
                                    <div className="card border-0 shadow">
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whyzanzibar
