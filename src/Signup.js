import React, { useState } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

const Signup = ({ handleSignup }) => {
    const [ newEmail, setNewEmail ] = useState('');
    const [ newFirstName, setNewFirstName ] = useState('');
    const [ newLastName, setNewLastName ] = useState('');
    const [ newUsername, setNewUsername ] = useState('');
    const [ newPassword, setNewPassword ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // handleLogin(e);
    };

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h1' color='blue' textAlign='center'>
                    Signup
                </Header>
                <Form size='large' onSubmit={handleSubmit}>
                    <Segment stacked>
                        <Form.Input 
                            fluid 
                            icon='user' 
                            iconPosition='left' 
                            placeholder='Email' 
                            type='email'
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                            required
                        />
                        <Form.Input 
                            fluid 
                            icon='user' 
                            iconPosition='left' 
                            placeholder='First name' 
                            type='text'
                            value={newFirstName}
                            onChange={(e) => setNewFirstName(e.target.value)}
                            required
                        />
                        <Form.Input 
                            fluid 
                            icon='user' 
                            iconPosition='left' 
                            placeholder='Last name' 
                            type='text'
                            value={newFirstName}
                            onChange={(e) => setNewLastName(e.target.value)}
                            required
                        />
                        <Form.Input 
                            fluid 
                            icon='user' 
                            iconPosition='left' 
                            placeholder='Username' 
                            type='text'
                            value={newUsername}
                            onChange={(e) => setNewUsername(e.target.value)}
                            required
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                        <Button color='blue' fluid size='large'>
                            Signup
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    Already have an account? <a href='#'>Log in</a>
                </Message>
            </Grid.Column>
        </Grid>
    );
};

export default Signup;