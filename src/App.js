import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Aboutme from './components/Aboutme';
import Proyects from './components/Proyects';
import Social from './components/Social';
import AboutmeView from './components/views/AboutmeView';
import { VisibilityProvider } from './components/VisibilityContext';
import ProyectsView from './components/views/ProyectsView';
import SocialView from './components/views/SocialView';

function App() {
  return (
      <VisibilityProvider>
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Menu />} />
            <Route path='/aboutme' element={<AboutmeView />} />
            <Route path='/proyects' element={<ProyectsView />} />
            <Route path='/social' element={<SocialView />} />
          </Routes>
        </div>
    </BrowserRouter>
      </VisibilityProvider>
  );
}

export default App;
