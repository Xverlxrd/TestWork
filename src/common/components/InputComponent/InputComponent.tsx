import React, {FC} from 'react';
import './InputComponent.css'
import {Icon} from "@iconify/react";


interface InputProps {
    type: string
    placeholder?: string
    onChange?: any
    value?: string
}

const InputComponent:FC<InputProps> = ({type, value, placeholder, onChange}) => {
    return (
        <div className='input__container'>
            <input
                className='input__search'
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            <Icon className='input__img' icon="tabler:search" color='white'/>
        </div>
    );
};

export default InputComponent;