import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../Navbar/Navdata';
import "./Navbar.css"
import HeroSection from '../HeroSection/HeroSection';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <>
      {/* <nav>
        <div>
          <img src="/images/logo-dark.png" className='img_size' alt="" />
        </div>
        <div>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li><Link className='active' to="/">Home</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/feature">Feature</Link></li>
            <li><Link to="/integration">Integration</Link></li>
            <li><Link to="/industry">Industry</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div id="mobile" onClick={handleClick}>
          <i id='bar' className={clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
        </div>
      </nav> */}
      <div className='container-fluid'>
        <div className='row'>
          {/* <div className='col-lg-2'>
            <h2>lapoint</h2>
          </div> */}
          {/* <div className='col-lg-12'> */}
            <nav class="navbar navbar-expand-lg">
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <i class='fa fa-bars'></i>
              </button>
              {/* <!-- Offcanvas Menu --> */}
              <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                  <div className="offcanvas-header">
                    <Link to="/demo/gfastreact/" className="">
                      {/* <img src={logoimg} alt="logoimg" className="w-50" /> */}
                      <h2>lapoint</h2>
                      {/* <p className="mt-3 text-secondary">Histudy is an education website template. You can customize all.</p> */}
                    </Link>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                </div>
                <div class="offcanvas-body justify-content-between">
                  
                  <ul class="navbar-nav navcls" style={{ fontSize: '15px' }}>
                    <h2>lapoint</h2>
                    {links.map(({ name, path, submenu }, index) => {
                      if (submenu) {
                        return (
                          <li className="nav-item dropdown " key={index}>
                            <a className="nav-link dropdown-toggle m-2 text-dark" href={path} id={`navbarDropdown${index}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              {name}
                            </a>
                            <ul className="dropdown-menu " aria-labelledby={`navbarDropdown${index}`}>
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
                            <NavLink className="nav-link m-2 text-dark" to={path}>{name}</NavLink>
                          </li>
                        );
                      }
                    })}
                  </ul>
                  <div>
                    <ul className='navbar-nav navcls'>
                      <li>
                      <i class="fa fa-user"></i>Sign in
                      </li>
                      <li>
                      <i class="fa fa-dollar"></i>USD
                      </li>
                    </ul>
                  </div>

                  <div className="m-0 p-0">
                    {/* <Link to="/demo/gfastreact/finder" className='nav-link mt-2' style={{ fontSize: '15px' }}>
                                    Course Finder
                                </Link> */}
                  </div>

                </div>
              </div>
            </nav>
          {/* </div> */}

        </div>
      </div>
      <HeroSection/>
    </>
  );
};

export default Navbar
