import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import {
  ImgSideBar,
  SliderSideBar,
  VideoSideBar,
  YoutubeSideBar,
} from "./WorkSideBar";

const workData = [
  {
    img: "img/pbx_ad.jpg",
    name: "PBX advertisement",
    format: "img",
    project: "Ad",
    client: "Phase 2 - PBX outley",
    name: "PBX Facebook Campaign | Paid Ad",
    client: "Pro Business Solutionsy",
    duration: "3 MONTHS",
    technologies: ["Canva"],
    budget: "1550 USD",
  },

  {
    img: "img/Product-listing-2.png",
    name: "WORDPRESS WEBSITE MANAGEMNT",
    img: "img/Product-listing-2.png",
    name: "WORDPRESS WEBSITE MANAGEMNT",
    format: "slider",
    project: " PRODUCT LISTING ",
    client: "SUPER ELECTRONICS",
    project: " PRODUCT LISTING ",
    client: "SUPER ELECTRONICS",
    duration: "3 MONTHS",
    technologies: ["WORDPRESS", "WORCOMMERCE", "CONTENT COPY"],
    technologies: ["WORDPRESS", "WORCOMMERCE", "CONTENT COPY"],
    budget: "1550 USD",
  },
    {
    img: "img/cctv_ad.jpg",
    name: "Facebook CCTV Campaign | Paid Ad",
    format: "img",
    project: "Social Media | Communication",
    client: "Unizulu",
    duration: "1 MONTH",
    technologies: ["CANVA"],
    budget: "1550 USD",
  },
  {
    img: "img/Facebook_post.jpeg",
    name: "Shoprite Crisis Management Facebook Post",
    format: "img",
    project: "Social Media | Communication Science Project",
    client: "Unizulu",
    duration: "1 MONTH",
    technologies: ["Adobe illustrator"],
    budget: "1550 USD",
  },

  {
    img: "img/x_post.jpeg",
    name: "Shoprite Crisis Management Twitter X Post",
    format: "img",
    project: "Social Media | Communication Science Project",
    client: "Unizulu",
    duration: "1 MONTH",
    technologies: ["Adobe illustrator"],
    budget: "1550 USD",
  },
    {
    img: "img/Phase 2 - Burger banner.png",
    name: "Fast Food advertisement",
    format: "img",
    project: "Ad",
    client: "Phase 2 - Fast Food outley",
    project: "Ad",
    client: "Phase 2 - Fast Food outley",
    duration: "3 MONTHS",
    technologies: ["Canva"],
    budget: "1550 USD",
  },
    {
    img: "img/cyber-monday-celebration.jpg",
    name: "Cyber Monday Ad",
    format: "img",
    project: "Social Media",
    client: "Stronics",
    img: "img/cyber-monday-celebration.jpg",
    name: "Cyber Monday Ad",
    format: "img",
    project: "Social Media",
    client: "Stronics",
    duration: "3 MONTHS",
    technologies: ["Canva"],
    technologies: ["Canva"],
    budget: "1550 USD",
  },


  





];

const Work = () => {
  const { nav } = useContext(NavContext);
  const [active, setActive] = useState(null);
  return (
    <Fragment>
      <section id="work" className={`${nav === "work" ? "active" : ""}`}>
        <div
          className={`portfolio-container ${
            active ? "slide-out overflow-hidden" : ""
          }`}
        >
          {/* Main Heading Starts */}
          <div className="container page-title text-center">
            <h2 className="text-center">
              Media <span>Assets</span>
            </h2>
            <span className="title-head-subtitle">
              a few recent designs 
              me.
            </span>
          </div>
          {/* Main Heading Ends */}
          <div className="portfolio-section">
            <div className="container cd-container">
              <div>
                {/* Portfolio Items Starts */}
                <ul className="row" id="portfolio-items">
                  {workData.map((work, i) => (
                    <li className="col-12 col-md-6 col-lg-4" key={i}>
                      <a
                        href="#"
                        data-type="project-1"
                        onClick={() => setActive(i + 1)}
                      >
                        <img
                          src={work.img}
                          alt="Project"
                          className="img-fluid"
                        />
                        <div>
                          <span>{work.name}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
                {/* Portfolio Items Ends */}
              </div>
            </div>
          </div>
          {/* PORTFOLIO OVERLAY STARTS */}
          <div className="portfolio-overlay" onClick={() => setActive(null)} />
          {/* PORTFOLIO OVERLAY ENDS */}
        </div>
        {workData.map((work, i) => (
          <div
            key={i}
            className={`project-info-container project-1 ${
              active === i + 1 ? "slide-in" : ""
            }`}
          >
            {/* Main Content Starts */}
            <div className="project-info-main-content">
              {work.format == "img" ? (
                <ImgSideBar img={work.img} />
              ) : work.format == "youtube" ? (
                <YoutubeSideBar playing={active} />
              ) : work.format == "slider" ? (
                <SliderSideBar />
              ) : (
                <VideoSideBar playing={active} />
              )}
            </div>
            {/* Main Content Ends */}
            {/* Project Details Starts */}
            <div className="projects-info row">
              <div className="col-12 col-sm-6 p-none">
                <h3 className="font-weight-600 uppercase">{work.name}</h3>
                <ul className="project-details">
                  <li>
                    <i className="fa fa-file-text-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Project{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.project}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-user-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Client{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.client}
                    </span>
                  </li>
                  {/* <li>
                  {/* <li>
                    <i className="fa fa-hourglass-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Duration{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.duration}
                    </span>
                  </li> */}
                  <li>
                    <i className="fa fa-code" />{" "}
                    <span className="font-weight-400 project-label">
                      {" "}
                      Technologies
                    </span>{" "}
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.technologies.map((technologie, i) => (
                        <Fragment key={i}>{technologie}</Fragment>
                      ))}
                    </span>
                  </li>
                  {/* <li>
                    <i className="fa fa-money" />{" "}
                    <span className="font-weight-400 project-label">
                      {" "}
                      Budget
                    </span>{" "}
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.budget}
                    </span>
                  </li> */}
                </ul>
                <a href="#" className="btn">
                  <span>
                    <i className="fa fa-external-link" />
                    preview
                  </span>
                </a>
              </div>
              <div className="col-6 p-none text-right">
                <a
                  href="#"
                  className="btn btn-secondary close-project"
                  onClick={() => setActive(null)}
                >
                  <span>
                    <i className="fa fa-close" />
                    Close
                  </span>
                </a>
              </div>
            </div>
            {/* Project Details Ends */}
          </div>
        ))}
      </section>
      {active && (
        <span
          className={`back-mobile ${active ? "is-visible" : ""}`}
          onClick={() => setActive(null)}
        >
          <i className="fa fa-arrow-left" />
        </span>
      )}
    </Fragment>
  );
};
export default Work;
