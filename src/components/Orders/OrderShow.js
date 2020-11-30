import React from 'react';
import { useGetOne } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { DateField, TextField } from '../Fields';
import SpanningTable from './SpanningTable';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(3)
    }
}));

const OrderShow = ({ id }) => {
    const classes = useStyles();
    const { data, loaded } = useGetOne('orders', id);

    if(loaded)
        return (
            <Grid
                container
                component={Paper}
                spacing={3}
                className={classes.root}>
                <Grid item xs={12}>
                    <TextField
                        record={data}
                        source="id"
                        format="Order #{$}"
                        variant="h2" />
                </Grid>
                <Grid item container>
                    <Grid item xs={12}>
                        <DateField record={data} source="date" />
                    </Grid>
                    <Grid item xs={12}>
                        <DateField record={data} source="modified" />
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item xs={12}>
                        <TextField record={data} source="type" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField record={data} source="order_status" />
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item xs={12}>
                        <TextField record={data} source="buyer" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField record={data} source="restaurant" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField record={data} source="restaurant_owner" />
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item xs={12}>
                        <TextField record={data} source="order_date" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField record={data} source="delivery_date" />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <SpanningTable
                        record={data}
                        source="items"
                        tax_rate="vat_percent"
                        taxes="vat"
                        subtotal="subtotal"
                        total="total"
                        currency="currency" />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h3">
                        Payment Information    
                    </Typography>                        
                </Grid>
                <Grid item container>
                    <Grid item xs={12}>
                        <TextField record={data} source="payment_type" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField record={data} source="payment_status" />
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item xs={12}>
                        <TextField record={data} source="order_fee_type" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField record={data} source="order_fee" />
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item xs={12}>
                        <TextField record={data} source="commission_charged" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField record={data} source="credited_amount" />
                    </Grid>
                </Grid>
            </Grid>
        );
}

export default OrderShow;
