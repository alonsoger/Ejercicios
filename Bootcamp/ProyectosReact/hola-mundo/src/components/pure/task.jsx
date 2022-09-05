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
        <div>
            <h2 className="task-name" > {task.name} </h2>
            <h3> {task.description} </h3>
            <h4> {task.level} </h4>
            <h5> {task.completed ? 'COMPLETED' : 'PENDING'} </h5>
        </div>
    );
}


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
