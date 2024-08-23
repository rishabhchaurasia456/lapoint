import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../Navbar/Navdata';
import "./Navbar.css"
// import HeroSection from '../HeroSection/HeroSection';

const Navbar = () => {

  return (
    <>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-6">
            <div>
              <h1 className='fw-bold lapointLOGO m-5'>Lapoint</h1>
            </div>

          </div>
          <div className="col-12 col-sm-12 col-lg-6">
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
                    <button type="button" className="btn-close" style={{marginLeft: '100%'}} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                </div>
                <div class="offcanvas-body">
                  <div className='row my-4'>
                    <ul className="navbar-nav navcls top-nav-desktop">
                      <li><i className='fa fa-user ms-0' /><b>Sign in</b></li>
                      <li><i className='fa fa-dollar ms-0' /><b>USD</b></li>
                      <li><i className='fa fa-globe ms-0' /><b>Select Language</b></li>
                    </ul>
                  </div>
                  <div className='row main-nav'>
                    <ul class="navbar-nav navcls" style={{ fontSize: '20px' }}>
                      {/* <h2>lapoint</h2> */}
                      {links.map(({ name, path, submenu }, index) => {
                        if (submenu) {
                          return (
                            <li className="nav-item dropdown " key={index}>
                              <a className="nav-link dropdown-toggle text-light m-2" href={path} id={`navbarDropdown${index}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                              <NavLink className="nav-link m-2 nav-text text-light  text-loi" to={path}>{name}</NavLink>
                            </li>
                          );
                        }
                      })}
                    </ul>
                    <div className='top-nav-mobile'>
                      <ul className="navbar-nav navcls">
                        <li><i className='fa fa-user my-3' />&nbsp;<b>Sign in</b></li>
                        <li><i className='fa fa-dollar my-3' />&nbsp;<b>USD</b></li>
                        <li><i className='fa fa-globe my-3' />&nbsp;<b>Select Language</b></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

          </div>
        </div>
      </div>


      {/* <HeroSection /> */}
    </>
  );
};

export default Navbar
