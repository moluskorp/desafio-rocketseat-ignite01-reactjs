import { Counter } from './Counter';
import styled from './Tasks.module.css';
import clipboardImg from '../assets/clipboard.svg';
import { EmptyTasks } from './EmptyTasks';
import { Task } from './Task';

type Task = {
    id: string;
    title: string;
    done: boolean;
  }

interface Props {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
}

export function Tasks({tasks, setTasks}: Props){

    const onChangeDone = (id: string) => {
        const newTasks = tasks.map(task => {
            if(task.id === id) {
                return {...task, done: !task.done}
            }else {
                return task;
            }
        });
        setTasks(newTasks);
    }

    const onDelete = (id: string) => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }

    return (
        <>
        <header className={styled.header}>
            <div className={styled.tasksCreated}>
                Tarefas criadas <Counter count={2}/>
            </div>
            <div className={styled.tasksCompleted}>
                Concluídas <Counter count={4}/>
            </div>
        </header>
        <div className={styled.Tasks}>
            {tasks.length === 0 ? <EmptyTasks /> : (
                tasks.map(task => (
                    <Task 
                        key={task.id} 
                        task={task} 
                        onChangeDone={onChangeDone}
                        onDelete={onDelete}
                    />
                ))
            )}
        </div>

        </>
    )
}