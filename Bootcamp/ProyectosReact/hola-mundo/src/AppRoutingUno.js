import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TasksDetailPage from './pages/tasks/TasksDetailPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterFormik from './components/pure/forms/registerFormik';

function AppRoutingUno() {

  let taskList = [
    {
      id:1,
      name: 'Task one',
      description: 'First Task'
    },
    {
      id:2,
      name: 'Task two',
      description: 'Second Task'
    }
  ];


  let logged = localStorage.getItem('credentials'); 
  //Usar localStorage para saber si se puede navegar o no. 

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User logged?', logged);
  },[]);

  return (
    <Router>
      <div>
        <aside>
          <Link to='/' > | HOME |</Link>
          <Link to='/login' > | LOGIN |</Link>
          <Link to='/register' > | Register |</Link>
          <Link to='/tasks' > | TASKS |</Link>
          <Link to='/about' > | ABOUT |</Link>
          <Link to='/faqs' > | FAQS |</Link>
          <Link to='/any404' > | Not Found |</Link>
          <Link to='/profile' > | Profile |</Link>
          <Link to='/task/1' > | Task 1 |</Link>
          <Link to='/task/2' > | Task 2 |</Link>



        </aside>
        <main>
          <Routes>
            <Route exact path='/' element={ <HomePage/> } />
            <Route exact path='/login' element=
              { 
                logged ? (<HomePage/>) 
                :
                ( <LoginPage/> ) 
              } 

            />
            <Route exact path='/register' element={ <RegisterFormik/> } />
            <Route path='/about' element={ <AboutPage/> } />
            <Route path='/profile' element=
              {
                logged ? (<ProfilePage/>) 
                :
                (<Navigate replace to='/login'/>)
              }
            />
            <Route path='/tasks' element={ 
              
              logged ? (<TasksPage/>)
              : 
              (<Navigate replace to='/login'/>)
              }
              />
            <Route 
              exact 
              path='/task/:id/'
              render = {
                ({match}) => <TasksDetailPage task={taskList[match.params.id-1]} />
              }
              // En teoria deberia terminar en una url detallada. 
            />


            {/* 404 - Page No Found */}
            <Route path='*' element={ <NotFoundPage/> } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingUno;
