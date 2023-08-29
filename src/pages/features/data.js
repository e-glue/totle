// import bigFileImg from '../../assets/features/sending/1-1.png';
// import notificationImg from '../../assets/features/sending/1-2.png';
// import sendingImg from '../../assets/features/sending/1-3.png';
// import macroImg from '../../assets/features/sending/1-4.png';
// import htmlEditImg from '../../assets/features/sending/1-5.png';
// import mailEncryptionImg from '../../assets/features/collaboration/2-1.png';
// import compressionImg from '../../assets/features/collaboration/2-2.png';
// import externalNotificationImg from '../../assets/features/collaboration/2-3.png';
// import restrictionImg from '../../assets/features/collaboration/2-4.png';
// import approvalEmailImg from '../../assets/features/collaboration/2-5.png';
// import organizationImg from '../../assets/features/security/3-1.png';
// import emailFormatImg from '../../assets/features/security/3-2.png';
// import mailContactImg from '../../assets/features/security/3-3.png';
// import chatImg from '../../assets/features/security/3-4.png';
// import memoImg from '../../assets/features/security/3-5.png';

import dummy from '../../assets/features/dummy/dummy.png';

const DATA_SENDING_ORDER = [
  "bigFile", "notification", "sending", "macro", "htmlEdit"
]
const DATA_COLLABORATION_ORDER = [
  "organization", "emailFormat", "mailContact", "chat", "memo"
]
const DATA_SECURITY_ORDER = [
  "mailEncryption", "compression", "externalNotification", "restriction", "approvalEmail"
]


const DATA_SENDING = {
  "bigFile": {
    title: "대용량 파일 첨부",
    description:
      "토틀을 활용하면 아웃룩에서 메일 서버 용량과는 상관없이 대용량 파일 및 폴더를 손쉽게 첨부할 수 있습니다.",
    buttonLink1:
      "https://www.totlelab.com/features_sendingoptions#s2021082303568a0e0c24b",
    buttonLink2: "https://totle.storylane.io/share/jz0b5bp7kij8",
    imgsrc: dummy
  },
  "notification":{
    title: "수신확인 및 알림",
    description:
      "메일 수신자의 메일 열람 시간을 조회할 수 있을 뿐 아니라 알리미 설정을 통해 열람 시 실시간 알림을 받아볼 수 있습니다.",
    buttonLink1:
      "https://www.totlelab.com/features_sendingoptions#s20210809f770a1af3315f",
    buttonLink2: "https://totle.storylane.io/share/iywlq8f3qvjx",
    imgsrc: dummy
  },
  "sending":{
    title: "개별 발송",
    description:
      "여러명에게 동일한 내용의 이메일을 개별발송이 필요할 때 토틀을 활용하면 한 번에 여러명의 수신인에게 이메일을 1:1로 발송할 수 있습니다.",
    buttonLink1:
      "https://www.totlelab.com/features_sendingoptions#s20210809e7d94995e3c85",
    buttonLink2: "https://totle.storylane.io/share/r9amzlkbmaan",
    imgsrc: dummy
  },
  "macro":{
    title: "매크로 발송 (메일 병합)",
    description:
      "저장된 수신자의 이름, 회사, 부서 등의 정보를 반영해 메일을 발송할 수 있는 기능으로 제목 및 메일 본문을 개인화 해 발송할 수 있습니다.",
    buttonLink1:
      "https://www.totlelab.com/features_sendingoptions#s20210824ab61c0a27bf9d",
    //buttonLink2: "",
    imgsrc: dummy
  },
  "htmlEdit":{
    title: "HTML 소스 편집",
    description:
      "HTML 소스를 직접 수정 및 편집해 메일을 발송할 수 있습니다. 브라우저 및 디바이스 미리보기를 통해 변경내용을 확인할 수 있습니다.",
    buttonLink1:
      "https://www.totlelab.com/features_sendingoptions#s20210824e7035aba37e0b",
    //buttonLink2: "",
    imgsrc: dummy
  }
};

