import vedio from '../../Images/website.filmpje.tarifa.mp4';

import vanlife_img1 from "../../Images/level-icon-6.webp"
import vanlife_img2 from "../../Images/level-icon-3.webp"
import vanlife_img3 from "../../Images/level-icon-4.webp"
import vanlife_img4 from "../../Images/level-icon-2.webp"

import vanlife_gall_img1 from '../../Images/img1.webp'
import vanlife_gall_img2 from '../../Images/img2.webp'
import vanlife_gall_img3 from '../../Images/img3.webp'
import vanlife_gall_img4 from '../../Images/img4.webp'

import kitespotimg1 from "../../Images/zanzibar-lagoon-paje-kitesurf-1536x863-1.webp"
import kitespotimg2 from "../../Images/zanzibar-paje-2048x1365-1-1536x1024-1.webp"
import kitespotimg3 from "../../Images/web.webp"

import zanzibar_activity_img1 from '../../Images/spice.webp'
import zanzibar_activity_img2 from '../../Images/kuza.webp'
import zanzibar_activity_img3 from '../../Images/blue.webp'
import zanzibar_activity_img4 from '../../Images/local.webp'
import zanzibar_activity_img5 from '../../Images/snorkeling.webp'

import hosted_earth from "../../Images/earth.webp"
import hosted_at from "../../Images/at.webp"

import hosted_img1 from "../../Images/Hosted1.webp"
import hosted_img2 from "../../Images/hosted2.jpg"
import hosted_img3 from "../../Images/hosted3.webp"
import hosted_img4 from "../../Images/hosted4.webp"
import Accomodation from './TripComponent/Accomodation';


import hotel1 from "../../Images/hotel1.webp";
import hotel2 from "../../Images/hotel2.webp";
import hotel3 from "../../Images/hotel3.webp";

import service1 from "../../Images/service1.webp";
import service2 from "../../Images/service2.webp";
import service3 from "../../Images/service3.webp";



import tab1_card1 from "../../Images/logo1.webp";
import tab1_card2 from "../../Images/logo2.webp";
import tab1_card3 from "../../Images/logo4.webp";
import tab1_card4 from "../../Images/logo1.webp";
import tab1_1 from "../../Images/tab1_1.webp";
import tab1_2 from "../../Images/tab1_2.webp";
import tab2_1 from "../../Images/DSC09834-1536x1024-1.webp";
import tab2_2 from "../../Images/E0105612-scaled.jpg";
import tab3_1 from "../../Images/tab1_2.webp";
import tab3_2 from "../../Images/tab1_2.webp";

