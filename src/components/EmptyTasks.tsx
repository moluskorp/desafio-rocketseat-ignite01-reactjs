import styled from './EmptyTasks.module.css';
import clipboardImg from '../assets/clipboard.svg';

export function EmptyTasks() {
    return(
        <div className={styled.Container}>
            <img src={clipboardImg}/>
            <p className={styled.Title}>
                Você ainda não tem tarefas cadastradas
            </p>
            <p>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}