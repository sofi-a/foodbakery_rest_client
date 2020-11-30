import React from 'react';
import { useGetOne } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { DateField, SwitchField, TextField } from '../Fields';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(3)
    },
    title: {
        fontWeight: 'bold',
    },
}));

const PackageOrderShow = ({ id }) => {
    const classes = useStyles();
    const { data, loaded } = useGetOne('package-orders', id);

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
                        format="Membership Order #{$}"
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
                    <Grid item xs={12}>
                        <TextField record={data} source="expiry" />
                    </Grid>
                    <Grid item xs={12}>
                        <DateField record={data} source="expiry_date" />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h3">
                        Membership Information    
                    </Typography>                        
                </Grid>
                <Grid item container>
                    <Grid item xs={12}>
                        <Typography>
                            <span className={classes.title}>Number of Tags</span>: {' '}
                            {data['membership_info']['num_tags']}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                       <SwitchField record={data} source="membership_info.reviews" />
                    </Grid>
                    <Grid item xs={12}>
                       <SwitchField record={data} source="membership_info.featured" />
                    </Grid>
                    <Grid item xs={12}>
                       <SwitchField record={data} source="membership_info.top_cat" />
                    </Grid>
                    <Grid item xs={12}>
                       <SwitchField record={data} source="membership_info.phone" />
                    </Grid>
                    <Grid item xs={12}>
                       <SwitchField record={data} source="membership_info.website" />
                    </Grid>
                    <Grid item xs={12}>
                       <SwitchField record={data} source="membership_info.social_reach" />
                    </Grid>
                    <Grid item xs={12}>
                       <SwitchField record={data} source="membership_info.ror" />
                    </Grid>
                </Grid>
            </Grid>
        );
}

export default PackageOrderShow;
