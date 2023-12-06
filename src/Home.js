import React, { useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import Clock from './Clock';
import Tasks from './Tasks';

const Home = () => {
    const [ activeItem, setActiveItem ] = useState('tasks');

    const handleItemClick = (e, { name }) => ({ activeItem: name });

    return(
        <div>
            <p>Home Page</p>
            <Menu attached='top' tabular>
                <Menu.Item
                    name='tasks'
                    active={activeItem === 'tasks'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='routines calendar'
                    active={activeItem === 'routines calendar'}
                    onClick={handleItemClick}
                />
            </Menu>
            <Segment attached='bottom'>

            </Segment>
        </div>
    );
};

export default Home;