const trips = [
    {
        name: 'vanlife',
        vedio: vedio,
        overview: {
            trip_heading: {
                en: "Discover the Vanlife Roadtrip: A European Journey for Kitesurfers",
                gr: "Entdecke die Vanlife-Roadtrip: Eine europäische Reise für Kitesurfer",
                du: "Ontdek de Vanlife Roadtrip: Een Europese Reis voor Kitesurfers"
            },
            trip_para: {
                en: "Join us for an unforgettable VanLife roadtrip across Europe's stunning coastlines, perfect for kitesurfers! Experience the thrill of waking up next to breaking waves, chase the wind, and continuously explore hidden gems. This is VanLife at its finest – where epic kitesurfing sessions meet the freedom of the open road. Pack your gear, hop in your van, and let's hit the road for the adventure of a lifetime! KiteActive will take you to new spots, give you coaching and progress classes and makes you meet a great new community!",
                gr: "Begleite uns auf einem unvergesslichen VanLife-Roadtrip entlang der atemberaubenden Küsten Europas, perfekt für Kitesurfer! Erlebe das aufregende Gefühl, neben brechenden Wellen aufzuwachen, jag den Wind und entdecke ständig versteckte Schätze. Das ist VanLife vom Feinsten – wo epische Kitesurf-Sessions auf die Freiheit der offenen Straße treffen. Packe dein Equipment, spring in deinen Van und lass uns aufbrechen zu einem Abenteuer deines Lebens! KiteActive bringt dich zu neuen Spots, bietet Coaching und Fortschrittskurse und ermöglicht dir, eine großartige neue Community kennenzulernen!",
                du: "Sluit je aan bij ons voor een onvergetelijke VanLife-roadtrip langs de prachtige kusten van Europa, perfect voor kitesurfers! Ervaar de opwinding van wakker worden naast brekende golven, achter de wind aanjagen en voortdurend verborgen juweeltjes verkennen. Dit is VanLife op zijn best - waar epische kitesurf-sessies samenkomen met de vrijheid van de open weg. Pak je gear, stap in je bus en laten we de weg opgaan voor het avontuur van je leven! KiteActive neemt je mee naar nieuwe plekken, biedt coaching en voortgangscursussen en helpt je een geweldige nieuwe gemeenschap te ontmoeten!"
            },
            img1: vanlife_img1,
            img1_head: {
                en: "Dates 2025",
                gr: "Termine 2025",
                du: "Data 2025"
            },
            img1_para: {
                en: "19 - 29 September",
                gr: "19. - 29. September",
                du: "19 - 29 september"
            },
            img2: vanlife_img2,
            img2_head: {
                en: "Skills",
                gr: "Fähigkeiten",
                du: "Vaardigheden"
            },
            img2_para: {
                en: "Every skill is welcome.. from beginners to advanced",
                gr: "Jede Fähigkeit ist willkommen.. von Anfängern bis Fortgeschrittenen",
                du: "Iedere vaardigheid is welkom.. van beginners tot gevorderden"
            },
            img3: vanlife_img3,
            img3_head: {
                en: "Join KiteActive",
                gr: "Werde Teil von KiteActive",
                du: "Word deel van KiteActive"
            },
            img3_para: {
                en: "Good vibes only. Join the groupchat to stay informed or chat with other travellers / KA Team.",
                gr: "Nur gute Vibes. Trete dem Gruppenchat bei, um informiert zu bleiben oder mit anderen Reisenden / dem KA-Team zu plaudern.",
                du: "Alleen goede vibes. Sluit je aan bij de groepschat om op de hoogte te blijven of chat met andere reizigers / KA Team."
            },
            img4: vanlife_img4,
            img4_head: {
                en: "Choose your style",
                gr: "Wähle deinen Stil",
                du: "Kies je stijl"
            },
            img4_para: {
                en: "Would you like to join, but you don't have a camper? No worries, you can rent a camper with us or join with your 'normal' car.",
                gr: "Möchtest du mitmachen, hast aber keinen Camper? Keine Sorge, du kannst bei uns einen Camper mieten oder mit deinem 'normalen' Auto mitkommen.",
                du: "Wil je meedoen, maar heb je geen camper? Geen zorgen, je kunt bij ons een camper huren of meedoen met je 'gewone' auto."
            },
            gall_img1: vanlife_gall_img1,
            gall_img2: vanlife_gall_img2,
            gall_img3: vanlife_gall_img3,
            gall_img4: vanlife_gall_img4,
        },

        kitespot: [
            {
                imgSrc: kitespotimg1,
                text: {
                    en: 'Follow the sun, wind, and waves with KiteActive',
                    du: '',
                    gr: ''
                },
                heading: {
                    en: '',
                    du: '',
                    gr: ''

                },
                para: {
                    en: 'The entire trip will be a big surprise, as we will make a daily plan depending on where the best possible conditions to kite are! A few days before the trip, our team of weather experts will check where in Europe the wind will be the best for kitesurfing. Is it Denmark? Is it France? Maybe we drive to Spain? Or should we hit one of the beautiful lakes in Italy? Get ready to kitesurf Europe like never before! These routes are more or less an indication of kite spots and what to expect. Our travel and weather guides will create the perfect plan day by day to make sure you hit the spot at the right time!',
                    du: '',
                    gr: ''

                },
                imgPosition: 'right',
            },

            {
                imgSrc: kitespotimg2,
                text: {
                    en: 'Variety of unique kite spots',
                    du: '',
                    gr: ''
                },
                heading: {
                    en: '',
                    du: '',
                    gr: ''
                },
                para: {
                    en: "We will choose the best kite spots according to the levels of the group and the forecast. You will see a big variety of different kite spots, or maybe we will stay at one spot all week because the wind is good there.From flat water lagoons to beautiful mountain lakes or just a rough session on the North Sea, there are so many options! Of course, during the trip, there is always room for input, and we will work out the perfect plan together with you.",
                    du: '',
                    gr: ''

                },
                imgPosition: 'left',
            },
        ],
        packages: {
            levelsData: [
                {
                    levelName: 'Level 1 - Beginner',
                    desc: {
                        en: 'This is the perfect package if you have no experience with kitesurfing and want to learn this beautiful sport. Kitesurfing is not a sport that you can just learn in 1 afternoon. That’s why our trips are perfect! You are at a perfect destination with ideal conditions for a week with people who also want to learn as much as possible. Hey ho, let’s go!',
                        du: "",
                        gr: ""
                    },
                    imgsect: [
                        {
                            imgSrc: tab1_1,
                            text: {
                                en: 'Designed for beginners',
                                du: "",
                                gr: ""
                            },
                            para: {
                                en: 'This Level 1 – Beginner package is the ideal start to your kitesurfing career. We will help you get started and ensure that you can get on the water independently as a real kiter under good conditions, safely, and with great pleasure. A complete kite training in 1 week from Zero to Hero! 9 hours of lessons from our team. After the 9 hours you can practice independently with other kiters from your level for the rest of the week with our kite material. A complete package including kite lessons, (shared) equipment rental, supervision, and coaching for 6 days!',
                                du: "",
                                gr: ""
                            },
                            imgPosition: 'left',
                        },
                        {
                            imgSrc: tab1_2,
                            text: {
                                en: 'What to expect from this course?',
                                du: "",
                                gr: ""
                            },
                            para: {
                                en: 'After this week you can go on the water independently with your kite set. To ensure that you make optimal progress, we teach with 1 instructor on a maximum of 2 students. You share a kite set together for the entire week so that you can help each other and learn together. Kitesurfing can be quite intensive, especially in the beginning. It is nice to be on the water together. You will get lessons from our certified instructors! Real kite professionals who have been active in kite industry for over 10 years!',
                                du: "",
                                gr: ""
                            },
                            imgPosition: 'right',
                        },
                    ],
                    acordation_head: {
                        en: 'What do you learn?',
                        du: "",
                        gr: ""
                    },
                    acordation_data: [
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                    ],
                    faq_head: {
                        en: "FAQ",
                        du: "",
                        gr: ""
                    },
                    faq_data: [
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                    ],
                    logo_img: [
                        {
                            img: tab1_card1,
                            title: {
                                en: "Professional team at your service",
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            img: tab1_card2,
                            title: {
                                en: "Headset coaching",
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            img: tab1_card3,
                            title: {
                                en: "Make progress in ideal conditions!",
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            img: tab1_card4,
                            title: {
                                en: "Ask advice from travel expert AJ",
                                du: "",
                                gr: ""
                            },
                        },
                    ]
                },
                {
                    levelName: 'Level 2 - Waterstart',
                    desc: {
                        en: 'This is the perfect package if you have already had a kite course, but it has been a long time ago and you need to be refreshed. Or you need an extra eye on you and some waterstart coaching. Kitesurfing is not a sport that you can learn in 1 afternoon. That’s why our trips are perfect! You are at a beginner friendly destination for a week with people who also want to learn as much as possible. Hey ho, let’s go!',
                        du: "",
                        gr: ""
                    },
                    imgsect: [
                        {
                            imgSrc: tab2_1,
                            text: {
                                en: 'A lot of practise with supervision',
                                du: "",
                                gr: ""
                            },
                            para: {
                                en: 'This intermediate package is the ideal package for kiters who need to get on board. We will help you get started and ensure that you can get on the water independently as a real kiter under good conditions, safely, and with great pleasure. A complete kite training to make you a real independent kiter in 1 week!',
                                du: "",
                                gr: ""
                            },
                            imgPosition: 'left',
                        },
                        {
                            imgSrc: tab2_2,
                            text: {
                                en: 'What do you learn?',
                                du: "",
                                gr: ""
                            },
                            para: {
                                en: 'After this week you can go on the water independently with your own kite set and the goal is that you can kite upwind so that you no longer have to walk! Our instructors ensure that you are in the right place with the right conditions, help you with tips and tricks, coach you, and keep an eye on things while you are practicing.',
                                du: "",
                                gr: ""
                            },
                            imgPosition: 'right',
                        },
                    ],
                    acordation_head: {
                        en: 'What do you learn?',
                        du: "",
                        gr: ""
                    },
                    acordation_data: [
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                    ],
                    faq_head: "FAQ",
                    faq_data: [
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                    ],
                    logo_img: [
                        {
                            img: tab1_card1,
                            title: {
                                en: "Professional team at your service",
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            img: tab1_card2,
                            title: {
                                en: "Headset coaching",
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            img: tab1_card3,
                            title: {
                                en: "Make progress in ideal conditions!",
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            img: tab1_card4,
                            title: {
                                en: "Ask advice from travel expert AJ",
                                du: "",
                                gr: ""
                            },
                        },
                    ]
                },
                {
                    levelName: 'Level 3 - Independend',
                    desc: {
                        en: 'If you are on the water with kiters of the same level, you always make more progression. You learn from each other and push yourself to learn new things! In this course you will be pushed and coached as much as possible to learn new tricks. With KiteActive you will spend a week in a perfect destination with people who also want to make progress. Hey ho, Let’s go!',
                        du: "",
                        gr: ""
                    },
                    imgsect: [
                        {
                            imgSrc: tab3_1,
                            text: {
                                en: 'Learn new tricks',
                                du: "",
                                gr: ""
                            },
                            para: {
                                en: 'This is the ultimate package for anyone who can already kitesurf but wants to make progress and learn new tricks. From your very first jump to a kiteloop handle pass. Our team is ready to help you with the right tips and tricks to achieve your goals!',
                                du: "",
                                gr: ""
                            },
                            imgPosition: 'left',
                        },
                        {
                            imgSrc: tab3_2,
                            text: {
                                en: 'What to expect from this course',
                                du: "",
                                gr: ""
                            },
                            para: {
                                en: 'During the course we will look at what your personal goals are and what is feasible. We go through the theory together and during the week we try to push, coach and motivate you as much as possible to try new things in a safe way.',
                                du: "",
                                gr: ""
                            },
                            imgPosition: 'right',
                        },
                    ],
                    acordation_head: {
                        en: 'What do you learn?',
                        du: "",
                        gr: ""
                    },
                    acordation_data: [
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                    ],
                    faq_head: {
                        en: "FAQ",
                        du: "",
                        gr: ""
                    },
                    faq_data: [
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn the basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                    ],
                    logo_img: [
                        {
                            img: tab1_card1,
                            title: {
                                en: "Professional team at your service",
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            img: tab1_card2,
                            title: {
                                en: "Headset coaching",
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            img: tab1_card3,
                            title: {
                                en: "Make progress in ideal conditions!",
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            img: tab1_card4,
                            title: {
                                en: "Ask advice from travel expert AJ",
                                du: "",
                                gr: ""
                            },
                        },
                    ]
                },
            ],
            Kitegear_rental: {
                title: {
                    en: "Kitegear rental",
                    du: "",
                    gr: ""
                },
                para1: {
                    en: "With us you can find the latest kite material. We have most brands available and we ensure that you are always on the water with the right size kite. Don’t feel like carrying all your materials with you? No problem!",
                    du: "",
                    gr: ""
                },
                para2: {
                    en: "A list of our brands: Core / Naish / F-one / North / Slingshot / Lieuwe / Appletree",
                    du: "",
                    gr: ""
                }
            },
            Disclaimer: {
                title: {
                    en: "Disclaimer",
                    du: "",
                    gr: ""
                },
                para1: {
                    en: "You ensure that you indicate your correct level during your booking. Unfortunately, we cannot control the wind. If you cannot complete your package you can settle the outstanding amount in various ways with us.- You can use the outstanding amount in our webshop on (kite) gear – You can use it for other KiteActive trips or give it as a gift card to friends – You can finish your package in 1 of our schools in Holland. Make sure you get your insurance in order if you break your own or our material",
                    du: "",
                    gr: ""
                },
                para2: {
                    en: "Participation in our packages is always at your own risk. Kitesurfing is an extreme sport and although we will make sure you learn kitesurfing with us most safely, you always need to be aware of yourself and others. Always listen well to the instructions from our team.",
                    du: "",
                    gr: ""
                }
            }
            
        },
        accommodation: {
            main_title: {
                en: "Feel at Home in our Kiteactive Hotel",
                gr: "",
                du: ""
            },
            main_desc: {
                en: "We proudly present you our own KiteActive Hotel on the beach in Paje. The ideal set-up for kite surfers. The atmosphere and our team ensure a top stay with everything you need within reach!",
                gr: "",
                du: ""
            },
            card_details: [
                {
                    imgSrc: hotel1,
                    title: {
                        en: "SHARED ROOM",
                        gr: "",
                        du: ""
                    },
                    description: {
                        en: "Sleep in a room with a maximum of 2 other kiters. We try to keep ladies and gentlemen separate.",
                        gr: "",
                        du: ""
                    }
                },
                {
                    imgSrc: hotel2,
                    title: {
                        en: "PRIVATE ROOM",
                        gr: "",
                        du: ""
                    },
                    description: {
                        en: "Would you like to enjoy a little more privacy? Book a private room for a surcharge of €30/night.",
                        gr: "",
                        du: ""
                    }
                },
                {
                    imgSrc: hotel3,
                    title: {
                        en: "DELUXE SUITE",
                        gr: "",
                        du: ""
                    },
                    description: {
                        en: "You can share a room with your friend at no extra cost. Please let us know when you make your booking.",
                        gr: "",
                        du: ""
                    }
                },
                {
                    imgSrc: service1,
                    title: {
                        en: "ROOFTOP TERRACE",
                        gr: "",
                        du: ""
                    },
                    description: {
                        en: "Sleep in a room with a maximum of 2 other kiters. We try to keep ladies and gentlemen separate.",
                        gr: "",
                        du: ""
                    }
                },
                {
                    imgSrc: service2,
                    title: {
                        en: "KITE SERVICE IN OUR CENTER",
                        gr: "",
                        du: ""
                    },
                    description: {
                        en: "Would you like to enjoy a little more privacy? Book a private room for a surcharge of €30/night.",
                        gr: "",
                        du: ""
                    }
                },
                {
                    imgSrc: service3,
                    title: {
                        en: "PERFECT LOCATION",
                        gr: "",
                        du: ""
                    },
                    description: {
                        en: "You can share a room with your friend at no extra cost. Please let us know when you make your booking..",
                        gr: "",
                        du: ""
                    }
                }
            ],
            location_title: {
                en: "How to get here",
                gr: "",
                du: ""
            },
            location_subtitle: {
                en: "The Caribbean of Africa",
                gr: "",
                du: ""
            },
            location_desc: {
                en: "We proudly present you our own KiteActive Hotel on the beach in Paje. The ideal set-up for kite surfers. The atmosphere and our team ensure a top stay with everything you need within reach!",
                gr: "",
                du: ""
            },
            iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7931.967296071621!2d39.52781068769302!3d-6.2658804101041286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185d3d0a989c2b8f%3A0xd23378fca6a1a8db!2sPaje%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1725534658936!5m2!1sen!2sus"
        },
        included: {

        },
        reviews: {},
        hosted: [
            {
                hosted_img: hosted_img1,
                hosted_name: {
                    en: "Roderick Pijls",
                    gr: "",
                    du: ""
                },
                hosted_position: {
                    en: "",
                    gr: "",
                    du: ""
                },
                kite_exp: {
                    en: "",
                    gr: "",
                    du: ""
                },
                hosted_para: {
                    en: "Having a background of professional kitesurfer for over 12 years has taught me a lot. Seeing many cultures, meeting great people and knowing everything from the best spots in the world has convinced me to start sharing this with everyone who has that little 'Columbus' inside him/ herself.",
                    gr: "",
                    du: ""
                },
                hosted_msg_img: hosted_earth,
                hosted_msg_head: {
                    en: "Top Destination",
                    gr: "",
                    du: ""
                },
                hosted_msg: {
                    en: "",
                    gr: "",
                    du: ""
                },
                hosted_year_img: hosted_at,
                hosted_year_head: {
                    en: "KiteActive",
                    gr: "",
                    du: ""
                },
                hosted_year: {
                    en: "",
                    gr: "",
                    du: ""
                }
            },
            {
                hosted_img: hosted_img1,
                hosted_name: {
                    en: "Felix Maks",
                    gr: "",
                    du: ""
                },
                hosted_position: {
                    en: "Camp manager & Instructor",
                    gr: "",
                    du: ""
                },
                kite_exp: {
                    en: "16 years kite experience",
                    gr: "",
                    du: ""
                },
                hosted_para: {
                    en: "After competing in the world tour I decided that I wanted to share my passion with other people. Now we travel the world and enjoy the ride!",
                    gr: "",
                    du: ""
                },
                hosted_msg_img: hosted_earth,
                hosted_msg_head: {
                    en: "Favoriete Bestemming",
                    gr: "",
                    du: ""
                },
                hosted_msg: {
                    en: "Zanzibar and the Dutch islands",
                    gr: "",
                    du: ""
                },
                hosted_year_img: hosted_at,
                hosted_year_head: {
                    en: "KiteActive",
                    gr: "",
                    du: ""
                },
                hosted_year: {
                    en: "16 years",
                    gr: "",
                    du: ""
                }
            },
        ],
        activities: [
            {
                img: zanzibar_activity_img1,
                title: {
                    en: 'Spice Tour',
                    du: '',
                    gr: ''
                }
            },
            {
                img: zanzibar_activity_img2,
                title: {
                    en: 'kuza cave',
                    du: '',
                    gr: ''
                }
            },
            {
                img: zanzibar_activity_img3,
                title: {
                    en: 'Blue safari',
                    du: '',
                    gr: ''
                }
            },
            {
                img: zanzibar_activity_img4,
                title: {
                    en: 'Local Dhow Sailing',
                    du: '',
                    gr: ''
                }
            },
            {
                img: zanzibar_activity_img5,
                title: {
                    en: 'Snorkeling',
                    du: '',
                    gr: ''
                }
            },
        ],

    },


    {
        name: 'Zanzibar',
        vedio: vedio,
        overview: {
            trip_heading: {
                en: "Kitesurf heaven on earth",
                gr: "Kitesurf-Paradies auf Erden",
                du: "Kitesurf hemel op aarde"
            },
            trip_para: {
                en: "Discover Africa with KiteActive during a kitesurf Zanzibar holiday. A tropical island in the middle of the azure-blue Indian Ocean, Zanzibar kitesurf holiday is a world-class kite spot. Mega is accessible for all levels with wonderful, warm, knee-deep water and a beautiful reef outside the lagoon with fantastic waves. Since 2015, KiteActive has had its own kitesurfing hotel and kite school on the beach. We can recommend this wonderful place with its friendly locals to everyone. Hakuna Matata!",
                gr: "Entdecke Afrika mit KiteActive während eines Kitesurf-Urlaubs auf Sansibar. Eine tropische Insel mitten im azurblauen Indischen Ozean, der Kitesurf-Urlaub auf Sansibar ist ein erstklassiger Kite-Spot. Mega ist für alle Niveaus zugänglich, mit wunderbarem, warmem, knietiefem Wasser und einem wunderschönen Riff außerhalb der Lagune mit fantastischen Wellen. Seit 2015 hat KiteActive sein eigenes Kitesurf-Hotel und seine Kiteschule am Strand. Wir können diesen wunderbaren Ort mit seinen freundlichen Einheimischen jedem empfehlen. Hakuna Matata!",
                du: "Ontdek Afrika met KiteActive tijdens een kitesurfvakantie in Zanzibar. Een tropisch eiland midden in de azuurblauwe Indische Oceaan, Zanzibar kitesurf vakantie is een wereldklasse kitespot. Mega is toegankelijk voor alle niveaus met prachtig, warm, kniediep water en een prachtig rif buiten de lagune met fantastische golven. Sinds 2015 heeft KiteActive een eigen kitesurfschool en kitesurfhotel aan het strand. We kunnen deze prachtige plek met zijn vriendelijke lokale bevolking aan iedereen aanraden. Hakuna Matata!"
            },
            img1: vanlife_img1,
            img1_head: {
                en: "Early bird discount",
                gr: "Frühbucherrabatt",
                du: "Vroegboekkorting"
            },
            img1_para: {
                en: "Book before 1 November and get 10% discount",
                gr: "Buche vor dem 1. November und erhalte 10% Rabatt",
                du: "Boek voor 1 november en ontvang 10% korting"
            },
            img2: vanlife_img2,
            img2_head: {
                en: "Join our community",
                gr: "Werde Teil unserer Community",
                du: "Word lid van onze gemeenschap"
            },
            img2_para: {
                en: "7-15 kiters / week Suited for: couples, solo, family, singles",
                gr: "7-15 Kiter / Woche Geeignet für: Paare, Alleinreisende, Familien, Singles",
                du: "7-15 kiters / week Geschikt voor: koppels, solo, familie, singles"
            },
            img3: vanlife_img3,
            img3_head: {
                en: "Surf skill",
                gr: "Surffähigkeiten",
                du: "Surfniveau"
            },
            img3_para: {
                en: "Suited for all levels. Especially Level 1 - beginners!",
                gr: "Geeignet für alle Niveaus. Besonders Level 1 - Anfänger!",
                du: "Geschikt voor alle niveaus. Vooral Niveau 1 - beginners!"
            },
            img4: vanlife_img4,
            img4_head: {
                en: "Only stars",
                gr: "Nur Sterne",
                du: "Alleen sterren"
            },
            img4_para: {
                en: "Read the reviews of our travellers",
                gr: "Lies die Bewertungen unserer Reisenden",
                du: "Lees de beoordelingen van onze reizigers"
            },
            gall_img1: vanlife_gall_img1,
            gall_img2: vanlife_gall_img2,
            gall_img3: vanlife_gall_img3,
            gall_img4: vanlife_gall_img4,
        },
        kitespot: [
            {
                imgSrc: kitespotimg1,
                text: {
                    en: 'location / kite spot',
                    du: '',
                    gr: ''
                },
                heading: {
                    en: 'feel the warm wind and kite in your board shorts',
                    du: '',
                    gr: ''

                },
                para: {
                    en: 'The gigantic lagoon on our doorstep is a world-class kite spot. Downwinders along the reef, where we race with the dolphins. Wavekiting on the best waves in Zanzibar. Trick clinics in the most beautiful lagoons. Kilometers of long, snow-white palm beaches. Discover the surprises of the tropical kitesurfing island of Zanzibar.',
                    du: '',
                    gr: ''

                },
                imgPosition: 'right',
            },

            {
                imgSrc: kitespotimg2,
                text: {
                    en: 'The WIND',
                    du: '',
                    gr: ''
                },
                heading: {
                    en: 'feel the warm wind and kite in your board shorts',
                    du: '',
                    gr: ''
                },
                para: {
                    en: "The gigantic lagoon on our doorstep is a world-class kite spot. Downwinders along the reef, where we race with the dolphins. Wavekiting on the best waves in Zanzibar. Trick clinics in the most beautiful lagoons. Kilometers of long, snow-white palm beaches. Discover the surprises of the tropical kitesurfing island of Zanzibar",
                    du: '',
                    gr: ''

                },
                imgPosition: 'left',
            },
            {
                imgSrc: kitespotimg3,
                text: {
                    en: 'weather & wind',
                    du: '',
                    gr: ''
                },
                heading: {
                    en: 'feel the warm wind and kite in your board shorts',
                    du: '',
                    gr: ''
                },
                para: {
                    en: "The gigantic lagoon on our doorstep is a world-class kite spot. Downwinders along the reef, where we race with the dolphins. Wavekiting on the best waves in Zanzibar. Trick clinics in the most beautiful lagoons. Kilometers of long, snow-white palm beaches. Discover the surprises of the tropical kitesurfing island of Zanzibar",
                    du: '',
                    gr: ''
                },
                imgPosition: 'right',
            }
        ],
        hosted: [
            {
                hosted_img: hosted_img1,
                hosted_name: {
                    en: "Ellis Muiser",
                    gr: "",
                    du: ""
                },
                hosted_position: {
                    en: "Kitecamp Host",
                    gr: "",
                    du: ""
                },
                kite_exp: {
                    en: "2 years kite experience",
                    gr: "",
                    du: ""
                },
                hosted_para: {
                    en: "I will show you all the hidden gems of Zanzibar! Together we go on kitesurf adventures and amazing parties!",
                    gr: "",
                    du: ""
                },
                hosted_msg_img: hosted_earth,
                hosted_msg_head: {
                    en: "Top Destination",
                    gr: "",
                    du: ""
                },
                hosted_msg: {
                    en: "Zanzibar & Waddensea!",
                    gr: "",
                    du: ""
                },
                hosted_year_img: hosted_at,
                hosted_year_head: {
                    en: "Top Destination",
                    gr: "",
                    du: ""
                },
                hosted_year: {
                    en: "4 years",
                    gr: "",
                    du: ""
                }
            },
            {
                hosted_img: hosted_img1,
                hosted_name: {
                    en: "Alain ”the Magician”",
                    gr: "",
                    du: ""
                },
                hosted_position: {
                    en: "Instructor",
                    gr: "",
                    du: ""
                },
                kite_exp: {
                    en: "9 years kite experience",
                    gr: "",
                    du: ""
                },
                hosted_para: {
                    en: "Together we make an awesome time in Zanzibar! I am an experienced kite instructors for years and I will teach you everything I know",
                    gr: "",
                    du: ""
                },
                hosted_msg_img: hosted_earth,
                hosted_msg_head: {
                    en: "Favoriete Bestemming",
                    gr: "",
                    du: ""
                },
                hosted_msg: {
                    en: "Paje beach, ZANZIBAR!",
                    gr: "",
                    du: ""
                },
                hosted_year_img: hosted_at,
                hosted_year_head: {
                    en: "KiteActive",
                    gr: "",
                    du: ""
                },
                hosted_year: {
                    en: "6 years",
                    gr: "",
                    du: ""
                }
            },
            {
                hosted_img: hosted_img1,
                hosted_name: {
                    en: "Chollo ”Zanzibari”",
                    gr: "",
                    du: ""
                },
                hosted_position: {
                    en: "Instructor",
                    gr: "",
                    du: ""
                },
                kite_exp: {
                    en: "9 years kite experience",
                    gr: "",
                    du: ""
                },
                hosted_para: {
                    en: "Kitesurfing and teaching is my biggest passion. I am already with KiteActive for more then 8 years and I enjoy every minute on the water with you!",
                    gr: "",
                    du: ""
                },
                hosted_msg_img: hosted_earth,
                hosted_msg_head: {
                    en: "Favoriete Bestemming",
                    gr: "",
                    du: ""
                },
                hosted_msg: {
                    en: "Paje beach, ZANZIBAR!",
                    gr: "",
                    du: ""
                },
                hosted_year_img: hosted_at,
                hosted_year_head: {
                    en: "KiteActive",
                    gr: "",
                    du: ""
                },
                hosted_year: {
                    en: "8 years",
                    gr: "",
                    du: ""
                }
            },
            {
                hosted_img: hosted_img1,
                hosted_name: {
                    en: "Furaha ”Happy”",
                    gr: "",
                    du: ""
                },
                hosted_position: {
                    en: "Camp manager",
                    gr: "",
                    du: ""
                },
                kite_exp: {
                    en: "8 years experience in KiteActive hotel",
                    gr: "",
                    du: ""
                },
                hosted_para: {
                    en: "Karibu Zanzibar! I will make sure you have an amazing stay. I am in charge of the bar, reception and I organize amazing trips for you when there is no wind.",
                    gr: "",
                    du: ""
                },
                hosted_msg_img: hosted_earth,
                hosted_msg_head: {
                    en: "Favoriete Bestemming",
                    gr: "",
                    du: ""
                },
                hosted_msg: {
                    en: "I love Zanzibar",
                    gr: "",
                    du: ""
                },
                hosted_year_img: hosted_at,
                hosted_year_head: {
                    en: "KiteActive",
                    gr: "",
                    du: ""
                },
                hosted_year: {
                    en: "7 years",
                    gr: "",
                    du: ""
                }
            },
        ],
        reviews: {}
    },

    // -------Endlessummerparty   egytp----------
    {
        name: 'Endlessummerparty',
        vedio: vedio,
        hosted: [
            {
                hosted_img: hosted_img1,
                hosted_name: {
                    en: "Roderick Pijls",
                    gr: "",
                    du: ""
                },
                hosted_position: {
                    en: "",
                    gr: "",
                    du: ""
                },
                kite_exp: {
                    en: "",
                    gr: "",
                    du: ""
                },
                hosted_para: {
                    en: "Having a background of professional kitesurfer for over 12 years has taught me a lot. Seeing many cultures, meeting great people and knowing everything from the best spots in the world has convinced me to start sharing this with everyone who has that little 'Columbus' inside him/ herself.",
                    gr: "",
                    du: ""
                },
                hosted_msg_img: hosted_earth,
                hosted_msg_head: {
                    en: "Top Destination",
                    gr: "",
                    du: ""
                },
                hosted_msg: {
                    en: "",
                    gr: "",
                    du: ""
                },
                hosted_year_img: hosted_at,
                hosted_year_head: {
                    en: "KiteActive",
                    gr: "",
                    du: ""
                },
                hosted_year: {
                    en: "",
                    gr: "",
                    du: ""
                }
            },
            {
                hosted_img: hosted_img1,
                hosted_name: {
                    en: "Bas ”=cool”",
                    gr: "",
                    du: ""
                },
                hosted_position: {
                    en: "Photographer & Instructor",
                    gr: "",
                    du: ""
                },
                kite_exp: {
                    en: "8 years kite experience",
                    gr: "",
                    du: ""
                },
                hosted_para: {
                    en: "I did my traineeship at Kiteactive when I was 16, and since then I have been part of the Kiteactive family!",
                    gr: "",
                    du: ""
                },
                hosted_msg_img: hosted_earth,
                hosted_msg_head: {
                    en: "Favoriete Bestemming",
                    gr: "",
                    du: ""
                },
                hosted_msg: {
                    en: "I like Sicily",
                    gr: "",
                    du: ""
                },
                hosted_year_img: hosted_at,
                hosted_year_head: {
                    en: "KiteActive",
                    gr: "",
                    du: ""
                },
                hosted_year: {
                    en: "7 years",
                    gr: "",
                    du: ""
                }
            },
        ],
    },

    // -------sicily----------
    {
        name: 'sicily',
        vedio: vedio,
        hosted: [
            {
                hosted_img: hosted_img1,
                hosted_name: {
                    en: "Annemaj Muiser",
                    gr: "",
                    du: ""
                },
                hosted_position: {
                    en: "Photographer & Instructor",
                    gr: "",
                    du: ""
                },
                kite_exp: {
                    en: "6 years kite experience",
                    gr: "",
                    du: ""
                },
                hosted_para: {
                    en: "I love shooting pictures and teaching other people our amazing sport. I will make sure you have the perfect kite picture at the end of the week :)",
                    gr: "",
                    du: ""
                },
                hosted_msg_img: hosted_earth,
                hosted_msg_head: {
                    en: "Top Destination",
                    gr: "",
                    du: ""
                },
                hosted_msg: {
                    en: "Zanzibar",
                    gr: "",
                    du: ""
                },
                hosted_year_img: hosted_at,
                hosted_year_head: {
                    en: "KiteActive",
                    gr: "",
                    du: ""
                },
                hosted_year: {
                    en: "6 years",
                    gr: "",
                    du: ""
                }
            },
        ],
    },

    // -------snowkite----------
    {
        name: 'snowkite',
        vedio: vedio,
        hosted: [
            {
                hosted_img: hosted_img1,
                hosted_name: {
                    en: "Annemaj Muiser",
                    gr: "",
                    du: ""
                },
                hosted_position: {
                    en: "Photographer & Instructor",
                    gr: "",
                    du: ""
                },
                kite_exp: {
                    en: "6 years kite experience",
                    gr: "",
                    du: ""
                },
                hosted_para: {
                    en: "I love shooting pictures and teaching other people our amazing sport. I will make sure you have the perfect kite picture at the end of the week :)",
                    gr: "",
                    du: ""
                },
                hosted_msg_img: hosted_earth,
                hosted_msg_head: {
                    en: "Top Destination",
                    gr: "",
                    du: ""
                },
                hosted_msg: {
                    en: "Zanzibar",
                    gr: "",
                    du: ""
                },
                hosted_year_img: hosted_at,
                hosted_year_head: {
                    en: "KiteActive",
                    gr: "",
                    du: ""
                },
                hosted_year: {
                    en: "6 years",
                    gr: "",
                    du: ""
                }
            },
            {
                hosted_img: hosted_img1,
                hosted_name: {
                    en: "Felix Maks",
                    gr: "",
                    du: ""
                },
                hosted_position: {
                    en: "Camp manager & Instructor",
                    gr: "",
                    du: ""
                },
                kite_exp: {
                    en: "16 years kite experience",
                    gr: "",
                    du: ""
                },
                hosted_para: {
                    en: "After competing in the world tour I decided that I wanted to share my passion with other people. Now we travel the world and enjoy the ride!",
                    gr: "",
                    du: ""
                },
                hosted_msg_img: hosted_earth,
                hosted_msg_head: {
                    en: "Favoriete Bestemming",
                    gr: "",
                    du: ""
                },
                hosted_msg: {
                    en: "Zanzibar and the Dutch islands",
                    gr: "",
                    du: ""
                },
                hosted_year_img: hosted_at,
                hosted_year_head: {
                    en: "KiteActive",
                    gr: "",
                    du: ""
                },
                hosted_year: {
                    en: "16 years",
                    gr: "",
                    du: ""
                }
            },
            {
                hosted_img: hosted_img1,
                hosted_name: {
                    en: "Roderick Pijls",
                    gr: "",
                    du: ""
                },
                hosted_position: {
                    en: "",
                    gr: "",
                    du: ""
                },
                kite_exp: {
                    en: "",
                    gr: "",
                    du: ""
                },
                hosted_para: {
                    en: "Having a background of professional kitesurfer for over 12 years has taught me a lot. Seeing many cultures, meeting great people and knowing everything from the best spots in the world has convinced me to start sharing this with everyone who has that little 'Columbus' inside him/ herself.",
                    gr: "",
                    du: ""
                },
                hosted_msg_img: hosted_earth,
                hosted_msg_head: {
                    en: "Top Destination",
                    gr: "",
                    du: ""
                },
                hosted_msg: {
                    en: "",
                    gr: "",
                    du: ""
                },
                hosted_year_img: hosted_at,
                hosted_year_head: {
                    en: "KiteActive",
                    gr: "",
                    du: ""
                },
                hosted_year: {
                    en: "",
                    gr: "",
                    du: ""
                }
            },
            {
                hosted_img: hosted_img1,
                hosted_name: {
                    en: "Jan Willem",
                    gr: "",
                    du: ""
                },
                hosted_position: {
                    en: "",
                    gr: "",
                    du: ""
                },
                kite_exp: {
                    en: "",
                    gr: "",
                    du: ""
                },
                hosted_para: {
                    en: "As a Gym teacher my job is to motivate people to do activities and sports. Kitesurfing is my biggest passion and I will teach you everything I know!",
                    gr: "",
                    du: ""
                },
                hosted_msg_img: hosted_earth,
                hosted_msg_head: {
                    en: "Top Destination",
                    gr: "",
                    du: ""
                },
                hosted_msg: {
                    en: "",
                    gr: "",
                    du: ""
                },
                hosted_year_img: hosted_at,
                hosted_year_head: {
                    en: "KiteActive",
                    gr: "",
                    du: ""
                },
                hosted_year: {
                    en: "",
                    gr: "",
                    du: ""
                }
            },
        ],
    },

    // ------------------sky high cape-town----------------------
    {
        name: 'sky high cape-town',
        vedio: vedio,
        hosted: [
            {
                hosted_img: hosted_img1,
                hosted_name: {
                    en: "Jan Willem",
                    gr: "",
                    du: ""
                },
                hosted_position: {
                    en: "",
                    gr: "",
                    du: ""
                },
                kite_exp: {
                    en: "",
                    gr: "",
                    du: ""
                },
                hosted_para: {
                    en: "As a Gym teacher my job is to motivate people to do activities and sports. Kitesurfing is my biggest passion and I will teach you everything I know!",
                    gr: "",
                    du: ""
                },
                hosted_msg_img: hosted_earth,
                hosted_msg_head: {
                    en: "Top Destination",
                    gr: "",
                    du: ""
                },
                hosted_msg: {
                    en: "",
                    gr: "",
                    du: ""
                },
                hosted_year_img: hosted_at,
                hosted_year_head: {
                    en: "KiteActive",
                    gr: "",
                    du: ""
                },
                hosted_year: {
                    en: "",
                    gr: "",
                    du: ""
                }
            },
            {
                hosted_img: hosted_img1,
                hosted_name: {
                    en: "Roderick Pijls",
                    gr: "",
                    du: ""
                },
                hosted_position: {
                    en: "",
                    gr: "",
                    du: ""
                },
                kite_exp: {
                    en: "",
                    gr: "",
                    du: ""
                },
                hosted_para: {
                    en: "Having a background of professional kitesurfer for over 12 years has taught me a lot. Seeing many cultures, meeting great people and knowing everything from the best spots in the world has convinced me to start sharing this with everyone who has that little 'Columbus' inside him/ herself.",
                    gr: "",
                    du: ""
                },
                hosted_msg_img: hosted_earth,
                hosted_msg_head: {
                    en: "Top Destination",
                    gr: "",
                    du: ""
                },
                hosted_msg: {
                    en: "",
                    gr: "",
                    du: ""
                },
                hosted_year_img: hosted_at,
                hosted_year_head: {
                    en: "KiteActive",
                    gr: "",
                    du: ""
                },
                hosted_year: {
                    en: "",
                    gr: "",
                    du: ""
                }
            },
            {
                hosted_img: hosted_img1,
                hosted_name: {
                    en: "Leon ”the machine”",
                    gr: "",
                    du: ""
                },
                hosted_position: {
                    en: "Instructor / Coach",
                    gr: "",
                    du: ""
                },
                kite_exp: {
                    en: "10 years kite experience",
                    gr: "",
                    du: ""
                },
                hosted_para: {
                    en: "In the summer I have my own kiteschool the Spot on Ameland. In the winter I travel the world with KiteActive!",
                    gr: "",
                    du: ""
                },
                hosted_msg_img: hosted_earth,
                hosted_msg_head: {
                    en: "Favoriete Bestemming",
                    gr: "",
                    du: ""
                },
                hosted_msg: {
                    en: "Tarifa!",
                    gr: "",
                    du: ""
                },
                hosted_year_img: hosted_at,
                hosted_year_head: {
                    en: "KiteActive",
                    gr: "",
                    du: ""
                },
                hosted_year: {
                    en: "1 year",
                    gr: "",
                    du: ""
                }
            },
            {
                hosted_img: hosted_img1,
                hosted_name: {
                    en: "Joeri ”the Chef”",
                    gr: "",
                    du: ""
                },
                hosted_position: {
                    en: "Chef",
                    gr: "",
                    du: ""
                },
                kite_exp: {
                    en: "4 years kite experience",
                    gr: "",
                    du: ""
                },
                hosted_para: {
                    en: "In the summer I work in a foodtruck on festivals and in the winter I cruise around in my Van and try to kite as much as possible!",
                    gr: "",
                    du: ""
                },
                hosted_msg_img: hosted_earth,
                hosted_msg_head: {
                    en: "Favoriete Bestemming",
                    gr: "",
                    du: ""
                },
                hosted_msg: {
                    en: "Tarifa!",
                    gr: "",
                    du: ""
                },
                hosted_year_img: hosted_at,
                hosted_year_head: {
                    en: "KiteActive",
                    gr: "",
                    du: ""
                },
                hosted_year: {
                    en: "3 years",
                    gr: "",
                    du: ""
                }
            },
        ],
        packages: {
            levelsData: [
                {
                    levelName: 'Level 3 - Independend',
                    desc: {
                        en: 'If you are on the water with kiters of the same level, you always make more progression. You learn from each other and push yourself to learn new things! In this course you will be pushed and coached as much as possible to learn new tricks. With KiteActive you will spend a week in a perfect destination with people who also want to make progress. Hey ho, Let’s go! 🙂',
                        du: "",
                        gr: ""
                    },
                    imgsect: [
                        {
                            imgSrc: tab1_1,
                            text: {
                                en: 'Learn new tricks and make progression',
                                du: "",
                                gr: ""
                            },
                            para: {
                                en: 'This is the ultimate package for anyone who can already kitesurf but wants to make progress and learn new tricks. From your very first jump to a kiteloop handle pass. Our team is ready to help you with the right tips and tricks to achieve your goals!',
                                du: "",
                                gr: ""
                            },
                            imgPosition: 'left',
                        },
                        {
                            imgSrc: tab1_2,
                            text: {
                                en: 'What to expect from this course?',
                                du: "",
                                gr: ""
                            },
                            para: {
                                en: 'During the course we will look at what your personal goals are and what is feasible. We go through the theory together and during the week we try to push, coach and motivate you as much as possible to try new things in a safe way.',
                                du: "",
                                gr: ""
                            },
                            imgPosition: 'right',
                        },
                    ],
                    acordation_head: {
                        en: 'What do you learn?',
                        du: "",
                        gr: ""
                    },
                    acordation_data: [
                        {
                            title: {
                                en: 'The basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Your first jump',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'You want to learn how to go skyhigh?',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Back & Front roll',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Make a salto in the air! You think it is difficult, but we will learn you this amazing trick in 1 week!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Board grabs, onefooters and board-offs',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Grab the board in front of the camera!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Your first kiteloop (downloop)',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Fly like a rollercoaster',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Your first downwinder',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'With a downwinder your are doing a kite tour along the coast!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn how to ride strapless / bottom turns / wave skills',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Upgrade your skills in the waves',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Get unhooked!',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to do unhooked tricks like Raily, S-bend or maybe even a handle pass?',
                                du: "",
                                gr: ""
                            },
                        },
                    ],
                    faq_head: {
                        en: "FAQ",
                        du: "",
                        gr: ""
                    },
                    faq_data: [
                        {
                            title: {
                                en: 'How many hours is this course?',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'We do not link exact hours to this package. We try to push everyone as much as possible and occasionally provide 1-on-1 guidance. The goal is to make as much progress as possible and during this course we will give you all the tools you need to continue practicing.',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Is kitegear included in this package?',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'No, you need to bring your own kitegear or rent a complete set at € 399 / week',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Am I insured?',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'You are not insured against damage through KiteActive. We recommend that you check your travel insurance carefully to see whether it also covers extreme sports. to avoid disappointment and hassle on holiday. We work together with Sportzeker and then you are always covered for everything!',
                                du: "",
                                gr: ""
                            },
                        },
                    ],
                    logo_img: [
                        {
                            img: tab1_card1,
                            title: {
                                en: "Professional team",
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            img: tab1_card2,
                            title: {
                                en: "Headset coaching",
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            img: tab1_card3,
                            title: {
                                en: "Get advice from travel expert AJ",
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            img: tab1_card4,
                            title: {
                                en: "Photo & Video proof / analysis",
                                du: "",
                                gr: ""
                            },
                        },
                    ]
                },
                {
                    levelName: 'Level 4 - Advanced',
                    desc: {
                        en: 'If you are on the water with kiters of the same level, you always make more progression. You learn from each other and push yourself to learn new things! In this course you will be pushed and coached as much as possible to learn new tricks. With KiteActive you will spend a week in a perfect destination with people who also want to make progress. Hey ho, Let’s go! 🙂',
                        du: "",
                        gr: ""
                    },
                    imgsect: [
                        {
                            imgSrc: tab2_1,
                            text: {
                                en: 'Level up! There is still so much to learn',
                                du: "",
                                gr: ""
                            },
                            para: {
                                en: 'Do you want to improve in big air kiting? Going for that megaloop? Or do you really want to learn this sick handle pass? this course is also for waveriders who make are able to do long downwinders in challenging conditions and who want to learn to perform better in the waves.',
                                du: "",
                                gr: ""
                            },
                            imgPosition: 'left',
                        },
                    ],
                    acordation_head: {
                        en: 'What do you learn?',
                        du: "",
                        gr: ""
                    },
                    acordation_data: [
                        {
                            title: {
                                en: 'Long downwinders in challenging conditions',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Like DEN TVTAS for example',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Jump 10 meter +',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Do you want to go skyhigh with us?',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Megaloop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: '',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Unhooked tricks',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: '',
                                du: "",
                                gr: ""
                            },
                        },
                    ],
                    faq_head: "FAQ",
                    faq_data: [
                        {
                            title: {
                                en: 'Am i insured?',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'No not with us. You need to take care on your own travel insurance. If you want we can help you with finding the right one!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'How many hours is this course?',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'No specific hours are attached to this course. From time to time we do 1 on 1 sessions and our team will do our best to learn you as much as possible during this week',
                                du: "",
                                gr: ""
                            },
                        },
                    ],
                    logo_img: [
                        {
                            img: tab1_card1,
                            title: {
                                en: "Make progression in ideal conditions",
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            img: tab1_card2,
                            title: {
                                en: "Advice from our travel expert AJ",
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            img: tab1_card3,
                            title: {
                                en: "Headset coaching",
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            img: tab1_card4,
                            title: {
                                en: "Photo & Video proof / analysis",
                                du: "",
                                gr: ""
                            },
                        },
                    ]
                },
            ],
            Kitegear_rental: {
                title: {
                    en: "Kitegear rental",
                    du: "",
                    gr: ""
                },
                para1: {
                    en: "With us you can find the latest kite material. We have most brands available and we ensure that you are always on the water with the right size kite. Don’t feel like carrying all your materials with you? No problem!",
                    du: "",
                    gr: ""
                },
                para2: {
                    en: "A list of our brands: Core / Naish / F-one / North / Slingshot / Lieuwe / Appletree",
                    du: "",
                    gr: ""
                }
            },
            Disclaimer: {
                title: {
                    en: "Disclaimer",
                    du: "",
                    gr: ""
                },
                para1: {
                    en: "You ensure that you indicate your correct level during your booking. Unfortunately, we cannot control the wind. If you cannot complete your package you can settle the outstanding amount in various ways with us.- You can use the outstanding amount in our webshop on (kite) gear – You can use it for other KiteActive trips or give it as a gift card to friends – You can finish your package in 1 of our schools in Holland. Check your insurance. If you need help with the right insurance please ask us for help! Not all insurance companies cover kitesurf material.",
                    du: "",
                    gr: ""
                },
                para2: {
                    en: "Participation in our packages is always at your own risk. Kitesurfing is an extreme sport and although we will make sure you learn kitesurfing with us most safely, you always need to be aware of yourself and others. Always listen well to the instructions from our team.",
                    du: "",
                    gr: ""
                }
            }
            
        },



    },

    // ---------------tarifa---------------

    {
        name: 'Kite mecca tarifa',
        vedio: vedio,
        hosted: [
            {
                hosted_img: hosted_img1,
                hosted_name: {
                    en: "Annemaj Muiser",
                    gr: "",
                    du: ""
                },
                hosted_position: {
                    en: "Photographer & Instructor",
                    gr: "",
                    du: ""
                },
                kite_exp: {
                    en: "6 years kite experience",
                    gr: "",
                    du: ""
                },
                hosted_para: {
                    en: "I love shooting pictures and teaching other people our amazing sport. I will make sure you have the perfect kite picture at the end of the week :)",
                    gr: "",
                    du: ""
                },
                hosted_msg_img: hosted_earth,
                hosted_msg_head: {
                    en: "Top Destination",
                    gr: "",
                    du: ""
                },
                hosted_msg: {
                    en: "Zanzibar",
                    gr: "",
                    du: ""
                },
                hosted_year_img: hosted_at,
                hosted_year_head: {
                    en: "KiteActive",
                    gr: "",
                    du: ""
                },
                hosted_year: {
                    en: "6 years",
                    gr: "",
                    du: ""
                }
            },
            {
                hosted_img: hosted_img1,
                hosted_name: {
                    en: "Felix Maks",
                    gr: "",
                    du: ""
                },
                hosted_position: {
                    en: "Camp manager & Instructor",
                    gr: "",
                    du: ""
                },
                kite_exp: {
                    en: "16 years kite experience",
                    gr: "",
                    du: ""
                },
                hosted_para: {
                    en: "After competing in the world tour I decided that I wanted to share my passion with other people. Now we travel the world and enjoy the ride!",
                    gr: "",
                    du: ""
                },
                hosted_msg_img: hosted_earth,
                hosted_msg_head: {
                    en: "Favoriete Bestemming",
                    gr: "",
                    du: ""
                },
                hosted_msg: {
                    en: "Zanzibar and the Dutch islands",
                    gr: "",
                    du: ""
                },
                hosted_year_img: hosted_at,
                hosted_year_head: {
                    en: "KiteActive",
                    gr: "",
                    du: ""
                },
                hosted_year: {
                    en: "16 years",
                    gr: "",
                    du: ""
                }
            },
            {
                hosted_img: hosted_img1,
                hosted_name: {
                    en: "Leon ”the machine”",
                    gr: "",
                    du: ""
                },
                hosted_position: {
                    en: "Instructor / Coach",
                    gr: "",
                    du: ""
                },
                kite_exp: {
                    en: "10 years kite experience",
                    gr: "",
                    du: ""
                },
                hosted_para: {
                    en: "In the summer I have my own kiteschool the Spot on Ameland. In the winter I travel the world with KiteActive!",
                    gr: "",
                    du: ""
                },
                hosted_msg_img: hosted_earth,
                hosted_msg_head: {
                    en: "Favoriete Bestemming",
                    gr: "",
                    du: ""
                },
                hosted_msg: {
                    en: "Tarifa!",
                    gr: "",
                    du: ""
                },
                hosted_year_img: hosted_at,
                hosted_year_head: {
                    en: "KiteActive",
                    gr: "",
                    du: ""
                },
                hosted_year: {
                    en: "1 year",
                    gr: "",
                    du: ""
                }
            },
            {
                hosted_img: hosted_img1,
                hosted_name: {
                    en: "Joeri ”the Chef”",
                    gr: "",
                    du: ""
                },
                hosted_position: {
                    en: "Chef",
                    gr: "",
                    du: ""
                },
                kite_exp: {
                    en: "4 years kite experience",
                    gr: "",
                    du: ""
                },
                hosted_para: {
                    en: "In the summer I work in a foodtruck on festivals and in the winter I cruise around in my Van and try to kite as much as possible!",
                    gr: "",
                    du: ""
                },
                hosted_msg_img: hosted_earth,
                hosted_msg_head: {
                    en: "Favoriete Bestemming",
                    gr: "",
                    du: ""
                },
                hosted_msg: {
                    en: "Tarifa!",
                    gr: "",
                    du: ""
                },
                hosted_year_img: hosted_at,
                hosted_year_head: {
                    en: "KiteActive",
                    gr: "",
                    du: ""
                },
                hosted_year: {
                    en: "3 years",
                    gr: "",
                    du: ""
                }
            },
        ],
        packages: {
            levelsData: [
                {
                    levelName: 'Level 3 - Independend',
                    desc: {
                        en: 'If you are on the water with kiters of the same level, you always make more progression. You learn from each other and push yourself to learn new things! In this course you will be pushed and coached as much as possible to learn new tricks. With KiteActive you will spend a week in a perfect destination with people who also want to make progress. Hey ho, Let’s go! 🙂',
                        du: "",
                        gr: ""
                    },
                    imgsect: [
                        {
                            imgSrc: tab1_1,
                            text: {
                                en: 'Learn new tricks and make progression',
                                du: "",
                                gr: ""
                            },
                            para: {
                                en: 'This is the ultimate package for anyone who can already kitesurf but wants to make progress and learn new tricks. From your very first jump to a kiteloop handle pass. Our team is ready to help you with the right tips and tricks to achieve your goals!',
                                du: "",
                                gr: ""
                            },
                            imgPosition: 'left',
                        },
                        {
                            imgSrc: tab1_2,
                            text: {
                                en: 'What to expect from this course?',
                                du: "",
                                gr: ""
                            },
                            para: {
                                en: 'During the course we will look at what your personal goals are and what is feasible. We go through the theory together and during the week we try to push, coach and motivate you as much as possible to try new things in a safe way.',
                                du: "",
                                gr: ""
                            },
                            imgPosition: 'right',
                        },
                    ],
                    acordation_head: {
                        en: 'What do you learn?',
                        du: "",
                        gr: ""
                    },
                    acordation_data: [
                        {
                            title: {
                                en: 'The basics of pop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to pop. This is an very important skill which you need for your entire kite career!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Your first jump',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'You want to learn how to go skyhigh?',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Back & Front roll',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Make a salto in the air! You think it is difficult, but we will learn you this amazing trick in 1 week!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Board grabs, onefooters and board-offs',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Grab the board in front of the camera!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Your first kiteloop (downloop)',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Fly like a rollercoaster',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Your first downwinder',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'With a downwinder your are doing a kite tour along the coast!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Learn how to ride strapless / bottom turns / wave skills',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Upgrade your skills in the waves',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Get unhooked!',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Learn how to do unhooked tricks like Raily, S-bend or maybe even a handle pass?',
                                du: "",
                                gr: ""
                            },
                        },
                    ],
                    faq_head: {
                        en: "FAQ",
                        du: "",
                        gr: ""
                    },
                    faq_data: [
                        {
                            title: {
                                en: 'How many hours is this course?',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'We do not link exact hours to this package. We try to push everyone as much as possible and occasionally provide 1-on-1 guidance. The goal is to make as much progress as possible and during this course we will give you all the tools you need to continue practicing.',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Is kitegear included in this package?',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'No, you need to bring your own kitegear or rent a complete set at € 399 / week',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Am I insured?',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'You are not insured against damage through KiteActive. We recommend that you check your travel insurance carefully to see whether it also covers extreme sports. to avoid disappointment and hassle on holiday. We work together with Sportzeker and then you are always covered for everything!',
                                du: "",
                                gr: ""
                            },
                        },
                    ],
                    logo_img: [
                        {
                            img: tab1_card1,
                            title: {
                                en: "Professional team",
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            img: tab1_card2,
                            title: {
                                en: "Headset coaching",
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            img: tab1_card3,
                            title: {
                                en: "Get advice from travel expert AJ",
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            img: tab1_card4,
                            title: {
                                en: "Photo & Video proof / analysis",
                                du: "",
                                gr: ""
                            },
                        },
                    ]
                },
                {
                    levelName: 'Level 4 - Advanced',
                    desc: {
                        en: 'If you are on the water with kiters of the same level, you always make more progression. You learn from each other and push yourself to learn new things! In this course you will be pushed and coached as much as possible to learn new tricks. With KiteActive you will spend a week in a perfect destination with people who also want to make progress. Hey ho, Let’s go! 🙂',
                        du: "",
                        gr: ""
                    },
                    imgsect: [
                        {
                            imgSrc: tab2_1,
                            text: {
                                en: 'Level up! There is still so much to learn',
                                du: "",
                                gr: ""
                            },
                            para: {
                                en: 'Do you want to improve in big air kiting? Going for that megaloop? Or do you really want to learn this sick handle pass? this course is also for waveriders who make are able to do long downwinders in challenging conditions and who want to learn to perform better in the waves.',
                                du: "",
                                gr: ""
                            },
                            imgPosition: 'left',
                        },
                    ],
                    acordation_head: {
                        en: 'What do you learn?',
                        du: "",
                        gr: ""
                    },
                    acordation_data: [
                        {
                            title: {
                                en: 'Long downwinders in challenging conditions',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Like DEN TVTAS for example',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Jump 10 meter +',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'Do you want to go skyhigh with us?',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Megaloop',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: '',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'Unhooked tricks',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: '',
                                du: "",
                                gr: ""
                            },
                        },
                    ],
                    faq_head: "FAQ",
                    faq_data: [
                        {
                            title: {
                                en: 'Am i insured?',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'No not with us. You need to take care on your own travel insurance. If you want we can help you with finding the right one!',
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            title: {
                                en: 'How many hours is this course?',
                                du: "",
                                gr: ""
                            },
                            info: {
                                en: 'No specific hours are attached to this course. From time to time we do 1 on 1 sessions and our team will do our best to learn you as much as possible during this week',
                                du: "",
                                gr: ""
                            },
                        },
                    ],
                    logo_img: [
                        {
                            img: tab1_card1,
                            title: {
                                en: "Make progression in ideal conditions",
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            img: tab1_card2,
                            title: {
                                en: "Advice from our travel expert AJ",
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            img: tab1_card3,
                            title: {
                                en: "Headset coaching",
                                du: "",
                                gr: ""
                            },
                        },
                        {
                            img: tab1_card4,
                            title: {
                                en: "Photo & Video proof / analysis",
                                du: "",
                                gr: ""
                            },
                        },
                    ]
                },
            ],
            Kitegear_rental: {
                title: {
                    en: "Kitegear rental",
                    du: "",
                    gr: ""
                },
                para1: {
                    en: "With us you can find the latest kite material. We have most brands available and we ensure that you are always on the water with the right size kite. Don’t feel like carrying all your materials with you? No problem!",
                    du: "",
                    gr: ""
                },
                para2: {
                    en: "A list of our brands: Core / Naish / F-one / North / Slingshot / Lieuwe / Appletree",
                    du: "",
                    gr: ""
                }
            },
            Disclaimer: {
                title: {
                    en: "Disclaimer",
                    du: "",
                    gr: ""
                },
                para1: {
                    en: "You ensure that you indicate your correct level during your booking. Unfortunately, we cannot control the wind. If you cannot complete your package you can settle the outstanding amount in various ways with us.- You can use the outstanding amount in our webshop on (kite) gear – You can use it for other KiteActive trips or give it as a gift card to friends – You can finish your package in 1 of our schools in Holland. Check your insurance. If you need help with the right insurance please ask us for help! Not all insurance companies cover kitesurf material.",
                    du: "",
                    gr: ""
                },
                para2: {
                    en: "Participation in our packages is always at your own risk. Kitesurfing is an extreme sport and although we will make sure you learn kitesurfing with us most safely, you always need to be aware of yourself and others. Always listen well to the instructions from our team.",
                    du: "",
                    gr: ""
                }
            }
            
        },
    },
];

export default trips