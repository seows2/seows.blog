import{s as i,M as n,j as e}from"./index-780988ce.js";import{O as j}from"./OpenGraph-500aa841.js";const m=i.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 130px;

  & > h1 {
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin-bottom: 16px;
  }

  & > p {
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 48px;
    margin-top: 48px;
    max-width: 800px;
    white-space: pre-line;
  }

  @media ${n} {
    & > h1 {
      font-size: 36px;
      margin-bottom: 8px;
    }

    & > div > a {
      font-size: 18px;
    }

    & > p {
      font-size: 18px;
    }
  }
`,a=i.div`
  font-size: 24px;
  color: ${({theme:s})=>s.color.gray_black};
  font-weight: 500;
  position: relative;
  text-decoration: none;
  z-index: 1;
  margin-bottom: 10px;

  & > a {
    font-size: 18px;
    font-weight: 400;
    color: ${({theme:s})=>s.color.black_alpha2};
  }

  & > a::before {
    background-color: rgba(36, 36, 36, 0.1);
    border-radius: 12px;
    display: block;
    height: 44px;
    left: 50%;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.2s ease;
    width: calc(100% + 28px);
    will-change: opacity;
    z-index: -1;
    content: '';
  }

  & > a:hover::before {
    opacity: 1;
  }

  @media ${n} {
    & > a {
      font-size: 14px;
    }
  }
`,g=i.section`
  margin-bottom: 48px;

  & > h2 {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 4px;
    margin-bottom: 24px;
    text-transform: uppercase;
  }
`,b=i.div`
  border-top: ${({theme:s})=>`1px solid ${s.color.gray_black}`};
  display: flex;
  padding-top: 48px;

  @media ${n} {
    flex-wrap: wrap;
    padding-top: 24px;
  }
`,c=i.div`
  display: flex;
  flex-direction: column;
  width: 33.333%;

  & > h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 2px;
  }

  & > ul {
    display: flex;
    flex-direction: column;
    padding: 0;

    & > li {
      font-size: 16px;
      font-weight: 400;
      line-height: 2;
    }
  }

  @media ${n} {
    width: 100%;
    margin-top: 24px;

    &:first-child {
      margin-top: 0;
    }
  }
`;i.section`
  margin-bottom: 48px;

  & > h2 {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 4px;
    margin-bottom: 24px;
    text-transform: uppercase;
  }
`;const f=i.section`
  margin-bottom: 48px;

  & > h2 {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 4px;
    margin-bottom: 24px;
    text-transform: uppercase;
  }
`,t=i.div`
  display: flex;
  flex-direction: column;
`,o=i.div`
  border-top: ${({theme:s})=>`1px solid ${s.color.gray_black}`};
  display: flex;
  margin-bottom: 48px;
  padding-top: 48px;
  width: 100%;

  @media ${n} {
    flex-wrap: wrap;
    margin-bottom: 24px;
    padding-top: 24px;
  }
`,l=i.div`
  width: 33.333%;
  position: sticky;
  top: 100px;
  height: 100%;

  & > h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 4px;
  }

  & > span {
    font-size: 16px;
    font-weight: 500;
  }
  @media ${n} {
    position: relative;
    width: 100%;
    top: auto;
  }
`,x=i.div`
  width: 66.666%;
  @media ${n} {
    margin-top: 16px;
    width: 100%;
  }
`,r=i.div`
  margin-bottom: 24px;

  & > h4 {
    font-size: 18px;
    font-weight: 600;
    line-height: 2;
    margin-bottom: 18px;
  }

  & > h5 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  & > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 2;
    margin-bottom: 4px;
  }
`,d=i.div`
  margin-bottom: 24px;
  color: ${({theme:s})=>s.color.black_alpha2};
`,p=i.div`
  width: 100%;
  height: 2px;
  margin: 24px 0;
  background: ${({theme:s})=>s.color.black_alpha2};
`,h=i.span`
  display: inline-block;
