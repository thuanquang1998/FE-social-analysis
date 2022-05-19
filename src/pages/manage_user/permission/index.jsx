import React, { useState } from 'react';
import MainCard from 'components/cards/MainCard';
import SecondaryAction from 'components/cards/CardSecondaryAction';

// import tables component
import StyledTableCell from 'components/tables/StyledTableCell';
import StyledTableRow from 'components/tables/StyledTableRow';

import ButtonCreate from 'components/buttons/ButtonCreate';
import ButtonDelete from 'components/buttons/ButtonDelete';
import ButtonEdit from 'components/buttons/ButtonEdit';
import ButtonDetail from 'components/buttons/ButtonDetail';

import {
    Box,
    Chip,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination,
    InputAdornment,
    CircularProgress,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField
} from '@mui/material';

const listServices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Permission(props) {
    const [loading, setLoading] = useState(false);

    const [servicesRender, setServicesRender] = useState([...listServices]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const [showDetail, setShowDetail] = useState(null);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <MainCard
            title="Permission"
            secondary={<ButtonCreate title="Add Permission" handleClick={() => console.log('ooooooooooooooooo')} />}
        >
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Status</StyledTableCell>
                            <StyledTableCell align="center" style={{ width: '20%' }}>
                                Actions
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading && (
                            <StyledTableRow style={{ height: 300 }}>
                                <StyledTableCell colSpan={6}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            width: '100%',
                                            height: '100%',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <CircularProgress />
                                    </Box>
                                </StyledTableCell>
                            </StyledTableRow>
                        )}
                        {!loading &&
                            (rowsPerPage > 0
                                ? servicesRender.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : servicesRender
                            ).map((item, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell>create</StyledTableCell>
                                    <StyledTableCell>
                                        <Chip size="small" color="primary" label="Active" />
                                    </StyledTableCell>
                                    <StyledTableCell align="center" style={{ width: '20%' }}>
                                        <ButtonDetail handleClick={() => console.log('View detail')} />

                                        <ButtonEdit handleClick={() => console.log('Edit')} />

                                        <ButtonDelete handleClick={() => console.log('Delete')} />
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                // sx={{
                //     textAlign: 'center',
                //     '& .MuiTablePagination-selectLabel': {
                //         marginBottom: 0
                //     },
                //     '& .MuiTablePagination-displayedRows': {
                //         marginBottom: 0
                //     }
                // }}
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={servicesRender.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </MainCard>
    );
}

export default Permission;
