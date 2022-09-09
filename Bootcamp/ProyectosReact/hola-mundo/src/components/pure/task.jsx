//Compnente B

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum'
//Se importa la hoja de estilos de task.scss
import './../../../src/styles/task.scss';


function TaskComponent({ task, complete, remove }) {

    useEffect(() => {
        console.log('Created Task');
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);

    /** Funcionn que retorna un Badge dependiendo del level. */
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return(<h6 className='mb-0'><span className='badge bg-primary'>{task.level}</span></h6>)
            case LEVELS.URGENTE:
                return(<h6 className='mb-0'><span className='badge bg-warning'>{task.level}</span></h6>)
            case LEVELS.BLOCKING:
                return(<h6 className='mb-0'><span className='badge bg-danger'>{task.level}</span></h6>)
            default:
                break;
        }
    }
    /** Funcion que retorna iconos dependiendo de si la tarea esta realizada o no.  */
    function taskCompleteIcon() {
        if(task.completed){
            return (<i onClick={() => complete(task)} className='bi bi-balloon task-action' style={{color: 'green', fontWeight: 'bold'}} ></i>)
        }else {
            return (<i onClick={() => complete(task)} className='bi bi-balloon task-action' style={{color: 'red', fontWeight: 'bold'}} ></i>)
    }}

    return (

        <tr className='fw-normal task-name'>
            <th><span className='ms-2'>{task.name}</span></th>
            <td className='align-middle'><span className='ms-2'>{task.descripcion}</span></td>
            <td className='align-middle'>
            {/* SUSTITUIR POR UN BADGE */}
                {taskLevelBadge()}
                {/* <span className='ms-2'>{task.level}</span> */}
            </td>
            <td className='align-middle'>
            {/* SUSTITUIR POR UN ICONOS */}
            {/* Podemos usar una funcion para agregar los componentes como en el caso siguiente... */}
                {taskCompleteIcon()} 

            {/* O podemos usarlo directamente en el HTML.. Dependiendo de que tan grande sean las instrucciones o de como sea la forma del proyecto. */}
                
                {/* { task.completed ?
                    (<i className='bi bi-balloon' style={{color: 'green', fontWeight: 'bold'}} ></i>) 
                    : 
                    (<i className='bi bi-balloon' style={{color: 'red', fontWeight: 'bold'}} ></i>)
                } */}

                <i className='bi-trash task-action'  style={{color: 'red', fontSize: '40px'}} onClick={() => remove(task)} ></i>
                {/* <span className='ms-2'>{task.completed ? 'Completed' : 'Pending'}</span> */}
            </td>


        </tr>

        // <div>
        //     <h2 className="task-name" > {task.name} </h2>
        //     <h3> {task.description} </h3>
        //     <h4> {task.level} </h4>
        //     <h5> {task.completed ? 'COMPLETED' : 'PENDING'} </h5>
        // </div>
    );
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
