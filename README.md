# ToDoList

이 저장소는 **프론트엔드와 백엔드가 분리된 풀스택 To‑Do 관리 애플리케이션**입니다.
단순한 기능 구현을 넘어, **실무에서 자주 사용되는 구조와 개발 흐름을 학습·확장하기 위한 기반 프로젝트**로 설계되었습니다.

이 문서는 **이 프로젝트를 처음 접하는 개발자가 이어서 개발할 수 있도록 돕는 것**을 목표로 작성되었습니다.

---

## 📌 프로젝트 개요

**ToDoList**는 사용자가 할 일을 생성하고 관리할 수 있는 웹 애플리케이션입니다.

* 프론트엔드와 백엔드를 **완전히 분리**한 구조
* RESTful API 기반 통신
* 로컬 PostgreSQL + Prisma ORM 사용
* 상태 관리, CRUD, 필터링, 다크모드 등 실무에서 자주 쓰이는 기능 포함

> 이 프로젝트는 “작동하는 서비스”보다는
> **풀스택 애플리케이션의 구조와 흐름을 이해하고 확장하는 것**에 초점을 맞춘 학습용 프로젝트입니다.

---

## 🧱 전체 아키텍처

```
[ Browser (React) ]
        │
        │  HTTP (JSON)
        ▼
[ Express API Server ]
        │
        │  Prisma ORM
        ▼
[ PostgreSQL Database ]
```

* 프론트엔드는 **API를 통해서만** 서버와 통신합니다.
* 데이터베이스는 **백엔드에서만 접근**합니다.
* 프론트엔드 상태는 항상 **서버 응답을 기준으로 동기화**됩니다.

---

## 🛠 기술 스택

### 프론트엔드 (`todo-app`)

* **React 19** — UI 컴포넌트 기반 SPA
* **Vite** — 빠른 개발 서버 및 빌드 도구
* **JavaScript (ESM)** — 표준 모듈 시스템
* **Tailwind CSS v4** — 유틸리티 기반 스타일링
* **React Router** — 페이지 라우팅

### 백엔드 (`todo-backend`)

* **Node.js** — 서버 런타임
* **Express.js** — REST API 서버
* **Prisma ORM v7** — 데이터베이스 ORM
* **PostgreSQL** — 관계형 데이터베이스

### 공통 / 개발 도구

* **Git / GitHub** — 버전 관리
* **ESLint** — 코드 품질 관리
* **npm** — 패키지 관리

---

## ✨ 주요 기능

이 프로젝트를 통해 다음 기능을 사용할 수 있습니다.

### Todo 관리 (CRUD)

* 할 일 생성
* 전체 할 일 조회
* 할 일 제목 수정 (인라인 편집)
* 할 일 삭제
* 완료된 할 일 일괄 삭제

### 상태 관리

* 완료 / 미완료 토글
* 남은 할 일 개수 표시
* 상태별 필터링 (전체 / 미완료 / 완료)

### UI / UX

* Tailwind CSS 기반 UI
* 다크모드 토글 (사용자 수동 전환)

---

## 📂 프로젝트 구조

```
ToDoList/
├── todo-app/                # 프론트엔드 (React)
│   ├── src/
│   │   ├── api/             # 서버 API 호출 모듈
│   │   ├── components/      # 재사용 컴포넌트
│   │   ├── pages/           # Home / TodoList 페이지
│   │   ├── context/         # 전역 상태 (Theme)
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.css            # Tailwind 진입점
│   └── package.json
│
├── todo-backend/            # 백엔드 (Express)
│   ├── src/
│   │   ├── index.js         # 서버 진입점
│   │   ├── routes/          # API 라우트
│   │   └── prisma.js        # Prisma Client
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── prisma.config.ts     # Prisma 7 설정
│   ├── .env                 # 환경 변수
│   └── package.json
│
└── README.md
```

> 학습 목적상 Controller / Service 계층 분리는 하지 않았으며,
> Express Router + Prisma 중심의 **단순하고 직관적인 구조**를 유지합니다.

---

## 🚀 실행 방법

### 1. 저장소 클론

```bash
git clone https://github.com/candy3157/ToDoList.git
cd ToDoList
```

### 2. 데이터베이스 준비 (PostgreSQL)

```bash
psql -U postgres
CREATE DATABASE todolist;
\q
```

### 3. 백엔드 설정 및 실행

```bash
cd todo-backend
npm install
```

`.env` 파일 생성:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/todolist"
PORT=4000
```

```bash
npx prisma generate
npx prisma migrate dev
npm run dev
```

### 4. 프론트엔드 실행

```bash
cd todo-app
npm install
npm run dev
```

* 프론트엔드: [http://localhost:5173](http://localhost:5173)
* 백엔드 API: [http://localhost:4000](http://localhost:4000)

---

## 🔄 프로젝트 작동 프로세스

### 데이터 흐름

```
사용자 액션
 → React 컴포넌트
 → API 모듈 (fetch)
 → Express 라우터
 → Prisma ORM
 → PostgreSQL
 → JSON 응답
 → React 상태 업데이트
```

### 예시: 완료 상태 변경

```http
PATCH /todos/:id
Content-Type: application/json

{
  "completed": true
}
```

---

## 🧠 이어서 개발하는 사람을 위한 가이드

### 이 프로젝트의 핵심 설계 원칙

* 프론트엔드는 **서버 상태를 신뢰**한다
* DB 접근은 **백엔드에서만** 수행한다
* 기능은 단순하지만 **확장 가능한 구조**를 유지한다

### 수정/확장 시 참고 포인트

* API URL 변경 시 `todo-app/src/api`만 수정
* DB 스키마 변경 시 Prisma migration 사용
* UI 변경은 Tailwind utility 기준으로 진행

---

## 📈 발전시킬 수 있는 방향

### 기능 확장

* 사용자 인증 (JWT)
* 사용자별 Todo 관리
* 마감일 / 우선순위
* 검색 및 정렬

### 구조 개선

* Controller / Service 계층 분리
* TypeScript 전환
* 에러 처리 공통화

### 성능 및 품질

* React Query / SWR 도입
* 테스트 코드 (Unit / E2E)
* API 캐싱

### 배포

* 프론트엔드: Vercel
* 백엔드: Railway / Render
* DB: Supabase / RDS

---

## 🎯 이 프로젝트를 통해 얻을 수 있는 것

* 풀스택 애플리케이션의 **전체 데이터 흐름 이해**
* REST API 기반 프론트–백엔드 협업 구조 경험
* Prisma / Tailwind v4 등 최신 도구의 실전 사용 경험
* 문제 발생 → 원인 분석 → 해결까지의 트러블슈팅 경험

---

## 📌 요약

> 이 프로젝트는 단순한 Todo 앱이 아니라,
> **풀스택 웹 애플리케이션의 구조를 이해하고 확장하기 위한 학습용 기반 프로젝트**입니다.

이어 개발하는 사람은 이 README를 기준으로 전체 구조를 빠르게 파악하고,
새로운 기능이나 개선 작업을 안전하게 진행할 수 있습니다.
