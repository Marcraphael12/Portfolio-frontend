import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
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
