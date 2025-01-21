import React, { useState } from 'react';
import questionIcon from "../../../Images/question-mark-outline-in-a-circle-hand-drawn-button.png";
import carIcon from "../../../Images/car.webp";
import wineIcon from "../../../Images/glass-with-wine.webp";
import homeIcon from "../../../Images/home.webp";
import checkIcon from "../../../Images/check-mark.webp";
import waterIcon from "../../../Images/water-waves.webp";

const Included = ({ data }) => {
  const [selectedLevelTab, setSelectedLevelTab] = useState({});

  // Initialize the default active tab for each level
  React.useEffect(() => {
    const initialTabs = {};
    data.cardData.forEach((level) => {
      initialTabs[level._id] = level.tabs[0]._id; // Set the first tab as default for each level
    });
    setSelectedLevelTab(initialTabs);
  }, [data]);

  const handleTabClick = (levelId, tabId) => {
    setSelectedLevelTab((prev) => ({ ...prev, [levelId]: tabId }));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <p className="included_desc py-4">
            We organize the perfect kitesurfing holiday according to the Hakuna Matata principle,
            what 'No stress' means in Afrikaans 🙂 See below what is included in this trip and what
            you can add to optimally tailor your trip to what you want to achieve!
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {data.cardData.map((level) => (
            <div className="col-md-4 col-sm-12" key={level._id}>
              <div className="level_heading_card">
                <p className="includ_heading">{level.levelName}</p>
              </div>
              <div className="row mb-3">
                {/* Render Tabs */}
                {/* <div className="tabs-container">
                  {level.tabs.map((tab) => (
                    <button
                      key={tab._id}
                      className={`week_btn ${selectedLevelTab[level._id] === tab._id ? "active" : ""}`}
                      onClick={() => handleTabClick(level._id, tab._id)}
                    >
                      {tab.days}
                    </button>
                  ))}
                </div> */}
                <div className="tabs-container row">
                  {level.tabs.map((tab) => (
                    <div className="col-4" key={tab._id}>
                      <button
                        className={`week_btn ${selectedLevelTab[level._id] === tab._id ? "active" : ""}`}
                        onClick={() => handleTabClick(level._id, tab._id)}
                      >
                        {tab.days}
                      </button>
                    </div>
                  ))}
                </div>


                {/* Render Points for the Active Tab */}
                <div className="card m-3">
                  {level.tabs
                    .filter((tab) => tab._id === selectedLevelTab[level._id])
                    .map((activeTab) => (
                      <React.Fragment className=" h-100" key={activeTab._id}>
                        <p className="text-center fw-bold fs-5">{activeTab.price}</p>
                        {activeTab.points.map((point, index) => (
                          <p key={index}>
                            <span>
                              <img
                                className="me-3"
                                src={checkIcon} // Replace with dynamic icons if needed
                                alt="icon"
                                style={{ maxWidth: "30px" }}
                              />
                            </span>
                            {point.title}
                          </p>
                        ))}
                      </React.Fragment>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Included;
