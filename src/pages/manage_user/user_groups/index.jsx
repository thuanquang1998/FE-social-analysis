import React, { useState, useEffect } from 'react';
import MainCard from 'components/cards/MainCard';

// import tables component
import StyledTableCell from 'components/tables/StyledTableCell';
import StyledTableRow from 'components/tables/StyledTableRow';

// button component
import ButtonCreate from 'components/buttons/ButtonCreate';
import ButtonDelete from 'components/buttons/ButtonDelete';
import ButtonEdit from 'components/buttons/ButtonEdit';

// Model
import ModalDetail from 'components/modals/ModalDetail';
import ModalConfirm from 'components/modals/ModalConfirm';

// Form
import CreateUserGroupForm from './components/CreateUserGroupForm';
import EditUserGroupForm from './components/EditUserGroupForm';

import { toast } from 'react-toastify';

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
        amountUser: 20,
        status: 'Active'
    },
    {
        id: 2,
        name: 'Huy Che',
        email: 'vtc@gmail.com',
        amountUser: 20,
        status: 'Active'
    },
    {
        id: 3,
        name: 'Thuan Luu',
        email: 'vtc@gmail.com',
        amountUser: 20,
        status: 'Active'
    }
];

function UsersGroup(props) {
    // =================================== STATE ===================================
    const [loading, setLoading] = useState(false);

    const [tableData, setTableData] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // STATE: modals CRUD
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState({
        open: false,
        data: null
    });
    const [showModalDelete, setShowModalDelete] = useState({
        open: false,
        data: null
    });
    const [showModalDetail, setShowModalDetail] = useState({
        open: false,
        data: null
    });

    // =================================== HOOKS ===================================
    useEffect(() => {
        // eslint-disable-next-line no-use-before-define
        getListUserGroups();
    }, []);

    // =================================== FUNCTIONS ===================================
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const getListUserGroups = async () => {
        setLoading(true);
        try {
            const response = [...listData];
            if (response.length < 0) throw new Error('Somethings errors');
            setTimeout(() => {
                setTableData([...response]);
                setLoading(false);
            }, 800);
        } catch (error) {
            console.log('error :>> ', error);
            setLoading(false);
        }
    };

    const onCreateUserGroupSuccess = () => {
        setShowModalCreate(false);
        getListUserGroups();
    };
    const onEditUserGroupSuccess = () => {
        setShowModalEdit({ ...showModalEdit, open: false, data: null });
        getListUserGroups();
    };
    const onDeleteUser = async (event) => {
        setLoading(true);
        try {
            setShowModalDelete({ ...showModalDelete, open: false, data: null });
            // call api
            setTimeout(() => {
                toast.success(`Delete User Group ${event.name} success`);
                getListUserGroups();
            }, 800);
        } catch (error) {
            console.log('error :>> ', error);
            toast.success(error?.message || 'Somethings error');
            setLoading(false);
        }
    };

    return (
        <MainCard title="User Groups" secondary={<ButtonCreate title="Add User Group" handleClick={() => setShowModalCreate(true)} />}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Amount Users</StyledTableCell>
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
                                        <StyledTableCell>{item.amountUser}</StyledTableCell>
                                        <StyledTableCell>
                                            <Chip size="small" color="primary" label={item.status} />
                                        </StyledTableCell>
                                        <StyledTableCell align="center" style={{ width: '20%' }}>
                                            {/* <ButtonDetail handleClick={() => console.log('View detail')} /> */}

                                            <ButtonEdit
                                                handleClick={() =>
                                                    setShowModalEdit({
                                                        ...showModalEdit,
                                                        open: true,
                                                        data: { ...item, type: 'show edit' }
                                                    })
                                                }
                                            />

                                            <ButtonDelete
                                                handleClick={() =>
                                                    setShowModalDelete({
                                                        ...showModalDelete,
                                                        open: true,
                                                        data: { ...item, type: 'show edit' }
                                                    })
                                                }
                                            />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                )
                            )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
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
                title={'Add User Group'}
                // eslint-disable-next-line react/jsx-curly-brace-presence
                maxWidth={'md'}
                onClose={() => setShowModalCreate(null)}
                aria-labelledby="customized-dialog-title"
                open={Boolean(showModalCreate)}
            >
                <CreateUserGroupForm onSuccess={onCreateUserGroupSuccess} />
            </ModalDetail>

            {/* Modal edit */}
            <ModalDetail
                // eslint-disable-next-line react/jsx-curly-brace-presence
                title={'Edit User Group'}
                // eslint-disable-next-line react/jsx-curly-brace-presence
                maxWidth={'md'}
                onClose={() => setShowModalEdit({ ...showModalEdit, open: false, data: null })}
                aria-labelledby="customized-dialog-title"
                open={Boolean(showModalEdit.open)}
            >
                <EditUserGroupForm channelData={{ ...showModalEdit.data }} onSuccess={onEditUserGroupSuccess} />
            </ModalDetail>

            {/* Modal delete */}
            <ModalConfirm
                onClose={() => setShowModalDelete({ ...showModalDelete, open: false, data: null })}
                aria-labelledby="customized-dialog-title"
                open={Boolean(showModalDelete.open)}
                data={{ ...showModalDelete.data }}
                onConfirm={onDeleteUser}
            />
        </MainCard>
    );
}

export default UsersGroup;
