import React from 'react';
import { Checkbox, List } from 'semantic-ui-react';

const Task = desc => {
    return (
        <List.Item>
            <Checkbox label={desc}/>
        </List.Item>
    );
};

export default Task;