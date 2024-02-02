export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="main-footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 footer">
                <div>
                  <b>
                    <h5>STAY CONNECTED WITH US....</h5>
                  </b>
                  <p>
                    Let’s join in our electronics club and be a part of a
                    community that shares your passion for electronics.
                  </p>
                </div>
              </div>
              <div className="col-md-3 explore">
                <h5>EXPLORE</h5>

                <p className="f-explore">
                  <a href="#Home" className="abc">
                    HOME
                  </a>
                  <a href="#About" className="abc">
                    ABOUT US
                  </a>
                  <a href="#Event" className="abc">
                    EVENTS
                  </a>
                  <a href="#Team" className="abc">
                    OUR TEAM
                  </a>
                  <a href="#Contact" className="abc">
                    CONTACT
                  </a>
                </p>
              </div>
              <div className="col-md-3 message ">
                <h5>SEE US ON..</h5>

                <div className="social-icon text-left">
                  <a
                    href="https://www.linkedin.com/company/electronics-club-mits-gwalior/about/"
                    target="_shruti"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/electronics.club.mits/"
                    target="_shruti"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="end-footer">
          <center>
            <p
              className="rights text-center"
              style={{ position: "relative", top: 22 }}
            >
              @ 2023 Electronics Club. Made with{" "}
              <i
                className="fa-solid fa-heart"
                style={{ fontSize: 17, color: "red" }}
              ></i>{" "}
              by Electronics club Team. All rights reserved.
            </p>
          </center>
            
        </div>
      </footer>
    </>
  );
}
