import "./FeaturesTab.scss";


const FeaturesTab = ({selected,setSelected}) => {
  return (
    <div className="button-container">
      <div className={`button ${selected == "bigFile"?"selected":""}`} onClick={() => {setSelected("bigFile")}}>대용량 파일 첨부</div>
      <div className={`button ${selected == "notification"?"selected":""}`} onClick={() => {setSelected("notification")}}>수신확인 및 알림</div>
      <div className={`button ${selected == "sending"?"selected":""}`} onClick={() => {setSelected("sending")}}>개별 발송</div>
      <div className={`button ${selected == "macro"?"selected":""}`} onClick={() => {setSelected("macro")}}>매크로 발송</div>
      <div className={`button ${selected == "htmlEdit"?"selected":""}`} onClick={() => {setSelected("htmlEdit")}}>HTML 소스 편집</div>
    </div>
  );
};

export default FeaturesTab;