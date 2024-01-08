import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Welcome from './pages/Welcome';


const App = () => (
    <BrowserRouter>
      <div className="">
        <Navigation />
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </div>
    </BrowserRouter>
);

export default App;
