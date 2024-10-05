import React, { useState } from 'react';
import tab1_1 from "../../../Images/tab1_1.webp";
import tab1_2 from "../../../Images/tab1_2.webp";
import tab1_card1 from "../../../Images/logo1.webp";
import tab1_card2 from "../../../Images/logo2.webp";
import tab1_card3 from "../../../Images/logo4.webp";
import tab1_card4 from "../../../Images/logo1.webp";
import tab2_1 from "../../../Images/DSC09834-1536x1024-1.webp";
import tab2_2 from "../../../Images/E0105612-scaled.jpg";
import tab3_1 from "../../../Images/tab1_2.webp";
import tab3_2 from "../../../Images/tab1_2.webp";


const Packages = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const data = {
    tab1: {
      desc: 'This is the perfect package if you have no experience with kitesurfing and want to learn this beautiful sport. Kitesurfing is not a sport that you can just learn in 1 afternoon. That’s why our trips are perfect! You are at a perfect destination with ideal conditions for a week with people who also want to learn as much as possible. Hey ho, let’s go!',
      imgsect: [
        {
          imgSrc: tab1_1,
          text: 'Designed for beginners',
          para: 'This Level 1 – Beginner package is the ideal start to your kitesurfing career. We will help you get started and ensure that you can get on the water independently as a real kiter under good conditions, safely, and with great pleasure. A complete kite training in 1 week from Zero to Hero! 9 hours of lessons from our team. After the 9 hours you can practice independently with other kiters from your level for the rest of the week with our kite material. A complete package including kite lessons, (shared) equipment rental, supervision, and coaching for 6 days!',
          imgPosition: 'left',
        },
        {
          imgSrc: tab1_2,
          text: 'What to expect from this course?',
          para: 'After this week you can go on the water independently with your kite set. To ensure that you make optimal progress, we teach with 1 instructor on a maximum of 2 students. You share a kite set together for the entire week so that you can help each other and learn together. Kitesurfing can be quite intensive, especially in the beginning. It is nice to be on the water together. You will get lessons from our certified instructors! Real kite professionals who have been active in kite industry for over 10 years!',
          imgPosition: 'right',
        },
      ],
      acordation_head:'What do you learn?',
      acordation_data:[
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
      ],
      faq_head: "FAQ",
      faq_data:[
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
      ],
      logo_img:[
        {
          img: tab1_card1,
          title: "Professional team at your service"
        },
        {
          img: tab1_card2,
          title: "Headset coaching"
        },
        {
          img: tab1_card3,
          title: "Make progress in ideal conditions!"
        },
        {
          img: tab1_card4,
          title: "Ask advice from travel expert AJ"
        },
      ]
    },
    tab2: {
      desc: 'This is the perfect package if you have already had a kite course, but it has been a long time ago and you need to be refreshed. Or you need an extra eye on you and some waterstart coaching. Kitesurfing is not a sport that you can learn in 1 afternoon. That’s why our trips are perfect! You are at a beginner friendly destination for a week with people who also want to learn as much as possible. Hey ho, let’s go!',
      imgsect: [
        {
          imgSrc: tab2_1,
          text: 'A lot of practise with supervision',
          para: 'This intermediate package is the ideal package for kiters who need to get on board. We will help you get started and ensure that you can get on the water independently as a real kiter under good conditions, safely, and with great pleasure. A complete kite training to make you a real independent kiter in 1 week!',
          imgPosition: 'left',
        },
        {
          imgSrc: tab2_2,
          text: 'What do you learn?',
          para: 'After this week you can go on the water independently with your own kite set and the goal is that you can kite upwind so that you no longer have to walk! Our instructors ensure that you are in the right place with the right conditions, help you with tips and tricks, coach you, and keep an eye on things while you are practicing.',
          imgPosition: 'right',
        },
      ],
      acordation_head:'What do you learn?',
      acordation_data:[
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
      ],
      faq_head: "FAQ",
      faq_data:[
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
      ],
      logo_img:[
        {
          img: tab1_card1,
          title: "Professional team at your service"
        },
        {
          img: tab1_card2,
          title: "Headset coaching"
        },
        {
          img: tab1_card3,
          title: "Make progress in ideal conditions!"
        },
        {
          img: tab1_card4,
          title: "Ask advice from travel expert AJ"
        },
      ]
    },
    tab3: {
      desc: 'If you are on the water with kiters of the same level, you always make more progression. You learn from each other and push yourself to learn new things! In this course you will be pushed and coached as much as possible to learn new tricks. With KiteActive you will spend a week in a perfect destination with people who also want to make progress. Hey ho, Let’s go!',
      imgsect: [
        {
          imgSrc: tab3_1,
          text: 'Learn new tricks',
          para: 'This is the ultimate package for anyone who can already kitesurf but wants to make progress and learn new tricks. From your very first jump to a kiteloop handle pass. Our team is ready to help you with the right tips and tricks to achieve your goals!',
          imgPosition: 'left',
        },
        {
          imgSrc: tab3_2,
          text: 'What to expect from this course',
          para: 'During the course we will look at what your personal goals are and what is feasible. We go through the theory together and during the week we try to push, coach and motivate you as much as possible to try new things in a safe way.',
          imgPosition: 'right',
        },
      ],
      acordation_head:'What do you learn?',
      acordation_data:[
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
      ],
      faq_head: "FAQ",
      faq_data:[
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
      ],
      logo_img:[
        {
          img: tab1_card1,
          title: "Professional team at your service"
        },
        {
          img: tab1_card2,
          title: "Headset coaching"
        },
        {
          img: tab1_card3,
          title: "Make progress in ideal conditions!"
        },
        {
          img: tab1_card4,
          title: "Ask advice from travel expert AJ"
        },
      ]
    },
    tab4: {
      desc: 'If you are on the water with kiters of the same level, you always make more progression. You learn from each other and push yourself to learn new things! In this course you will be pushed and coached as much as possible to learn new tricks. With KiteActive you will spend a week in a perfect destination with people who also want to make progress. Hey ho, Let’s go!',
      imgsect: [
        {
          imgSrc: tab3_1,
          text: 'Learn new tricks',
          para: 'This is the ultimate package for anyone who can already kitesurf but wants to make progress and learn new tricks. From your very first jump to a kiteloop handle pass. Our team is ready to help you with the right tips and tricks to achieve your goals!',
          imgPosition: 'left',
        },
      ],
      acordation_head:'What do you learn?',
      acordation_data:[
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
      ],
      faq_head: "",
      faq_data:[
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
      ],
      logo_img:[
        {
          img: tab1_card1,
          title: "Professional team at your service"
        },
        {
          img: tab1_card2,
          title: "Headset coaching"
        },
        {
          img: tab1_card3,
          title: "Make progress in ideal conditions!"
        },
        {
          img: tab1_card4,
          title: "Ask advice from travel expert AJ"
        },
      ]
    },
    tab5: {
      desc: 'If you are on the water with kiters of the same level, you always make more progression. You learn from each other and push yourself to learn new things! In this course you will be pushed and coached as much as possible to learn new tricks. With KiteActive you will spend a week in a perfect destination with people who also want to make progress. Hey ho, Let’s go!',
      imgsect: [
        {
          imgSrc: tab3_1,
          text: 'Learn new tricks',
          para: 'This is the ultimate package for anyone who can already kitesurf but wants to make progress and learn new tricks. From your very first jump to a kiteloop handle pass. Our team is ready to help you with the right tips and tricks to achieve your goals!',
          imgPosition: 'left',
        },
      ],
      acordation_head:'What do you learn?',
      acordation_data:[
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
      ],
      faq_head: "",
      faq_data:[
        {
          title: 'Learn the basics of pop',
          info: 'Learn how to pop. This is an very important skill which you need for your entire kite career!'
        },
      ],
      logo_img:[
        {
          img: tab1_card1,
          title: "Professional team at your service"
        },
        {
          img: tab1_card2,
          title: "Headset coaching"
        },
        {
          img: tab1_card3,
          title: "Make progress in ideal conditions!"
        },
        {
          img: tab1_card4,
          title: "Ask advice from travel expert AJ"
        },
      ]
    },
    // Add more tabs here
  };

  const handleButtonClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="container">
        <div className="text-center mb-2 my-3">
          <button className="package_btn" onClick={() => handleButtonClick('tab1')}>
            <p>Level 1 - Beginner</p>
          </button>
          <button className="package_btn" onClick={() => handleButtonClick('tab2')}>
            <p>Level 2 - Waterstart</p>
          </button>
          <button className="package_btn" onClick={() => handleButtonClick('tab3')}>
            <p>Level 3 - Independend</p>
          </button>
          <button className="package_btn" onClick={() => handleButtonClick('tab4')}>
            <p>Kitegear rental</p>
          </button>
          <button className="package_btn" onClick={() => handleButtonClick('tab5')}>
            <p>Disclaimer</p>
          </button>
          {/* Add more buttons for other tabs here */}
        </div>
      </div>

      <div className="container">
        <div className="output-container">
          <div className="row">
            <p className='level_desc'>{data[activeTab].desc}</p>
          </div>
          <div className='container mt-5'>
            {data[activeTab].imgsect.map((item, index) => (
              <div className='row mt-5' key={index}>
                {item.imgPosition === 'left' && (
                  <div className='col-md-6'>
                    <div className='lifestyle_div'>
                      <img src={item.imgSrc} className='lifestyle' alt="lifestyle" />
                    </div>
                  </div>
                )}
                <div className='col-md-6'>
                  <div className="life_style_div">
                    <p className='lifestyle_package_text'>{item.text}</p>
                    <div className="lifestyle_package_para">
                      <p>{item.para}</p>
                    </div>
                  </div>
                </div>
                {item.imgPosition === 'right' && (
                  <div className='col-md-6'>
                    <div className='lifestyle_div'>
                      <img src={item.imgSrc} className='lifestyle' alt="lifestyle" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="container-fluid">
            <div className="row">
              <p className='sum2_heading'>{data[activeTab].acordation_head}</p>
            </div>
            <div className="row sum2_container">
              {data[activeTab].acordation_data.map((item, index) => (
                <div className="col-md-4">
                  <details className='' key={index}>
                      <summary className='sum2'>{item.title}</summary>
                      <div className="sum2__content fs-5 mb-2">
                          <p>{item.info}</p>
                      </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <p className='p_faq_heading'>{data[activeTab].acordation_head}</p>
            </div>
            <div className="row p_faq_container">
              {data[activeTab].faq_data.map((item, index) => (
                  <details className='' key={index}>
                      <summary className='p_faq'>{item.title}</summary>
                      <div className="p_faq__content fs-5 mb-2">
                          <p>{item.info}</p>
                      </div>
                  </details>
              ))}
            </div>
          </div>
          <div className="container-fluid">
            <div className="row logocard_container">
            {data[activeTab].logo_img.map((item, index) => (
              <div className="col-md-3">
                <div className='logo_img_contaienr'>
                  <img src={item.img} alt="lifestyle" className='logo_img' />
                </div>
                <p className='text-center p-3 fs-6'><b>{item.title}</b></p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
