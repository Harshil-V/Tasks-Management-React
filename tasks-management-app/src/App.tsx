import React, { useState } from 'react';
import './App.css';
import { Task } from './models';
import InputField from './components/InputField';
import TaskList from './components/TaskList';

const App: React.FC = () => {

    const [task, setTask] = useState<string>("");
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
    
        if (task){
            setTasks([...tasks, {id:Date.now(), task: task, isDone: false}]);
            setTask("");
        }
    };


    console.log(tasks)

    return (
        <div className="App">
            <span className="heading">Task Management</span>
            <InputField task={task} setTask={setTask} handleAdd={handleAdd} />
            <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
    );
}

export default App;
