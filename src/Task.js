import React from 'react';

const Task = props => {
    console.log('props:', props);
    return (
        <>
            <p>Task:</p>
            <li>{props.desc}</li>
        </>
    );
};

export default Task;