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
import ComponenteA from './components/pure/Ejercicios/Ejercicio1,2,3/componenteA';
import OpcionalRender from './components/pure/Ejemplos/opcionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import FormularioTask from './components/pure/Ejercicios/13,14,15/formulario';
import AsyncExample from './components/pure/Ejemplos/asyncExample';
import ObservableExample from './components/pure/Ejemplos/ObservableExample';
import FetchExample from './components/pure/Ejemplos/FetchExample';

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
        {/* <ComponenteA></ComponenteA> */}
        {/* Ejercicio 4,5,6 Clocks */}
        {/* <Clock></Clock> */}
        {/* <ClockClass></ClockClass> */}
        {/* Ejercicio 7,8,9 */}
        {/* <List></List> */}
        {/* Gestion de eventos, Ejemplo con componente father y child */}
        {/* <Father></Father> */}

        {/* Ejemplos de renderizado condicional */}
        {/* <OpcionalRender></OpcionalRender> */}

        {/* Ejemplos de Uso de FORMIK Y YUP */}
        {/* <LoginFormik></LoginFormik> */}
        {/* <RegisterFormik></RegisterFormik> */}
        {/* <FormularioTask></FormularioTask> */}

        {/* Ejemplos de procesos asincronos */}
        {/* <AsyncExample></AsyncExample> */}
        {/* <ObservableExample></ObservableExample> */}

        {/* Ejemplo de peticion HTTP con 'RegRes' (Api de peticiones) */}
        <FetchExample></FetchExample>
      </header>
    </div>
  );
}

export default App;
