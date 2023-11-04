import React, { useEffect, useState } from 'react';

function Task({ task, tasks, setTasks }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);

    // useEffect(() => {
    //     const storedTasks = localStorage.getItem('tasks');
    //     if (storedTasks) {
    //         setTasks(JSON.parse(storedTasks));
    //     }
    // }, [setTasks]);

        const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        let updatedTasks = tasks.map((t) => {
            if (t.id === task.id) {
                t.title = editedTitle;
            }
            return t;
        });
        console.log(updatedTasks);

        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
    };

    const handleDelete = () => {
        const updatedTasks = tasks.filter((t) => t.id !== task.id);
        console.log(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
    };

    const handleComplete = () => {
        const updatedTasks = tasks.map((t) => {
            if (t.id === task.id) {
                t.completed = !t.completed;
            }
            return t;
        });

        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
    };


    return (
        <div>
            {isEditing ? (
                <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                />
            ) : (
                <span>{task.title}</span>
            )}
            <input type="checkbox" checked={task.completed} onChange={handleComplete} />
            {isEditing ? (
                <button onClick={handleSave}>Save</button>
            ) : (
                <>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </>
            )}
        </div>
    );



}

export default Task;