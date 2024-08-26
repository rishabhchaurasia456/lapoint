import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../Navbar/Navdata';
import "./Navbar.css"
import img from '../../Images/logo-zwart-geel-geel.png'

const Navbar = () => {

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
            <nav class="navbar navbar-expand-lg " >
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <i class='fa fa-bars'></i>
              </button>
              {/* <!-- Offcanvas Menu --> */}
              <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                  <div className="offcanvas-header ">
                    <Link to="kiteactive/" className="nav-link">
                      {/* <img src={logoimg} alt="logoimg" className="w-50" /> */}
                      <div>
                        <h1 className='text-dark fw-bold'>Lapoint</h1>
                      </div>
                      {/* <p className="mt-3 text-secondary">Histudy is an education website template. You can customize all.</p> */}
                    </Link>
                    <button type="button" className="btn-close" style={{ marginLeft: '100%' }} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                </div>
                <div class="">
                  <div className='row m-0 p-0'>
                    <div className="navbar-nav  top-nav-desktop">
                      <div className="dropdown">
                        <Link className="nav-link text-light dropdown-toggle"  id="languageDropdown"   role="button"    data-bs-toggle="dropdown" aria-expanded="false" >  
                                                   
                
                         
                          <i className="fa fa-globe my-3" />&nbsp;<b>Select Language</b>
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                          <li className='nav_drop_menu'>
                              English
                          </li>
                          <li className='nav_drop_menu'>
                              Spanish
                          </li>
                          <li className='nav_drop_menu'>
                              French
                          </li>
                          {/* Add more languages as needed */}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='row main-nav'>
                    <ul class="navbar-nav navcls" style={{ fontSize: '20px' }}>
                      {/* <h2>lapoint</h2> */}
                      {links.map(({ name, path, submenu }, index) => {
                        if (submenu) {
                          return (
                            <li className="nav-item dropdown " key={index}>
                              <a className="nav-link dropdown-toggle navdroptext m-2" href={path} id={`navbarDropdown${index}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {name}
                              </a>
                              <ul className="dropdown-menu nav-text" aria-labelledby={`navbarDropdown${index}`}>
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

                    <div className='top-nav-mobile'>
                      <div className="navbar-nav navcls">
                        <Link to="" className="nav-link">
                          <i className='fa fa-globe my-3' />&nbsp;<b>Select Language</b>
                        </Link>

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
