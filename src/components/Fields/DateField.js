import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    title: {
        fontWeight: 'bold',
    },
});

const DateField = ({ record = {}, source, format, ...rest }) => {
    const classes = useStyles();

    const toDateString = date => new Date(date).toDateString();

    return (
        <Typography {...rest}>
            {
                format ?
                    <div>
                        {format.replace(/\{\$\}/g, toDateString(record[source]))}
                    </div> :
                    <div>
                        <span className={classes.title}>
                            {
                                source.split('_').map(subStr => (
                                    subStr.replace(/^./, str => str.toUpperCase())
                                )).join(' ')
                            }
                        </span>: {toDateString(record[source])}
                    </div>
            }
        </Typography>
    );
}

DateField.propTypes = {
    record: PropTypes.object.isRequired,
    source: PropTypes.string.isRequired,
    format: PropTypes.string,
};

export default DateField;