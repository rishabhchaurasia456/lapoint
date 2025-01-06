
import React, { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
// import { navItems } from '../Navbar/Navdata';
import "./Navbar.css"
import Logo_img from '../../Images/logo-kiteactive.svg'
import config from "../../config/config";
import axios from "axios";

const Navbar = ({ selectedLanguage, setSelectedLanguage }) => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const languages = [
    { value: "en", text: "English" },
    { value: "du", text: "Dutch" },
    { value: "gr", text: "German " },
  ];

  const handleChange = (event) => {
    setSelectedLanguage("event.target.value");
  };


  const [kiteCampsSubmenu, setKiteCampsSubmenu] = useState([]);

    useEffect(() => {
        const fetchKiteCampsData = async () => {
            try {
                const response = await axios.post(`${config.API_BASE_URL}/api/user/get_triplink`);
                console.log("response", response.getallTripLink)
                const data = response.data.getallTripLink; // No need to use `.json()` with axios
                const submenu = data.map(item => ({
                    id: `${item.id}`,
                    path: item.path || '/', // Default to '/' if no path provided
                    trip_name: item.tripName, // Safeguard against missing data
                }));

                setKiteCampsSubmenu(submenu);
            } catch (error) {
                console.error('Error fetching kite camps data:', error);
            }
        };

        fetchKiteCampsData();
    }, []);

    const navItems = [
        {
            id: "1",
            name: {
                en: "kitecamp",
                du: "Kitekampen", // Dutch (DU)
                gr: "Kitecamp",  
            },
            path: '/kitecamp',
            submenu: kiteCampsSubmenu,
        },
        { 
            id: "2",
            name: {
                en: "School",
                du: "School",  // Dutch (DU)
                gr: "Schule",  
            },
            path: '/School',
        },
        { 
            id: "4",
            name: {
                en: "Stories",
                du: "Verhalen",  // Dutch (DU)
                gr: "Geschichten",  // Netherlands Dutch (NL)
            },
            path: '/stories',
        },
        { 
            id: "4",
            name: {
                en: "Shop",
                du: "Verhalen",  // Dutch (DU)
                gr: "Geschichten",  // Netherlands Dutch (NL)
            },
            path: 'https://www.kiteactive.com/shop/',
        },
    ];

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbarManage');
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // Add or remove the 'scrolled' class based on the scroll position
      (scrollTop > 200) ? navbar.classList.add('scrolled') : navbar.classList.remove('scrolled');
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <div id="navbarManage" className="nav_pos container-fluid m-0 p-0">
        {/* Language Selection Dropdown */}
        {/* Main Navbar */}
        <nav className="navbar">
          <div className="nav-container">
            {/* Logo */}
            <NavLink exact to="/" className="nav-logo">
              <span className="icon">
                <img src={Logo_img} alt="Logo" className="logo" />
              </span>
            </NavLink>



            <ul className={click ? "nav-menu active" : "nav-menu"}>
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <NavLink
                    exact to={item.path}
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}>
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
                              {submenuItem?.trip_name?.[selectedLanguage] || submenuItem?.trip_name}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ))}



              <div className='Only_mobile'>
                {/* <div className=" ">
                  <Link to="" className="nav-link border-bottom border-2">
                    <p className=''> <i className='fa fa-user-o me-3 text_span'></i>Sign in</p>
                  </Link>
                </div> */}

                {/* for language in mobile mode  */}
                <div className="">
                  <Link to="" className="nav-link ">
                    <p className=''> <i className='fa fa-globe text_span me-3'></i>
                      <select className='btn border text-light' value={selectedLanguage} onChange={handleChange}>
                        {languages.map((item) => (
                          <option className='text-dark' key={item.value} value={item.value}>
                            {item.text}
                          </option>
                        ))}
                      </select>
                    </p>
                  </Link>
                </div>



                {/* social media icon  */}
                <div className="navbar-nav  mt-3 ">
                  <div className='d-flex m-auto text-center'>
                    <Link to="/" className="nav-link me-5"> <i className='fa fa-facebook fa_icon_sidebar'></i></Link>
                    <Link to="/" className="nav-link me-5"> <i className='fa fa-instagram  fa_icon_sidebar'></i></Link>
                    <Link to="/" className="nav-link me-5"> <i className='fa fa-youtube fa_icon_sidebar '></i></Link>
                    <Link to="/" className="nav-link me-5"> <i className='fa fa-twitter fa_icon_sidebar '></i></Link>
                  </div>


                </div>
              </div>
            </ul>

            {/* only for desktop view  */}
            <div className="language_div">
              <div className="dropdown text-light">
                {/* <i className="fa fa-globe my-3 text-light " />&nbsp; */}
                <b className="LNG_text">
                  <select className='btn LNG_select_dropdown' value={selectedLanguage} onChange={handleChange}>
                    {languages.map((item) => (
                      <option className='LNG_select_option' key={item.value} value={item.value}>
                        {item.text}
                      </option>
                    ))}
                  </select>
                </b>
              </div>
            </div>


            {/* Mobile Icon------------- */}
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

      </div>
    </>
  );
};

export default Navbar;
