import React from 'react'

import img1 from '../../../Images/den_tv.webp';
import img2 from '../../../Images/den_tv2.webp';
import img3 from '../../../Images/den_tv3.webp';

const contentData = [
    {
        id: 1,
        text: "It all started in group 7 at the Dalton school St Jozef in Lemmer. Master Hilko explained to us that the Dutch Wadden Islands are one of the most beautiful pieces of nature in Europe and that there is an easy mnemonic to remember the order of the Wadden Islands. TV-TAS stands for Texel, Vlieland, Terschelling, Ameland and finally Schiermonnikoog.",
    },
    {
        id: 2,
        text: "After starting KiteActive in 2011 and starting our downwinders in Brazil, we got a taste for organizing adventure trips all over the world. During our first KiteActive trip we sailed around the Wadden islands in a traditional sailing clipper, the Manna of skipper Roel, in search of the best kite spots. A legendary trip and the beauty of the Wadden Islands with its great kitesurfing spots immediately had us in its grip. Every year we organize several Wadden trips and during one of these weekends the idea arose to conquer the TV-TAS on a kite board.",
    },
    {
        id: 3,
        text: "Pro kiter Roderick Pijls has been closely involved with KiteActive since the beginning and has guided many of our trips, but from 2020 onwards he is also more actively involved in the planning and organization of our trips. When I shared my idea with Roderick to set up the TV-TAS downwinder, he didn’t have to think twice, ACTION! Roderick worked behind the scenes on the logistics, permits, safety and route of the tour. In 2022 the time had finally come, the downwinder was put online. Our first (hopefully not the last) trip that sold out within 24 hours. Our customer service (led by Mr. AJ Boek) was flooded with emails, apps and telephone calls asking if there was still a place available. With more than 60 people on the waiting list, we realized that we had something very special on our hands.",
    },


    {
        id: 4,
        text: "Pro kiter Roderick Pijls has been closely involved with KiteActive since the beginning and has guided many of our trips, but from 2020 onwards he is also more actively involved in the planning and organization of our trips. When I shared my idea with Roderick to set up the TV-TAS downwinder, he didn’t have to think twice, ACTION! Roderick worked behind the scenes on the logistics, permits, safety and route of the tour. In 2022 the time had finally come, the downwinder was put online. Our first (hopefully not the last) trip that sold out within 24 hours. Our customer service (led by Mr. AJ Boek) was flooded with emails, apps and telephone calls asking if there was still a place available. With more than 60 people on the waiting list, we realized that we had something very special on our hands.",
    },


    {
        id: 5,
        text: "During our Wadden Festival, which we had the first weekend of September, we looked at the forecast and saw wind force 7 NW appearing on the horizon for the first planned weekend. I slowly but surely felt the tension increasing and began to realize that these might well be the conditions for this gigantic hike. The weather gods had heard our prayers and the wind god Aeolus applauds our plan of DEN TV TAS Downwinder! It soon became clear that the conditions were going to be too intense for this to continue responsibly and we had to decide to cancel this weekend, which in retrospect was a very wise decision. With a number of the KiteActive team we have decided to sail part of the trip to get to know the area even better and to train for the upcoming weekends. If you want to read the story of this trip you can find it in this blog..",
    },
    {
        id: 6,
        text: "Weekend two it quickly became clear that the tour could not go ahead, but weekend three soon looked very good with a clean west wind force 6 in the forecast! We could hardly believe it, but these were exactly the conditions we had hoped for!",
    },
    {
        id: 7,
        text: "Every day you check the weather forecast 100 times, you live by it, will the wind go out? Is it increasing? Will he turn? We had to be sure because there are quite a few logistics involved. Fortunately, with Tobias’s correct predictions, we were able to surfweer.nl I soon saw that there was a good wind from the west for two days. Perfect to keep the tour going. The original plan was to start at the head of Texel, but we received reports that a huge delay on the Texel ferry was predicted for this weekend. Fortunately, there was a nice solution for this. We decided to start the downwinder in Den Helder and DEN’ TV-TAS was born!",
    },
];



const imgData = [
    {
        id: 1,
        image: img1,
    },
    {
        id: 2,
        image: img2,
    },
    {
        id: 3,
        image: img3,
    },
];


const contentData2 = [
    {
        id: 1,
        text: "The time had finally come. After a restless night with a storm raging over the Netherlands, the rain pounding non-stop against the window and a few nightmares, we drove from Lemmer with the KiteActive team at 07:30 am. When we arrived at the Afsluitdijk, we saw that the storm had completely subsided and that there was much less wind than the forecast indicated. Once we arrived at Den Helder, 33 people were eagerly waiting in their wetsuits and the adrenaline was rushing through the air. We also call this the well-known kitesurfing jitters.",
    },
    {
        id: 2,
        text: "After a briefing from our team, assigning the buddies and handing over SafeTRX watches, the club started with Felix in the lead and Thomas in charge of the broom wagon at the back. You can compare the function of our team with that of a group of sheepdogs. Our goal is to keep the group together, set the pace and ensure no accidents happen.",
    },
    {
        id: 2,
        text: "Unfortunately, it soon became clear that our online briefing and the many warnings about how difficult this tour was was not enough to get everyone to start at the right level. The first two dropped out at Den Helder, followed by one on Texel. Unfortunately they were not able to complete the trip.",
    },
    {
        id: 2,
        text: "Because we lost a lot of time in the beginning, we started with a disadvantage. The pressure was increased, we had to continue with the club that could do it.",
    },
]
const Dentvtas = () => {
    return (
        <div>

            <div className="container d-flex flex-column align-items-center justify-content-center surf_container">
                <div className="row">
                    <div className="col">
                        <h1 className="surf_text">
                            <span className="text_span">The story of a BAG (TAS), DEN 'TV TAS'</span>
                        </h1>
                        {contentData.map((content) => (
                            <p className="surf_para fs-6 mt-3" key={content.id}>
                                {content.text}
                            </p>
                        ))}
                    </div>
                </div>

            </div>

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

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="surf_text">
                            <span className="text_span fs-2">Saturday morning October 1, 2022</span>
                        </h1>
                        {contentData2.map((content) => (
                            <p className="surf_para fs-6 mt-3" key={content.id}>
                                {content.text}
                            </p>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Dentvtas
