import React, { useState } from 'react';
import ToDo_TaskList from './ToDo_TaskList';

function ToDo_Main() {

    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [tasks, setTasks] = useState<{ task: any; description: any }[]>([]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('New Task:', task);
        setTasks([...tasks, { task, description }]);
        setTask('');
        setDescription('');
    };

    const handleClear = () => {
        setTask(''); // Clear task input
        setDescription(''); // Clear description input
        setTasks([]); // Clear all tasks from list
    };




    return (
        <div> {/* Parent Div */}


            <div className='ToDo_Main_container'>
                <h2>To do list</h2>
                <p>Let's get to work</p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="What do you want to do?"
                        className='input_task'
                    />
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} // Update description state
                        placeholder="What is it about?" // Placeholder for description input
                        className='input_description'
                    />
                    <input type="submit" value="Add Task" /> {/* Submit button */}
                    <button type="button" onClick={handleClear}>Clear All</button> {/* Clear button */}
                </form>


            </div>

            <div className='ToDo_TaskList_container'>
                {/* Pass task and description as props */}
                <ToDo_TaskList tasks={tasks} />
            </div>


        </div>

    );
}

export default ToDo_Main;