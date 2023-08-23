import "./Menubar.scss";

const Menubar = () => {
  return (
    // <div className="menu-bar">
    <div className="button-container">
      <div className="button active">대용량 파일 첨부</div>
      <div className="button">수신확인 및 알림</div>
      <div className="button">개별 발송</div>
      <div className="button">매크로 발송</div>
      <div className="button">HTML 소스 편집</div>
    </div>
    // </div>
  );
};

export default Menubar;
