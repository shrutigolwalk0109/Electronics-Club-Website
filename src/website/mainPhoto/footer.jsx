import React from "react";
import { BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { FaFirefoxBrowser } from "react-icons/fa";

function Footercontent() {
  return (
    <footer className="text-center text-lg-start bg-dark text-muted">
      <section className="d-flex justify-content-center ">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-white">
                iService India
              </h6>
              <p className="text-white">
                iService – Mobile, Laptop, Printer, Camera, Console,Repairs
                Service. Fastest Way to Repair Your Device.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
              <h6 className="fw-bold text-white mb-4">Pages</h6>
              <p className="text-white">
                <a href="#!" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Booking
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Part Purchase
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact Us
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-white">
              <h6 className="text-uppercase fw-bold mb-4 text-white">
                Contact Us
              </h6>
              <p className="text-white">
                <BsTelephone /> Phone
              </p>
              <p>
                <FaFirefoxBrowser /> Website
              </p>
              <p>
                <SlLocationPin /> Location
              </p>
              <p>
                <AiOutlineMail /> Mail
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4 text-white ">
        © 2023 iService India All right reserved:
      </div>
    </footer>
  );
}
        

export default Footercontent 