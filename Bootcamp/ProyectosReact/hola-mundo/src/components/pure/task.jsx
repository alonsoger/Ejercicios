import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
//Se importa la hoja de estilos de task.scss
import './../../../src/styles/task.scss';


function TaskComponent({ task }) {

    useEffect(() => {
        console.log('Created Task');
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);

    return (

        <tr className='fw-normal task-name'>
            <th><span className='ms-2'>{task.name}</span></th>
            <td className='align-middle'><span className='ms-2'>{task.descripcion}</span></td>
            <td className='align-middle'>
            {/* SUSTITUIR POR UN BADGE */}
                <span className='ms-2'>{task.level}</span>
            </td>
            <td className='align-middle'>
            {/* SUSTITUIR POR UN ICONOS */}
                { task.completed ?
                    (<i className='bi bi-balloon' style={{color: 'green', fontWeight: 'bold'}} ></i>) 
                    : 
                    (<i className='bi bi-balloon'style={{color: 'red', fontWeight: 'bold'}}></i>)
                }
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
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
