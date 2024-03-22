import { Fragment, useEffect, useState } from "react";
import ServicePopup from "./popup/ServicePopup";


const Service = ({services}) => { 
  //  services=services.slice(0,4);
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="devman_tm_section" id="service">
        <div className="devman_tm_service">
          <div className="container">
            <div className="service_list">
              <ul>
                {services && services.map((service, i) => (
                  <li
                    className={`wow ${i % 2 ? "fadeInLeft" : "fadeInRight"}`}
                    data-wow-duration="1s"
                    key={i}
                    style={{visibility: "visible", animationDuration: "1s"}}
                  >
                    <div className="service-card">
                      <div className="service-card-img">  <img className="svg" src={service.image.url} alt="" style={{width:"100%",height:"100%", borderRadius:"20px"}}/></div>
                      <div className="service-card-content">
                      <h1 className="title" >{service.name}</h1>
                      <h6>${300}</h6>
                      <p className="text">
                        {service.desc.substring(0, 138)}.
                      </p>
                      </div>
                      <a
                        className="devman_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                        }}
                      />
                      <img
                        className="popup_service_image"
                        src="img/service/1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="shape moving_effect"
            data-direction="y"
            data-reverse="yes"
          >
          </div>
         </div> 
      </div>
    </Fragment>
  );
};
export default Service;
