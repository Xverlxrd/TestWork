import React from 'react';
import {Icon} from "@iconify/react";
import './SortComponent.css'

const SortComponent = () => {
    return (
        <ul className='sort__container'>
            <li className='sort__id'>
                <p className='sort__text'>ID</p>
                <Icon className='sort__img' icon="simple-line-icons:arrow-down" color='white' />
            </li>
            <li className='sort__title'>
                <p className='sort__text'>Заголовок</p>
                <Icon className='sort__img' icon="simple-line-icons:arrow-down" color='white'/>
            </li>
            <li className='sort__body'>
                <p className='sort__text'>Описание</p>
                <Icon className='sort__img' icon="simple-line-icons:arrow-down" color='white'/>
            </li>
        </ul>
    );
};

export default SortComponent;