import React from 'react';
import { ReferenceField, useGetOne } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { TextField, DateField } from '../Fields';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(3)
    },
    title: {
        fontWeight: 'bold',
    },
}));

const TransactionShow = ({ id }) => {
    const classes = useStyles();
    const { data, loaded } = useGetOne('transactions', id);

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
                        format="Transaction #{$}"
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
                        <TextField record={data} source="order_id" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField record={data} source="order_type" />
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
                <Grid item xs={12}>
                    <Typography variant="h3">
                        Buyer Information
                    </Typography>
                </Grid>
                <Grid item container>
                    <Grid item xs={12}>
                        <Typography>
                            <span className={classes.title}>First Name</span>: {' '}
                            {data['buyer_info']['first_name']}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            <span className={classes.title}>Last Name</span>: {' '}
                            {data['buyer_info']['last_name']}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            <span className={classes.title}>Email</span>: {' '}
                            {data['buyer_info']['email']}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            <span className={classes.title}>Phone Number</span>: {' '}
                            {data['buyer_info']['phone_number']}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            <span className={classes.title}>Address</span>: {' '}
                            {data['buyer_info']['address']}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h3">
                        Payment Information    
                    </Typography>
                </Grid>
                <Grid item container>
                    <Grid item xs={12}>
                        <TextField record={data} source="payment_gateway" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField record={data} source="payment_status" />
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item xs={12}>
                        <TextField record={data} source="total" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField record={data} source="currency" />
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

export default TransactionShow;
