import rocketImg from '../assets/rocket.svg';
import styled from './Header.module.css';

export function Header() {
    return(
        <header className={styled.Header}>
            <img src={rocketImg} alt="Ícone de um Foguete"/>
            <h1 className={styled.H1}>to</h1><h2 className={styled.H2}>do</h2>
        </header>
    )
}