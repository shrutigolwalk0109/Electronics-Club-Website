import goal from "../website/mainPhoto/Goal.gif";
import logo1 from "../website/mainPhoto/Electronics-logo1.png";
import mission2 from "../website/mainPhoto/Mission2.gif";

export function Target() {
  return (
    <>
      <section className="target-club">
        <div className="target-head">
          <h1>
            <span className="t-span1">
              <i className="fa-solid fa-atom"></i>
            </span>
            <u>TARGET OF OUR CLUB</u>
            <span className="t-span2">
              <i className="fa-solid fa-atom"></i>
            </span>
          </h1>
        </div>

        <div className="target-card ">
          <div
            className="card t-card  flip-right"
            style={{
              visibility: "visible",
              animationDelay: 0.2,
              animationName: "flip-right",
            }}
          >
            <div>
              <img src={goal} alt="goal" />
            </div>
            <p>
              The target of an electronics club can vary depending on the
              specific goals and objectives of the club. Generally, the target
              of an electronics club is to bring together individuals who have
              an interest in electronics and technology. The club provides a
              platform for members to learn, collaborate, and share their
              knowledge and skills in electronics
            </p>
          </div>

          <div
            className="card t-card logo1 flip-right"
            style={{
              visibility: "visible",
              animationDelay: 0.2,
              animationName: "flip-right",
            }}
          >
            <div>
              <img src={logo1} alt="goal" />
            </div>
            <p>
              The club may target students, professionals, or hobbyists who want
              to develop their skills in electronics and technology. The target
              audience may also include individuals who are interested in
              pursuing careers in electronics engineering, computer science, or
              related fields.
            </p>
          </div>

          <div
            className="card t-card flip-right"
            style={{
              visibility: "visible",
              animationDelay: 0.2,
              animationName: "flip-right",
            }}
          >
            <div>
              <img src={mission2} alt="goal" />
            </div>
            <p>
              The club may aim to provide members with opportunities to network
              with other professionals in the industry, participate in
              competitions, and gain practical experience in designing and
              building electronic devices and systems. Additionally, the club
              may aim to inspire and encourage younger generations to pursue
              careers in electronics and technology.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
