import { useContext } from "react";
<<<<<<< HEAD
// import Poster from "../../public/img/bg-video-poster.jpg";
import NavContext from "../context/navContext";
import AnimationText from "./AnimationText";
=======
import NavContext from "../context/navContext";
import AnimationText from "./AnimationText";

>>>>>>> main
const Home = ({ leftImg, video, leftImgSrc }) => {
  const { nav, changeNav } = useContext(NavContext);
  return (
    <section id="home" className={`${nav === "home" ? "active" : ""}`}>
      {/* Text Rotator Starts */}
      <div className="main-text-container">
<<<<<<< HEAD
        {video && (
          <video/>
        )}
=======
        {video && <video />}
>>>>>>> main
        {leftImg && (
          <img
            className="leftimagepicture"
            src={`${leftImgSrc ? leftImgSrc : "img/portfolio-banner.jpg"}`}
            alt=""
          />
        )}
        <div className="main-text" id="selector">
<<<<<<< HEAD
          <h3>Hi there !</h3>
          <AnimationText />
          <p>
          As a Public Relations Assistant Officer, I possess a relevant three-year degree in public relations and two years of experience in the field. I have successfully coordinated corporate events and have a proven track record in writing balanced articles. My goal is to support the implementation of strategic marketing and public relations plans, collaborating closely with PR managers and teams to enhance brand reputation and achieve organizational objectives. With strong communication skills, attention to detail, and a passion for public relations, I am equipped to contribute to the success of any organization's PR efforts.
=======
          <h3>Hi there!</h3>
          <AnimationText />
          <p>
            I am an ambitious and detail-oriented Marketing and Administration Assistant with a Diploma in Public Relations and certifications in digital marketing, Google Analytics, and advanced SEO. My experience includes crafting engaging campaigns, optimizing administrative processes, and driving customer engagement. I am skilled in content creation, data analysis, and collaboration, with a proven ability to enhance brand recognition and streamline operations.
>>>>>>> main
          </p>
          <div className="call-to-actions-home">
            <div className="text-left">
              <a
                href="#about"
                onClick={() => changeNav("about")}
                className="btn link-portfolio-one"
              >
                <span>
<<<<<<< HEAD
                  <i className="fa fa-user" />
                  more about me
=======
                  <i className="fa fa-user" /> more about me
>>>>>>> main
                </span>
              </a>
              <a
                href="#blog"
                onClick={() => changeNav("blog")}
                className="btn btn-secondary link-portfolio-two"
              >
                <span>
<<<<<<< HEAD
                  <i className="fa fa-suitcase" />
                  Articles
=======
                  <i className="fa fa-suitcase" /> Articles
>>>>>>> main
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
<<<<<<< HEAD
=======

>>>>>>> main
export default Home;
