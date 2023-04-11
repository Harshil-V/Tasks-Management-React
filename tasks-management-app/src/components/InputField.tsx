import React, { useRef } from 'react';
import './styles.css';

interface Props {
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField:React.FC<Props> = ({task, setTask, handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form 
            className="input" 
            onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            }}>
            
            <input 
                type='input' 
                placeholder='Enter a task' 
                className='input__box'
                value={task}
                onChange={(e) => setTask(e.target.value)}>    
            </input>
            <button className='input__submit' type='submit'>Enter</button>
        </form>
    )
}

export default InputField