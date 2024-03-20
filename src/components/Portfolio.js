import { Fragment, useState } from "react";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = ({projects}) => {
  console.log("projects are", projects)
  const [activeData, setActiveData] = useState({});
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>

      <DetailsPopup open={popup} close={() => setPopup(false)}  data={activeData}/>
      <div className="devman_tm_section" id="portfolio">
        <div className="devman_tm_portfolio">
          <div className="container">
            <div className="devman_tm_main_title" data-text-align="center">
              <span>Portfolio</span>
              <h3>My Amazing Works</h3>
              <p>
                Dliquip ex ea commo do conse namber onequa ute irure dolor in
                reprehen derit in voluptate
              </p>
            </div>
            <div className="portfolio_list">
              <ul>
                {projects.map((project, index)=>{
                  return (
                    <li className="wow fadeInUp" data-wow-duration="1s" key={index}>
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url={project.image.url}
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="#">{project.title}</a>
                        </span>
                        <h3 className="title">
                          <a href="#">
                            Web Application for
                            <br /> Desiverse
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="#">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                    {/* <a
                      className="devman_tm_full_link popup-youtube"
                      // href="https://www.youtube.com/watch?v=7e90gBu4pas"
                    /> */}
                    <a
                        className="devman_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(project);
                          setPopup(true);
                        }}
                      />
                  </div>
                </li>
                  )
                })}
                
             
                <div
                  className="shape_1 moving_effect"
                  data-direction="y"
                  data-reverse="yes"
                />
                <div
                  className="shape_2 moving_effect"
                  data-direction="y"
                  data-reverse="yes"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
