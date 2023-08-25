import "./sectionProduct.scss";

const SectionProduct = () => {
  return (
    <div className="product-wrapper">
      <div className="product-text">
        <p className="t1">Product Tour 👇</p>
        <p className="t2">
          토틀의
          <span className="t2-1"> 주요 기능을</span>
          <span className="t2-2"> 직접 경험</span>
          해보세요!
        </p>
      </div>
      <div className="product-frame">
        <div className="frame-wrapper">
          <div className="frame">
            <iframe
              src="https://totle.storylane.io/demo/rsg6yhadwehm"
              allow="fullscreen; camera; microphone"
              className="frame-embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionProduct;
