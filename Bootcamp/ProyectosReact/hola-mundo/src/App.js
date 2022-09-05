import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import ComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import { Clock } from './components/pure/Ejercicios/Ejercicios4,5,6/Clock';
import ClockClass from './components/pure/Ejercicios/Ejercicios4,5,6/ClockClass';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente traido desde greeting.jsx */}
        
        {/* <Greeting name="German"></Greeting> */}
        {/* <GreetingF name="German Dos"></GreetingF> */}

        {/* Componente de Listado de Tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        
        {/* Ejemplo uso de Hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <ComponenteConContexto></ComponenteConContexto> */}
        {/* Todo lo de aca adentro es tratado como props.children */}
        {/* <Ejemplo4 nombre="German">
          <h3>Contenido del props.children</h3>
        </Ejemplo4> */}

        {/* <GreetingStyled name='German' ></GreetingStyled> */}
        <Clock></Clock>
        {/* <ClockClass></ClockClass> */}
      </header>
    </div>
  );
}

export default App;
