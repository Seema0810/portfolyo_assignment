import Popup from "./Popup";

const ServicePopup = ({ data, open, close }) => {
  return (
    <Popup open={open} close={close}>
      <div className="service_popup_informations">
        <div className="image">
          <img src={data.image.url} alt="" />
          <div
            className="main"
            data-img-url={data.image.url}
            style={{ backgroundImage: `url(${data.image.url})` }}
          />
        </div>
        <div className="main_title">
          <h3>{data.name}</h3>
          <h6>Charge:$499</h6>
        </div>
        <div className="descriptions">
          {/* {data &&
            data.description &&
            data.description.map((des, i) => <p key={i}>{des}</p>)} */}
            <p>Get Yourself a website</p>
        </div>
      </div>
    </Popup>
  );
};
export default ServicePopup;
