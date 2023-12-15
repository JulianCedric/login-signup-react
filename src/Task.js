import React from 'react';
import { Checkbox, List } from 'semantic-ui-react';

const Task = desc => {
    console.log(desc)
    return (
        <List.Item>
            <Checkbox label={desc}/>
        </List.Item>
    );
};

export default Task;