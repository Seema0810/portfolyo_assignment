import Popup from "./Popup";
const DetailsPopup = ({ open, close,data }) => {
  // alert(data?.image?.url);
  return (
    <Popup open={open} close={close}>
      <div className="popup_details">
        <div className="top_image">
          <img src={data?.image?.url} alt="" />
          <div
            className="main"
            data-img-url={data?.image?.url}
            
            style={{ backgroundImage: `url(${data?.image?.url})` }}
            // style={{ backgroundImage: 'url("https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285431821-3lfg2r")' }}
          />
        </div>
        <div className="portfolio_main_title">
          <h3>{data.title}</h3>
          <span>
            <a href="#" onClick={(e) => e.preventDefault()}>
             Description
            </a>
          </span>
          <div />
        </div>
        <div className="main_details">
          <div className="textbox">
            
            <p>
             {data.description}
            </p>
          </div>
          <div className="detailbox">
            <h3>Tech Stack:</h3>
            <ul>
              {data?.techStack?.map((tech)=>{
                return ( <li>
                  <span className="first">-{tech}</span>
                  {/* <span>April 22, 2022</span> */}
                </li>)
              })}
             
             
            </ul>
          </div>
        </div>
        <div className="additional_images">
          <ul>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src={data?.image?.url} alt="" />
                  <div className="main" data-img-url={data?.image?.url} style={{ backgroundImage: `url(${data?.image?.url})` }} />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src={data?.image?.url} alt="" />
                  <div className="main" data-img-url={data?.image?.url} style={{ backgroundImage: `url(${data?.image?.url})` }} />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src={data?.image?.url} alt="" />
                  <div className="main" data-img-url={data?.image?.url}  style={{ backgroundImage: `url(${data?.image?.url})` }}/>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Popup>
  );
};
export default DetailsPopup;