import { OpenGraph } from '../../components/OpenGraph';
import * as S from './styled';

const Resume = () => {
  return (
    <>
      <OpenGraph title="석이 | Resume" />
      <S.ResumeIntro>
        <h1>서우석</h1>
        <S.ResumeLink>
          Github.
          <a href="https://github.com/seows2" target="_blank" rel="noopener noreferrer">
            github.com/seows2
          </a>
        </S.ResumeLink>
        <S.ResumeLink>
          Blog.
          <a href="https://blog.naver.com/seows2" target="_blank" rel="noopener noreferrer">
            blog.naver.com/seows2
          </a>
        </S.ResumeLink>

        <p>
          {`React, TypeScript 기반의 4년차 프론트엔드 개발자로,
          사내에서 Design System을 구축하고 Jeus 및 HyperFrame 제품의 어드민 화면등을 개발해왔습니다.
          디자인과 애니메이션에 관심이 많으며, 프론트엔드 최신 기술을 꾸준히 습득하고 적용하는 것을 좋아하는 개발자입니다.`}
        </p>
      </S.ResumeIntro>
      <S.ResumeSkill>
        <h2>Skills</h2>
        <S.ResumeSkillGroup>
          <S.ResumeSkillGroupItem>
            <h3>Languages</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>TypeScript</li>
            </ul>
          </S.ResumeSkillGroupItem>
          <S.ResumeSkillGroupItem>
            <h3>Library</h3>
            <ul>
              <li>React</li>
              <li>Mobx</li>
              <li>Emotion</li>
              <li>React Hook Form</li>
              <li>Tanstack Query</li>
            </ul>
          </S.ResumeSkillGroupItem>
          <S.ResumeSkillGroupItem>
            <h3>Minor</h3>
            <ul>
              <li>Scala</li>
              <li>Java</li>
            </ul>
          </S.ResumeSkillGroupItem>
        </S.ResumeSkillGroup>
      </S.ResumeSkill>
      <S.ResumeWork>
        <h2>Works</h2>
        <S.ResumeWorkRows>
          <S.ResumeWorkRowsItem>
            <S.ResumeWorkRowsItemTitle>
              <h3>Tmaxsoft</h3>
              <span>2021 - Present</span>
            </S.ResumeWorkRowsItemTitle>
            <S.ResumeWorkRowsItemDescription>
              <S.ResumeWorkRowsItemDescriptionContents>
                <h4>SuperFrame Manager 개발</h4>
                <h5>2021.08 - present</h5>
                <p>
                  자사 제품인 Jeus, Proobject등을 통합하여 하나의 화면으로 제공하고 토폴로지 뷰
                  기반의 통합 모니터링과 단일화된 관리 포인트로 제품간의 연동을 지원해주는 플랫폼을
                  개발했습니다.
                </p>
                <S.ResumeWorkRowsItemPlaceholder>
                  React, TypeScript, Material UI, TanStack Query, Mobx, React Hook Form
                </S.ResumeWorkRowsItemPlaceholder>
                <p>
                  기존 여러 서비스의 유지보수 및 신규 기능 개발을 병행하며 새로운 서비스로의 점진적
                  마이그레이션을 동시에 진행하는 상황에서 컨텍스트 스위칭을 역량을 기르고자
                  노력했습니다.
                </p>
                <p>
                  검색 패널 및 테이블, 생성과 수정 폼 등 비슷한 UI가 많은 여러 어드민을 개발하는
                  상황에서 좋은 DX를 위해 컴포넌트와 훅, 유틸 함수 공통화에 신경 썼습니다. 정말
                  공통화되어야하는 코드인지, 공통화가 오히려 코드의 가독성과 사용성을 해치지는
                  않을지 깊게 고민하며 개발하였습니다.
                </p>
                <p>
                  사용하는 필드와 데이터는 다르지만 동일한 UI를 제공하는 컴포넌트의 경우, 제네릭을
                  활용하여 다양한 상황의 타입 추론에 대응할 수 있도록 공통화했고 비슷한 폼 구조를
                  따르는 페이지를 반복적으로 만드는 수고를 줄이고자 합성 컴포넌트를 적극 사용하고
                  공통 템플릿 및 예시코드를 작성하여 모든 팀원이 재사용 할 수 있도록 했습니다.
                </p>
                <br />
                <h5>| Jeus 설정 페이지</h5>
                <p>
                  기존 Scala 기반으로 되어 있던 Jeus Admin 페이지를 React로 새롭게 개발하는 작업을
                  담당했습니다. 기존 페이지와 동일하게 동작해야 했기 때문에, 먼저 옛 Jeus Admin
                  페이지의 모든 기능을 분석하고, 이를 하나씩 정의하며 프로젝트를 진행했습니다.
                </p>
                <br />
                <p>
                  분석한 기능을 SuperFrame Jeus Manager의 구조에 맞게 재설계한 후, 약 100여 개의
                  페이지를 성공적으로 마이그레이션하여 최종적으로 제품을 출시할 수 있었습니다.
                </p>
                <br />
                <h5>| 업무시스템 및 권한 페이지</h5>
                <p>
                  SuperFrameManager의 기반이 되는 업무 시스템과 사용자 및 권한에 대한 페이지와
                  권한에 따른 제어 로직을 만들었습니다.
                </p>
                <br />
                <h5>| 토폴로지 페이지</h5>
                <p>
                  SuperFrame 내부에서 자사 제품간의 연결관계를 알려주기 위한 페이지가 필요했습니다.
                  Cytoscape 라이브러리를 통해 제품간의 연동과 데이터의 흐름을 시각화하였습니다.
                </p>
                <br />
                <h5>| SFM Monitoring</h5>
                <p>
                  자사 제품 및 오픈소스의 더욱 세밀한 모니터링을 위해 제공하는 솔루션입니다.
                  메트릭을 수집하고 ECharts 라이브러리를 통해 데이터를 시각화하였으며 차트
                  커스터마이징 기능을 추가하여 사용자의 자유도를 높였습니다.
                </p>
                <br />
              </S.ResumeWorkRowsItemDescriptionContents>
              <S.Divider />
              <S.ResumeWorkRowsItemDescriptionContents>
                <h4>HyperFrameAdmin</h4>
                <h5>2023.08 - present</h5>
                <p>
                  자사 제품을 넘어 Apache, Nginx, Wildfly, Tomcat등의 오픈소스를 통합하여 하나의
                  화면으로 제공하고 토폴로지 뷰 기반의 통합 모니터링을 지원하는 플랫폼입니다.
                </p>
                <S.ResumeWorkRowsItemPlaceholder>
                  React, TypeScript, TanStack Query, Mobx, React Hook Form
                </S.ResumeWorkRowsItemPlaceholder>
                <br />
                <h5>| 프로젝트 리딩 및 사용자 경험 개선</h5>
                <p>
                  디자이너가 없는 상황에서 좋은 UI를 위해 기획 파트와 의사 소통하며 모든 페이지를
                  설계, 개발했습니다. 또한 실제 사용자들의 피드백을 바탕으로 기능과 UX를 추가,
                  개선하였습니다.
                </p>
                <p>
                  초기 설계부터 배포까지 전 과정에 참여하며 프로젝트를 주도적으로 이끌었습니다.
                  사용자 인터뷰를 기반으로 서비스를 발전시켜 나갔고 고객의 요구를 반영한 결과 많은
                  고객사를 유치했던 성과를 거두었습니다. 이러한 경험은 프로젝트를 성공적으로
                  이끌어나가는 리더십을 기르게 해주었습니다.
                </p>
                <br />
                <h5>| 업무그룹 및 권한 페이지</h5>
                <p>
                  HyperFrameManager의 기반이 되는 업무 시스템과 사용자 및 권한에 대한 페이지와
                  권한에 따른 제어 로직을 만들었습니다.
                </p>
                <br />
                <h5>| 오픈소스 설정 페이지</h5>
                <p>
                  HyperFrame에서 지원되는 오픈소스 서버들을 관제하고 설정을 변경할 수 있는 페이지
                  개발
                </p>
              </S.ResumeWorkRowsItemDescriptionContents>
              <S.Divider />
              <S.ResumeWorkRowsItemDescriptionContents>
                <h4>Tmax Design System</h4>
                <h5>2023.01 - present</h5>
                <p>사내 디자인 시스템(TDS) 개발 및 유지보수를 위한 공용 컴포넌트를 개발했습니다.</p>
                <S.ResumeWorkRowsItemPlaceholder>
                  React, TypeScript, Emotion
                </S.ResumeWorkRowsItemPlaceholder>
                <p>
                  기존에는 사내에서 사용되는 디자인이 팀별로 파편화 되어있는 문제, 디자인과 개발
                  간의 싱크가 안 맞는 문제가 존재했습니다. 이를 해결하고자, 디자이너팀과 협동하여
                  TmaxSoft 내부 프론트엔드 개발에 사용되는 TDS를 기획하고 정립함과 동시에 디자인
                  시스템을 데이터화하여 디자이너, 개발자, 기획자 모두가 일관되게 최신화된 디자인
                  시스템을 사용할 수 있도록 개선하였습니다.
                </p>
                <br />
                <h4>| 디자이너간의 협업 최적화</h4>
                <p>
                  디자이너팀이 피그마를 통해 파운데이션을 저장 및 수정하면 개발자가 파운데이션을
                  다운받아 디자인 시스템에 적용될 수 있는 흐름을 구축하였고, 아이콘 추가시에도
                  자동으로 디자인 시스템이 추가되는 툴을 개발하여 DX를 향상시켰습니다.
                </p>
                <br />
                <h4>| 웹 최적화</h4>
                <p>웹 최적화를 위해 TreeShaking을 지원할 수 있도록 개발하였습니다.</p>
                <br />
                <h4>| 개발자 생산성 증가 기여</h4>
                <p>
                  TDS를 및 공용 유틸을 개발자가 사용하기 쉽도록 Turborepo 기반의 Monorepo 환경을
                  구축하였습니다.
                </p>
                <p>
                  TDS 배포 -&gt; 테스트 -&gt; Storybook 배포 자동화 프로세스를 위해 쿠버네티스와
                  Jenkins CI/CD환경을 구축했습니다.
                </p>
                <br />
              </S.ResumeWorkRowsItemDescriptionContents>

              <S.ResumeWorkRowsItemDescriptionContents>
                <h4>Enhancing Our Frontend Team Culture</h4>
                <h5>2021.08 - present</h5>
                <p>
                  회사에 입사한 이후로 전문적인 프론트엔드 조직을 만들고 협업을 위하여 직접 기여한
                  노력입니다.
                </p>
                <br />
                <h5>| 번들러 최신화를 통한 기술스택 현대화 및 개발 프로세스 개선</h5>
                <p>
                  기존 npm - CRA로 이루어진 번들러를 pnpm - vite로 마이그레이션하고 Turborepo
                  기반으로한 모노레포 시스템을 구축했습니다. 이 과정에서 사내 모든 주요
                  애플리케이션의 마이그레이션을 직접 수행하여 안정적인 운영을 지원하였습니다.
                  Turborepo의 Remote Cache 서버를 구축하여 빌드 및 개발 서버 실행시간을 대폭
                  단축했습니다.
                </p>
                <br />
                <h5>성능 향상 수치</h5>
                <p>
                  <S.Improve>
                    - 초기 패키지 설치 33초 → 21초 약 <strong>33% 감소</strong>
                  </S.Improve>
                  <S.Improve>
                    - 캐싱된 패키지 설치 11초 → 1.5초 약 <strong>84% 감소</strong>
                  </S.Improve>
                  <S.Improve>
                    - 빌드 2분 7초 → 33초 약<strong> 75% 감소</strong>
                  </S.Improve>
                  <S.Improve>- 리모트 캐싱 Full Turbo 기준 전체 빌드 시간 2초 이내</S.Improve>
                </p>
                <p>
                  이러한 개선을 통해 개발 생산성을 크게 향상시키고 중복 코드 제거, 시스템의
                  유지보수성을 개선했습니다.
                </p>
                <br />
                <h5>| 모노레포 환경에서의 버전 관리 체계 구축</h5>
                <p>
                  기존의 버전 관리 체계 부재로 인한 문제점을 인식하고, 모노레포로의 전환과 함께
                  체계적인 버전 관리 시스템을 도입했습니다.
                </p>
                <p>
                  Semantic Versioning 규칙을 채택하여 일관된 버전 관리 전략을 수립했습니다 이를 통해
                  버전 번호만으로도 변경 사항의 성격과 규모를 쉽게 파악할 수 있게 되었습니다.
                </p>
                <p>
                  버전 관리 방법과 구축에 대한 상세 지침을 Docs로 작성하여 팀 전체에게 공유하고
                  모두가 일관된 방식으로 버전을 관리할 수 있게 했습니다. 이로 인해 이슈 처리 지연
                  등의 문제를 효과적으로 해결할 수 있게 되었습니다.
                </p>
                <br />
                <h5>| Module Federation을 통한 Micro Frontend 구축</h5>
                <p>
                  SFM 프로젝트에서 어드민의 통합을 위한 Micro Frontend 아키텍쳐를 도입을
                  주도하였습니다.
                </p>
                <p>
                  SFM에는 Jeus, ProObject, HFM과 같은 여러 개의 독립적인 어드민 페이지가
                  포함되어야했는데, 하나의 코드베이스로 합쳐질 경우 각 어드민을 담당하는 개발자들의
                  독립성이 약화되고, 특정 기술 스택을 강제하게되며, 배포 및 QA 과정이 복잡해지는
                  문제가 있었습니다.
                </p>
                <p>
                  Micro Frontend 구조를 적용함으로써, 각 팀이 원하는 기술 스택을 유지하면서도,
                  독립적으로 개발, 테스트, 배포할 수 있도록 보장했습니다. 이를 통해 팀별로 더
                  빠르고, 유연하게 업무를 수핼할 수 있으며, 프로젝트의 유지보수성을 높이는 동시에,
                  개발 문화의 자율성과 오너쉽을 강화할 수 있었습니다.
                </p>
                <br />
                <h5>| E2E 테스트 환경 구축</h5>
                <p>
                  마틴 파울러의 Page Object Model에 영감을 받아 Cypress를 활용한 E2E 테스트를 설계
                  및 테스트 환경을 개선하였습니다.
                </p>
                <p>
                  셀렉터와 Page Object Model을 결합해 DOM요소를 추상화한 E2E Object를 설계하고
                  구현했습니다. 이를 통해 DOM요소를 더욱 안전하고 효율적으로 찾을 수 있었고 테스트
                  코드의 가독성과 유지보수성을 동시에 향상시켰습니다.
                </p>
                <p>
                  결과적으로, 프로젝트 전체적인 테스트 커버리지가 증가하여 제품을 안정적으로 배포할
                  수 있었습니다. 또한 이러한 방식을 팀 차원에서 쉽게 활용할 수 있도록 가이드를
                  작성하여 팀원들과 공유하였고 해당 가이드는 팀원끼리 일관된 방식으로 테스트를
                  작성할 수 있도록 도움을 주었습니다.
                </p>
                <br />
                <h5>| CI/CD 환경 구축 및 자동화</h5>
                <p>
                  Jenkins를 통해 자동화된 빌드 및 태그를 기반으로한 배포 프로세스를 구현했습니다
                  이를 통해 개발 과정의 효율성과 배포 일관성을 크게 향상시켰습니다.
                </p>
                <p>
                  Merge Request 프로세스를 지원하는 CLI 도구를 개발하여 휴먼 에러를 최소화했습니다.
                  이 도구를 Jenkins와 연동하여 전체 프로세스의 자동화 수준을 높였습니다.
                </p>
                <br />
                <h4>| 공통 패키지 개발 및 테스트 코드 작성</h4>
                <p>
                  TmaxSoft 공통 패키지 개발을 통해 각 App간의 중복 코드를 제거하고 개발 효율성을
                  향상시켰습니다.
                </p>
                <p>
                  공통 Hooks 및 Utils 패키지를 개발하여 코드의 재사용성을 높이고 일관된 개발경험을
                  제공할 수 있도록 했습니다. 이를 위해 jest를 활용한 테스트코드를 작성하여 테스트
                  커버리지를 높이고 코드의 신뢰성을 높였습니다.
                </p>
                <p>
                  또한 사용 방법에 대한 문서를 작성하여 모든 개발자가 쉽게 활용할 수 있도록
                  가이드화하였습니다. 이를 통해 팀원들이 공통 패키지를 원활하게 도입하고 유지보수 할
                  수 있도록 지원했습니다.
                </p>
                <br />
                <h5>| 팀 내부적적인 코드 리뷰 문화 확립</h5>
                <p>
                  모노레포 전환 이후 패키지별 랜덤 리뷰어를 자동 지정하는 NodeJS express 기반 코드
                  리뷰 시스템을 구축하여 리뷰 프로세스를 체계화 했습니다. 이 시스템을 통해 코드
                  리뷰가 보다 원활하게 진행되었으며, 프로젝트별 오너쉽 강화와 팀 내 코드 리뷰 문화
                  개선에 기여했습니다. 현재까지도 안정적으로 운영되며 효율적인 협업 환경을 지원하고
                  있습니다.
                </p>
                <br />
                <h5>| CI 자동화 툴 스크립트 개발을 통한 코드 품질 관리 강화</h5>
                <p>
                  MR 단계에서 코드 품질을 검사하는 CI 자동화 플로우를 개발하여 코드 품질 관리
                  프로세스를 개선했습니다. 이 시스템을 통해 모노레포 환경에서도 일관된 코드 스타일과
                  품질을 유지할 수 있었고, 오류의 위치 및 메세지를 확인할 수 있게 만들어 개발자의
                  경험을 향상시켰습니다.
                </p>
              </S.ResumeWorkRowsItemDescriptionContents>
            </S.ResumeWorkRowsItemDescription>
          </S.ResumeWorkRowsItem>
        </S.ResumeWorkRows>
        <h2>Experience</h2>
        <S.ResumeWorkRows>
          <S.ResumeWorkRowsItem>
            <S.ResumeWorkRowsItemTitle>
              <h3>기고</h3>
            </S.ResumeWorkRowsItemTitle>
            <S.ResumeWorkRowsItemDescription>
              <S.ResumeWorkRowsItemDescriptionContents>
                <p>
                  사내 소프트 스터디 발표 및 아티클 기고
                  <S.Improve>
                    <S.Link
                      href="https://youtu.be/Qfgl9o7w6sQ?si=amsXaFOB6h819U9-"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [Youtube] [소프트스터디] REACT v18 Suspense 뜯어보기
                    </S.Link>
                  </S.Improve>
                  <S.Improve>
                    <S.Link href="https://naver.me/xCiit3Jh">[Blog] React Suspense 뜯어보기</S.Link>
                  </S.Improve>
                  <S.Improve>
                    - 내부 스터디에서 우수 발표 사례로 추천 받아 사내 아티클 기고
                  </S.Improve>
                  <S.Improve>- 발표를 통해 팀원들이 새로운 기술을 도입하는데 도움을 줌</S.Improve>
                </p>
              </S.ResumeWorkRowsItemDescriptionContents>
            </S.ResumeWorkRowsItemDescription>
          </S.ResumeWorkRowsItem>
        </S.ResumeWorkRows>
      </S.ResumeWork>
    </>
  );
};

export default Resume;
