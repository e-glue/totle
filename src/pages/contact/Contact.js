import { useRef, useEffect, useCallback, useState } from "react";
import "./contact.scss";
import NavBar from "./components/nav-bar/NavBar";
import Button from "./components/button/Button";

const Contact = () => {
  const inputEl = useRef(null);
  const [fileName, setFileName] = useState("");
  const fileInputHandler = useCallback((event) => {
    const files = event.target && event.target.files;
    if (files && files[0]) {
      setFileName(event.target.files[0].name);
    }
  }, []);

  useEffect(() => {
    if (inputEl.current !== null) {
      inputEl.current.addEventListener("input", fileInputHandler);
    }
    return () => {
      inputEl.current.removeEventListener("input", fileInputHandler);
    };
  }, []);

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
            <div className="faq-container faq-desktop">
              <div className="faq-title">
                FAQ에서 문의 내용을 <br />
                확인해보세요!
              </div>
              <div className="faq">
                <div className="faq-box">
                  <div className="faq-content">토틀 ID를 찾고 싶어요.</div>
                  <div className="faq-detail">
                    <button
                      className="detail-button"
                      onClick={() =>
                        window.open(
                          "https://totlelab.com/faq/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=7628211&t=board&category=6b602c7O2V",
                        )
                      }
                    >
                      자세히 보기
                    </button>
                  </div>
                </div>
                <div className="faq-box">
                  <div className="faq-content">토틀 ID를 변경하고 싶어요.</div>
                  <div className="faq-detail">
                    <button
                      className="detail-button"
                      onClick={() =>
                        window.open(
                          "https://totlelab.com/faq/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=8055145&t=board&category=6b602c7O2V",
                        )
                      }
                    >
                      자세히 보기
                    </button>
                  </div>
                </div>
                <div className="faq-box">
                  <div className="faq-content">
                    계정 비밀번호를 잊어버렸어요.
                  </div>
                  <div className="faq-detail">
                    <button
                      className="detail-button"
                      onClick={() =>
                        window.open(
                          "https://totlelab.com/faq/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=8094523&t=board&category=6b602c7O2V",
                        )
                      }
                    >
                      자세히 보기
                    </button>
                  </div>
                </div>
                <div className="faq-box">
                  <div className="faq-content">
                    구독 내역을 확인하고 싶어요.
                  </div>
                  <div className="faq-detail">
                    <button
                      className="detail-button"
                      onClick={() =>
                        window.open(
                          "https://totlelab.com/faq/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=9269783&t=board&category=6AIv63l1ue",
                        )
                      }
                    >
                      자세히 보기
                    </button>
                  </div>
                </div>
              </div>
              <div className="other-faq">
                <button
                  className="faq-button"
                  onClick={() => window.open("https://www.totlelab.com/faq")}
                >
                  다른 FAQ 확인하기
                </button>
              </div>
            </div>
          </div>
          <div className="q-container row">
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
              <label for="file">
                <div className="btn-upload">파일 업로드</div>
              </label>
              <input type="file" name="file" id="file" ref={inputEl}></input>
              {fileName ? <p className="file-name">{fileName}</p> : ""}
              <Button className="contact-button">제출하기</Button>
              <div className="agree">
                ∙ 제출하기를 클릭하면 당사의 개인정보 처리 방침에 동의한 것으로
                간주합니다.
              </div>
            </div>
          </div>
          <div className="faq-container faq-tablet">
            <div className="faq-title">
              FAQ에서 문의 내용을 <br />
              확인해보세요!
            </div>
            <div className="faq">
              <div className="faq-box">
                <div className="faq-content">토틀 ID를 찾고 싶어요.</div>
                <div className="faq-detail">
                  <button
                    className="detail-button"
                    onClick={() =>
                      window.open(
                        "https://totlelab.com/faq/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=7628211&t=board&category=6b602c7O2V",
                      )
                    }
                  >
                    자세히 보기
                  </button>
                </div>
              </div>
              <div className="faq-box">
                <div className="faq-content">토틀 ID를 변경하고 싶어요.</div>
                <div className="faq-detail">
                  <button
                    className="detail-button"
                    onClick={() =>
                      window.open(
                        "https://totlelab.com/faq/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=8055145&t=board&category=6b602c7O2V",
                      )
                    }
                  >
                    자세히 보기
                  </button>
                </div>
              </div>
              <div className="faq-box">
                <div className="faq-content">계정 비밀번호를 잊어버렸어요.</div>
                <div className="faq-detail">
                  <button
                    className="detail-button"
                    onClick={() =>
                      window.open(
                        "https://totlelab.com/faq/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=8094523&t=board&category=6b602c7O2V",
                      )
                    }
                  >
                    자세히 보기
                  </button>
                </div>
              </div>
              <div className="faq-box">
                <div className="faq-content">구독 내역을 확인하고 싶어요.</div>
                <div className="faq-detail">
                  <button
                    className="detail-button"
                    onClick={() =>
                      window.open(
                        "https://totlelab.com/faq/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=9269783&t=board&category=6AIv63l1ue",
                      )
                    }
                  >
                    자세히 보기
                  </button>
                </div>
              </div>
            </div>
            <div className="other-faq">
              <button
                className="faq-button"
                onClick={() => window.open("https://www.totlelab.com/faq")}
              >
                다른 FAQ 확인하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
