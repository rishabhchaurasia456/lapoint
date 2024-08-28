import React from 'react'

const Textcontainer = () => {
    return (
        <div>



            <div className="container d-flex flex-column align-items-center justify-content-center text_container">
                <div className="row">
                    <div className="col text-center">
                        <small className='text_small '>Kiteactive</small>
                        <h1 className=" surf_text"><span className='text_span'>What it’s all about</span></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <p className='text_para'>
                            A passion for surfing is the true heartbeat of Lapoint, and it was on a <br /> surf adventure it all started. And now, since 2008, after 15 years, <br /> 100.000 something thrilled guests at the surf camps and maybe <br /> about one million ridden waves around the globe, we can say for <br /> sure that we know what real stoke looks like. We have a wide range <br /> of courses, so no matter if you’re a beginner or a more advanced <br />surfer you’ll get customized surf sessions with us during <br /> your surf holiday.
                        </p>
                    </div>
                </div>
            </div>


            <div className="container mt-5">
                {/* first row  */}
                <div className="row">
                    <div className="col-lg-6 p-2">
                        <div className='p-2'>
                            <h2 className=" text_head">
                                Living the dream
                            </h2>
                            <p className='text_para'>Our Work&Surf packages let you combine online work with pursuing your surf dream and living your best  surf work/holiday life at the camp. Through coliving and coworking, you’ll get to connect with like-minded people and be part of a community that not only lives for Fridays but makes every day count. It’s the perfect spot for digital nomads to enjoy the work/life balance to the fullest. Meet cool people from all over the world and share office space, as well as adventures,</p>
                        </div>

                    </div>
                    <div className="col-lg-6 p-2">
                        <div className='p-2'>
                            <h2 className=" text_head">
                                The best of two worlds
                            </h2>
                            <p className='text_para'>Explore the best of two worlds on our yoga and surf trips. It’s a great synergy between the two, as both yoga and surfing embody mindfulness, flexibility and strength. Combining these activities will make you progress both on the surfboard and on the yoga mat and be more aware of your mind and body connection. Immersed in nature, the ocean and good vibes, we have the perfect setup for a feelgood week that definitely will give you a positive boost.</p>

                        </div>
                    </div>
                </div>
                <br />
                {/* Second row  */}
                <div className="row mt-4">
                    <div className="col-lg-6 p-2">
                        <div className='p-2'>
                            <h2 className=" text_head">
                                Surfing adapted to your level
                            </h2>
                            <p className='text_para'>At our surf camps, everybody is welcome. You can be a complete beginner or an experienced surfer and still enjoy the vibe at the surf camp. We offer surfing for levels 1, 2,3 and also packages with surf guiding for the more advanced riders. Learn to read the ocean better, get more comfortable in the line-up and get individual feedback on the areas you need to improve in your surfing. Join the surf lessons with our experienced surf coaches or head out to the waves with your new friends.,</p>
                        </div>

                    </div>
                    <div className="col-lg-6 p-2">
                        <div className='p-2'>
                            <h2 className=" text_head">
                                Friendships and memories for life
                            </h2>
                            <p className='text_para'>Not only will your stay at the surf camp focus on surf lessons and on improving your skills on the surfboard, but it will also give you an adventure outside of the waves. You’ll be invited to our home away from home where you’ll meet like-minded people and make friends for life. At the surf camp, you can book activities like volcano hikes, ziplining through a jungle, or jumping from waterfalls in a rainforest.</p>

                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Textcontainer
