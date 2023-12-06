import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  Checkbox,
  Grid,
  Header,
  List,
  Image,
  Segment,
} from 'semantic-ui-react';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    function tick() {
      setCurrentTime(new Date());
    }

    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  useEffect(() => {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    if (hours === 23 && minutes === 47 && seconds === 0) { // 11:47:00 PM in 24-hour format
      console.log('Result A');
    };
  }, [currentTime]);

  return (
    <>
      <div>
      <Header
      as='h3'
      content='Stackable Vertically Divided Grid'
      // style={style.h3}
      textAlign='center'
    />
    <Grid columns={2} container divided='vertically' stackable>
      <Grid.Row>
        <Grid.Column>
          <Segment>It is {currentTime.toLocaleTimeString()}.</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment></Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <p>Time Container 1 Dos:</p>
            <Card>
              <Card.Content>
                <Image
                  floated='right'
                  size='mini'
                  src='/images/avatar/large/steve.jpg'
                />
                <Card.Header>Time Container Title</Card.Header>
                <Card.Meta>Time Container Description</Card.Meta>
                <Card.Description>
                  <Checkbox label='task 1 description'/>
                  <Checkbox label='task 2 description'/>
                  <Checkbox label='etc.'/>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>
                    Approve
                  </Button>
                  <Button basic color='red'>
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Time Container 1 Don'ts:</Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <p>It's time to do your Daily Exercise Routine, Julian.</p>
            <Card>
              <Card.Content>
                <Image
                  floated='right'
                  size='mini'
                  src='/images/avatar/large/steve.jpg'
                />
                <Card.Header>It's time to do your Daily Exercise Routine, Julian.</Card.Header>
                <Card.Meta>This is your Keystone Habit. Doing it completely and correctly will cause an overall improvement to your current state. Approximate duration: 1 hour. Recurrence: Daily, Morning.</Card.Meta>
                <Card.Description>
                  <List>
                    <List.Item><Checkbox label='Groceries'/></List.Item>
                    <List.Item><Checkbox label='Laundery'/></List.Item>
                    <List.Item><Checkbox label='Trash'/></List.Item>
                  </List>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>
                    Approve
                  </Button>
                  <Button basic color='red'>
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
      </div>
      <div>
        <h2>It is {currentTime.toLocaleTimeString()}.</h2>
      </div>
    </>
  );
};

export default Clock;
