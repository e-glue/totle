import "../../../../styles/styles.scss";
import CheckCircle from "../check-circle/CheckCircle";
import "./tablePricing.scss";

const TablePricing = () => {
  return (
    <table className="pricing-table">
      <thead>
        <tr>
          <th colSpan={5}>대용량 파일 첨부</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>사용가능 횟수</td>
          <td>
            3<span className="table-small-text">회/월</span>
          </td>
          <td>무제한</td>
          <td>무제한</td>
          <td>무제한</td>
        </tr>
        <tr>
          <td>제공 용량</td>
          <td>
            5GB<span className="table-small-text">/사용자</span>
          </td>
          <td>
            15GB<span className="table-small-text">/사용자</span>
          </td>
          <td>
            25GB<span className="table-small-text">/사용자</span>
          </td>
          <td>
            무제한
            <br />
            <span className="table-small-text">(보유 서버 스펙에 따름)</span>
          </td>
        </tr>
        <tr>
          <td>메일 당 첨부 가능 용량</td>
          <td>
            1GB<span className="table-small-text">/메일</span>
          </td>
          <td>
            5GB<span className="table-small-text">/메일</span>
          </td>
          <td>
            10GB<span className="table-small-text">/메일</span>
          </td>
          <td>무제한</td>
        </tr>
        <tr>
          <td>파일 당 일 최대 다운로드 횟수</td>
          <td>
            10<span className="table-small-text">회/일</span>
          </td>
          <td>
            50<span className="table-small-text">회/일</span>
          </td>
          <td>
            100<span className="table-small-text">회/일</span>
          </td>
          <td>무제한</td>
        </tr>
        <tr>
          <td>파일 다운로드 가능 기간</td>
          <td>
            7<span className="table-small-text">일</span>
          </td>
          <td>
            30<span className="table-small-text">일</span>
          </td>
          <td>무제한</td>
          <td>무제한</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th colSpan={5}>메일 발송 옵션</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>수신확인 및 알림</td>
          <td>
            10<span className="table-small-text">회/월</span>
          </td>
          <td>무제한</td>
          <td>무제한</td>
          <td>무제한</td>
        </tr>
        <tr>
          <td>개별 발송 (1:1 발송)</td>
          <td rowSpan={2}>
            5
            <span className="table-small-text">
              회/월
              <br />
              1회 최대 발송 가능 수신자: 50명
            </span>
          </td>
          <td>무제한</td>
          <td>무제한</td>
          <td>무제한</td>
        </tr>
        <tr>
          <td>매크로 발송 (개인화 발송)</td>
          <td>무제한</td>
          <td>무제한</td>
          <td>무제한</td>
        </tr>
        <tr>
          <td>HTML 소스 편집 및 발송</td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
        </tr>
        <tr>
          <td>메시지 회수</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <CheckCircle />
          </td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th colSpan={5}>협업 및 커뮤니케이션</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>메모</td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
        </tr>
        <tr>
          <td>실시간 채팅</td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
        </tr>
        <tr>
          <td>이메일 서식 (템플릿)</td>
          <td></td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
        </tr>
        <tr>
          <td>메일 주소록</td>
          <td></td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
        </tr>
        <tr>
          <td>조직도</td>
          <td></td>
          <td></td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
        </tr>
        <tr>
          <td>MS Teams 조직도</td>
          <td></td>
          <td></td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th colSpan={5}>이메일 보안 및 기타 기능</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            메일 암호화
            <span className="table-small-text">(PDF 암호화 메일)</span>
          </td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>첨부파일 압축 및 암호화</td>
          <td></td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>확장자 볓 파일 첨부 제한</td>
          <td></td>
          <td></td>
          <td>
            <CheckCircle />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>외부 수신자 확인 알림</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>조건부 메일 발송 제한</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>승인 메일</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>메일 가져오기 / 내보내기</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th colSpan={5}>관리자 도구</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>사용자 / 세션 관리</td>
          <td></td>
          <td></td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
        </tr>
        <tr>
          <td>
            일반 / 대용량 첨부 관리 <br />
            <span className="table-small-text">
              다운로드 로그, 사용량 및 사용자 통계, 대용량 파일 및 메일 관리,
              허용 IP 관리
            </span>
          </td>
          <td></td>
          <td></td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
        </tr>
        <tr>
          <td>조직도 관리</td>
          <td></td>
          <td></td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
        </tr>
        <tr>
          <td>
            보안 기능 관리 <br />
            <span className="table-small-text">
              메일 발송 제한, 파일 첨부 제한, 외부 수신자 확인, 첨부파일 암호화
              설정
            </span>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <CheckCircle />
          </td>
        </tr>
        <tr>
          <td>
            써드 파티 연동 관리 <br />
            <span className="table-small-text">
              Microsoft Teams 조직도 연동
            </span>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <CheckCircle />
          </td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th colSpan={5}>totle OWA (Outlook On the Web)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>대용량 파일 첨부</td>
          <td></td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
        </tr>
        <tr>
          <td>이메일 서식</td>
          <td></td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
        </tr>
        <tr>
          <td>메일 주소록</td>
          <td></td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
          <td>
            <CheckCircle />
          </td>
        </tr>
        <tr>
          <td>수신확인</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th colSpan={5}>기술 지원 및 기타</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>고객지원</td>
          <td>이메일 지원</td>
          <td>이메일 및 전화지원</td>
          <td>
            이메일, 전화 및 원격지원 <br />
            <span className="table-small-text">+ 우선순위 지원</span>
          </td>
          <td>
            이메일, 전화 및 원격지원 <br />
            <span className="table-small-text">+ 우선순위 지원</span>
          </td>
        </tr>
        <tr>
          <td>추가 커스터마이징</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <CheckCircle />
          </td>
        </tr>
        <tr>
          <td>비고</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <span className="table-small-text">
              서버 비용을 제외한 비용이며 서버 세팅비가 별도로 청구됩니다.
            </span>
          </td>
        </tr>
        <tr>
          <td>동시 접속가능 디바이스 수</td>
          <td colSpan={4}>
            3대
            <br />
            <span className="table-small-text">
              (토틀 하나의 계정으로 최대 3개의 Outlook 에서 토틀을 사용할 수
              있습니다.)
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TablePricing;
