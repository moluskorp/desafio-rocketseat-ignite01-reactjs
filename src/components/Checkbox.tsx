import { Check } from 'phosphor-react';
import styled from './Checkbox.module.css';

interface Props {
    done: boolean;
}

export function Checkbox({ done }: Props) {
    if(done) {
        return (
            <div className={styled.ContainerChecked}>
             <Check size={12} weight="bold" />
            </div>
        )
    }else {
        return (
            <div className={styled.Container} />
        )
    }
}