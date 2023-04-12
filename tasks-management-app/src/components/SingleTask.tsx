import React, { useState } from 'react'
import { Task } from '../models'
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai"
import './styles.css';

interface Props {
    task: Task;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask: React.FC<Props> = ({ task, tasks, setTasks }) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTask, setEditTask] = useState<string>(task.task);

    const handleEdit = (event : React.FormEvent<HTMLFormElement>, id: number) => {
        event.preventDefault();

        setTasks(tasks.map((task) => (
            task.id === id ? {...task, task:editTask} : task
        )))
        setEdit(false);

    }

    const handleDelete = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const handleDone = (id: number) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, isDone: !task.isDone } : task
            )
        );
    };

    return (
        <form className='tasks__single' onSubmit={(e) => handleEdit(e, task.id)}>
            {edit ? (
                <input 
                    value={editTask} 
                    onChange={(e) => setEditTask(e.target.value)} 
                    className='tasks__single--editText'
                />
            ) : (
                task.isDone ? (
                    <s className='tasks__single--text'>{task.task}</s>
                ) : (
                    <span className='tasks__single--text'>{task.task}</span>
                )
            )}


            <div className='icon__group'>
                <span 
                    className='icon' 
                    onClick={() => {
                        if (!edit && !task.isDone) {
                            setEdit(!edit);
                        }
                    }}>
                    <AiFillEdit />
                </span>
                <span className='icon' onClick={() => handleDelete(task.id)}><AiFillDelete /></span>
                <span className='icon' onClick={() => handleDone(task.id)}><AiOutlineCheck /></span>
            </div>
        </form>
    )
}

export default SingleTask