import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { AboutPage, HomePage, PostPage, ResumePage } from './pages';
import Mouse from './components/Mouse';

function App() {
  return (
    <>
      <Mouse />
      <Layout>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<PostPage />} path="/post" />
          <Route element={<ResumePage />} path="/resume" />
          <Route element={<AboutPage />} path="/about" />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
