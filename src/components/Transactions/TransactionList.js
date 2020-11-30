import React from 'react';
import {
    Datagrid,
    DateField,
    List,
    NumberField,
    ReferenceField,
    TextField,
} from 'react-admin';

const TransactionList = (props) => {
    return (
        <List
            sort={{ field: 'date', order: 'DESC' }}
            bulkActionButtons={false}
            {...props}>
            <Datagrid rowClick="show">
                <TextField source="id" />
                <DateField source="date" />
                <ReferenceField source="order_id" reference="orders">
                    <TextField source="id" />
                </ReferenceField>
                <TextField source="order_type" />
                <NumberField source="total" />
                <TextField source="currency" />
                <NumberField source="commission_charged" />
                <NumberField source="credited_amount" />
                <TextField source="buyer" />
                <TextField source="restaurant" />
                <TextField source="restaurant_owner" />
            </Datagrid>
        </List>
    )
}

export default TransactionList;