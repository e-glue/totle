import "./sectionTitle.scss";

const SectionTitle = ({ titleData }) => {
  const { title, subTitle } = titleData;
  return (
    <hgroup className="title-group">
      <h1 className="title">{title}</h1>
      {subTitle && <h2 className="sub-title">{subTitle}</h2>}
    </hgroup>
  );
};

export default SectionTitle;
