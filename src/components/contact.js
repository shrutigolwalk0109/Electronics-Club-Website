import { useState, React } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <section className="contact " id="Contact">
        <h1 className="contact-head">CONTACT US</h1>
        <br />
        <div className="row contact-div">
          <div className="col-md-6 contact-1">
            <h2>GET IN TOUCH</h2>
            <p style={{ fontWeight: 500, fontSize: 13 }}>
              Feel free to ask your query...
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> <b>CONTACT:</b>{" "}
              +917999442165 (Prof. Madhav Singh)
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i> <b>EMAIL:</b>{" "}
              electronicsclubmits19@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> <b> ADDRESS:</b>{" "}
              Madhav Institute of Technology and Science Racecourse Rd, near
              Gola ka Mandir, Gwalior, Madhya Pradesh, 474005.
            </p>
            <p>
              <b>About The Developers:</b>
              <br />
              <span>
                "This website is proudly designed and developed by Shruti
                Golwalkar and Nandini Agrawal from MITS,Gwalior.We are always
                enthusiastic about working on awesome projects, and our
                expertise in web development shines through in the design and
                functionality of this website."
              </span>
            </p>
          </div>

          <div className="col-md-6 contact-2">
            {/* <img className='letter' src= {gif} alt='gif'/> */}
            <form action="https://formspree.io/f/moqorvnd" method="POST">
              <b>Name:</b>
              <input
                className="input"
                type="text"
                name="name"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              ></input>
              <b>Email:</b>
              <input
                className="input"
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              ></input>
              <b>Message:</b>
              <textarea
                className="input"
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
              <button type="submit" className="send">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
