import React, { useState } from 'react';
import questionIcon from "../../../Images/question-mark-outline-in-a-circle-hand-drawn-button.png";
import carIcon from "../../../Images/car.png";
import wineIcon from "../../../Images/glass-with-wine.png";
import homeIcon from "../../../Images/home.png";
import checkIcon from "../../../Images/check-mark.png";
import waterIcon from "../../../Images/water-waves.png";

const Included = () => {
  // Set initial state to "1 week" for all levels
  const [selectedOption, setSelectedOption] = useState({
    level1: "1 week",
    level2: "1 week",
    level3: "1 week",
  });

  // Data for each level's options, including images
  const levelData = {
    level1: {
      "1 week": {
        price: "v.a. € 949 / week",
        para: [
          {
            image: questionIcon,
            text: "Is dit pakket wel geschikt voor mij?",
          },
          {
            image: checkIcon,
            text: "9 uur kiteles met 2 cursisten / 1 set / 1 instructeur",
          },
          {
            image: checkIcon,
            text: "shared rental voor 1 week met het nieuwste kitemateriaal",
          },
          {
            image: homeIcon,
            text: "overnachting in kitehotel incl. ontbijt",
          },
          {
            image: wineIcon,
            text: "heerlijk lokaal ontbijt en heerlijk avondeten",
          },
          {
            image: waterIcon,
            text: "kitecenter faciliteiten & spot use",
          },
          {
            image: carIcon,
            text: "airport transfer",
          },
          {
            image: carIcon,
            text: "gezelligheid, foto’s & fun!",
          },
        ]
      },
      "10 Days": {
        price: "v.a. € 1049 / 10 days",
        para: [
          {
            image: questionIcon,
            text: "Is dit pakket wel geschikt voor mij?",
          },
          {
            image: checkIcon,
            text: "9 uur kiteles met 2 cursisten / 1 set / 1 instructeur",
          },
          {
            image: checkIcon,
            text: "shared rental voor 1 week met het nieuwste kitemateriaal",
          },
          {
            image: homeIcon,
            text: "overnachting in kitehotel incl. ontbijt",
          },
          {
            image: wineIcon,
            text: "heerlijk lokaal ontbijt en heerlijk avondeten",
          },
          {
            image: waterIcon,
            text: "kitecenter faciliteiten & spot use",
          },
          {
            image: carIcon,
            text: "airport transfer",
          },
          {
            image: carIcon,
            text: "gezelligheid, foto’s & fun!",
          },
        ]
      },
      "2 Weeks": {
        price: "v.a. € 1199 / 2 weeks",
        para: [
          {
            image: questionIcon,
            text: "Is dit pakket wel geschikt voor mij?",
          },
          {
            image: checkIcon,
            text: "9 uur kiteles met 2 cursisten / 1 set / 1 instructeur",
          },
          {
            image: checkIcon,
            text: "shared rental voor 1 week met het nieuwste kitemateriaal",
          },
          {
            image: checkIcon,
            text: "voor de 2e week rental complete set incl. waterstart supervisie upgrade.",
          },
          {
            image: homeIcon,
            text: "overnachting in kitehotel",
          },
          {
            image: wineIcon,
            text: "heerlijk lokaal ontbijt en heerlijk avondeten",
          },
          {
            image: waterIcon,
            text: "kitecenter faciliteiten & spot use",
          },
          {
            image: carIcon,
            text: "airport transfer",
          },
          {
            image: carIcon,
            text: "gezelligheid, foto’s & fun!",
          },
        ]
      },
    },
    level2: {
      "1 week": {
        price: "v.a. € 1099 / week",
        para: [
          {
            image: questionIcon,
            text: "Is dit pakket wel geschikt voor mij?",
          },
          {
            image: checkIcon,
            text: "Opfris cursus, theorie, veiligheid etc.",
          },
          {
            image: checkIcon,
            text: "Supervisie en coaching zodat je zelfstandig kunt oefenen",
          },
          {
            image: homeIcon,
            text: "overnachting in kitehotel",
          },
          {
            image: wineIcon,
            text: "heerlijk lokaal ontbijt en heerlijk avondeten",
          },
          {
            image: waterIcon,
            text: "kitecenter faciliteiten & spot use",
          },
          {
            image: carIcon,
            text: "airport transfer",
          },
          {
            image: carIcon,
            text: "gezelligheid, foto’s & fun!",
          },
        ]
      },
      "10 Days": {
        price: "v.a. € 1249 / 10 days",
        para: [
          {
            image: questionIcon,
            text: "Is dit pakket wel geschikt voor mij?",
          },
          {
            image: checkIcon,
            text: "Opfriscursus, theorie en veiligheid",
          },
          {
            image: checkIcon,
            text: "Supervisie, tips en clinics zodat. je veilig zelfstandig kunt oefenen.",
          },
          {
            image: homeIcon,
            text: "overnachting in kitehotel incl. ontbijt",
          },
          {
            image: wineIcon,
            text: "heerlijk lokaal ontbijt en heerlijk avondeten",
          },
          {
            image: waterIcon,
            text: "kitecenter faciliteiten & spot use",
          },
          {
            image: carIcon,
            text: "airport transfer",
          },
          {
            image: carIcon,
            text: "gezelligheid, foto’s & fun!",
          },
        ]
      },
      "2 Weeks": {
        price: "v.a. € 1499 / 2 weeks",
        para: [
          {
            image: questionIcon,
            text: "Is dit pakket wel geschikt voor mij?",
          },
          {
            image: checkIcon,
            text: "Opfriscursus, theorie, veiligheid",
          },
          {
            image: checkIcon,
            text: "Supervisie & coaching",
          },
          {
            image: homeIcon,
            text: "overnachting in kitehotel incl. ontbijt",
          },
          {
            image: wineIcon,
            text: "heerlijk lokaal ontbijt en heerlijk avondeten",
          },
          {
            image: waterIcon,
            text: "kitecenter faciliteiten & spot use",
          },
          {
            image: carIcon,
            text: "airport transfer",
          },
          {
            image: carIcon,
            text: "gezelligheid, foto’s & fun!",
          },
        ]
      },
    },
    level3: {
      "1 week": {
        price: "v.a. € 1999 / week",
        para: [
          {
            image: questionIcon,
            text: "Is dit pakket wel geschikt voor mij?",
          },
          {
            image: checkIcon,
            text: "Coaching en trick clinics. Maak progressie!",
          },
          {
            image: homeIcon,
            text: "overnachting in kitehotel",
          },
          {
            image: wineIcon,
            text: "delicious local breakfast and delicious dinner",
          },
          {
            image: waterIcon,
            text: "kitecenter faciliteiten & spot use",
          },
          {
            image: carIcon,
            text: "airport transfer",
          },
          {
            image: carIcon,
            text: "gezelligheid, foto’s & fun!",
          },
        ]
      },
      "10 Days": {
        price: "v.a. € 2249 / 10 days",
        para: [
          {
            image: questionIcon,
            text: "Is dit pakket wel geschikt voor mij?",
          },
          {
            image: questionIcon,
            text: "9 uur kiteles met 2 cursisten / 1 set / 1 instructeur",
          },
          {
            image: questionIcon,
            text: "shared rental voor 1 week met het nieuwste kitemateriaal",
          },
        ]
      },
      "2 Weeks": {
        price: "v.a. € 2499 / 2 weeks",
        para: [
          {
            image: questionIcon,
            text: "Is dit pakket wel geschikt voor mij?",
          },
          {
            image: questionIcon,
            text: "9 uur kiteles met 2 cursisten / 1 set / 1 instructeur",
          },
          {
            image: questionIcon,
            text: "shared rental voor 1 week met het nieuwste kitemateriaal",
          },
        ]
      },
    },
  };

  // Handle button click for each level
  const handleButtonClick = (level, option) => {
    setSelectedOption((prev) => ({ ...prev, [level]: option }));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <p className='included_desc py-4'>
            We organize the perfect kitesurfing holiday according to the Hakuna Matata principle,
            what 'No stress' means in Afrikaans 🙂 See below what is included in this trip and what
            you can add to optimally tailor your trip to what you want to achieve!
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row h-100">
          {/* Level 1 */}
          <div className="col-md-4">
            <div className="level_heading_card">
              <p className='level_heading'>Level 1 - Beginner</p>
            </div>
            <div className="row mb-3">
              {["1 week", "10 Days", "2 Weeks"].map((option) => (
                <div className="col-4" key={option}>
                  <button className='week_btn' onClick={() => handleButtonClick('level1', option)}>
                    {option}
                  </button>
                </div>
              ))}
              <div className="card px-3 h-100 mb-4 bg-transparent text-center">
                <p className='text-center'>{levelData.level1[selectedOption.level1].price}</p>
                {levelData.level1[selectedOption.level1].para.map((item, index) => (
                  <p key={index} className='text-center'>
                    <span>
                      <img className='me-3' src={item.image} alt="icon" style={{ maxWidth: '30px' }} />
                    </span>
                    {item.text}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Level 2 */}
          <div className="col-md-4">
            <div className="level_heading_card">
              <p className='level_heading'>Level 2 - Intermediate</p>
            </div>
            <div className="row mb-3">
              {["1 week", "10 Days", "2 Weeks"].map((option) => (
                <div className="col-4" key={option}>
                  <button className='week_btn' onClick={() => handleButtonClick('level2', option)}>
                    {option}
                  </button>
                </div>
              ))}
              <div className="card px-3 h-100 mb-4 bg-transparent text-center">
                <p className='text-center'>{levelData.level2[selectedOption.level2].price}</p>
                {levelData.level2[selectedOption.level2].para.map((item, index) => (
                  <p key={index} className='text-center'>
                    <span>
                      <img className='me-3' src={item.image} alt="icon" style={{ maxWidth: '30px' }} />
                    </span>
                    {item.text}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Level 3 */}
          <div className="col-md-4">
            <div className="level_heading_card">
              <p className='level_heading'>Level 3 - Advanced</p>
            </div>
            <div className="row mb-3">
              {["1 week", "10 Days", "2 Weeks"].map((option) => (
                <div className="col-4" key={option}>
                  <button className='week_btn' onClick={() => handleButtonClick('level3', option)}>
                    {option}
                  </button>
                </div>
              ))}
              <div className="card px-3 h-100 mb-4 bg-transparent text-center">
                <p className='text-center'>{levelData.level3[selectedOption.level3].price}</p>
                {levelData.level3[selectedOption.level3].para.map((item, index) => (
                  <p key={index} className='text-center'>
                    <span>
                      <img className='me-3' src={item.image} alt="icon" style={{ maxWidth: '30px' }} />
                    </span>
                    {item.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Included;
