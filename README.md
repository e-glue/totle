# totle

# 프로젝트 세팅
- react 18버전 사용
- node.js 18버전 사용
- yarn 사용

```shell
$ yarn install
```

# 프로젝트 빌드 방법
- 빌드하기 원하는 브랜치로 들어갑니다.
  release/introduction - Home의 소개 부분
  release/features - Home의 기능 설명 부분
  release/pricing - 요금 안내 페이지
  release/contact - 1:1 문의하기

```shell
$ git checkout release/introduction
```

브랜치에 접근 후 빌드 명령어를 실행합니다.

```shell
$ yarn build
```

명령어 실행 결과로 나온 code.txt의 내용을 복사하여 아임웹의 코드블럭으로 붙여넣습니다.
