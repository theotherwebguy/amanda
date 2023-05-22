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
          PR Officer | Digital Merketing Enthusiast | Blogger
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
                alt=""
              />
            </div>
            <p className="d-block d-md-none">
            As a Public Relations Assistant Officer, I possess a relevant three-year degree in public relations and two years of experience in the field. I have successfully coordinated corporate events and have a proven track record in writing balanced articles. My goal is to support the implementation of strategic marketing and public relations plans, collaborating closely with PR managers and teams to enhance brand reputation and achieve organizational objectives. With strong communication skills, attention to detail, and a passion for public relations, I am equipped to contribute to the success of any organization's PR efforts.
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
                {/* <li>
                  <h6>
                    <span className="font-weight-600">Birthdate</span>21 june
                    1990
                  </h6>
                </li> */}
                <li>
                  <h6>
                    <span className="font-weight-600">Nationality</span>
                    South African 
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Experience</span><strong>3</strong> years 
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
                {/* <li>
                  <h6>
                    <span className="font-weight-600">Freelance</span>
                    Available
                  </h6>
                </li> */}
                <li>
                  <h6>
                    <span className="font-weight-600">Langages</span>
                    English and IsiZulu,
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Phone</span>+27 71 162 8394
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Email</span>
                    amandathabekhulu@gmail.com
                  </h6>
                </li>
                {/* <li>
                  <h6>
                    <span className="font-weight-600">Skype</span>
                    daria.taylor
                  </h6>
                </li> */}
                {/* <li>
                  <h6>
                    <span className="font-weight-600">Dribbble</span>
                    taylor.dribbble
                  </h6>
                </li> */}
              </ul>
            </div>
            {/* <div className="col-12 resume-btn-container">
              <a href="#" className="btn btn-resume">
                <span>
                  <i className="fa fa-download" />
                  download my cv
                </span>
              </a>
            </div> */}
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      {/* <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div> */}
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                experience
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
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
                      SALES & MARKETING ASSISTANT
                        <span className="separator" />
                        <span className="font-weight-700">Super Electronics</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      <ul style={{ listStyleType: 'circle' }}>
                        <li>
                        Successfully updated stock and inventory across multiple platforms, including WooCommerce, Takealot, Facebook, and bidorbuy, ensuring accurate and up-to-date product information for customers.
                        </li> <br></br>
                        <li>
                        Monitored Facebook ads campaigns, optimizing performance to maximize engagement and conversion rates, resulting in increased sales and brand visibility.
                        </li><br></br>
                        <li>
                        Implemented website updates by creating captivating banners, building landing pages, and developing promotions, enhancing the overall user experience and driving customer engagement.
                        </li>
                      </ul>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2020 - 2021
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                      SOCIAL MEDIA INTERN
                        <span className="separator" />
                        <span className="font-weight-700">Studioza</span>
                      </span>
                    </div>
                    <div className="card-body">
                    <p>
                      <ul style={{ listStyleType: 'circle' }}>
                        <li>
                        Created compelling content for social media posts, capturing the attention of the target audience and increasing brand awareness.
                        </li> <br></br>
                        <li>
                        Brainstormed innovative campaign ideas, contributing to the development of successful social media strategies that generated high levels of engagement and user participation.
                        </li><br></br>
                        <li>
                        Monitored and analyzed social media platform performance, using insights to refine content strategies and optimize reach and engagement
                        </li><br></br>
                        <li>
                        Assisted in website content layout using WordPress and Elementor page builder, improving website functionality and enhancing user experience.
                        </li><br></br>
                        <li>
                        Engaged with clients and promptly responded to customer inquiries and comments on social media, fostering positive relationships and ensuring customer satisfaction.
                        </li><br></br>
                        <li>
                        Utilized Adobe Suite to edit media files, enhancing visual appeal and maintaining brand consistency
                        </li><br></br>
                        <li>
                        Implemented on-page SEO strategies to improve website visibility and organic search rankings, resulting in increased website traffic and higher conversion rates.
                        </li>
                      </ul>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                {/* <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2010 - 2014
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Consultant
                        <span className="separator" />
                        <span className="font-weight-700">Google</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        diam nonummy.
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Education
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
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
                        Public Relations Management
                        <span className="separator" />
                        <span className="font-weight-700">
                          University of Zululand
                        </span>
                      </span>
                    </div>
                    <div className="card-body">

                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        6 Months
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Fundamentals of Digital Marketing
                        <span className="separator" />
                        <span className="font-weight-700">
                          Google Digital Garage
                        </span>
                      </span>
                    </div>
                    <div className="card-body">

                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2001 - 2005
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Bachelor Degree
                        <span className="separator" />
                        <span className="font-weight-700">
                          Moscow High School
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        diam nonummy.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Skills Starts */}

          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
