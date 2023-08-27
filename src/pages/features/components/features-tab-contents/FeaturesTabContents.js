import "./FeaturesTabContents.scss";

const FeaturesTabContents = ({data}) => {
  return (
    <>
        <div className="content-container">
            <div className="left-content">
              <div className="selected-title">
              {data.title}
              </div>
              <div className="description">
              {data.description}
              </div>
              <div className="link-button">
                  <a href={data.buttonLink1} className="button">자세히 알아보기</a>
                  <a href={data.buttonLink2} className="button active">기능 살펴보기</a>
              </div>
            </div>
            <div className="right-content">
              <div className="image">
                  <img className="img" src={data.imgsrc} alt={data.title} />
              </div>
            </div>
        </div>
    </>
  );
};

export default FeaturesTabContents;
