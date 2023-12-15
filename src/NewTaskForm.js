// import React, {useState} from 'react';
// import { Button, Checkbox, Form, Grid, Header, Icon, List, Segment } from 'semantic-ui-react';

// const NewTaskForm = () => {

//     const handleSubmit = e => {
//         e.preventDefault();
//         // if (!desc.trim()) return;
//         // const newTask = {
//         //     id: Date.now(),
//         //     desc: e.target.value
//         // };
//         addTask(e);
//         // setTasks([...tasks, newTask]);
//         // console.log('tasks:', tasks);
//         // console.log('e.target.value:', e.target.value);
//         // setDesc('');
//     };

//     return(
//         <Form size='large' onSubmit={handleSubmit}>
//                         <Segment stacked>
//                             <Form.Input
//                                 fluid
//                                 icon='user'
//                                 iconPosition='left'
//                                 placeholder='New task'
//                                 type='text'
//                                 value={desc}
//                                 onChange={(e) => setDesc(e.target.value)}
//                                 required />
//                             <Button color='blue' fluid size='large'>
//                                 Submit
//                             </Button>
//                         </Segment>
//                     </Form>
//     );
// };

// export default NewTaskForm;