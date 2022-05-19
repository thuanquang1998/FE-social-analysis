/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import MainCard from 'components/cards/MainCard';

// import tables component
import StyledTableCell from 'components/tables/StyledTableCell';
import StyledTableRow from 'components/tables/StyledTableRow';

// button component
import ButtonCreate from 'components/buttons/ButtonCreate';
import ButtonDelete from 'components/buttons/ButtonDelete';
import ButtonEdit from 'components/buttons/ButtonEdit';
import ButtonDetail from 'components/buttons/ButtonDetail';

// Model
import ModalDetail from 'components/modals/ModalDetail';

// Form
import CreateUserForm from 'components/form/CreateUserForm';

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
    CircularProgress,
    Typography
} from '@mui/material';

const listData = [
    {
        id: 1,
        name: 'Vu Pham',
        email: 'vtc@gmail.com',
        role: ['user', 'user-group', 'admin'],
        status: 'Active'
    },
    {
        id: 2,
        name: 'Huy Che',
        email: 'vtc@gmail.com',
        role: ['user', 'admin'],
        status: 'Active'
    },
    {
        id: 3,
        name: 'Thuan Luu',
        email: 'vtc@gmail.com',
        role: ['user'],
        status: 'Active'
    }
];

function Users(props) {
    const [loading, setLoading] = useState(false);

    const [tableData, setTableData] = useState([...listData]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // state modals CRUD
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState({
        open: false,
        data: null
    });
    const [showModalDetail, setShowModalDetail] = useState({
        open: false,
        data: null
    });

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <MainCard title="Users" secondary={<ButtonCreate title="Add User" handleClick={() => setShowModalCreate(true)} />}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Email</StyledTableCell>
                            <StyledTableCell>Role</StyledTableCell>
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
                            (rowsPerPage > 0 ? tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : tableData).map(
                                (item, index) => (
                                    <StyledTableRow key={index}>
                                        <StyledTableCell>
                                            <Typography variant="h4" gutterBottom component="div">
                                                {item.name}
                                            </Typography>
                                        </StyledTableCell>
                                        <StyledTableCell>{item.email}</StyledTableCell>
                                        <StyledTableCell>
                                            {item.role.map((item, index) => (
                                                <Chip
                                                    key={index}
                                                    size="small"
                                                    sx={{ background: '#00C853', color: '#fff', margin: '2px' }}
                                                    label={item}
                                                />
                                            ))}
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <Chip size="small" color="primary" label="Active" />
                                        </StyledTableCell>
                                        <StyledTableCell align="center" style={{ width: '20%' }}>
                                            <ButtonDetail
                                                handleClick={() =>
                                                    setShowModalDetail({
                                                        ...showModalDetail,
                                                        open: true,
                                                        data: { ...item, type: 'show detail' }
                                                    })
                                                }
                                            />

                                            <ButtonEdit
                                                handleClick={() =>
                                                    setShowModalEdit({
                                                        ...showModalEdit,
                                                        open: true,
                                                        data: { ...item, type: 'show edit' }
                                                    })
                                                }
                                            />

                                            <ButtonDelete handleClick={() => console.log('Delete')} />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                )
                            )}
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
                count={tableData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            {/* Modal create */}
            <ModalDetail
                // eslint-disable-next-line react/jsx-curly-brace-presence
                title={'Add User'}
                // eslint-disable-next-line react/jsx-curly-brace-presence
                maxWidth={'md'}
                onClose={() => setShowModalCreate(null)}
                aria-labelledby="customized-dialog-title"
                open={Boolean(showModalCreate)}
            >
                <CreateUserForm />
            </ModalDetail>

            {/* Modal edit */}
            <ModalDetail
                // eslint-disable-next-line react/jsx-curly-brace-presence
                title={'Edit User'}
                // eslint-disable-next-line react/jsx-curly-brace-presence
                maxWidth={'md'}
                onClose={() => setShowModalEdit({ ...showModalEdit, open: false, data: null })}
                aria-labelledby="customized-dialog-title"
                open={Boolean(showModalEdit.open)}
            >
                <Typography gutterBottom>{`${showModalEdit.data?.name} - ${showModalEdit.data?.type}`}</Typography>
            </ModalDetail>

            {/* Modal detail */}
            <ModalDetail
                // eslint-disable-next-line react/jsx-curly-brace-presence
                title={'User Information'}
                // eslint-disable-next-line react/jsx-curly-brace-presence
                maxWidth={'md'}
                onClose={() => setShowModalDetail({ ...showModalDetail, open: false, data: null })}
                aria-labelledby="customized-dialog-title"
                open={Boolean(showModalDetail.open)}
            >
                <Typography gutterBottom>{`${showModalDetail.data?.name} - ${showModalDetail.data?.type}`}</Typography>
            </ModalDetail>
        </MainCard>
    );
}

export default Users;
