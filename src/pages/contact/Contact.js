import NavBar from "./components/NavBar";
import "./contact.scss";
import Button from "./components/Button";
// import Input from "./components/Input";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="contact-container">
        <h1 className="title">How can we help?</h1>
        <div className="qna-container">
          <div className="column">
            <div className="any-q-container">
              <div className="any-q-title">문의 사항이 있으신가요?</div>
              <div className="any-q-title-txt">
                상세 문의 내용을 폼을 통해 제출해주세요 <br />
                빠른 시일 내 연락드리겠습니다.
              </div>
            </div>
            <div className="faq-container">
              <div className="faq-title">
                FAQ에서 문의 내용을 <br />
                확인해보세요!
              </div>
              <div className="faq">
                <div className="faq-box">
                  <div className="faq-content">토틀 ID를 찾고 싶어요.</div>
                  <div className="faq-detail">
                    <Button
                      className="rounded-button"
                      size="detail"
                      design="detaild"
                    >
                      자세히 보기
                    </Button>
                  </div>
                </div>
                <div className="faq-box">
                  <div className="faq-content">토틀 ID를 변경하고 싶어요.</div>
                  <div className="faq-detail">
                    <Button
                      className="rounded-button"
                      size="detail"
                      design="detaild"
                    >
                      자세히 보기
                    </Button>
                  </div>
                </div>
                <div className="faq-box">
                  <div className="faq-content">
                    계정 비밀번호를 잊어버렸어요.
                  </div>
                  <div className="faq-detail">
                    <Button
                      className="rounded-button"
                      size="detail"
                      design="detaild"
                    >
                      자세히 보기
                    </Button>
                  </div>
                </div>
                <div className="faq-box">
                  <div className="faq-content">
                    구독 내역을 확인하고 싶어요.
                  </div>
                  <div className="faq-detail">
                    <Button
                      className="rounded-button"
                      size="detail"
                      design="detaild"
                    >
                      자세히 보기
                    </Button>
                  </div>
                </div>
              </div>
              <div className="other-faq">
                <Button
                  className="rounded-button"
                  size="other"
                  design="otherd"
                  onClick={() => window.open("https://www.totlelab.com/faq")}
                >
                  다른 FAQ 확인하기
                </Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="q-container">
              <div className="q-title">문의 하기</div>
              <div className="q-title-txt">
                토틀 ID와 상세 문의 내용을 <br />
                아래 폼에 상세히 입력 후 제출해주세요.
              </div>
              <div>
                <div className="id">
                  <div className="id-title">
                    토틀 ID <span className="star">*</span>
                  </div>
                  <div className="required">*필수 입력값입니다.</div>
                </div>
                <div className="inputs">
                  <input
                    className="input-info"
                    placeholder="가입한 토틀 ID를 입력해주세요."
                  ></input>
                </div>
                <div className="inputs">
                  <div className="tell">연락처</div>
                  <div className="id-input">
                    <input
                      className="input-info"
                      placeholder="정확한 연락처 정보를 입력해주세요."
                    ></input>
                  </div>
                </div>
                <div className="q-contents">
                  <div className="q-contents-title">
                    문의 내용 <span className="star">*</span>
                  </div>
                  <div className="required">*필수 입력값입니다.</div>
                </div>
                <input className="input-q"></input>
                <div className="error-file-upload">
                  오류 시 생성되는 오류 로그 파일을 첨부해주세요.
                </div>
                <Button className="rounded-button" size="file" design="upload">
                  파일 업로드
                </Button>
                <Button className="rounded-button" size="file" design="submit">
                  제출하기
                </Button>
                <div className="agree">
                  ∙ 제출하기를 클릭하면 당사의 개인정보 처리 방침에 동의한
                  것으로 간주합니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
