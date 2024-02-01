import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';
import Projects from './pages/Projects'
import Contact from './pages/Contact';
import Footer from './pages/Footer';


const App = () => (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Projects />
        <Contact />
        <Footer />
      </>
    </BrowserRouter>
);

export default App;
