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

    return (
        <div>
            <div>
                <h1>YOUR TASKS: </h1>
            </div>
            <TaskComponent task={ defaultTasks } ></TaskComponent>
        </div>
    );
};

// TaskList.propTypes = {

// };


export default TaskListComponent;
