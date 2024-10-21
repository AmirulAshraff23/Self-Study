import React, { useState } from 'react';

interface ToDo_TaskListProps {
    tasks: { task: any; description: any }[]; // Use any here too
}

const ToDo_TaskList: React.FC<ToDo_TaskListProps> = ({ tasks }) => {

    return ( // Use return to send JSX back
        <div> {/*Main Parent div */}
            <div>
                <h3>This is the ToDo_TaskList.tsx</h3>
                <p>It will show the user input from ToDo_Main.tsx</p>
            </div>

            <div className='task_display'>
                {tasks.map((item, index) => (
                    <div key={index}>
                        <h4>{index + 1}. {item.task}</h4>
                        <p>Description: {item.description}</p>
                    </div>
                ))}
            </div>

        </div>

    );

}

export default ToDo_TaskList