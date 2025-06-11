import { useContext } from "react";
import NavContext from "../context/navContext";
const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          about <span>me</span>
        </h2>
        <span className="title-head-subtitle">
          PR Officer | Digital Marketing Enthusiast | Technical Writer
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                className="img-fluid d-block"
                src="img/aboutme.jpg"
                alt="Amanda Mpanza"
              />
            </div>
            <p className="d-block d-md-none">
              Ambitious and detail-oriented digital marketing enthusiast with a
              Diploma in Public Relations and currently pursuing an Advanced
              Diploma in Communication Science. Equipped with certifications in
              digital marketing, Google Analytics, and advanced SEO. Experienced
              in campaign planning, data analysis, and customer engagement
              strategies. My goal is to enhance brand reputation through
              strategic marketing and public relations.
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">First Name</span>
                    Amanda
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Last Name</span>
                    Mpanza
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Nationality</span>
                    South African
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Experience</span>
                    <strong>3</strong> years
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Address</span>
                    Durban, KZN, South Africa
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
                <li>
                  <h6>
                    <span className="font-weight-600">Languages</span>
                    English and IsiZulu
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Phone</span>
                    +27 71 162 8293
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Email</span>
                    <a
                      style={{ color: "#fff" }}
                      href="mailto:amandathabekhulu@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      amandathabekhulu@gmail.com
                    </a>
                  </h6>
                </li>
              </ul>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                Experience
              </h2>
              <div className="resume-items">
                                {/* Pro Telecoms */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        March 2025 - Present
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Digital Marketing Specialist
                        <span className="separator" />
                        <span className="font-weight-700">Pro Business Solutions </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <ul>
                        <li>
                         - Developing and implementing result-oriented digital marketing strategies that align with business objectives.
                        </li><br></br>
                        <li>
                         - Creating and optimizing captivating content for website, social media, email campaigns, and other digital platforms.
                        </li><br></br>
                        <li>
                         - Managing and monitoring online advertising campaigns (PPC, display ads, social media ads) to maximize ROI.
                        </li><br></br>
                        <li>
                         - Executed A/B testing for product promotions.
                        </li><br></br>
                        <li>
                         - Conducting market research and competitor analysis to stay ahead of industry trends and maintain our competitive edge.
                        </li><br></br>
                        <li>
                         - Planning and executing Google Ads campaigns to drive targeted traffic and conversions.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Stronics */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        Nov 2023 - Sep 2024
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Ecommerce & Digital Marketing Assistant
                        <span className="separator" />
                        <span className="font-weight-700">Stronics (Remote)</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <ul>
                        <li>
                         - Created engaging ad copy for Google Ads and social
                          media campaigns to boost engagement and conversions.
                        </li><br></br>
                        <li>
                         - Conducted keyword research using SEMrush and Google
                          Ads.
                        </li><br></br>
                        <li>
                         - Designed content for presentations and social media
                          using Canva.
                        </li><br></br>
                        <li>
                         - Executed A/B testing for product promotions.
                        </li><br></br>
                        <li>
                         - Managed WordPress content and applied SEO best
                          practices.
                        </li><br></br>
                        <li>
                         - Launched email campaigns via Wix.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Super Electronics */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        Dec 2021 - Feb 2022
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Sales & Marketing Assistant
                        <span className="separator" />
                        <span className="font-weight-700">
                          Super Electronics
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <ul>
                        <li>
                         - Updated stock and inventory on WooCommerce, Takealot,
                          and Facebook.
                        </li><br></br>
                        <li>
                         - Optimized Facebook Ads to maximize ROI.
                        </li><br></br>
                        <li>
                         - Improved sales and brand visibility through online
                          channels.
                        </li><br></br><br></br><br></br>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                Education
              </h2>
              <div className="resume-items">
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2017 - 2019
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Diploma in Public Relations Management
                        <span className="separator" />
                        <span className="font-weight-700">
                          University of Zululand
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2024 (completed)
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Advanced Diploma in Communication Science
                        <span className="separator" />
                        <span className="font-weight-700">
                          University of Zululand
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2021 - 2022
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Certifications: Digital Marketing, Advanced SEO
                        <span className="separator" />
                        <span className="font-weight-700">Google Garage</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Education Ends */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
