# ToDoList

연습용으로 개발된 풀스택 할 일 관리 애플리케이션입니다. React 기반 프론트엔드와 Node.js 기반 백엔드로 구성되어 있습니다.

## 📋 목차

- [프로젝트 개요](#-프로젝트-개요)
- [기술 스택](#-기술-스택)
- [주요 기능](#-주요-기능)
- [프로젝트 구조](#-프로젝트-구조)
- [시작하기](#-시작하기)
- [작동 프로세스](#-작동-프로세스)
- [향후 개선 방향](#-향후-개선-방향)

## 🎯 프로젝트 개요

ToDoList는 사용자가 할 일을 추가, 수정, 삭제, 완료 표시할 수 있는 웹 기반 애플리케이션입니다. 프론트엔드와 백엔드가 분리된 구조로 설계되어 있으며, RESTful API를 통해 통신합니다.

이 프로젝트는 다음을 학습하기 위한 연습 프로젝트입니다:
- React를 사용한 SPA(Single Page Application) 개발
- Node.js/Express를 활용한 RESTful API 서버 구축
- 프론트엔드와 백엔드 간의 데이터 통신
- CRUD(Create, Read, Update, Delete) 기능 구현

## 🛠 기술 스택

### 프론트엔드 (todo-app)
- **React**: UI 컴포넌트 개발
- **JavaScript**: 주 프로그래밍 언어
- **HTML/CSS**: 마크업 및 스타일링
- **npm**: 패키지 관리

### 백엔드 (todo-backend)
- **Node.js**: 런타임 환경
- **Express.js**: 웹 프레임워크
- **JavaScript**: 주 프로그래밍 언어
- **npm**: 패키지 관리

### 개발 도구
- **Git/GitHub**: 버전 관리
- **npm scripts**: 빌드 및 실행 자동화

## ✨ 주요 기능

1. **할 일 추가**: 새로운 할 일 항목을 추가할 수 있습니다
2. **할 일 조회**: 등록된 모든 할 일 목록을 확인할 수 있습니다
3. **할 일 수정**: 기존 할 일의 내용을 수정할 수 있습니다
4. **할 일 삭제**: 불필요한 할 일을 삭제할 수 있습니다
5. **완료 상태 관리**: 할 일의 완료/미완료 상태를 토글할 수 있습니다

## 📂 프로젝트 구조

```
ToDoList/
├── todo-app/              # React 프론트엔드
│   ├── public/           # 정적 파일
│   ├── src/              # React 소스 코드
│   │   ├── components/  # React 컴포넌트
│   │   ├── App.js       # 메인 App 컴포넌트
│   │   └── index.js     # 진입점
│   ├── package.json     # 의존성 관리
│   └── ...
│
├── todo-backend/         # Node.js 백엔드
│   ├── routes/          # API 라우트
│   ├── controllers/     # 비즈니스 로직
│   ├── models/          # 데이터 모델
│   ├── server.js        # 서버 진입점
│   ├── package.json     # 의존성 관리
│   └── ...
│
└── README.md            # 프로젝트 문서
```

## 🚀 시작하기

### 사전 요구사항

- Node.js (v14 이상 권장)
- npm (Node.js와 함께 설치됨)

### 설치 및 실행

1. **저장소 클론**
```bash
git clone https://github.com/candy3157/ToDoList.git
cd ToDoList
```

2. **백엔드 서버 실행**
```bash
cd todo-backend
npm install          # 의존성 설치 (최초 1회)
npm start            # 서버 시작
```

3. **프론트엔드 애플리케이션 실행** (새 터미널 창에서)
```bash
cd todo-app
npm install          # 의존성 설치 (최초 1회)
npm run dev          # 개발 서버 시작
```

4. **애플리케이션 접속**
- 프론트엔드: `http://localhost:3000` (또는 Vite 기본 포트)
- 백엔드 API: `http://localhost:5000` (또는 설정된 포트)

## 🔄 작동 프로세스

### 1. 애플리케이션 초기화
```
사용자 → 브라우저에서 앱 접속
       → React App 로드
       → API 서버에 할 일 목록 요청
       → 데이터 수신 및 화면 렌더링
```

### 2. 할 일 추가 프로세스
```
사용자 입력 → React Component (상태 업데이트)
          → POST 요청 (/api/todos)
          → Express 서버 처리
          → 데이터 저장
          → 응답 반환
          → UI 업데이트
```

### 3. 할 일 수정 프로세스
```
수정 버튼 클릭 → 편집 모드 활성화
             → 내용 수정
             → PUT 요청 (/api/todos/:id)
             → 서버에서 업데이트
             → 응답 수신
             → UI 갱신
```

### 4. 할 일 삭제 프로세스
```
삭제 버튼 클릭 → DELETE 요청 (/api/todos/:id)
             → 서버에서 삭제 처리
             → 성공 응답
             → 목록에서 제거
             → UI 업데이트
```

### 5. 완료 상태 토글
```
체크박스 클릭 → PATCH 요청 (/api/todos/:id/toggle)
           → 완료 상태 변경
           → 응답 수신
           → 시각적 피드백 (취소선, 색상 변경 등)
```

## 📈 향후 개선 방향

### 1. 기능 확장
- **사용자 인증**: 회원가입/로그인 기능 추가
  - JWT 기반 인증 구현
  - 사용자별 할 일 관리
- **카테고리/태그**: 할 일을 분류할 수 있는 카테고리 시스템
- **우선순위**: 할 일의 중요도 설정 기능
- **마감일**: 날짜 및 시간 설정 기능
- **검색/필터링**: 할 일 검색 및 상태별 필터링
- **알림**: 마감일 임박 시 알림 기능

### 2. 데이터베이스 도입
- **현재**: 메모리 또는 파일 기반 저장 (추정)
- **개선**: 
  - MongoDB, PostgreSQL, MySQL 등 데이터베이스 연동
  - 데이터 영속성 보장
  - 복잡한 쿼리 지원

### 3. UI/UX 개선
- **반응형 디자인**: 모바일 친화적인 레이아웃
- **다크 모드**: 테마 전환 기능
- **애니메이션**: 부드러운 전환 효과
- **드래그 앤 드롭**: 할 일 순서 변경
- **UI 라이브러리**: Material-UI, Ant Design 등 도입

### 4. 코드 품질 향상
- **TypeScript 마이그레이션**: 타입 안정성 확보
- **테스트 추가**:
  - 단위 테스트 (Jest)
  - 통합 테스트
  - E2E 테스트 (Cypress, Playwright)
- **코드 린팅**: ESLint, Prettier 설정
- **상태 관리**: Redux, Zustand, Recoil 등 도입

### 5. 성능 최적화
- **코드 스플리팅**: React.lazy, Suspense 활용
- **캐싱**: React Query, SWR 등 데이터 캐싱
- **이미지 최적화**: 이미지 압축 및 lazy loading
- **빌드 최적화**: 번들 크기 최소화

### 6. 배포 및 인프라
- **CI/CD 파이프라인**: GitHub Actions 설정
- **클라우드 배포**:
  - 프론트엔드: Vercel, Netlify
  - 백엔드: Heroku, AWS, DigitalOcean
- **도커화**: Docker 컨테이너 구성
- **환경 변수 관리**: .env 파일 활용

### 7. 협업 기능
- **공유 할 일 목록**: 여러 사용자가 함께 관리
- **댓글 기능**: 할 일에 대한 코멘트
- **실시간 동기화**: WebSocket을 통한 실시간 업데이트

### 8. 보안 강화
- **입력 검증**: 클라이언트/서버 양쪽에서 검증
- **HTTPS**: SSL/TLS 인증서 적용
- **CORS 설정**: 적절한 CORS 정책
- **SQL Injection 방지**: ORM 사용 또는 파라미터화된 쿼리
- **XSS 방지**: 입력 sanitization

## 🤝 기여하기

이 프로젝트는 학습용 프로젝트이지만, 개선 제안이나 버그 리포트는 언제든 환영합니다.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

이 프로젝트는 학습 목적으로 만들어졌습니다.

## 🐛 트러블슈팅

프로젝트 개발 중 발생한 주요 이슈와 해결 방법을 기록합니다.

### 1. Prisma Client 로딩 실패 이슈

**문제 상황**
```
Prisma Client를 import할 수 없음
@prisma/client 패키지는 존재하지만 실제 client 코드가 생성되지 않음
```

**원인 분석**

`npx prisma generate` 명령어가 정상적으로 완료되지 않았으며, 다음과 같은 오류 메시지가 발생:

```
The datasource property `url` is no longer supported in schema files. 
Move connection URLs for Migrate to prisma.config.ts
```

**근본 원인**

Prisma 6에서 Prisma 7로 업그레이드되면서 **DataSource 설정 방식이 변경**되었습니다. 기존에 `schema.prisma` 파일에서 사용하던 방식이 Prisma 7에서는 유효하지 않게 되었습니다.

**Prisma 6 방식 (기존)**
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")  // ❌ Prisma 7에서 지원 안 됨
}
```

**Prisma 7 방식 (변경)**
```typescript
// prisma.config.ts
import { definePrismaConfig } from '@prisma/client'

export default definePrismaConfig({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
})
```

**발생한 연쇄 효과**
1. Prisma Client 생성 실패
2. Express 서버 실행 불가
3. Import 오류로 잘못 인식

**해결 방법**

1. Prisma 설정을 Prisma 7 방식으로 마이그레이션
2. `prisma.config.ts` 파일 생성 및 데이터소스 설정 이동
3. `npx prisma generate` 재실행하여 Client 생성 확인

**면접 대비 한 줄 요약**

"Prisma 7에서 데이터소스 설정 방식이 변경되었는데, 기존 Prisma 6 기반 설정을 그대로 사용하면서 Prisma Client 생성이 실패한 문제였습니다."

---

### 2. Tailwind 다크모드 토글 작동 불가 이슈

**문제 상황**
```
다크모드 토글 버튼을 클릭해도 배경이 다크모드로 변경되지 않음
HTML 클래스는 변경되지만 실제 스타일이 적용되지 않음
일부 Tailwind 유틸리티 클래스도 적용이 불완전
```

**원인 분석**

Tailwind CSS v3에서 v4로 업그레이드되면서 **dark variant의 기본 동작 방식이 변경**되었습니다.

**Tailwind v3까지의 방식**

```css
/* styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',  // class 기반 활성화
}
```

이 조합만으로 `<html class="dark">`를 토글하면 `dark:*` 유틸리티가 자동으로 class 기반으로 작동했습니다.

**Tailwind v4의 변경 사항**

Tailwind v4에서는 기본적으로 **media 쿼리 기반**으로 작동합니다:

```css
/* 자동 생성되는 CSS */
@media (prefers-color-scheme: dark) {
  .dark\:bg-gray-900 {
    background-color: #111827;
  }
}
```

즉, 우리의 JavaScript 로직은 v3 스타일(class 기반)로 작성되었지만, CSS 빌드는 v4 기본값(media 기반)으로 생성되어 **다크 토글이 무시되는 구조**였습니다.

**해결 방법**

CSS 파일을 다음과 같이 수정하여 class 기반 다크모드로 명시적으로 재정의:

```css
/* styles.css - Tailwind v4 */
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```

**코드 설명**
1. `@import "tailwindcss";` - Tailwind v4의 진입점
2. `@custom-variant dark (&:where(.dark, .dark *));` - `dark:` variant를 media 기반이 아닌 `.dark` 클래스 기반으로 재정의

**실무 포인트**

Tailwind v4에서 수동 다크모드 토글을 사용하려면 반드시 다음과 같이 설정해야 합니다:

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```

**면접 대비 한 줄 요약**

"Tailwind v4에서는 dark variant가 기본적으로 media 쿼리 기반으로 동작하므로, class 기반 토글을 사용하려면 @custom-variant로 명시적으로 재정의해야 합니다."

---

## 📧 연락처

프로젝트 관리자: candy3157
프로젝트 링크: [https://github.com/candy3157/ToDoList](https://github.com/candy3157/ToDoList)

---

## 📚 학습 포인트

**Note**: 이 프로젝트를 처음 접하는 개발자라면 다음 순서로 코드를 살펴보는 것을 추천합니다:
1. `todo-backend/server.js` - 서버 진입점 및 기본 설정 확인
2. `todo-backend/routes/` - API 엔드포인트 구조 파악
3. `todo-app/src/App.js` - 프론트엔드 메인 로직 이해
4. `todo-app/src/components/` - 개별 컴포넌트 구조 학습

**주요 학습 주제**
- React 컴포넌트 기반 개발
- RESTful API 설계 및 구현
- Prisma ORM을 활용한 데이터베이스 관리
- Tailwind CSS를 활용한 스타일링
- 버전 업그레이드에 따른 마이그레이션 경험
