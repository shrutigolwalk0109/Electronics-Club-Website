import React, { useState } from "react";
import "./Navbar.css";
import logo from "./mainPhoto/Electronics-logo.png";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <section className="fixed-top">
        <div className="title ">
          <center>
            <marquee>LET'S CONNECT WITH US..</marquee>
          </center>
        </div>
        {/* NAVBAR START */}
        <nav
          className="main-nav "
          style={{ backgroundColor: "#F4EFFF", height: 88 }}
        >
          {/* LOGO */}
          <div>
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>

          {/* MENU LINKS */}
          <div
            className={
              showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }
          >
            <ul>
              <li className="nav-item">
                <a className="nav-link1 " href="#Home">
                  HOME
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link2 " href="#About">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a href="#Event" className="nav-link3  ">
                  EVENTS
                </a>
              </li>
              <li className="nav-item">
                <a href="#Team" className="nav-link4 ">
                  OUR TEAM
                </a>
              </li>

              <li className="nav-item1">
                <div className="btn-group">
                  <a href="#Contact">
                    <button
                      type="button"
                      className="btn btn-primary "
                      style={{ backgroundColor: "#32009B" }}
                    >
                      Contact Us
                      <i
                        className="fa-solid fa-phone"
                        style={{ position: "relative", right: "-6px" }}
                      ></i>
                    </button>
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* SOCIAL MEDIA LINKS */}
          <div className="social-media">
            <ul className="social-media-desktop">
              <li className="icon-1">
                <a
                  href="https://www.instagram.com/electronics.club.mits/"
                  target="_shruti"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>

              <li className="icon-2">
                <a
                  href="https://www.linkedin.com/company/electronics-club-mits-gwalior/about/"
                  target="_shruti"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* HAMBURGER MENU */}
          <div className="Hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <i className="fa-solid fa-bars"></i>
            </a>
          </div>
        </nav>
      </section>

      {/* NAVBAR END */}

      {/* HOME START */}
      {/* { <section className='text-center'>
           <p className="heading">
              WELCOME  TO
              </p>
            <p className=" heading2">ELECTRONICS CLUB</p>
            <p className="heading3">
              Our electronics club is open to all, so come and be a part of a
               vibrant and welcoming community <br></br>that shares your love for
               electronics.
            </p>
            <button className="head-button"><p>EXPLORE..</p></button>
    </section> } */}
    </>
  );
};

export default Navbar;
