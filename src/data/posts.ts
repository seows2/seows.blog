export type Category = 'React' | '잡담' | '회고';

export type Post = {
  title: string;
  category: Category;
  link: string;
  date: string;
  briefContents: string;
};

export const POSTS: Post[] = [
  {
    title: '[07.29 ~ 08.01] 일상',
    category: '잡담',
    link: 'https://blog.naver.com/seows2/223545870217',
    date: '2024.05.04',
    briefContents: `최근 갑자기 그림일기에 필이 꽂혀서 하루에서 가장 기억에 남는 순간을 토막글과 그림으로 표현하고있다. 
    나는 그림을 정말 못그리는데, 요즘에 이거 그릴려고 펜도 사고, 색연필도 집에서 가져오고 천천히 연습하고 있다.
    언젠간 피카소가 될 수 있지 않을까`,
  },
  {
    title: '정말 정말 늦은 2023년 회고',
    category: '회고',
    link: 'https://blog.naver.com/seows2/223436371700',
    date: '2024.05.04',
    briefContents:
      '2023년 회고를 쓴 게 정말 엊그제 같은데 벌써 1년이 지났다. 사실 어영부영하다 보니 시간이 훌쩍 지나가버려서 그냥 이번 연도 회고를 쓰지 않으려고 했었다. 하지만 매년 쓰던 회고가 2023년도 하나만 빠져버린다면 나중에 후회할 것 같기도 하고, 지난 시간의 일을 다시 읽는 게 재밌기도 하고 해서 조용하게 쉬는 이 시간을 이용하여 글을 작성해 본다.',
  },
  {
    title: 'E2E 테스트 도입기 2 - Cypress 사용해보기',
    category: 'React',
    link: 'https://blog.naver.com/seows2/223343362863',
    date: '2024.02.04',
    briefContents:
      'E2E 테스트? E2E 테스트는 End to End의 약자로 애플리케이션의 흐름을 사용자 입장에서 처음부터 끝까지 테스트 방법론의 하나입니다. E2E 테스트의 목적은 실제 사용자가 행하는 액션을 시뮬...',
  },
  {
    title: '요즘 생각3',
    category: '잡담',
    link: 'https://blog.naver.com/seows2/223216316254',
    date: '2023.09.20',
    briefContents:
      '내가 가지고 있는 신념이나 가치관, 도덕적 기준 따위에 가끔 반하는 행동을 하곤 하는데, 그러면 자책을 하게 되고 기분이 안 좋아지고, 꽤 긴 시간 후회를 한다. 그리고 내 소신을 지키기 위한 수단...',
  },
  {
    title: 'E2E 테스트 도입기 1 - 테스트의 필요성',
    category: 'React',
    link: 'https://blog.naver.com/seows2/223173137136',
    date: '2023.08.02',
    briefContents:
      'E2E 테스트? E2E 테스트는 End to End의 약자로 애플리케이션의 흐름을 사용자 입장에서 처음부터 끝까지 테스트 방법론의 하나입니다. E2E 테스트의 목적은 실제 사용자가 행하는 액션을 시뮬...',
  },
  {
    title: '조금 늦은 2022년 회고',
    category: '회고',
    link: 'https://blog.naver.com/seows2/223002476102',
    date: '2023.02.02',
    briefContents:
      '2022년을 곰곰이 되새겨본다. 올해 나는 무엇을 이루었고 어떤 것을 성장시켰을까. 혹여나 일련의 과정 중 무언가를 잃거나 무심코 지나치진 않았을까. 이번 연도는 유달리 아쉬움이 많이 느껴지는 한 해이다. 이런 감정을 느끼는 가장 큰 이유는 작년에 기대했던 올해의 성적이 나의 기대에 미치지 않았기 때문이라고 생각한다. 감사와 고마움을 많은 사람들에게 베풀고 싶었지만 그러지 못했고, 계속해서 공부하겠다는 의지도 그다지 이뤄내지 못했다. 그렇다고 이번 해에 아쉬움만 있었다는 것은 아니다. 사무실 벽 한켠에 적어놨던 올해의 목표를 나름 달성했으며, 훌륭한 사람들에게 감사함과 신뢰를 많이 배웠던 한 해이다. 올해를 돌이켜봤을 때, 내 삶에 꼭 필요한 과정이었다고 추억할 시기가 있었으면 좋겠다고 생각하며 길고 길었던 올해의 발자국을 한 번 되돌아보고자 한다. 🏠 이사 올해 처음으로 자취를 시작하였다. 집과 회사의 거리가 너무 멀어서 12월 즈음부터 집을 알아봤고 나름 합리적인 가격으로 방을 구할 수 있었다. 전셋집으로 구해서 통상적인 월세보다는 저렴한 가격으로 지내고 있다. 경제적인 부담을 덜면서도 원하면 걸어서 회사를 갈 수도 ...',
  },
  {
    title: 'useEffect에 대한 이야기',
    category: 'React',
    link: 'https://blog.naver.com/seows2/222896116239',
    date: '2022.10.09',
    briefContents:
      '리액트에서 훅이 나온 시점에서 useEffect는 주로 데이터를 불러오거나, DOM을 수동으로 변경시키는 등의 일종의 Side Effect를 수행하기 위해 많이 사용했습니다. 그리고 이는 클래스형 컴포넌트에서 componentDidMount와 같은 생명주기 함수를 대체하는 훅이다 뭐다라는 말이 많았지만 현재 이러한 말은 옛날 이야기가 되었고, 이제는 완전히 개별적인 Effect로 자리잡았죠. useEffect라는 훅은 단 2가지의 일을 수행합니다. 1. 어떤 것을 동기화시키고 2. 후에 이런 동기화를 중지하는 것이죠. 이런 사이클은 Effect의 Dependency에 따라 여러번 실행될 수 있으며, 요즈음엔 이런 훅을 커스터마이징하거나, 여러 독특한 기법을 통해 많이 사용하고 있죠. 그리고 이를 많이 사용한 만큼, useEffect의 크기가 커지고, 갯수도 많아졌으며 의존성에 따라 동작하기 떄문에 렌더링되는 횟수를 예측하기도 힘들뿐더러 이런 훅이 필요없음에도 불필요하게 사용함에 따라 코드가 읽기 어려워지는 상황도 많아진 것 같습니다. (제 이야기입니다🤪) 따라서 이 글에선 useEffect를 어떻게 사용해야하는지, 왜 사용하는지에 대해 간략하게 알아보도록 하겠습니다. 리액...',
  },
  {
    title: 'React hook에 대해 "자세히"알아보자',
    category: 'React',
    link: 'https://blog.naver.com/seows2/222862258289',
    date: '2022.08.30',
    briefContents:
      '오늘은 리액트 Hooks에 대해 알아보는 시간입니다. 초기의 리액트는 클래스형의 컴포넌트를 주로 사용했습니다. 클래스형이 가져오는 복잡함, 거대함에도 불구하고 구우우우~지 썼던 이유는 이전의 리액트는 함수형에서 상태를 저장할 수 있는 방법을 전혀 제공해주지 못했기 때문입니다. 하지만 2018년, react에 Hooks라는 기법이 세상에 등장했습니다. 이 Hooks라는 기법은 함수형 컴포넌트에서 상태를 저장할 수 있는 방법을 제시해주었죠. 그리고 우리가 지금 개발하는 대부분의 프로젝트에서는 Hooks를 사용하고 있을 것입니다. 한 눈에 봐도 코드량 부터 차이가 난다. 하지만 이 좋은 Hooks를 사용해 개발하는 과정에서 우리는 종종 몇가지 문제에 직면하곤 합니다. 많은 문제가 있겠지만 그 중 가장 클래식한 문제는 리액트 Hooks의 클로져라고 생각을 합니다. Problem 한 번 아래의 React app을 한 번 살펴봅시다. 우리는 useState를 통해 count라는 상태를 하나 만들었습니다. 그리고 첫번째 useEffect구문에 의해 count라는 상태는 계속적으로 증가하고 있죠. 그리고 또 다른 useEffect구문을 통해 증가된 count 상태를 console.log를 통해 보여주고자 ...',
  },
  {
    title: 'React18 SSR Suspense에 대해 알아보자',
    category: 'React',
    link: 'https://blog.naver.com/seows2/222828481516',
    date: '2022.07.25',
    briefContents:
      'React18 Suspense에 대해 알아보는 시간 두번째입니다. 이전에 React18에서 Suspense의 구조적인 모델을 개선했다고 했는데요. 정확히 무슨 말인지 다시 한번 알아보도록합니당. SSR Suspense가 뭐야. React18은 리액트의 서버사이드 렌더링 성능에 대한 구조적 개선이 포함되었습니다. 바로 서버사이드 컴포넌트를 비동기적으로 제공해준다는 뜻인데요. 예를 들면 이렇습니다. 특정 가게에서 배달을 통해 코스요리를 시켰다고 합시다. 맛있는 중식 코스요리에는 게살스프🍲, 딤섬, 짜장면, 탕수육등 여러가지 음식이 나옵니다. 하지만 배달은 여러번 왔다갔다하는 비용이 크고 번거롭기 때문에, 코스라는 말이 허무해지고 게살스프, 딤섬, 짜장면등이 모두 조리되고나서 한번에 배달되겠죠. 그리고 배달이 되고 나서는, 음식을 식탁에 한번에 모두 놓고 먹기 시작할 것입니다. SSR의 단점도 위와 같습니다. 앱의 일부가 loading이 되지 않았는다면 (모든 음식이 조리되지 않았다면), 서버에서 해당 컴포넌트가 전부 처리되기를 기다리고, 전부 다 처리되고 나면 짠!하고 클라이언트에게 HTML을 제공하는 것이죠. 이는 사용자 측면에서 그리 달가운 상황은 ...',
  },
  {
    title: 'Suspense에 대해 알아보자. 근데 잡담을 곁들인.',
    category: 'React',
    link: 'https://blog.naver.com/seows2/222822643913',
    date: '2022.07.21',
    briefContents:
      '현재 리액트는 여러 업데이트를 거쳐가며 개발자뿐만 아니라, 디자이너에 이르기까지 훌륭한 사용자 경험을 구축하기 위해 많이 사용되는 도구가 되었습니다. 게다가 현재 FE시장에서 리액트가 가지는 영향력은 아주 크다고 생각합니다. 위에서 디자이너를 예를 들었는데, 일부 디자인 도구에는 아예 React에 대한 지원이 내장되어 있는 경우도 있습니다. Framer가 하나의 예가 될 수 있을 것 같은데, Framer는 자신이 한 디자인을 JSX로 Export하고, React애플리케이션에 직접 붙여서 바로 쓸 수 있는 기능이 있습니다. 항상 디자이너분들과 일할 때마다 아시는 분도 계시겠지만 디자이너와 개발자 사이의 소통이 항상 원활하지는 않습니다. 제가 느끼기에 가장 큰 이유는 UI 디자인에서 사용되는 도구, 패턴이 개발자가 느끼는 개념이 매우 다르기 때문이 아닌가 생각됩니다. 디자인에서는 &#x27;이걸 누르면 이렇게 되구요. 또 저걸 누르면 저렇게 되요.&#x27;라는 패턴과 변형에 대해 말하지만 저는 UI에서의 이상한 불일치를 깨닫고 디버깅하거나, 이벤트를 핸들링하는데에 많은 시간을 쏟았고 디자인을 현실로 끌어내고자하는 사용자 경험을 프로그래밍의...',
  },
  {
    title: '자바스크립트로 리액트 가상돔 구현해 보기 - 3 (render함수 클래스형, 함수형 )',
    category: 'React',
    link: 'https://blog.naver.com/seows2/222665583733',
    date: '2022.03.06',
    briefContents:
      '1편 링크 자바스크립트로 리액트 가상돔 구현해보기 - 1 (가상돔이란?) 2편 링크 자바스크립트로 리액트 가상돔 구현해 보기 - 2 (JSX와 Babel, createElement) 깃헙 코드 github 코드 전 편에서는 babel 트랜스파일러의 힘을 빌려 JSX문법을 저희가 만든 createElement함수를 통해 간단한 가상돔의 구조로 변환시켜봤습니다. 이제 남은 것은 가상돔을 리얼돔에 적용하는 과정이겠군요. render render함수는 기본적으로 createElement로부터 받은 결과값인 가상돔을 리얼돔 컨테이너에 그리는 함수라고 생각할 수 있습니다. 그렇다면 함수는 이런 모양을 띄우고 있을 것이고, vdom을 realDOM으로 변환시킨 결괏값을 특정 container에 자식으로 넣어주는 로직을 작성한다고 생각하면서 코드를 작성하겠습니다. 가상돔의 구조를 다시 한 번 봐볼까요? 위에 Title이라는 JSX를 가상돔으로 변환시킨 결과입니다. 그리고 우리는 이 가상돔을 리얼돔으로 바꾸기 위해 createElement 함수를 사용해야합니다. 인자로는 tag를 받고, 이는 가상돔의 tagName과 동일하죠. 그럼 아래와 같은 코드가 나올 수 있습니다. 그리고 다시 한 번 가상돔의 구조를 보면...',
  },
  {
    title: '행복이란?',
    category: '잡담',
    link: 'https://blog.naver.com/seows2/222637409513',
    date: '2022.02.03',
    briefContents:
      '새벽만 되면 찾아오는 감-성타임 나 혼자 쓰는 거면 상관없잖아! 검색도 막아놓을 거라구! 오늘은 저녁에 영화를 보고 집에 와서 하루 종일 잤더니 지금 이 시간이다. 자고 일어난 조용한 새벽에 간간이 들려오는 사람 소리, 옆에 틀어놓은 잔잔한 음악은 많은 생각을 들게 하고 또 글쓰기의 욕구가 충만해지게 하는 매개체인 것 같다. 그래서 오늘은 행복에 대한 글을 짧게 써보고자 한다. 사람마다 다르겠지만 대부분 모든 일의 궁극적 목적은 행복하기 위해서다. 그렇다면 행복이란 무엇일까? 어떻게 해야 행복할 수 있을까?? 오늘 친구를 만나서 나온 이야기 중에 하나이다. 최근에 친구가 어려운 시기에 취업을 해서 정말 축하한다는 이야기를 하고 있을 무렵이었다. 내가 어떤 일이냐고 물었을 뿐인데, 그녀는 호텔리어라는 말을 시작으로 어려웠던 면접 일대기, 그때의 분위기 등의 이야기를 신난 듯이 이어갔다. 이어진 이야기에서 연봉, 일하는 시간, 첫 월급으로 뭘 할 건지에 대한 투머치 토크가 이루어지던 중간에 내가 물었다. "지원한 회사가 엄청 맘에 드나 봐??" 당연하다는 듯이 "응! 난 서비스직이 하고 싶었는데, 호텔리어가 최고거든!&quo...',
  },
  {
    title: '자바스크립트로 리액트 가상돔 구현해 보기 - 2 (JSX와 Babel, createElement)',
    category: 'React',
    link: 'https://blog.naver.com/seows2/222634894370',
    date: '2022.01.30',
    briefContents:
      '1편 링크 자바스크립트로 리액트 가상돔 구현해보기 - 1 (가상돔이란?) 3편 링크 자바스크립트로 리액트 가상돔 구현해 보기 - 3 (render함수 클래스형, 함수형 ) 깃헙 코드 github 코드 JSX의 등장 앞서 다룬 가상돔(VirtualDOM)의 문제는 바로 가독성입니다. 아무리 메모리를 이용한 가상돔의 구조가 빠르다 한들 코드가 더러우면 아무도 쓰고 싶어 하지 않겠죠. 이런 가상돔의 가독성을 높이기 위해 jsx라는 것이 등장했습니다. JSX는 Javascript의 확장 문법입니다. 하지만 생김새는 HTML와 많이 닮아있습니다. 리액트 공식 문서에서는 JSX를 아래와 같이 설명합니다. 위에 희한한 태그 문법은 문자열도, HTML도 아닙니다. JSX라 하며 JavaScript를 확장한 문법입니다. 누가 봐도 HTML 태그처럼 생겼는데, 문자열도, HTML도 아니고, JSX라고 JS를 확장한 문법이라고 설명을 하고 있습니다. 실제로 무슨 의미인지 파악해 보기 위해, 코드를 직접 실행시켜보도록 하겠습니다. 실제로 React 프로젝트에서, 위와 같은 JSX 구문을 log로 찍어본다면 어떤 일이 일어날까요?? 보시다시피 HTML도 String도 아닌 이상한 객체가 ...',
  },
  {
    title: '자바스크립트로 리액트 가상돔 구현해보기 - 1 (가상돔이란?)',
    category: 'React',
    link: 'https://blog.naver.com/seows2/222622716558',
    date: '2022.01.15',
    briefContents:
      '2편 링크 자바스크립트로 리액트 가상돔 구현해 보기 - 2 (JSX와 Babel, createElement) 3편 링크 자바스크립트로 리액트 가상돔 구현해 보기 - 3 (render함수 클래스형, 함수형 ) 깃헙 코드 github 코드 React나 Vue같은 라이브러리의 가장 큰 특징은 유저 인터페이스를 상태로 관리할 수 있다는 점입니다. 브라우저는 DOM을 통해 웹 페이지를 렌더링 하는데 이 과정을 자바스크립트로 표현해보면, (1) 데이터를 준비한다. (2) 문자열을 출력할 엘리먼트를 생성한다. (3) 기존 문서에 추가한다. (4) 엘리먼트의 텍스트를 준비한 데이터로 설정한다. 만약 위 데이터를 수정하고 화면에 반영하려면 두 가지 작업이 필요합니다. (1) 데이터를 수정한다. (2) 수정한 값을 엘리먼트에 반영한다. 위 방식을 조금 더 개선해서 data변수에 값을 변경하면 title 엘리먼트의 내용도 변경되도록 data변수와 title엘리먼트를 연결지어 보겠습니다. 그러면 data는 UI상태를 담는 역할이라고 할 수 있을겁니다. 리액티브 코드를 조금 변환시켜 보도록 하겠습니다. 전 코드와 달라진 점은 상태를 의미하는 state라는 이름의 객체를 만들어 그 안에 _data키와 함께 Hello World...',
  },
  {
    title: '2021년을 돌아보며 - 변화와 감사의 해.',
    category: '회고',
    link: 'https://blog.naver.com/seows2/222617290188',
    date: '2022.01.09',
    briefContents:
      '나는 2021년을 어떻게 기억할까 올해는 유난히 한 해가 저물어간다는 사실이 시원섭섭하다. 이번 해는 애정하고 좋아했던 것으로부터 멀어지고 혼자 서는 변화의 시기였다. 한 편으로는 이별한 것만큼이나 운이 좋았다고 말할 수밖에 없는 새로운 만남이 가득한 시기기도 했다. 삶과 나에 대해 치열하게 고민한 해였고, 내면의 변화가 가장 큰 해였다. 그러면서 그 어느 때보다 감사하다는 말을 일기장에 빼곡히 채운 날들이기도 했다. 이런 올해가 끝나가는 게 참으로 아쉽지만 이런 올해를 경험한 내가 만나게 될 내년이 너무나 설레고 기다려지기도 한다. 이러한 마음을 기억하고자 2021년을 돌아보며 글을 쓴다. 명상 🧘🏻♀️ 올해 나에게 가장 큰 변화를 준 일은 명상이다. 나는 작년만 해도 명상과는 접점이 전혀 없는 사람이었다. 하지만 지금의 나는 명상을 좋아하고 필요로 하게 되었다. 명상이 나의 행복도와 편안함을 높이는 데 도움이 되기 때문이다. 운동을 통해 건강한 몸을 만들고 다치지 않게 몸 쓰는 법을 배웠듯 명상을 통해 단단한 마음을 만들고 상처 나지 않게 마음 쓰는 법을 배웠다. 명상은 나에 대한 이해도를 높이고, 여러 상황과 감정에 대응...',
  },
  {
    title: '당신은 건강하신가요??',
    category: '잡담',
    link: 'https://blog.naver.com/seows2/222532530906',
    date: '2021.10.10',
    briefContents:
      '제가 중고등학교에 다니고 있을 무렵엔, 우울증에 걸려도 정신과 상담을 받는 것을 다들 꺼려 하던 때가 있었습니다. 취업 길이 막히고 혼삿길이 막힌다면서요. 또 그런 우울감 같은 것들은 정신력이 약해서 생기는 문제라면서, 병으로 받아들이지 않고 어리광쯤으로 치부하던 시절이었습니다. 하지만 최근 몇 년 사이에 정신건강이 화두로 떠오르게 되면서 이제는 상황이 많이 달라졌죠. 누군가가 우울해하면 적극적으로 정신과 상담을 권하기도 하고, 주변에서도 우울증을 더 이상 가볍게만 치부하지는 않는 상황이 된 것 같습니다.. 개인적으로 아주 긍정적인 변화가 아닌가 생각합니다. 저는 사람들이 자신의 힘겨움과 슬픔, 약함에 대해 이야기했으면 좋겠다는 생각을 가지고 있습니다. 모두 저마다의 힘듦을 가지고 있을 텐데 성공하기 위한 비법을 공유하고 배우듯 삶의 힘겨움에 대응하는 방법을 공유하고 배울 수 있다면 모두가 조금은 더 쉽게 행복해질 수 있겠지라는 것이죠. 아직까지는 각자 알아서 힘겨운 상황을 이겨내는 방법을 찾아내야 하죠. 몸을 단련하는 방법은 모두들 관심이 있고 열심히 하려고 하지만, 마음을 단련하는 방법에 대해서는 여전히 그렇지...',
  },
  {
    title: '배스킨라빈스를 그만두다!',
    category: '잡담',
    link: 'https://blog.naver.com/seows2/222454399811',
    date: '2021.08.02',
    briefContents:
      '그간 정말 많이 애정하고 열정을 다했던 아르바이트를 그만두게 되었습니다. 그동안 많은 아르바이트를 해왔지만 이만큼 애정 있던 아르바이트는 처음이었습니다. 이 공간은 제 인생에서 무척 큰 의미가 있는, 단순한 아르바이트 그 이상의 존재였지만 언젠가는 헤어질 운명임을 알고 있었고, 어떤 결정이든 아쉬움이 남지 않도록 남은 시간 최대한을 노력했습니다. 배스킨라빈스에서 함께한 2년이라는 시간은 주말을 기다리는 또 다른 즐거움이었습니다. 짧다면 짧고 길다면 긴 시간 동안 그 어느 때보다 밀도 있는 시간을 보내며 웃을 수 있었습니다. 이 기간 동안 제가 얻을 것을 설명하려면 그 어떤 말을 붙여도 부족할 것 같네요. 배라와 함께 일하면서 이전에는 잘 느끼지 못했던 감사함과 애정, 신뢰와 고마움을 배울 수 있었습니다. 그럴 수 있었던 이유는 물론 저와 함께 일했었던 분들이었고, 서로에게 가지는 무한한 애정과 신뢰덕이었다고 생각합니다. 아무리 힘들어도, 시발과 화이팅을 번갈아 외치고, 시답지 않는 드립에 깔깔 웃었던 순간들, 그 순간에도 밀려드는 사람들을 받아내며 녹초가 되었던 순간들, 다른 것들은 몰라도 파트너와 함께했던 이런 순간들...',
  },
];
