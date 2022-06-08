import { Trash } from 'phosphor-react';
import { Checkbox } from './Checkbox';
import styled from './Task.module.css';

type TaskType = {
    id: string;
    title: string;
    done: boolean;
}

interface Props {
    task: TaskType;
    onChangeDone: (id: string) => void;
    onDelete: (id: string) => void;
}



export function Task({task, onChangeDone, onDelete}: Props) {

    const handleChangeDone = () => {
        onChangeDone(task.id);
    }

    const handleDeleteTask = () => {
        onDelete(task.id);
    }
    
    const {done, title} = task
    return(
        <div className={styled.Container}>
            <div className={styled.Checkbox} onClick={handleChangeDone}>
                <Checkbox done={done}/>
            </div>
            <p className={done ? styled.TitleDone : ''}>{title}</p>
            <div className={styled.Trash} onClick={handleDeleteTask}>
                <Trash size={20}/>
            </div>
        </div>
    )
}