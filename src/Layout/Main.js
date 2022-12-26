import React from 'react';
import { Outlet } from 'react-router-dom';
import Form from '../Components/Form';
import Table from '../Components/Table';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Table></Table>
            <Form></Form>
        </div>
    );
};

export default Main;