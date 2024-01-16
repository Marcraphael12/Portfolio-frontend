import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';
import Projects from './pages/Projects'


const App = () => (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Projects />
      </>
    </BrowserRouter>
);

export default App;
