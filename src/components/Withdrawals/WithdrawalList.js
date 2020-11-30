import React from 'react';
import {
    Datagrid,
    DateField,
    List,
    NumberField,
    TextField,
} from 'react-admin';

const WithdrawalList = (props) => {
    return (
        <List
            sort={{ field: 'date', order: 'DESC' }}
            bulkActionButtons={false}
            {...props}>
            <Datagrid rowClick="show">
                <TextField source="id" />
                <DateField source="date" />
                <TextField source="user" />
                <NumberField source="amount" />
                <NumberField source="status" />
            </Datagrid>
        </List>
    )
}

export default WithdrawalList;