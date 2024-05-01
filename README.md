
<p align="center">
  <img src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/03e998d6-97f0-4c3f-abaa-a04c0ef7ab0c"/>
</p>
<h1 align="center">짠 - JJAN</h1>
<p align="center">당신의 동네에서 새로운 친구와 함께, 짠! • 프론트엔드 레포지토리</p>

## 1. 서비스 소개

짠은 지역 기반으로 술을 즐기는 사람들을 위한 커뮤니티 플랫폼이에요. 같은 동네에 사는 사람들과 손쉽게 만날 수 있으며, 새로운 친구들과 즐거운 시간을 보낼 수 있는 모임을 찾거나 직접 만들 수 있어요. 당신의 밤을 더 특별하게 만들어줄 짠에서 좋은 사람들과 좋은 술을 만나보세요!

<br>

## 2. 사용 기술 및 스택

<div>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=Vite&logoColor=white">
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=Typescript&logoColor=white">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black">
  <img src="https://img.shields.io/badge/Emotion-DB7093?style=flat&logo=Styled-Components&logoColor=white">
</div>

<div>
  <img src="https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=flat&logo=React-Hook-Form&logoColor=white">
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=flat&logo=Zod&logoColor=white">
  <img src="https://img.shields.io/badge/React%20Query-FF4154?style=flat&logo=React-Query&logoColor=white">
</div>

<div>
  <img src="https://img.shields.io/badge/Storybook-FF4785?style=flat&logo=Storybook&logoColor=white">
  <img src="https://img.shields.io/badge/Vitest-6E9F18?style=flat&logo=Vitest&logoColor=white">
  <img src="https://img.shields.io/badge/React%20Testing%20Library-E33332?style=flat&logo=Testing-Library&logoColor=white">
</div>

<div>
  <img src="https://img.shields.io/badge/ESlint-4B32C3?style=flat&logo=ESlint&logoColor=white">
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=Prettier&logoColor=white">
</div>

<br>

## 4. 프로젝트 구조

```
├── src
│    ├── componentss // 재사용 가능한 컴포넌트
│    ├── constants   // 프로젝트 전역에서 사용되는 상수
│    ├── errors      // 커스텀 에러
│    ├── hooks       // 재사용 가능한 훅
│    ├── module      // 외부 모듈
│    ├── pages       // 페이지 컴포넌트
│    ├── router      // 페이지 라우터
│    ├── service     // api, query 함수
│    ├── style       // 전역 스타일
│    ├── theme       // 테마 상수 모음
│    └── util        // 유틸 함수
...
```
<br>

## 5. 설치

환경 변수 설정

```
VITE_JJAN_DEV_URL=""
VITE_JJAN_PROD_URL""
VITE_KAKAO_URL=""
VITE_KAKAO_TOKEN=""
```

프로젝트 설치

```
npm install
```
<br>

## 3. 주요 UI

### 스플래쉬, 로그인 및 회원가입

<div align="center">
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/799e0055-1d23-4eec-894d-894606724bb1"/>
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/6776b6f9-cb5f-47bf-a047-3040f23f783d"/>
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/c3ddfbd9-c5e5-4197-8c01-ff1bfec3c1e7"/>
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/c7d5df9f-a2c2-4390-b50a-b28a031ef6ce"/>
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/227a27f9-2a54-4843-8147-3d6d2529e2ec"/>
</div>

### 회원가입 세부

<div align="center">
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/45e0e0fc-ef99-4fb8-8faf-28df86c572bf"/>
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/0f9f2825-1a71-4d85-9a42-733a84a87e76"/>
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/49442151-daac-4beb-82ef-56c63a6d9acc"/>
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/d46a491b-91ee-4f84-a6cf-21cc389d966f"/>
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/302e1654-635b-4d91-ac35-c57f7bf2bb9c"/>
</div>

### 홈, 모임 

<div align="center">
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/357ff481-b76d-4beb-8c87-cad73085d0be"/>
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/3a137cc6-8548-4646-9ab4-3c29339029b9"/>
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/a43c0d19-595c-4916-aabb-bf8733a1d090"/>
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/a459b609-68a7-499f-9386-ac88925a34bb"/>
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/26a632d7-546e-4d4a-a8d3-b422b938139c"/>
</div>

### 모임글 작성

<div align="center">
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/80596617-50dc-48ca-8317-d90768fa0871"/>
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/db2889ab-7c62-4c06-8c77-3eb94d5ebcfe"/>
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/9770632c-bc0d-4c7b-9adc-eeeed9641120"/>
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/05e1c3f2-0da9-45c0-9cf0-9efc79c82861"/>
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/b12b095f-3ebe-474c-8a61-2bf9994d3108"/>
</div>

### 프로필 및 동네 설정

<div align="center">
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/ddaaf34c-eb7b-470b-9823-16b380956ddc"/>
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/f0c2dae3-f6da-4146-a1f3-de67faf06113"/>
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/81686f66-4fd4-4d32-b3b3-03fdc822eac7"/>
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/17d2a77f-6a8d-4500-9ce3-e17e07a25284"/>
  <img height="430px" src="https://github.com/jjan-project/jjan_front_renewal/assets/64501757/6c9273f8-f7f8-4d85-a043-e4dbeafcfde9"/>
</div>

<br>

## 6. 참여자

<table>
  <th>강민규</th>
  <th>최홍규</th>
  <tr>
    <td>
      <a target="_blank" href="https://github.com/kagrin97">
        <img
          width="100px"
          src="https://github.com/jjan-project/jjan_front_renewal/assets/75124028/0c18308b-ce4c-48c3-a380-a795d70816c9"
        />
      </a>
    </td>
    <td>
      <a target="_blank" href="https://github.com/gomgun-lab">
        <img
          width="100px"
          src="https://github.com/jjan-project/jjan_front_renewal/assets/75124028/9b901853-4d6b-4910-8d6b-aed35d3238ea"
        />
      </a>
    </td>
  </tr>
</table>

<br>

