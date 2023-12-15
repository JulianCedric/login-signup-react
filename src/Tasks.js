import React, { useState } from 'react';
import { Button, Checkbox, Form, Grid, Header, Icon, List, Segment } from 'semantic-ui-react';
// import NewTaskForm from './NewTaskForm';
import Task from './Task';

const TASKS = [
    {
      id: 0,
      desc: ''
    }
  ];

export const Tasks = props => {
    const [desc, setDesc] = useState('');
    const [tasks, setTasks] = useState(TASKS);

    const addTask = e => {
        console.log('here2');
    };

    return (
        <>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h1' color='blue' textAlign='center'>
                        ToDo List App
                    </Header>
                    {/* <NewTaskForm addTask={addTask}/> */}
                    <Segment textAlign='left'>
                        <Header as='h2' textAlign='center'>
                            Tasks
                        </Header>
                        <hr />
                        <div>
                            <List>
                                <List.Item>
                                    <Checkbox label='Groceries' />
                                    <List.Content floated='right'>
                                        <Button size='mini'><Icon name='edit outline' /></Button>
                                        <Button size='mini'><Icon name='trash alternate outline' /></Button>
                                    </List.Content>
                                </List.Item>
                                <Task key={tasks.id} desc={tasks.desc} />
                            </List>
                        </div>
                    </Segment>
                </Grid.Column>
            </Grid>
        </>
    );
};

export default Tasks;