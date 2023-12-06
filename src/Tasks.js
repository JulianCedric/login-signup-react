import React, { useState } from 'react';
import { Button, Card, Checkbox, Form, Grid, Header, Icon, List, Segment } from 'semantic-ui-react';
import Task from './Task';

const TASKS = [
    {
      id: 0,
      desc: ''
    }
  ];

const Tasks = props => {
    const [ desc, setDesc ] = useState('');
    const [ tasks, setTasks ] = useState(TASKS);

    const handleSubmit = e => {
        e.preventDefault();
        if (!desc.trim()) return; 
        const newTask = {
            id: Date.now(),
            desc: e.target.value
        };
        setTasks([...tasks, newTask]);
        console.log('tasks:', tasks);
        console.log('TASKS:', TASKS);
        setDesc('');

    };

    return (
        <>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h1' color='blue' textAlign='center'>
                        ToDo List App
                    </Header>
                    <Form size='large' onSubmit={handleSubmit}>
                        <Segment stacked>
                            <Form.Input 
                                fluid 
                                icon='user' 
                                iconPosition='left' 
                                placeholder='New task' 
                                type='text'
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                required
                            />
                            <Button color='blue' fluid size='large'>
                                Submit
                            </Button>
                        </Segment>
                    </Form>
                    <Segment textAlign='left'>
                        <Header as='h2' textAlign='center'>
                            Tasks
                        </Header>
                        <hr/>
                        <div>
                            <List>
                                <List.Item>
                                    <Checkbox label='Groceries'/>
                                    <List.Content floated='right'>
                                        <Button size='mini'><Icon name='edit outline'/></Button>
                                        <Button size='mini'><Icon name='trash alternate outline'/></Button>
                                    </List.Content>
                                </List.Item>
                                <Task key={tasks.id} desc={tasks.desc}/>
                            </List>
                        </div>
                    </Segment>
                </Grid.Column>
            </Grid>
        </>
    );
};

export default Tasks;