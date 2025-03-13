import { useContext } from "react";
import NavContext from "../context/navContext";
import AnimationText from "./AnimationText";

const Home = ({ leftImg, video, leftImgSrc }) => {
  const { nav, changeNav } = useContext(NavContext);
  return (
    <section id="home" className={`${nav === "home" ? "active" : ""}`}>
      {/* Text Rotator Starts */}
      <div className="main-text-container">
        {video && <video />}
        {leftImg && (
          <img
            className="leftimagepicture"
            src={`${leftImgSrc ? leftImgSrc : "img/portfolio-banner.jpg"}`}
            alt=""
          />
        )}
        <div className="main-text" id="selector">
          <h3>Hi there!</h3>
          <AnimationText />
          <p>
            I am an ambitious and detail-oriented Marketing and Administration Assistant with a Diploma in Public Relations and certifications in digital marketing, Google Analytics, and advanced SEO. My experience includes crafting engaging campaigns, optimizing administrative processes, and driving customer engagement. I am skilled in content creation, data analysis, and collaboration, with a proven ability to enhance brand recognition and streamline operations.
          </p>
          <div className="call-to-actions-home">
            <div className="text-left">
              <a
                href="#about"
                onClick={() => changeNav("about")}
                className="btn link-portfolio-one"
              >
                <span>
                  <i className="fa fa-user" /> more about me
                </span>
              </a>
              <a
                href="#blog"
                onClick={() => changeNav("blog")}
                className="btn btn-secondary link-portfolio-two"
              >
                <span>
                  <i className="fa fa-suitcase" /> Marketing Content & Case Studies
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Text Rotator Ends */}
    </section>
  );
};

export default Home;
