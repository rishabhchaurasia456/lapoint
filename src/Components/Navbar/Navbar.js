import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../Navbar/Navdata';
import "./Navbar.css"
import img from '../../Images/logo-zwart-geel-geel.png'

const Navbar = ({ selectedLanguage, setSelectedLanguage }) => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);



  const languages = [
    // { value: "en", text: "Select Language" },
    { value: "en", text: "English" },
    { value: "du", text: "Dutch" },
    { value: "nl", text: "Netherlands" },
  ];

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  const languageToUse = navItems[selectedLanguage] || navItems["en"];

  return (  
    <>


      {/* language div  */}
      {/* for language option  */}

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



      {/* main nav  */}

      <nav className="navbar">
        <div className="nav-container">
          {/* nav main logo  */}
          <NavLink exact to="/" className="nav-logo">
            <span className="icon">
              <img src={img} alt="" className="logo" />
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {languageToUse.map((item, index) => (
              <li key={index} className="nav-item">

                <NavLink
                  exact to={item.path} activeClassName="active" className="nav-links" onClick={handleClick} >
                  {item.name}
                </NavLink>


                {/* Check for submenu */}
                {item.submenu && (
                  <ul className="Dp_dW">
                    {item.submenu.map((submenuItem, subIndex) => (
                      <li key={subIndex} className="submenu-item">

                       <NavLink
                          exact to={submenuItem.path} activeClassName="active" className="nav-links" onClick={handleClick} state={{ trip_name: submenuItem.trip_name, vedio: submenuItem.vedio }}
                        >
                          {submenuItem.trip_name}
                        </NavLink>
                        
                        {submenuItem.video && (
                          <div className="video-container">
                            <video width="320" height="240" controls>
                              <source src={submenuItem.video} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

              </li>
            ))}







            {/* only for phone mode side bar   */}

            <div className='Only_mobile'>
              <div className=" ">
                <Link to="" className="nav-link border-bottom border-2">
                  <p className=''> <i className='fa fa-user-o me-3 text_span'></i>Sign in</p>
                </Link>
              </div>

              <div className="">
                <Link to="" className="nav-link border-bottom border-2">
                  <p className='TNB'> <i className='fa fa-globe text_span me-3'></i>Select Language</p>
                </Link>
              </div>

              {/* social media icon  */}
              <div className="navbar-nav  mt-3">
                <div className='d-flex'>
                  <Link to="/" className="nav-link me-5"> <i className='fa fa-facebook fa_icon_sidebar'></i></Link>
                  <Link to="/" className="nav-link me-5"> <i className='fa fa-instagram  fa_icon_sidebar'></i></Link>
                  <Link to="/" className="nav-link me-5"> <i className='fa fa-youtube fa_icon_sidebar '></i></Link>
                  <Link to="/" className="nav-link me-5"> <i className='fa fa-twitter fa_icon_sidebar '></i></Link>
                </div>


              </div>
            </div>

          </ul>

          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" /><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="currentColor" d="m12 14.121l5.303 5.304a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.303a1.5 1.5 0 1 0 2.122 2.122L12 14.12Z" /></g></svg>
              </span>
            ) : (
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17h18M3 12h18M3 7h18" /></svg>

              </span>
            )}

          </div>
        </div>
      </nav>


    </>
  );
};

export default Navbar
