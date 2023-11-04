import React, { useEffect, useState } from 'react';
import Task from '../Task/Task';

function TaskList(props) {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        // console.log("vhbbvvv");
        if (newTask) {
            setTasks([...tasks, { id: tasks.length, title: newTask, completed: false }]);
            setNewTask('');
        }
        console.log(newTask);
    };

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    return (
        <div>
            <h1>Task Manager</h1>
            <input
                type="text"
                placeholder="Add a new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
            <div>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
            </div>
        </div>
    );

}

export default TaskList;