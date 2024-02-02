import talaash from "../website/mainPhoto/talaash-event.jpg";
import ethics from "../website/mainPhoto/ethics-event.jpg";
import mysql from "../website/mainPhoto/mysql-event.jpg";
import java from "../website/mainPhoto/java-event.jpg";
export function Events() {
  return (
    <>
      <section className="text-center-event" id="Event">
        <div className="text-center">
          <h1>
            <span className="event-icon">
              <i className="fa-solid   fas fa-angles-right "></i>
            </span>
            <u className="event-heading1">OUR EVENTS</u>
            <span className="event-icon1">
              <i className="fa-solid fas fa-angles-left"></i>
            </span>
          </h1>
        </div>

        <div className="event-heading2">
          <p>
            In Our community we offer you interactive webinars, workshops, and
            much more. So, stay tuned with us and contribute in our events.
            Learn real-life skills from experts, join clubs, hangout and network
            with smart people and learn while having fun.
          </p>
        </div>

        <div className=" event-row">
          <div className=" EVENT">
            <img src={talaash} alt="talaash-event" />

            <h3>
              <u>TALAASH</u>
            </h3>
            <p>
              Talaash provides a unique and exciting way to challenge
              participants and foster a sense of adventure and discovery.
            </p>
          </div>

          <div className=" EVENT">
            <img src={ethics} alt="ethics-event" />

            <h3>
              <u>ETHICS</u>
            </h3>
            <p>
              Ethics is an ongoing process of reflection, self-examination, and
              it requires a willingness to challenge our beliefs.
            </p>
          </div>

          <div className=" EVENT">
            <img src={mysql} alt="mysql-event" />

            <h3>
              <u>MY SQL</u>
            </h3>
            <p>
              MySQL is a powerful and widely-used open-source relational
              database management system and managment interface .
            </p>
          </div>

          <div className=" EVENT ">
            <img src={java} alt="java-event" />

            <h3>
              <u>JAVA</u>
            </h3>
            <p>
              Java is known for its simplicity, readability, and
              maintainability, making it a popular choice for software
              development.
            </p>
          </div>
        </div>
        <button type="button" className=" event-button">
          <p>EXPLORE MORE..</p>
        </button>
      </section>
    </>
  );
}
