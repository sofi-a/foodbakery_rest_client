import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    title: {
        fontWeight: 'bold',
    },
});

const SwitchField = ({ record = {}, source, ...rest }) => {
    const classes = useStyles();
    const sources = source.split('.');

    return (
        <Typography {...rest}>
            <span className={classes.title}>
                {
                    sources.length === 1 ?
                        source.split('_').map(subStr => (
                            subStr.replace(/^./, str => str.toUpperCase())
                        )).join(' ') :
                        sources[1].split('_').map(subStr => (
                            subStr.replace(/^./, str => str.toUpperCase())
                        )).join(' ')
                }
            </span>: <Switch readOnly checked={sources.length === 1 ? record[source] : record[sources[0]][sources[1]]} />
        </Typography>
    );
}

SwitchField.propTypes = {
    record: PropTypes.object.isRequired,
    source: PropTypes.string.isRequired,
};

export default SwitchField;