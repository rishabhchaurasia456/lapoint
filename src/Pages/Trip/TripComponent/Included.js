import React from 'react';
import { Link } from 'react-router-dom';

const Included = () => {

  const openTabSection = (evt, tabName) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += "current";
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <p className='included_desc py-4'>We organize the perfect kitesurfing holiday according to the Hakuna Matata principle, what 'No stress' means in Afrikaans 🙂 See below what is included in this trip and what you can add to optimally tailor your trip to what you want to achieve!</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div id="tab1" className="tabs_item">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <ul className="tabs">
                  <li
                    className="current"
                    onClick={(e) => openTabSection(e, 'tab1')}
                  >
                    Monthly Plan
                  </li>

                  <li onClick={(e) => openTabSection(e, 'tab2')}>
                    Yearly Plan
                  </li>
                </ul>
                <div className="pricing-box">
                  <div className="pricing-header">
                    <h3>FREE</h3>
                    <p>Get your business up <br /> and running</p>
                  </div>

                  <div className="price">
                    &#8377;0 <span>/m</span>
                  </div>

                  <Link to="#" className="btn btn-primary rounded-pill mb-4">
                    Get Started 30 days (1 user)
                  </Link>

                  <ul className="pricing-features">
                    <li><i className="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Email Support Only</li>
                    <li><i className="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Web & Mobile CRM</li>
                    <li><i className="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Auto Lead Distribution</li>
                    <li><i className="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Tasks & Reminders</li>
                    <li><i className="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Customized Calling Structure</li>
                    <li><i className="fa fa-check" style={{ color: "#275DE1" }}></i>&nbsp;Real-time Reports</li>
                  </ul>
                </div>
              </div>

              {/* Other plans omitted for brevity */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Included;
