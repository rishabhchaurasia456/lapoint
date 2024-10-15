import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../Navbar/Navdata';
import "./Navbar.css"
import img from '../../Images/logo-zwart-geel-geel.png'

const Navbar = ({ selectedLanguage, setSelectedLanguage }) => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const languages = [
    { value: "en", text: "English" },
    { value: "nl", text: "Dutch" },
    { value: "hi", text: "Hindi" },
  ];

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <>
      {/* Language Selection Dropdown */}
      <div className="language_div">
        <div className="dropdown ">
          <i className="fa fa-globe my-3 text-light" />&nbsp;
          <b className="LNG_text">Select Language
            <select className='btn text-light' value={selectedLanguage} onChange={handleChange}>
              {languages.map((item) => (
                <option className='text-dark' key={item.value} value={item.value}>
                  {item.text}
                </option>
              ))}
            </select>
          </b>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <NavLink exact to="/" className="nav-logo">
            <span className="icon">
              <img src={img} alt="Logo" className="logo" />
            </span>
          </NavLink>



          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <NavLink
                  exact to={item.path}
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  {item.name[selectedLanguage] || item.name.en}
                </NavLink>

                {item.submenu && (
                  <ul className="Dp_dW">
                    {item.submenu.map((submenuItem, subIndex) => {
                      console.log('submenuItemmmmmmmmmmmmmmmmmmmmmmmmmmmmm:', submenuItem); // Add this line to log the data

                      return (
                        <li key={subIndex} className="submenu-item">
                          <NavLink
                            exact to={submenuItem?.path}
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                            state={{ trip_data: submenuItem }}
                          >
                            {submenuItem?.trip_name?.[selectedLanguage] || submenuItem?.trip_name?.en || 'Unnamed Trip'}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            ))}
          </ul>


          {/* Mobile Icon */}
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 14.121l5.303 5.304a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.303a1.5 1.5 0 1 0 2.122 2.122L12 14.12Z" />
                </svg>
              </span>
            ) : (
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17h18M3 12h18M3 7h18" />
                </svg>
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
