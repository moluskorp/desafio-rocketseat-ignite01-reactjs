import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import styled from './NewTask.module.css';

type Task= {
    id: string;
    title: string;
    done: boolean;
  }

interface Props {
    onAddTask: (title: string) => void;
}

export function NewTask({ onAddTask }: Props) {
    const [taskInput, setTaskInput] = useState('');

    function handleSubmit(event: FormEvent){
        event.preventDefault();
        onAddTask(taskInput);
        setTaskInput('');
    }

    const isButtonDisabled = taskInput.length === 0;
    return(
        <div className={styled.Container}>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    required
                    placeholder='Adicione uma nova tarefa'
                    onChange={e => setTaskInput(e.target.value)}
                    value={taskInput}
                />
                <button type="submit" disabled={isButtonDisabled}>Criar <PlusCircle size={16}/> </button>
            </form>
        </div>
    )
}