import React from 'react';
// import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTasks = new Task('Example', 'Default', false, LEVELS.NORMAL);

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
