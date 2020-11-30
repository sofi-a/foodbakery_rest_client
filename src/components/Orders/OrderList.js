import React from 'react';
import {
    Datagrid,
    DateField,
    List,
    NumberField,
    TextField,
} from 'react-admin';

const OrderList = (props) => {
    return (
        <List
            sort={{ field: 'date', order: 'DESC' }}
            bulkActionButtons={false}
            {...props}>
            <Datagrid rowClick="show">
                <TextField source="id" />
                <DateField source="date" />
                <TextField source="order_status" />
                <TextField source="payment_status" />
                <NumberField source="total" />
                <TextField source="currency" />
                <TextField source="buyer" />
                <TextField source="restaurant" />
                <TextField source="restaurant_owner" />
            </Datagrid>
        </List>
    )
}

export default OrderList;