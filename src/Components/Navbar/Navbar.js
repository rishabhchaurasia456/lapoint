import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../Navbar/Navdata';
import "./Navbar.css"
import img from '../../Images/logo-zwart-geel-geel.png'

const Navbar = ({selectedLanguage, setSelectedLanguage}) => {

  const languages = [
    // { value: "en", text: "Select Language" },
    { value: "en", text: "English" },
    { value: "nl", text: "Dutch" },
    { value: "hi", text: "Hindi" },
  ];

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const languageToUse = links[selectedLanguage] || links["en"];

  return (
    <>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-6">
            <div>
              <Link to="kiteactive/" className='lapointLOGO'> <img src={img} className='img-fluid p-4 mx-3 mt-3' alt="logoimg" style={{ maxWidth: '280px' }} /></Link>
            </div>

          </div>

          <div className="col-12 col-sm-12 col-lg-6">
            <nav class="navbar navbar-expand-lg pt-4" >
              <button class=" Togglebtn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-label="Toggle navigation">
                <i class='fa fa-bars Togglebtn'></i>
              </button>
              {/* <!-- Offcanvas Menu --> */}
              <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header side_nav_bg">
                  <div className="offcanvas-header ">
                    {/* logo for mobile mode only show in side bar inside  */}
                    <div>
                      <Link to="kiteactive/" className=''> <img src={img} className='img-fluid' alt="logoimg" style={{ maxWidth: '150px' }} /></Link>
                    </div>
                    <button type="button" className="btn-close" style={{ marginLeft: '50%' }} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                </div>
                <div class="offcanvas-body side_nav_bg">
                  <div className='row m-0 p-0'>
                    <div className="navbar-nav  top-nav-desktop">
                      <div className="dropdown">
                        {/* <Link className="nav-link text-light dropdown-toggle" id="languageDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                        </Link> */}
                        <i className="fa fa-globe text-light my-3" />&nbsp;<b>Select Language
                          <select className='btn' value={selectedLanguage} onChange={handleChange}>
                          
                            {languages.map((item) => (
                                <option className='text-dark' key={item.value} value={item.value}>
                                    {item.text}
                                </option>
                            ))}
                        </select> </b>

                        {/* <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                          <li className='nav_drop_menu'>
                            English
                          </li>
                          <li className='nav_drop_menu'>
                            Spanish
                          </li>
                          <li className='nav_drop_menu'>
                            French
                          </li>
                        </ul> */}

                      </div>
                    </div>
                  </div>

                  <div className='row main-nav'>
                    <ul class="navbar-nav navcls" style={{ fontSize: '20px' }}>
                      {languageToUse.map(({ name, path, submenu }, index) => {
                        if (submenu) {
                          return (
                            <li className="nav-item dropdown " key={index}>
                              <a className="nav-link dropdown-toggle navdroptext m-2" href={path} id={`navbarDropdown${index}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {name}
                              </a>
                              <ul className="dropdown-menu nav-text " aria-labelledby={`navbarDropdown${index}`}>
                                {submenu.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <NavLink className="dropdown-item nav_drop_menu" to={subItem.path}>{subItem.name}</NavLink>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          );
                        } else {
                          return (
                            <li className="nav-item" key={index}>
                              <NavLink className="nav-link m-2 nav-text navdroptext" to={path}>{name}</NavLink>
                            </li>
                          );
                        }
                      })}
                    </ul>



                    {/* only for phone mode side bar   */}
                    <div className='top-nav-mobile'>
                      <div className="navbar-nav TNB">
                        <Link to="" className="nav-link border-bottom border-2">
                          <p className='TNB'> <i className='fa fa-user-o me-3 text_span'></i>Sign in</p>
                        </Link>
                      </div>

                      <div className="navbar-nav TNB">
                        <Link to="" className="nav-link border-bottom border-2">
                          <p className='TNB'> <i className='fa fa-globe text_span me-3'></i>Select Language</p>
                        </Link>
                      </div>

                      {/* social media icon  */}
                      <div className="navbar-nav TNB mt-3">
                        <div className='d-flex'>
                          <Link to="/" className="nav-link me-5"> <i className='fa fa-facebook fa_icon_sidebar'></i></Link>
                          <Link to="/" className="nav-link me-5"> <i className='fa fa-instagram  fa_icon_sidebar'></i></Link>
                          <Link to="/" className="nav-link me-5"> <i className='fa fa-youtube fa_icon_sidebar '></i></Link>
                          <Link to="/" className="nav-link me-5"> <i className='fa fa-twitter fa_icon_sidebar '></i></Link>
                        </div>


                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </nav>

          </div>
        </div>
      </div>



    </>
  );
};

export default Navbar
