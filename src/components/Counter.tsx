import styled from './Counter.module.css';

interface Props {
    count: number;
}

export function Counter({count}: Props) {
    return (
        <div className={styled.Container}>
            <span>{count}</span>
        </div>
    )
}