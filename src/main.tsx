import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App.tsx';
import { GlobalStyle } from './styles';
import { createTheme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={createTheme()}>
    <HashRouter>
      <GlobalStyle />
      <App />
    </HashRouter>
  </ThemeProvider>
);
