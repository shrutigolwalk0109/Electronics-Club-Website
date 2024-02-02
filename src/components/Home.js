import { Link } from "react-router-dom";
import Navbar from "../website/Navbar";
import { Footer } from "./footer";
import { Contact } from "./contact";
import { Team } from "./Team";
import { Events } from "./Event";
import { Target } from "./Target";
import { About } from "./About";
// import home from "../website/mainPhoto/home-img.png";
export function Home() {
  return (
    <>
      <Navbar />
      {/* Home section */}
      <section className="text-center top" id="Home">
        <p className="heading">WELCOME TO</p>
        <p className=" heading2">ELECTRONICS CLUB</p>
        <p className="heading3">
          Our electronics club is open to all, so come and be a part of a
          vibrant and welcoming community <br></br>that shares your love for
          electronics.
        </p>
        <Link to="/explore">
          <button className="head-button">
            <p>EXPLORE GALLERY</p>
          </button>
        </Link>

        {/* <div className="home-img ">
          <img src={home} alt="home-img" />
        </div> */}
      </section>

      {/* About Section  */}
      <About />

      {/* Target section */}

      <Target />

      {/*events/workshops*/}
      <Events />
      {/* our team Section  */}
      <Team />

      {/* Contact Section */}

      <Contact />

      {/* footer*/}

      <Footer />
    </>
  );
}
