import team from "../website/mainPhoto/our-team-img.png";
import Caordinator from "../website/mainPhoto/Madhav-Singh-img.jpg";
import Cofounder from "../website/mainPhoto/Ankur-saxena-img.jpg";
import president from "../website/mainPhoto/Shubhankar-img.jpg";

export function Team() {
  return (
    <>
      <section className="our-team" id="Team">
        <div className="our-team-img">
          <img src={team} alt="team-img" />
        </div>

        <div className="our-team-head-container">
          <div className=" row our-team-head slideInLeft">
            <h1>
              Working Together
              <span> is Success</span>
            </h1>
          </div>

          <div className="our-team-head2">
            <p>
              Teamwork is essential for any successful team. When a group of
              individuals come together to work towards a common goal, they are
              able to achieve far more than any one person could on their own.
              Through teamwork, each member of the team is able to bring their
              unique skills and strengths to the table, and work together to
              overcome any challenges or obstacles that they may face. organized
              through a university by enthusiasts who want to collaborate and
              learn from each other.
            </p>
          </div>
        </div>
      </section>
      <section className="container teamPic">
        <h1 className="text-center">
          <span className="event-icon">
            <i className="fa-solid   fas fa-users-line  fa-xs"></i>
          </span>
          <u className="event-heading1">CLUB LEADS</u>
          <span className="event-icon1">
            <i className="fa-solid  fas fa-users-line fa-xs"></i>
          </span>
        </h1>
        <div className=" our-mainTeam">
          <div className="col-md-4 our-mentor">
            <div className="feature-item">
              <div className="hover-overlay">
                <img src={Caordinator} alt="Madhav-Singh-img" />
              </div>
              <h4 className="feature-title">
                MADHAV SINGH <h6>Faculty Coordinator</h6>
              </h4>
            </div>
          </div>
          <div className="col-md-4 our-mentor">
            <div className="feature-item">
              <div className="hover-overlay">
                <img src={Cofounder} alt="Ankur-Saxena-img" />
              </div>
              <h6 className="feature-title">
                ANKUR SAXENA <h6> Co-Founder & First President </h6>
                <h6>(2021 - 2022)</h6>
              </h6>
            </div>
          </div>
          <div className="col-md-4 our-mentor">
            <div className="feature-item">
              <div className="hover-overlay">
                <img src={president} alt="ANSHUL-SAHU-img" />
              </div>
              <h4 className="feature-title">
                SHUBHANKAR SHANI <h6> Current President</h6>
                <h6>(2023 - 2024)</h6>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
