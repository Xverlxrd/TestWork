import React from 'react';
import { Table } from "antd";
import InputComponent from "@/common/components/InputComponent/InputComponent";
import SortComponent from "@/common/components/SortComponent/SortComponent";
import './TableComponent.css'

const TableComponent = () => {
    return (
        <div className='content__container'>
            <InputComponent  placeholder='Поиск' type='text'/>
            <>
                <SortComponent/>
                <Table />
            </>
        </div>
    );
};

export default TableComponent;