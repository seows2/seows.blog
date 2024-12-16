import { createGlobalStyle } from 'styled-components';
import AppleSDGothicNeoM from '../font/AppleSDGothicNeoM.ttf';
import AppleSDGothicNeoB from '../font/AppleSDGothicNeoB.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'AppleSDGothicNeo';
        src: local('AppleSDGothicNeoB'), local('AppleSDGothicNeoB');
        font-weight: bold;
        font-style: normal;
        src: url(${AppleSDGothicNeoB}) format('truetype');
  }
  @font-face {
    font-family: 'AppleSDGothicNeo';
        src: local('AppleSDGothicNeo'), local('AppleSDGothicNeo');
        font-weight: normal;
        font-style: normal;
        src: url(${AppleSDGothicNeoM}) format('truetype');
  }
    * {
        user-select: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      font-weight: normal;
      font-size: 1em;
    }

    body {
      margin: 0;
      overflow-x: hidden;
      box-sizing: border-box;
      color: #1C1C1C;
      background-color: #fffef2;
      font-family: AppleSDGothicNeo, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
         'Noto Sans KR', 'Malgun Gothic', sans-serif;
    }

    p {
      margin: 0;
      padding: 0;
      border: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
      }
    ol, ul {
      list-style: none
    }
    ::-webkit-scrollbar {
    display: none;
  }
 `;

export default GlobalStyle;