const DATA_COLLABORATION = {
    "organization": {
      title: "조직도 생성 및 관리",
      description:
        "조직도를 일괄적으로 업로드 해 조직 내 그룹, 부서 및 담당자를 빠르게 찾아 이메일을 전송할 수 있습니다.",
      buttonLink1:
        "https://www.totlelab.com/features_collaboration#s202108237d3e147493c57",
      //buttonLink2: "",
      imgsrc: dummy
    },
      "emailFormat": {
      title: "이메일 서식",
      description:
        "자주 사용하는 이메일 서식 혹은 양식을 이메일 서식으로 저장해 두고 클릭 한 번으로 불러와 사용할 수 있습니다.",
      buttonLink1:"https://www.totlelab.com/features_collaboration#s20210823affe52e29ceca",
      //buttonLink2: "",
      imgsrc: dummy
    },
      "mailContact": {
      title: "메일 주소록",
      description:
        "자주 사용하는 이메일 주소 리스트를 상황 별로 저장해 메일 주소록으로 활용할 수 있습니다.",
      buttonLink1:
        "https://www.totlelab.com/features_collaboration#s202108268d1fc7f2ed735",
      //buttonLink2: "",
      imgsrc: dummy
    },
      "chat": {
      title: "실시간 채팅",
      description:
        "수정필요",
      buttonLink1:
        "https://www.totlelab.com/features_collaboration#s202108235506004ac086e",
      //buttonLink2: "",
      imgsrc: dummy
    },
      "memo": {
      title: "메모",
      description:
        "이메일 별로 꼭 기억해야 하는 내용, 마감일, 업데이트해야 할 내용 등을 메모로 저장해 활용할 수 있습니다.",
      buttonLink1:
        "https://www.totlelab.com/features_collaboration#s202108235b862a5d83236",
      //buttonLink2: "",
      imgsrc: dummy
    }
  };
  
  const DATA_SECURITY = {
    "mailEncryption": {
      title: "메일 암호화",
      description:
        "중요한 이메일을 암호화 해 PDF 파일 형태로 전송할 수 있습니다.",
      buttonLink1:
        "https://www.totlelab.com/features_emailsecurity#s20210824c0e28ceb6fd42",
      //buttonLink2: "",
      imgsrc: dummy
    },
    "compression": {
      title: "첨부파일 압축 및 암호화",
      description:
        "파일 첨부 시 첨부파일을 손쉽게 압축하고 암호화 해 이메일에 첨부할 수 있습니다.",
      buttonLink1:
        "https://www.totlelab.com/features_emailsecurity#s202108244ad9611509ec7",
      //buttonLink2: "",
      imgsrc: dummy
    },
    "externalNotification": {
      title: "외부 수신자 알림",
      description:
        "이메일 전송 시 외부 수신자 확인 팝업 알림을 제공해 이메일 발송 실수를 최소화할 수 있도록 지원합니다.",
      buttonLink1:
        "https://www.totlelab.com/features_emailsecurity#s202108240158104a7d0f3",
      //buttonLink2: "",
      imgsrc: dummy
    },
    "restriction": {
      title: "조건부 발송제한",
      description:
        "수신자 수, 특정 이메일 주소/도메인, 포함 단어에 대한 이메일 발송 정책을 설정해 이메일 발송을 제한할 수 있습니다.",
      buttonLink1:
        "https://www.totlelab.com/features_emailsecurity#s20210824a28b0a294dc04",
      //buttonLink2: "",
      imgsrc: dummy
    },
    "approvalEmail": {
      title: "승인메일",
      description:
        "일반 첨부파일 및 대용량 첨부파일을 내/외부 수신자에게 전송하려 할 때 승인 프로세스를 추가해 보안을 강화할 수 있습니다.",
      buttonLink1:
        "https://www.totlelab.com/features_emailsecurity#s20230307e6327eca7e304",
      //buttonLink2: "",
      imgsrc: dummy
    }
  };

export {
  DATA_SENDING_ORDER,
  DATA_SENDING,
  DATA_COLLABORATION_ORDER,
  DATA_COLLABORATION,
  DATA_SECURITY_ORDER,
  DATA_SECURITY
};