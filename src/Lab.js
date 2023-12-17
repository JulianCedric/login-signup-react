import React, { useState, useEffect, Component } from 'react';
import { Button, Card, Checkbox, Grid, List, Menu, Segment } from 'semantic-ui-react';

const Lab = () => {

    const [ activeItem, setActiveItem] = useState('evening');

    const handleItemClick = (e, { name }) => {
        console.log('activeItem1:', activeItem);
        setActiveItem(name);
        console.log('activeItem2:', activeItem);
    };

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
            <p>Lab</p>
            <Grid>
                <Grid.Column width={4}>
                <Menu fluid vertical tabular>
                    <Menu.Item
                    name='Morning Routine'
                    active={activeItem === 'morning'}
                    onClick={handleItemClick}
                    />
                    <Menu.Item
                    name='Deep Work Session'
                    active={activeItem === 'dws'}
                    onClick={handleItemClick}
                    />
                    <Menu.Item
                    name='Evening Routine'
                    active={activeItem === 'evening'}
                    onClick={handleItemClick}
                    />
                </Menu>
                </Grid.Column>
                <Grid.Column stretched width={12}>

                <Segment>
                    
                    <Card>
                        <Card.Content>
                            <Card.Header  textAlign='center'>EVENING ROUTINE</Card.Header>
                            <Card.Meta  textAlign='center'>9:00 PM - 12:00 AM</Card.Meta>
                            <Card.Description>
                                <h4 className='center'>Tasks</h4>
                                <List>
                                    <List.Item><Checkbox label='Put on running gear.'/></List.Item>
                                    <List.Item><Checkbox label='Walk to gym.'/></List.Item>
                                    <List.Item><Checkbox label='Treadmill for at least 2 miles.'/></List.Item>
                                    <List.Item><Checkbox label='Sauna for at least 20 minutes.'/></List.Item>
                                    <List.Item><Checkbox label='Shower and get dressed for the day.'/></List.Item>
                                </List>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                            <Button basic color='grey'>
                            <h4>Cautions</h4>
                            </Button>
                            <Button basic color='grey'>
                            <h4>Misc</h4>
                            </Button>
                            </div>
                            <Segment textAlign='center'>{currentTime.toLocaleTimeString()}</Segment>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Card.Header  textAlign='center'>EVENING ROUTINE</Card.Header>
                            <Card.Meta  textAlign='center'>9:00 PM - 12:00 AM</Card.Meta>
                            <Card.Description>
                                <h4 className='center'>Tasks</h4>
                                <List>
                                    <List.Item><Checkbox label='Put on running gear.'/></List.Item>
                                    <List.Item><Checkbox label='Walk to gym.'/></List.Item>
                                    <List.Item><Checkbox label='Treadmill for at least 2 miles.'/></List.Item>
                                    <List.Item><Checkbox label='Sauna for at least 20 minutes.'/></List.Item>
                                    <List.Item><Checkbox label='Shower and get dressed for the day.'/></List.Item>
                                </List>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                            <Button basic color='grey'>
                            <h4>Cautions</h4>
                            </Button>
                            <Button basic color='grey'>
                            <h4>Misc</h4>
                            </Button>
                            </div>
                            <Segment textAlign='center'>{currentTime.toLocaleTimeString()}</Segment>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Card.Header  textAlign='center'>EVENING ROUTINE</Card.Header>
                            <Card.Meta  textAlign='center'>9:00 PM - 12:00 AM</Card.Meta>
                            <Card.Description>
                                <h4 className='center'>Tasks</h4>
                                <List>
                                    <List.Item><Checkbox label='Put on running gear.'/></List.Item>
                                    <List.Item><Checkbox label='Walk to gym.'/></List.Item>
                                    <List.Item><Checkbox label='Treadmill for at least 2 miles.'/></List.Item>
                                    <List.Item><Checkbox label='Sauna for at least 20 minutes.'/></List.Item>
                                    <List.Item><Checkbox label='Shower and get dressed for the day.'/></List.Item>
                                </List>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                            <Button basic color='grey'>
                            <h4>Cautions</h4>
                            </Button>
                            <Button basic color='grey'>
                            <h4>Misc</h4>
                            </Button>
                            </div>
                            <Segment textAlign='center'>{currentTime.toLocaleTimeString()}</Segment>
                        </Card.Content>
                    </Card>

                </Segment>

                </Grid.Column>
            </Grid>
        </>
    );
};

export default Lab;