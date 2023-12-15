import React, { useState } from 'react';

import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

const Login = ({ onLogin }) => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleChange = e => {
        console.log('something e', e);
        setUsername(e.target.value);
    };
    
    const handleSubmit = e => {
        e.preventDefault();

        console.log('e:', e);
        console.log('e.target:', e.target);
        console.log('username:', username);
        console.log('password:', password);

        onLogin(e, username, password);

    };

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h1' color='blue' textAlign='center'>
                    Login
                </Header>
                <Form size='large' onSubmit={handleSubmit}>
                    <Segment stacked>
                        <Form.Input 
                            autoFocus
                            fluid 
                            icon='user' 
                            iconPosition='left' 
                            placeholder='Username' 
                            type='text'
                            value={username}
                            onChange={handleChange}
                            required
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Button color='blue' fluid size='large'>
                            Login
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    Don't have an account? <a href='#'>Sign up</a>
                </Message>
            </Grid.Column>
        </Grid>
    );
};

export default Login;