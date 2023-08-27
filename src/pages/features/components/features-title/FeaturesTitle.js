import "./FeaturesTitle.scss";

const FeaturesTitle = ({ titleEg, titleKr }) => {
  return (
    <hgroup className="tab-title-group">
      <h1 className="eng-title">{titleEg}</h1>
      <h2 className="kor-title">{titleKr}</h2>
    </hgroup>
  );
};

export default FeaturesTitle;
