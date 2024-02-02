import img1 from "../website/mainPhoto/Img1.jpg";
import img2 from "../website/mainPhoto/Img2.png";
import img3 from "../website/mainPhoto/Img3.jpg";
import img4 from "../website/mainPhoto/Img4.jpg";
import img5 from "../website/mainPhoto/Img5.jpg";
import img6 from "../website/mainPhoto/Img6.jpg";
import img7 from "../website/mainPhoto/Img7.jpg";
import img8 from "../website/mainPhoto/Img-8.jpg";
import img9 from "../website/mainPhoto/Img9.png";
import img10 from "../website/mainPhoto/Img10.jpg";
import img11 from "../website/mainPhoto/Img11.jpg";
import img12 from "../website/mainPhoto/Img12.jpg";
import img13 from "../website/mainPhoto/Img13.jpg";
import img14 from "../website/mainPhoto/Img14.jpg";

export function Explore() {
  return (
    <>
      <section className="explore-main">
        <h1 className="explore-1">
          <span className="explore-head">Captured Moments</span>
        </h1>
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
            <img
              src={img1}
              class="w-100 shadow-1-strong rounded mb-4 explore-anime"
              alt="img1"
            />

            <img
              src={img4}
              class="w-100 shadow-1-strong rounded mb-4 explore-anime"
              alt="img4"
            />

            <img
              src={img7}
              class="w-100 shadow-1-strong rounded mb-4 explore-anime"
              alt="img7"
            />

            <img
              src={img10}
              class="w-100 shadow-1-strong rounded mb-4 explore-anime"
              alt="img10"
            />

            <img
              src={img11}
              class="w-100 shadow-1-strong rounded mb-4 explore-anime"
              alt="img11"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src={img2}
              class="w-100 shadow-1-strong rounded mb-4 explore-anime"
              alt="img2"
            />

            <img
              src={img5}
              class="w-100 shadow-1-strong rounded mb-4 explore-anime"
              alt="img5"
            />

            <img
              src={img8}
              class="w-100 shadow-1-strong rounded mb-4 explore-anime"
              alt="img8"
            />

            <img
              src={img14}
              class="w-100 shadow-1-strong rounded mb-4 explore-anime"
              alt="img14"
            />

            
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src={img3}
              class="w-100 shadow-1-strong rounded mb-4  explore-anime"
              alt="img3"
            />

            <img
              src={img6}
              class="w-100 shadow-1-strong rounded mb-4 explore-anime"
              alt="img6"
            />

            <img
              src={img9}
              class="w-100 shadow-1-strong rounded mb-4 explore-anime"
              alt="img9"
            />

            <img
              src={img12}
              class="w-100 shadow-1-strong rounded mb-4 explore-anime"
              alt="img12"
            />

            <img
              src={img13}
              class="w-100 shadow-1-strong rounded mb-4 explore-anime"
              alt="img13"
            />
          </div>

          <div className="col-12 explore-button">
            <a href="https://drive.google.com/drive/folders/1IKhGg_y2OXZyDbhKXL4cyqSva7e_2Kod?usp=sharing"
                      target="_shruti">
              <button className="head-button align-center">
                <p>More Photos...</p>
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
