import React from 'react'
import '../../Pages/Pages.css';
import headerbackimg from '../../Images/storiesban.png'

import img1 from '../../Images/stroyimg1.webp'
import img2 from '../../Images/stroyimg2.webp'
import img3 from '../../Images/stroyimg3.webp'
import img4 from '../../Images/stroyimg4.webp'
import img5 from '../../Images/stroyimg5.webp'
import img6 from '../../Images/stroyimg6.webp'
import img7 from '../../Images/stroyimg7webp.webp'
import img8 from '../../Images/stroyimg8webp.webp'

const cardData = [
    {
        id: 1,
        imageSrc: img1,
        title: 'The story of DEN TV-TAS',
        description: 'Read a full report from the first epic TVTAS challenge!',
        link: '/den-tv-tas',

    },
    {
        id: 2,
        imageSrc: img2,
        title: 'The KiteActive story',
        description: 'About a travel brand out of the ordinary!',
        link: '/Discover_Kiteactive',
    },
    
    {
        id: 3,
        imageSrc: img3,
        title: 'Become a KiteActive teamrider',
        description: 'Travel the world for free!',
        link: '/teamrider',
    },
    
    
    {
        id: 4,
        imageSrc: img4,
        title: 'Downwinders in Brazil',
        description: 'The ultimate travel guide',
        link: '/DownWinder',
    },
    {
        id: 5,
        imageSrc: img5,
        title: 'Why is Tarifa the perfect winter getaway',
        description: 'Read everything you need to know about this awesome destination',
        link: '/teamrider',
    },
    
    {
        id: 6,
        imageSrc: img6,
        title: 'Why Zanzibar is on your bucketlist',
        description: 'Hakuna matata! Experience the African kite vibes',
        link: '/WhyZanzibar',
    },
    {
        id: 7,
        imageSrc: img7,
        title: '6 travel tips for your kiteholiday',
        description: 'Tips and tricks to plan the best holiday on the right spot!',
        link: '/',
    },
    {
        id: 8,
        imageSrc: img8,
        title: 'How to maintain your kitegear',
        description: 'Tips and tricks to kitesurf with your gear safe for years!',
        link: '/kiteGear',
    },

];



const Stories = () => {
    return (
        <div>
            {/* Top banner  */}
            <div className='strories_ban'>
                <div className="page_cont">
                    <img src={headerbackimg} className='S_b_img' alt="" />
                </div>
            </div>

            {/* tap with black section  */}

            <div className="container stroies_cont">
                <div className="row text-center" >
                    <div className="col-lg-4">
                        <button type='button' className='storiesbtn'>Travel Stories</button>
                    </div>
                    <div className="col-lg-4">
                        <button type='button' className='storiesbtn'>Kite Stories</button>
                    </div>
                    <div className="col-lg-4">
                        <button type='button' className='storiesbtn'>kite Academy</button>

                    </div>
                </div>

                <div className="row text-center" >
                    <div className="col-lg-4">
                        <button type='button' className='storiesbtn'>kite Gear</button>
                    </div>
                    <div className="col-lg-4">
                        <button type='button' className='storiesbtn'>tips & Triks</button>

                    </div>
                    <div className="col-lg-4">
                        <button type='button' className='storiesbtn'>Inspiration</button>

                    </div>
                </div>

            </div>



            {/* Trips cards container */}

            <div className="container stories_card">
                <div>
                    <h1 className='surf_text m-5 text-center'>Popular stories</h1>
                </div>
                <div className="row mb-5">
                    {cardData.map((card) => (
                        <div className="col-lg-3 mb-3" key={card.id}>
                            <a href={card.link} className="text-decoration-none">
                                <div className="card text-center border-0 h-100 bg-transparent">
                                    <img src={card.imageSrc} alt={card.title} className="rounded-3" />
                                    <div className="mt-3">
                                        <h5>{card.title}</h5>
                                        <p>{card.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Stories
