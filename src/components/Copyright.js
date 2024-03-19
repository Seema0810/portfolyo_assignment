const Copyright = ({social_handles}) => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_copyright">
        <div className="container">
          <div className="inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <p>
                Developed with love by{" "}
                <a
                  href="https://themeforest.net/user/codeefly"
                  rel="noreferrer"
                  target="_blank"
                >
                  Codeefly
                </a>{" "}
                © {new Date().getFullYear()}
              </p>
            </div>
            <div className="social-handles wow aniamted" style={{visibility:"visible"}}>
            <ul style={{ listStyle: "none", display:"flex" }}>
            {social_handles.map((social, index)=>{
              return(
                <li key={index}>
                <a href="#" >
                  <img src={social.image.url} alt={social.platform} style={{width:"1.8rem", height:"1.8rem", margin:"0.5rem"}}/>
                </a>
              </li>
              )
            })}
          
          </ul>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <ul>
                <li>
                  <a href="#">Terms &amp; Condition</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};
export default Copyright;
