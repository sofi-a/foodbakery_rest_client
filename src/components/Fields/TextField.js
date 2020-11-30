import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    title: {
        fontWeight: 'bold',
    },
});

const TextField = ({ record = {}, source, format, ...rest }) => {
    const classes = useStyles();

    return (
        <Typography {...rest}>
            {
                format ?
                    <div>
                        {format.replace(/\{\$\}/g, record[source])}
                    </div> :
                    <div>
                        <span className={classes.title}>
                            {
                                source.split('_').map(subStr => (
                                    subStr.replace(/^./, str => str.toUpperCase())
                                )).join(' ')
                            }
                        </span>: {record[source]}
                    </div>
            }
        </Typography>
    );
}

TextField.propTypes = {
    record: PropTypes.object.isRequired,
    source: PropTypes.string.isRequired,
    format: PropTypes.string,
};

export default TextField;