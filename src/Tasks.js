import React, { useState } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

const Tasks = () => {
    const [ desc, setDesc ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('here');
    };

    return (
        <>
        <div>
            <h1>Tasks [ Container ]</h1>
            <p>Tasks:</p>
            <ul className='tasks'>
                <li>example task</li>
            </ul>
        </div>
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
                    <Message>
                        Already have an account? <a href='#'>Log in</a>
                    </Message>
                </Grid.Column>
            </Grid>
        </>
    );
};

export default Tasks;