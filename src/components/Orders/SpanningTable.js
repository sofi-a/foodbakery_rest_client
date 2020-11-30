import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
});

const SpanningTable = ({ record = {}, source, tax_rate, taxes, subtotal, total, currency }) => {
    const classes = useStyles();
    const rows = record[source];

    const ccyFormat = num => `${Number(num).toFixed(2)}`;

    return (
        <TableContainer component={Box}>
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={3}>
                            Details
                        </TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Desc</TableCell>
                        <TableCell align="right">Category</TableCell>
                        <TableCell align="right">Extras</TableCell>
                        <TableCell align="right">Unit Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.title}</TableCell>
                            <TableCell align="right">{row.category}</TableCell>
                            <TableCell align="right">{row.extras.join(', ')}</TableCell>
                            <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={2}>Subtotal</TableCell>
                        <TableCell align="right">{ccyFormat(record[subtotal])}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Tax</TableCell>
                        <TableCell align="right">{`${record[tax_rate]} %`}</TableCell>
                        <TableCell align="right">{ccyFormat(record[taxes])}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                    <TableCell align="right">{ccyFormat(record[total])} {record[currency]}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

SpanningTable.propTypes = {
    record: PropTypes.object.isRequired,
    source: PropTypes.string.isRequired,
    tax_rate: PropTypes.string.isRequired,
    taxes: PropTypes.string.isRequired,
    subtotal: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};

export default SpanningTable;
