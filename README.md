## 프로젝트명 : 🍀carebuddy

제작 기간 : 2024.04.01 ~ 2024.04.19

## 소개
케어버디와 함께 사랑하는 나의 가족과 건강하고 행복한 시간을 보내세요

## 목표
- 회원가입, 커뮤니티, 동물 건강 관리 등의 기본적인 기능 구현
- 보기 좋고 깔끔한 UI
- 클린 코드 구현

## 배포 주소
[carebuddy](http://kdt-sw-8-team01.elicecoding.com/)

## 와이어프레임
[https://www.figma.com/file/k7YHvnKZwTGjd57iK8snky/Untitled?type=design&mode=design&t=VDVAUR5bmT0xpoXE-0  ](https://www.figma.com/file/k7YHvnKZwTGjd57iK8snky/wireframe?type=design&mode=design&t=VwDd3ghttXOcWzP8-0)  

## 플로우차트  
https://www.figma.com/file/io4zwk1YYTtK2cKe3gXv20/flowchart?type=whiteboard&t=VDVAUR5bmT0xpoXE-0  

## 시안 영상
https://drive.google.com/file/d/1tara2q7fJE0veSm3adFmYvStY-R14YWt/view

### 시작 가이드
**installation**

```bash
git clone [주소]
cd 폴더명
npm install
npm run dev
```

**.env**

```jsx
비공개
```

## 기술 스택

| 담당 업무 | 기술 스택 |
| ------ | ------ |
| 프로그래밍 언어 | TypeScript |
| 프론트엔드 | React, Recoil, styled-component |
| 백엔드 | NodeJs, MongoDB, mongoose, Express, jsonwebtokens |
| Tools | Figma, Notion, Discord, GitLab, dotenv, Postman |  

## 전체 기능
| 사용자 관련 기능 | 로그인, 회원가입, 회원정보 CRUD |
| --- | --- |
| 커뮤니티 관련 기능 | 게시글 목록 및 상세 조회, 게시글 작성 및 삭제, 좋아요, 카테고리 CRUD |
| 반려동물 관련 기능 | 반려동물정보 CRUD, 진료기록 CRUD |
| 검색 관련 기능 | 병원 전체 조회 및 검색, 약국 전체 조회 및 검색 |

## 기능 예시
- 커뮤니티 그룹
    - 카테고리별 커뮤니티 그룹 조회
    - 내가 원하는 커뮤니티 그룹에 가입/탈퇴
- 게시글
- 회원가입
    - 카카오 로그인 API로 회원가입 가능
- 로그인 및 로그아웃
    - JWT 를 이용한 로그인/ 로그아웃
- 마이페이지
    - 커뮤니티 그룹 가입 및 탈퇴
    - 반려동물 추가 및 수정, 삭제 (CRUD)
    - 본인 정보 조회 및 수정/ 회원 탈퇴 (RUD)
- 반려동물
    - 진료기록 CRUD
    - 반려동물 정보 조회 및 수정/ 회원 탈퇴 (RUD)

## 프로젝트 팀원

| 이름 | 역할 | 맡은 업무 |
| --- | --- | --- |
| 박유신 | Frontend / 팀장 | 홈, 커뮤니티, 포스트, 그룹 페이지, 글 수정 등록 모달 |
| 김지연 | Frontend | 카카오 로그인 UI, 마이페이지, 유저페이지, 모달 |
| 안지영 | Frontend | 회원 반려동물 리스트, 반려동물 진료 기록, 동물병원 및 약국 조회, 유저 상태관리 |
| 홍경진 | Frontend | 반려동물 등록, 수정 모달 |
| 주현정 | Backend | 유저 CRUD, 카테고리(그룹) CRUD, 포스트 CRUD, 백엔드 배포, 카카오 로그인, 미들웨어, 폴더 구조 |
| 이다연 | Backend | 반려동물 CRUD, 댓글 CRUD, 반려동물 진료기록 CRUD, 병원 약국 조회 및 검색, 이미지 업로드, 스키마 설계 |
