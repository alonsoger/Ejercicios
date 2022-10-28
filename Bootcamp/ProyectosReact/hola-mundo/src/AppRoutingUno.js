import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';

function AppRoutingUno() {
  return (
    <Router>
      <div>
        <aside>
          <Link to='/' > | HOME |</Link>
          <Link to='/about' > | ABOUT |</Link>
          <Link to='/faqs' > | FAQS |</Link>
          <Link to='/any404' > | Not Found |</Link>
        </aside>
        <main>
          <Routes>
            <Route exact path='/' element={ <HomePage/> } />
            <Route path='/about' element={ <AboutPage/> } />

            {/* 404 - Page No Found */}
            <Route path='*' element={ <NotFoundPage/> } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingUno;
