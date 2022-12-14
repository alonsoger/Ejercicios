//Componente A

import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../../components/pure/task';
import TaskForm from '../pure/forms/taskForm';


const TaskListComponent = () => {

    const defaultTasks1 = new Task('Example1', 'Default', false, LEVELS.URGENTE);
    const defaultTasks2 = new Task('Example2', 'Default', true, LEVELS.NORMAL);
    const defaultTasks3 = new Task('Example3', 'Default', true, LEVELS.BLOCKING);
    
    //Estado del componente
    const [tasks, setTasks] = useState([defaultTasks1, defaultTasks2, defaultTasks3]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente.
    useEffect(() => {
        console.log('Task State has been modified');
        setTimeout(() =>{
            setLoading(false);
        }, 2000);
        
        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [tasks]);

    function completeTask(task) {
        console.log('Completed this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        //We update the state of the component and it will update the iteration of the tasks in order to show the task updated.
        setTasks(tempTasks);
    }

    function deleteTask(task){
        console.log('Completed this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }

    function addTask(task) {
        console.log('Completed this Task:', task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    // Lo podriamos poner en otro archivo, para no cargar mucho uno y poder modularlo mas.
    const Table = () => {
        return (
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
                    { tasks.map((task, index) => {
                        return (
                            <TaskComponent 
                                key={index} 
                                task={ task }
                                complete={ completeTask }
                                remove={ deleteTask }
                            ></TaskComponent>
                            )
                    })}
                </tbody>
            </table>
        )
    }

    let taskTable;

    if(tasks.length > 0) {
        taskTable = <Table></Table>
    } else {
        taskTable = (
            <div>
                <h3>There are no tasks to show</h3>
                <h4>Please add a new Task</h4>
            </div>
        )
    }

    const loadingStyle = {
        color: 'gray',
        fontSize: '40px',
        fontWeight: 'bold'
    }




    //Los estilos tambien se pueden guardar en variables y pasarselas a los divs. 
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>YOUR TASKS:</h5>
                    </div>
                    <div className='card-body' 
                        data-mdb-perfect-scrollbar='true' 
                        style={{position: 'relative', height: '400px'}}>
                        {loading ? (<p style={loadingStyle}>Loading tasks.. </p>) : taskTable }
                    </div>
                    
                </div>
            </div>
            <TaskForm 
                add={addTask}
                length={tasks.length}
            ></TaskForm>
        </div>
    );
};

// TaskList.propTypes = {

// };


export default TaskListComponent;
