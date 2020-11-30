import React from 'react';
import { useGetOne } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { DateField, TextField } from '../Fields';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(3)
    }
}));

const WithdrawalShow = ({ id }) => {
    const classes = useStyles();
    const { data, loaded } = useGetOne('withdrawals', id);

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
                        format="Withdrawal #{$}"
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
                        <TextField record={data} source="user" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField record={data} source="amount" />
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item xs={12}>
                        <TextField record={data} source="detail" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField record={data} source="status" />
                    </Grid>
                </Grid>
            </Grid>
        );
}

export default WithdrawalShow;
