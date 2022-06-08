import './global.css'
import styled from './App.module.css';
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { useState } from 'react';
import { Tasks } from './components/Tasks';
import {v4 as uuidv4} from 'uuid';


type Task = {
  id: string;
  title: string;
  done: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Lavar Roupa', done: false },
    { id: '2', title: 'Levar o lixo pra fora', done: true },
  ]);

  const tasksOrdered = tasks.sort((a, b) => {
    if (a.done === b.done) {
      return 0;
    } else if (a.done) {
      return 1;
    } else {
      return -1;
    }
  });

  const handleAddTask = (title: string) => {
    const newTask = {
      id: uuidv4(),
      title,
      done: false,
  };
    setTasks((state) => [...state, newTask]);
  }

  return (
    <>
      <Header />
      <div className={styled.container}>
        <NewTask onAddTask={handleAddTask}/>
        <Tasks tasks={tasksOrdered} setTasks={setTasks}/>
      </div>
    </>
  )
}

export default App
