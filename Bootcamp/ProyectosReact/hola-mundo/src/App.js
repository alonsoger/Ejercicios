import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplos/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplos/Ejemplo2';
import ComponenteConContexto from './hooks/Ejemplos/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplos/Ejemplo4';
import GreetingStyled from './components/pure/Ejemplos/greetingStyled';
import { Clock } from './components/pure/Ejercicios/Ejercicios4,5,6/Clock';
import ClockClass from './components/pure/Ejercicios/Ejercicios4,5,6/ClockClass';
import Father from './components/container/Ejemplos/father';
import List from './components/pure/Ejercicios/Ejercicio7,8,9/list';
import ComponenteA from './components/pure/Ejercicios/Ejercicio1,2,3/componenteA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente traido desde greeting.jsx */}
        
        {/* <Greeting name="German"></Greeting> */}
        {/* <GreetingF name="German Dos"></GreetingF> */}

        {/* Componente de Listado de Tareas, que seria de la aplicacion posta de React */}
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

        {/* Ejercicio 1,2,3 */}
        <ComponenteA></ComponenteA>
        {/* Ejercicio 4,5,6 Clocks */}
        {/* <Clock></Clock> */}
        {/* <ClockClass></ClockClass> */}
        {/* Ejercicio 7,8,9 */}
        {/* <List></List> */}
        {/* Gestion de eventos, Ejemplo con componente father y child */}
        {/* <Father></Father> */}
      </header>
    </div>
  );
}

export default App;
