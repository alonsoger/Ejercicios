import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    const defaultTasks = new Task('Example', 'Default', false, LEVELS.NORMAL);

    //Estado del componente
    const [tasks, setTasks] = useState(defaultTasks);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente.
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [tasks]);

    

    const changeCompleted = (id) => {
        //Podemos cambiar el estado desde una funcion. 
    }
    //Los estilos tambien se pueden guardar en variables y pasarselas a los divs. 
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>YOUR TASKS:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}> 
                        <table>
                            <thead>
                                <tr>
                                    <th scoper='col'>Title</th>
                                    <th scoper='col'>Description</th>
                                    <th scoper='col'>Priority</th>
                                    <th scoper='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TaskComponent task={ defaultTasks } ></TaskComponent>
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

// TaskList.propTypes = {

// };


export default TaskListComponent;
