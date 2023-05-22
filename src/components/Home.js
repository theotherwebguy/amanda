import { useContext } from "react";
// import Poster from "../../public/img/bg-video-poster.jpg";
import NavContext from "../context/navContext";
import AnimationText from "./AnimationText";
const Home = ({ leftImg, video, leftImgSrc }) => {
  const { nav, changeNav } = useContext(NavContext);
  return (
    <section id="home" className={`${nav === "home" ? "active" : ""}`}>
      {/* Text Rotator Starts */}
      <div className="main-text-container">
        {video && (
          <video/>
        )}
        {leftImg && (
          <img
            className="leftimagepicture"
            src={`${leftImgSrc ? leftImgSrc : "img/portfolio-banner.jpg"}`}
            alt=""
          />
        )}
        <div className="main-text" id="selector">
          <h3>Hi there !</h3>
          <AnimationText />
          <p>
          As a Public Relations Assistant Officer, I possess a relevant three-year degree in public relations and two years of experience in the field. I have successfully coordinated corporate events and have a proven track record in writing balanced articles. My goal is to support the implementation of strategic marketing and public relations plans, collaborating closely with PR managers and teams to enhance brand reputation and achieve organizational objectives. With strong communication skills, attention to detail, and a passion for public relations, I am equipped to contribute to the success of any organization's PR efforts.
          </p>
          <div className="call-to-actions-home">
            <div className="text-left">
              <a
                href="#about"
                onClick={() => changeNav("about")}
                className="btn link-portfolio-one"
              >
                <span>
                  <i className="fa fa-user" />
                  more about me
                </span>
              </a>
              <a
                href="#work"
                onClick={() => changeNav("work")}
                className="btn btn-secondary link-portfolio-two"
              >
                <span>
                  <i className="fa fa-suitcase" />
                  portfolio
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
