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
          {`
          디자인, 애니메이션, 문제 해결, 프론트엔드 최신 기술 습득에 대한 열정을 가진 창의적인 개발자
          `}
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
                  기존에 개발된 여러 서비스에 대한 유지보수 및 신규 기능 개발과 함께 새로운
                  서비스로의 점진적 마이그레이션을 동시에 진행하는 상황에서 컨텍스트 스위칭을 역량을
                  기르고자 노력했습니다.
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
                <p>
                  디자이너팀이 피그마를 통해 파운데이션을 저장 및 수정하면 개발자가 파운데이션을
                  다운받아 디자인 시스템에 적용될 수 있는 흐름을 구축하였고, 아이콘 추가시에도
                  자동으로 디자인 시스템이 추가되는 툴을 개발하여 DX를 향상시켰습니다.
                </p>
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
                <h4>| 공통 패키지 개발</h4>
                <p>
                  TmaxSoft 공통 패키지 개발을 통해 각 App간의 중복 코드를 제거하고 개발 효율성을
                  향상시켰습니다.
                </p>
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
                <h4>Improve Our Frontend Team Culture</h4>
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
                <h5>| 팀 내부적적인 코드 리뷰 문화 확립</h5>
                <p>
                  모노레포 변경 이후 패키지 별로 랜덤 리뷰어를 지정하는 NodeJS 서버를 구축하여 코드
                  리뷰 프로세스를 체계화 했습니다. 이 시스템은 구축 이후 안정적으로 운영되고 잇으며,
                  팀 내 코드 리뷰 문화를 크게 개선했습니다.
                </p>
                <br />
                <h5>| CI 자동화 툴 스크립트 개발을 통한 코드 품질 관리 강화</h5>
                <p>
                  MR 단계에서 코드 품질을 자동으로 검사하는 CI 자동화 툴을 개발하여 코드 품질 관리
                  프로세스를 개선했습니다. 이로인해 모노레포 환경에서도 일관된 코드 스타일과 품질을
                  유지할 수 있었고, 오류의 위치 및 메세지를 확인할 수 있게 만들어 개발자의 경험도
                  높혔습니다.
                </p>
              </S.ResumeWorkRowsItemDescriptionContents>
            </S.ResumeWorkRowsItemDescription>
          </S.ResumeWorkRowsItem>
        </S.ResumeWorkRows>
        <S.ResumeWorkRows>
          <S.ResumeWorkRowsItem>
            <S.ResumeWorkRowsItemTitle>
              <h3>Portfolio Page</h3>
              <span>2023</span>
            </S.ResumeWorkRowsItemTitle>
            <S.ResumeWorkRowsItemDescription>
              <S.ResumeWorkRowsItemDescriptionContents>
                <p>React + Vite + TS기반의 프로젝트</p>
                <p>Gsap + React Spring등의 애니메이션 라이브러리 사용</p>
                <p>GLSL언어를 통한 애니메이션 일부 적용</p>
              </S.ResumeWorkRowsItemDescriptionContents>
            </S.ResumeWorkRowsItemDescription>
          </S.ResumeWorkRowsItem>
        </S.ResumeWorkRows>
        <S.ResumeWorkRows>
          <S.ResumeWorkRowsItem>
            <S.ResumeWorkRowsItemTitle>
              <h3>Wedding Demo</h3>
              <span>2022</span>
            </S.ResumeWorkRowsItemTitle>
            <S.ResumeWorkRowsItemDescription>
              <S.ResumeWorkRowsItemDescriptionContents>
                <p>React + Styled Component 기반의 웹페이지</p>
                <p>직접 디자인하고 기획을 한 뒤 개발</p>
              </S.ResumeWorkRowsItemDescriptionContents>
            </S.ResumeWorkRowsItemDescription>
          </S.ResumeWorkRowsItem>
        </S.ResumeWorkRows>
        <S.ResumeWorkRows>
          <S.ResumeWorkRowsItem>
            <S.ResumeWorkRowsItemTitle>
              <h3>Cat Fansite</h3>
              <span>2021</span>
            </S.ResumeWorkRowsItemTitle>
            <S.ResumeWorkRowsItemDescription>
              <S.ResumeWorkRowsItemDescriptionContents>
                <p>HTML + CSS + JS를 기반의 웹페이지</p>
                <p>CSS media쿼리를 활용하여 모바일 화면 구현</p>
                <p>이미지 lazy loading, 화면 overlay 기법의 구현</p>
              </S.ResumeWorkRowsItemDescriptionContents>
            </S.ResumeWorkRowsItemDescription>
          </S.ResumeWorkRowsItem>
        </S.ResumeWorkRows>
      </S.ResumeWork>
    </>
  );
};

export default Resume;
