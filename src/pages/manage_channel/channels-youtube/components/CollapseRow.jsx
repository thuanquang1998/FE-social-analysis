/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { TableRow, TableCell, IconButton, Collapse, Box, Typography, Table, TableHead, TableBody, Avatar, Chip } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import StyledTableCell from 'components/tables/StyledTableCell';
import StyledTableRow from 'components/tables/StyledTableRow';

import ButtonDetail from 'components/buttons/ButtonDetail';
import ButtonDelete from 'components/buttons/ButtonDelete';
import ButtonEdit from 'components/buttons/ButtonEdit';

function CollapseRow({ row, onShowDetail, onShowModalEdit, onShowModalDelete }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <StyledTableRow>
                {/* <StyledTableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </StyledTableCell> */}
                <StyledTableCell align="center" component="th" scope="row">
                    <Avatar
                        alt="Avatar"
                        src={row.thumbnail}
                        sx={{ width: 45, height: 45, margin: '0 auto !important', objectFit: 'cover' }}
                    />
                </StyledTableCell>
                <StyledTableCell align="center">
                    <Typography variant="h4" gutterBottom component="div">
                        {row.title}
                    </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                    <Chip size="small" color="primary" label="Active" />
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '20%' }}>
                    <ButtonDetail handleClick={onShowDetail} />
                    <ButtonEdit handleClick={onShowModalEdit} />

                    <ButtonDelete handleClick={onShowModalDelete} />
                </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {/* {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">{Math.round(historyRow.amount * row.price * 100) / 100}</TableCell>
                                        </TableRow>
                                    ))} */}
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </StyledTableRow>
        </>
    );
}

export default CollapseRow;
