import React from 'react';
import {
    Datagrid,
    DateField,
    List,
    NumberField,
    TextField,
} from 'react-admin';

const PackageOrderList = (props) => {
    return (
        <List
            title="Membership Orders"
            sort={{ field: 'date', order: 'DESC' }}
            bulkActionButtons={false}
            {...props}>
            <Datagrid rowClick="show">
                <TextField source="id" />
                <DateField source="date" />
                <TextField source="membership_type" />
                <TextField source="user" />
                <NumberField source="amount" />
            </Datagrid>
        </List>
    )
}

export default PackageOrderList;