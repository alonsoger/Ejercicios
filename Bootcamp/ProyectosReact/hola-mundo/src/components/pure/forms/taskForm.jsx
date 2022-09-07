import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {LEVELS} from './../../../models/levels.enum';

const TaskForm = ({ add }) => {
    
    const nameRef = useRef('');
    const descripcionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);



    return (
        <form>

        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
}

export default TaskForm;
