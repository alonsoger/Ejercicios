import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import DashBoardPage from './pages/dashboard/DashBoard';
import LoginPage from './pages/auth/LoginPage';


function AppRoutingFinal() {

  //TODO: Change to value from SessionStorage
  let loggedIn = true;

  return (
    <Router>
      <Routes>
        {/* REDIRECTIONS TO PROTECT OUR ROUTES */}
        <Route exact path='/' element=
                { 
                  loggedIn ? (<DashBoardPage/>) 
                  :
                  ( <LoginPage/> ) 
                }
              />
        {/* LOGIN ROUTE */}
        <Route path='/login' element={ <LoginPage/> } />
        <Route exact path='/dashboard' element=
                { 
                  loggedIn ? (<DashBoardPage/>) 
                  :
                  ( <LoginPage/> ) 
                }
              />
        <Route path='*' element={ <NotFoundPage/> } />
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;
