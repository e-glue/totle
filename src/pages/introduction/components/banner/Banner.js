import "./banner.scss";

const Banner = ({ customer }) => {
  return (
    <div className="banner-img">
      <img src={customer} />
    </div>
  );
};

export default Banner;