`,S=()=>e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"석이 | Resume"}),e.jsxs(m,{children:[e.jsx("h1",{children:"서우석"}),e.jsxs(a,{children:["Github.",e.jsx("a",{href:"https://github.com/seows2",target:"_blank",rel:"noopener noreferrer",children:"github.com/seows2"})]}),e.jsxs(a,{children:["Blog.",e.jsx("a",{href:"https://blog.naver.com/seows2",target:"_blank",rel:"noopener noreferrer",children:"blog.naver.com/seows2"})]}),e.jsx("p",{children:`
          디자인, 애니메이션, 문제 해결, 프론트엔드 최신 기술 습득에 대한 열정을 가진 창의적인 개발자
          `})]}),e.jsxs(g,{children:[e.jsx("h2",{children:"Skills"}),e.jsxs(b,{children:[e.jsxs(c,{children:[e.jsx("h3",{children:"Languages"}),e.jsxs("ul",{children:[e.jsx("li",{children:"HTML"}),e.jsx("li",{children:"CSS"}),e.jsx("li",{children:"TypeScript"})]})]}),e.jsxs(c,{children:[e.jsx("h3",{children:"Library"}),e.jsxs("ul",{children:[e.jsx("li",{children:"React"}),e.jsx("li",{children:"Mobx"}),e.jsx("li",{children:"Emotion"}),e.jsx("li",{children:"React Hook Form"}),e.jsx("li",{children:"Tanstack Query"})]})]}),e.jsxs(c,{children:[e.jsx("h3",{children:"Minor"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Scala"}),e.jsx("li",{children:"Java"})]})]})]})]}),e.jsxs(f,{children:[e.jsx("h2",{children:"Works"}),e.jsx(t,{children:e.jsxs(o,{children:[e.jsxs(l,{children:[e.jsx("h3",{children:"Tmaxsoft"}),e.jsx("span",{children:"2021 - Present"})]}),e.jsxs(x,{children:[e.jsxs(r,{children:[e.jsx("h4",{children:"SuperFrame Manager 개발"}),e.jsx("h5",{children:"2021.08 - present"}),e.jsx("p",{children:"자사 제품인 Jeus, Proobject등을 통합하여 하나의 화면으로 제공하고 토폴로지 뷰 기반의 통합 모니터링과 단일화된 관리 포인트로 제품간의 연동을 지원해주는 플랫폼을 개발했습니다."}),e.jsx(d,{children:"React, TypeScript, Material UI, TanStack Query, Mobx, React Hook Form"}),e.jsx("p",{children:"기존에 개발된 여러 서비스에 대한 유지보수 및 신규 기능 개발과 함께 새로운 서비스로의 점진적 마이그레이션을 동시에 진행하는 상황에서 컨텍스트 스위칭을 역량을 기르고자 노력했습니다."}),e.jsx("p",{children:"검색 패널 및 테이블, 생성과 수정 폼 등 비슷한 UI가 많은 여러 어드민을 개발하는 상황에서 좋은 DX를 위해 컴포넌트와 훅, 유틸 함수 공통화에 신경 썼습니다. 정말 공통화되어야하는 코드인지, 공통화가 오히려 코드의 가독성과 사용성을 해치지는 않을지 깊게 고민하며 개발하였습니다."}),e.jsx("p",{children:"사용하는 필드와 데이터는 다르지만 동일한 UI를 제공하는 컴포넌트의 경우, 제네릭을 활용하여 다양한 상황의 타입 추론에 대응할 수 있도록 공통화했고 비슷한 폼 구조를 따르는 페이지를 반복적으로 만드는 수고를 줄이고자 합성 컴포넌트를 적극 사용하고 공통 템플릿 및 예시코드를 작성하여 모든 팀원이 재사용 할 수 있도록 했습니다."}),e.jsx("br",{}),e.jsx("h5",{children:"| Jeus 설정 페이지"}),e.jsx("p",{children:"기존 Scala 기반으로 되어 있던 Jeus Admin 페이지를 React로 새롭게 개발하는 작업을 담당했습니다. 기존 페이지와 동일하게 동작해야 했기 때문에, 먼저 옛 Jeus Admin 페이지의 모든 기능을 분석하고, 이를 하나씩 정의하며 프로젝트를 진행했습니다."}),e.jsx("br",{}),e.jsx("p",{children:"분석한 기능을 SuperFrame Jeus Manager의 구조에 맞게 재설계한 후, 약 100여 개의 페이지를 성공적으로 마이그레이션하여 최종적으로 제품을 출시할 수 있었습니다."}),e.jsx("br",{}),e.jsx("h5",{children:"| 업무시스템 및 권한 페이지"}),e.jsx("p",{children:"SuperFrameManager의 기반이 되는 업무 시스템과 사용자 및 권한에 대한 페이지와 권한에 따른 제어 로직을 만들었습니다."}),e.jsx("br",{}),e.jsx("h5",{children:"| 토폴로지 페이지"}),e.jsx("p",{children:"SuperFrame 내부에서 자사 제품간의 연결관계를 알려주기 위한 페이지가 필요했습니다. Cytoscape 라이브러리를 통해 제품간의 연동과 데이터의 흐름을 시각화하였습니다."}),e.jsx("br",{}),e.jsx("h5",{children:"| SFM Monitoring"}),e.jsx("p",{children:"자사 제품 및 오픈소스의 더욱 세밀한 모니터링을 위해 제공하는 솔루션입니다. 메트릭을 수집하고 ECharts 라이브러리를 통해 데이터를 시각화하였으며 차트 커스터마이징 기능을 추가하여 사용자의 자유도를 높였습니다."}),e.jsx("br",{})]}),e.jsx(p,{}),e.jsxs(r,{children:[e.jsx("h4",{children:"Tmax Design System"}),e.jsx("h5",{children:"2023.01 - present"}),e.jsx("p",{children:"사내 디자인 시스템(TDS) 개발 및 유지보수를 위한 공용 컴포넌트를 개발했습니다."}),e.jsx(d,{children:"React, TypeScript, Emotion"}),e.jsx("p",{children:"기존에는 사내에서 사용되는 디자인이 팀별로 파편화 되어있는 문제, 디자인과 개발 간의 싱크가 안 맞는 문제가 존재했습니다. 이를 해결하고자, 디자이너팀과 협동하여 TmaxSoft 내부 프론트엔드 개발에 사용되는 TDS를 기획하고 정립함과 동시에 디자인 시스템을 데이터화하여 디자이너, 개발자, 기획자 모두가 일관되게 최신화된 디자인 시스템을 사용할 수 있도록 개선하였습니다."}),e.jsx("p",{children:"디자이너팀이 피그마를 통해 파운데이션을 저장 및 수정하면 개발자가 파운데이션을 다운받아 디자인 시스템에 적용될 수 있는 흐름을 구축하였고, 아이콘 추가시에도 자동으로 디자인 시스템이 추가되는 툴을 개발하여 DX를 향상시켰습니다."}),e.jsx("br",{}),e.jsx("h4",{children:"| 개발자 생산성 증가 기여"}),e.jsx("p",{children:"TDS를 및 공용 유틸을 개발자가 사용하기 쉽도록 Turborepo 기반의 Monorepo 환경을 구축하였습니다."}),e.jsx("p",{children:"TDS 배포 -> 테스트 -> Storybook 배포 자동화 프로세스를 위해 쿠버네티스와 Jenkins CI/CD환경을 구축했습니다."}),e.jsx("br",{}),e.jsx("h4",{children:"| 공통 패키지 개발"}),e.jsx("p",{children:"TmaxSoft 공통 패키지 개발을 통해 각 App간의 중복 코드를 제거하고 개발 효율성을 향상시켰습니다."})]}),e.jsx(p,{}),e.jsxs(r,{children:[e.jsx("h4",{children:"HyperFrameAdmin"}),e.jsx("h5",{children:"2023.08 - present"}),e.jsx("p",{children:"자사 제품을 넘어 Apache, Nginx, Wildfly, Tomcat등의 오픈소스를 통합하여 하나의 화면으로 제공하고 토폴로지 뷰 기반의 통합 모니터링을 지원하는 플랫폼입니다."}),e.jsx(d,{children:"React, TypeScript, TanStack Query, Mobx, React Hook Form"}),e.jsx("br",{}),e.jsx("h5",{children:"| 업무그룹 및 권한 페이지"}),e.jsx("p",{children:"HyperFrameManager의 기반이 되는 업무 시스템과 사용자 및 권한에 대한 페이지와 권한에 따른 제어 로직을 만들었습니다."}),e.jsx("br",{}),e.jsx("h5",{children:"| 오픈소스 설정 페이지"}),e.jsx("p",{children:"HyperFrame에서 지원되는 오픈소스 서버들을 관제하고 설정을 변경할 수 있는 페이지 개발"})]}),e.jsx(p,{}),e.jsxs(r,{children:[e.jsx("h4",{children:"Improve Our Frontend Team Culture"}),e.jsx("h5",{children:"2021.08 - present"}),e.jsx("p",{children:"회사에 입사한 이후로 전문적인 프론트엔드 조직을 만들고 협업을 위하여 직접 기여한 노력입니다."}),e.jsx("br",{}),e.jsx("h5",{children:"| 번들러 최신화를 통한 기술스택 현대화 및 개발 프로세스 개선"}),e.jsx("p",{children:"기존 npm - CRA로 이루어진 번들러를 pnpm - vite로 마이그레이션하고 Turborepo 기반으로한 모노레포 시스템을 구축했습니다. 이 과정에서 사내 모든 주요 애플리케이션의 마이그레이션을 직접 수행하여 안정적인 운영을 지원하였습니다. Turborepo의 Remote Cache 서버를 구축하여 빌드 및 개발 서버 실행시간을 대폭 단축했습니다."}),e.jsx("br",{}),e.jsx("h5",{children:"성능 향상 수치"}),e.jsxs("p",{children:[e.jsxs(h,{children:["- 초기 패키지 설치 33초 → 21초 약 ",e.jsx("strong",{children:"33% 감소"})]}),e.jsxs(h,{children:["- 캐싱된 패키지 설치 11초 → 1.5초 약 ",e.jsx("strong",{children:"84% 감소"})]}),e.jsxs(h,{children:["- 빌드 2분 7초 → 33초 약",e.jsx("strong",{children:" 75% 감소"})]}),e.jsx(h,{children:"- 리모트 캐싱 Full Turbo 기준 전체 빌드 시간 2초 이내"})]}),e.jsx("p",{children:"이러한 개선을 통해 개발 생산성을 크게 향상시키고 중복 코드 제거, 시스템의 유지보수성을 개선했습니다."}),e.jsx("br",{}),e.jsx("h5",{children:"| 모노레포 환경에서의 버전 관리 체계 구축"}),e.jsx("p",{children:"기존의 버전 관리 체계 부재로 인한 문제점을 인식하고, 모노레포로의 전환과 함께 체계적인 버전 관리 시스템을 도입했습니다."}),e.jsx("p",{children:"Semantic Versioning 규칙을 채택하여 일관된 버전 관리 전략을 수립했습니다 이를 통해 버전 번호만으로도 변경 사항의 성격과 규모를 쉽게 파악할 수 있게 되었습니다."}),e.jsx("p",{children:"버전 관리 방법과 구축에 대한 상세 지침을 Docs로 작성하여 팀 전체에게 공유하고 모두가 일관된 방식으로 버전을 관리할 수 있게 했습니다. 이로 인해 이슈 처리 지연 등의 문제를 효과적으로 해결할 수 있게 되었습니다."}),e.jsx("br",{}),e.jsx("h5",{children:"| CI/CD 환경 구축 및 자동화"}),e.jsx("p",{children:"Jenkins를 통해 자동화된 빌드 및 태그를 기반으로한 배포 프로세스를 구현했습니다 이를 통해 개발 과정의 효율성과 배포 일관성을 크게 향상시켰습니다."}),e.jsx("p",{children:"Merge Request 프로세스를 지원하는 CLI 도구를 개발하여 휴먼 에러를 최소화했습니다. 이 도구를 Jenkins와 연동하여 전체 프로세스의 자동화 수준을 높였습니다."}),e.jsx("br",{}),e.jsx("h5",{children:"| 팀 내부적적인 코드 리뷰 문화 확립"}),e.jsx("p",{children:"모노레포 변경 이후 패키지 별로 랜덤 리뷰어를 지정하는 NodeJS 서버를 구축하여 코드 리뷰 프로세스를 체계화 했습니다. 이 시스템은 구축 이후 안정적으로 운영되고 잇으며, 팀 내 코드 리뷰 문화를 크게 개선했습니다."}),e.jsx("br",{}),e.jsx("h5",{children:"| CI 자동화 툴 스크립트 개발을 통한 코드 품질 관리 강화"}),e.jsx("p",{children:"MR 단계에서 코드 품질을 자동으로 검사하는 CI 자동화 툴을 개발하여 코드 품질 관리 프로세스를 개선했습니다. 이로인해 모노레포 환경에서도 일관된 코드 스타일과 품질을 유지할 수 있었고, 오류의 위치 및 메세지를 확인할 수 있게 만들어 개발자의 경험도 높혔습니다."})]})]})]})}),e.jsx(t,{children:e.jsxs(o,{children:[e.jsxs(l,{children:[e.jsx("h3",{children:"Portfolio Page"}),e.jsx("span",{children:"2023"})]}),e.jsx(x,{children:e.jsxs(r,{children:[e.jsx("p",{children:"React + Vite + TS기반의 프로젝트"}),e.jsx("p",{children:"Gsap + React Spring등의 애니메이션 라이브러리 사용"}),e.jsx("p",{children:"GLSL언어를 통한 애니메이션 일부 적용"})]})})]})}),e.jsx(t,{children:e.jsxs(o,{children:[e.jsxs(l,{children:[e.jsx("h3",{children:"Wedding Demo"}),e.jsx("span",{children:"2022"})]}),e.jsx(x,{children:e.jsxs(r,{children:[e.jsx("p",{children:"React + Styled Component 기반의 웹페이지"}),e.jsx("p",{children:"직접 디자인하고 기획을 한 뒤 개발"})]})})]})}),e.jsx(t,{children:e.jsxs(o,{children:[e.jsxs(l,{children:[e.jsx("h3",{children:"Cat Fansite"}),e.jsx("span",{children:"2021"})]}),e.jsx(x,{children:e.jsxs(r,{children:[e.jsx("p",{children:"HTML + CSS + JS를 기반의 웹페이지"}),e.jsx("p",{children:"CSS media쿼리를 활용하여 모바일 화면 구현"}),e.jsx("p",{children:"이미지 lazy loading, 화면 overlay 기법의 구현"})]})})]})})]})]});export{S as default};
