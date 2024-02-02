import about from "../website/mainPhoto/About-img.jpg";

export function About() {
  return (
    <>
      <section className="about" id="About">
        <div className="about-img">
          <img src={about} alt="about-img" />
        </div>

        <div className="about-head">
          <h1>
            ABOUT OUR
            <span> CLUB...</span>
          </h1>
        </div>

        <div className="about-head2">
          <p>
            The Electronics club is a group of people who share an interest in
            electronics, technology, and engineering. The club may be organized
            through a university by enthusiasts who want to collaborate and
            learn from each other.
          </p>
        </div>

        <div className="about-head3">
          <p>
            Our electronics club will provide members with opportunities to
            develop their skills and knowledge by organizing workshops,
            seminars, and projects. Members may work on individual projects or
            collaborate on group projects that involve designing, building, and
            testing electronic circuits, devices, or systems.
          </p>
        </div>

        <div className="about-num container">
          <div className=" Number ">
            <span>
              <i className="fa-solid fa-circle-user"></i>
            </span>
            100+ <h2>Members</h2>
          </div>
          <div className=" Number ">
            <span>
              <i className="fa-solid fa-lightbulb"></i>
            </span>
            10+ <h2>Events</h2>
          </div>
          <div className=" Number ">
            <span>
              <i className="fa-solid fa-calendar-check"></i>
            </span>
            10+ <h2>Workshops</h2>
          </div>
        </div>
      </section>
    </>
  );
}
