import React from 'react'
import { Task } from '../models'
import { AiFillEdit, AiFillDelete, AiOutlineCheck} from "react-icons/ai"
import './styles.css';


interface Props {
    task: Task;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
} 

const SingleTask: React.FC<Props> = ({task, tasks, setTasks}) => {
  return (
    <form className='tasks__single'>
        <span className='tasks__single--text'>{task.task}</span>
        <div className='icon__group'>
            <span className='icon'><AiFillEdit /></span>
            <span className='icon'><AiFillDelete /></span>
            <span className='icon'><AiOutlineCheck /></span> 
        </div>
    </form>
  )
}

export default SingleTask