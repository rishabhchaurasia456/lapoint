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

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-5">
          <div>
          <h1 className='text-dark fw-bold lapointLOGO'>Lapoint</h1>
          </div>

          </div>
          <div className="col-12 col-sm-12 col-lg-7">
            <nav class="navbar navbar-expand-lg">
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <i class='fa fa-bars'></i>
              </button>
              {/* <!-- Offcanvas Menu --> */}
              <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                  <div className="offcanvas-header ">
                    <Link to="/" className="nav-link">
                      {/* <img src={logoimg} alt="logoimg" className="w-50" /> */}
                      <div>
                        <h1 className='text-dark fw-bold'>Lapoint</h1>
                      </div>
                      {/* <p className="mt-3 text-secondary">Histudy is an education website template. You can customize all.</p> */}
                    </Link>
                    <button type="button" className="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav navcls" style={{ fontSize: '20px' }}>
                    {/* <h2>lapoint</h2> */}
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
                  {/* <div>
                  <ul className='navbar-nav navcls'>
                    <li>
                      <i class="fa fa-user"></i>Sign in
                    </li>
                    <li>
                      <i class="fa fa-dollar"></i>USD
                    </li>
                  </ul>
                </div> */}

                </div>
              </div>
            </nav>

          </div>
        </div>
      </div>


      <HeroSection />
    </>
  );
};

export default Navbar
